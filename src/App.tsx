import { Chart } from "./components/chart";
import { ISeries } from "./types/series";
import { endOfWeek, getDays, startOfWeek } from "./utils/date";
import { useLayoutEffect, useState } from "react";
import { getCurrenciesByPeriod } from "./utils/getCurrencies";
import { Card, Flex } from "antd";

const cardStyle: React.CSSProperties = {
  width: "calc(100vw - 50px)",
  height: "50vh",
  margin: "auto",
  padding: "auto",
  marginTop: "20vh",
};

const imgStyle: React.CSSProperties = {
  display: "block",
  width: "80%",
};

function App() {
  const [from, setFrom] = useState<string>(startOfWeek());
  const [to, setTo] = useState<string>(endOfWeek());
  const [data, setData] = useState<ISeries[]>([]);
  const [counter, setCounter] = useState<number>(0);
  useLayoutEffect(() => {
    try {
      const fetchData = async () => {
        const { data, requests } = await getCurrenciesByPeriod(from, to);
        setData(data);
        setCounter((prev) => prev + requests);
      };

      fetchData();
      console.log("render");
    } catch (error) {
      console.log(error);
    }
  }, [from, to]);

  return (
    <Card hoverable style={cardStyle}>
      <Flex justify="space-between">
        <div style={imgStyle}>
          <Chart data={data} categories={getDays(from, to)} />
        </div>

        <Flex vertical align="center" style={{ padding: 32 }}>
          <Flex style={{ gap: 12 }}>
            <Flex vertical align="center" style={{ gap: 12 }}>
              <label>Дата с</label>
              <input
                type="date"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </Flex>
            <Flex vertical align="center" style={{ gap: 12 }}>
              <label>Дата по</label>
              <input
                type="date"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </Flex>
          </Flex>
          <Flex>Число запросов к API: {counter}</Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

export default App;
