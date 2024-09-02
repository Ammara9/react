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
  animations: {
    tension: {
      duration: 1000,
      easing: "linear",
      from: 1,
      to: 0,
      loop: true,
    },
  },
  plugins: {
    legend: {
      position: "bottom",
    },
    tooltip: {
      backgroundColor: "#4caf83" /* Set the tooltip background color */,
      titleFont: {
        size: 40 /* Set the tooltip title font size */,
      },
      bodyFont: {
        size: 20 /* Set the tooltip body font size */,
      },
      cornerRadius: 7 /* Set the tooltip corner radius */,
    },
    title: {
      display: true,
      text: "Havsnivå mellan år 1880-2013",
      padding: {
        top: 10,
        bottom: 10,
      },
      font: {
        size: 28,
      },
    },
  },
};

function DatasetSeaLevel() {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    // fetching JSON data with arrow function
    const fetchData = async () => {
      const url = "dataset4.json";
      //    fixa label på y axis som sedan hämtar data från JSON data
      const labelSet = [];
      //    variable till olika datasets
      const dataSet1 = [];

      await fetch(url)
        .then((data) => {
          //  använder console för att säkerställer att data kommer och är den rätt
          console.log("Json data", data);
          //  response
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log("res", res);
          for (const val of res) {
            // använts push method för att hämta data från key
            dataSet1.push(val.GMSL);
            // eftersom data key hade mellanrum

            //  label på y axis
            labelSet.push(val.Time);
          }
          setData({
            labels: labelSet,
            // datasets i en array object
            datasets: [
              {
                label: "(GMSL) Genomsnittlig havsnivå över hela världen.", //bar label//
                data: dataSet1, //data set to declared/specific dataset//
                fill: true,
                backgroundColor: "rgb(125, 249, 255, 0.5)",
              },
            ],
          });
          console.log("arrData", dataSet1); //säkerställer till att få rätt data till olika dataset//
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    // call for function
    fetchData();
  }, []);

  return (
    <div
      className="border border-5 shadow-lg justify-content-ecnter align-item-center"
      style={{
        backgroundColor: "white",
        width: "70%",
        height: "60%",
      }}
    >
      {" "}
      Millimeter
      <Line data={data} options={options}></Line>
    </div>
  );
}
export default DatasetSeaLevel;
