import { RateType } from "../types/currencies";
import { dateToString } from "./date";

export const getCurrenciesByPeriod = async(from: string, to: string) => {
  const startDate = new Date(from);
  const finishDate =
    new Date(to).getTime() > new Date().getTime() ? new Date() : new Date(to);

  const data: {
    name: string;
    data: number[];
    type: "line";
  }[] = [
    {
      name: "eur",
      data: [],
      type: "line",
    },
    {
      name: "cny",
      data: [],
      type: "line",
    },
    {
      name: "usd",
      data: [],
      type: "line",
    },
  ];

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffFullVacation =
    Math.round(
      Math.abs((finishDate.getTime() - startDate.getTime()) / oneDay)
    );

  for (let index = 0; index < diffFullVacation; index++) {
    const date = dateToString(new Date(startDate.getTime() + oneDay * index));
    
    const rates = await getCurrenciesByDate(date)
    rates.forEach((rate) => {
      const dataIndex = data.findIndex(
        (category) => category.name === rate.name
      );
      if (dataIndex > -1 && rate.data) {
        
        data[dataIndex].data.push(rate.data)};
    });
  }

  return ({ data, requests: diffFullVacation*3 });
};

export const getCurrenciesByDate = async(date: string) => {
  const result: { name: string; data: number | undefined }[] = [];
  const URLS = [
    {
      name: "Доллар",
      url: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/usd.json`,
    },
    {
      name: "Юань",
      url: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/cny.json`,
    },
    {
      name: "Евро",
      url: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/eur.json`,
    },
  ];
  const rate = await Promise.all(URLS.map(async item => {
    const resp = await fetch(item.url);
    return resp.json() as unknown as RateType;
  }));
  result.push(
    ...rate.map((item) => ({
      data: item.eur?.rub || item.cny?.rub || item.usd?.rub,
      name: item.eur ? "eur" : item.cny ? "cny" : item.usd ? "usd" : "",
    }))
  )
  return result;
};
