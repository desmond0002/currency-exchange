import { FC } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { ISeries } from "../../types/series";

interface indexProps {
  data: ISeries[];
  categories: string[];
}

const Chart: FC<indexProps> = ({ data, categories }) => {
  const options: Highcharts.Options = {
    chart: {
      type: "line",
    },
    yAxis: {
      title: {
        text: "Рубли",
      },
    },
    xAxis: {
      title: {
        text: "Даты",
      },
      categories: categories,
    },
    title: {
      style: { display: "none" },
    },
    series: data,
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export { Chart };
