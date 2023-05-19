import { useState, useEffect } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import styles from "../styles/sidebar.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  registerables,
} from "chart.js";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
  },
};

const Chart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ...registerables
  );

  let xAxis;
  let yAxis;

  const [graphData, setGraphData] = useState({});

  useEffect(() => {
    const fetchGraphData = async () => {
      const response = await fetch("https://fe-task-api.mainstack.io/");
      const data = await response.json();
      setGraphData(data.graph_data.views);
    };

    fetchGraphData();
  }, []);

  // X and Y axis for line graph
  xAxis = Object.keys(graphData);
  yAxis = Object.values(graphData);

  return (
    <Line
      options={options}
      data={{
        labels: [
          "21, aug",
          "22,Aug",
          "23,Aug",
          "25,Aug",
          "25,Aug",
          "26, Aug",
          "27, Aug",
          "28, Aug",
          "29,Aug",
          "30, aug",
        ],
        datasets: [
          {
            data: yAxis,
            borderColor: "#EF2C5A",
            backgroundColor: " rgba(239, 44, 90, 0)",
            fill: true,
          },
        ],
      }}
    />
  );
};

export default Chart;
