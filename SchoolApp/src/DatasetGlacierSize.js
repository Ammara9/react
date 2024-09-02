import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);
const options = {
  responsive: true,
  plugins: {
    legend: { position: "bottom" },
    tooltip: {
      backgroundColor: "#4caf83",
      titleFont: { size: 25 },
      bodyFont: { size: 35 },
      cornerRadius: 20,
    },
    title: {
      display: true,
      text: "Glaciäre i w.e.  mellan år 1945-2014",
      padding: { top: 10, bottom: 10 },
      font: { size: 28},
    },
  },
};

function DatasetGlacierSize() {
  const [data, setData] = useState({
    labels: [],
    datasets: [
    ],
  });
  useEffect(() => {
    // fetching JSON data with arrow function
    const fetchData = async () => {
      const url = "dataset3.json";
      const labelSet = [];
      const dataSet1 = [];

      await fetch(url)
        .then((data) => {
          //  använder console för att säkerställer att data kommer och är den rätt
          console.log("Json data", data);
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log("res", res);
          for (const val of res) {
            dataSet1.push(val["Mean cumulative mass balance"]);
            // använts push method för att hämta data från key
            labelSet.push(val.Year);
          }
          setData({
            labels: labelSet,
            datasets: [
              {
                label: "Mean cumulative mass balance",
                data: dataSet1, //data set to declared/specific dataset//
                fill: true,
                backgroundColor: "white",
              },
            ],
          });
          console.log("arrData", dataSet1);
        })
        .catch((e) => {
          console.log("error", e);
        });
    };

    fetchData();
  }, []);

  return (
    <div
      className="App, shadow-lg"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/blue-abstract-background-with-lines_1123-43.jpg?size=626&ext=jpg&ga=GA1.2.1832046238.1700226675&semt=ais')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: "70%",
        height: "100%",
      }}
    >
      <Line data={data} options={options}></Line>
    </div>
  );
}
export default DatasetGlacierSize;
