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
    legend: {
      position: "bottom",
    },
    tooltip: {
      backgroundColor: "#4caf83" /* Set the tooltip background color */,
      titleFont: {
        size: 18 /* Set the tooltip title font size */,
      },
      bodyFont: {
        size: 20 /* Set the tooltip body font size */,
      },
      cornerRadius: 10 /* Set the tooltip corner radius */,
    },
    title: {
      display: true,
      text: "Globala Tempuraturen i °C mellan år 1881-2016",
      padding: {
        top: 10,
        bottom: 30,
      },
      font: {
        size: 25,
        style: "light",
      },
    },
  },
};

function DatasetGlobalTemp() {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    // fetching JSON data with arrow function
    const fetchData = async () => {
      const url = "dataset2.json";
      //    fixa label som sedan hämtar data från JSON fil
      const labelSet = [];
      const dataSet1 = [];
      const dataSet2 = [];

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
            if (val.Source === "GISTEMP") {
              // använts push method för att hämta data från key
              dataSet1.push(val.Mean);

              labelSet.push(val.Year);
            } else if (val.Source === "GCAG") {
              // använts push method för att hämta data från key
              dataSet2.push(val.Mean);
            }
          }
          setData({
            labels: labelSet,
            datasets: [
              {
                label: "GISTEMP",
                data: dataSet1, //data set to declared/specific dataset//
                backgroundColor: "yellow",
              },
              {
                label: "GCAG",
                data: dataSet2, //data set to declared/specific dataset//
                backgroundColor: "orange",
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
        backgroundColor: "white",
        width: "70%",
        height: "100%",
      }}
    >
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default DatasetGlobalTemp;
