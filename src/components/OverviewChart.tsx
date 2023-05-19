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
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  },
};

const OverviewChart = () => {
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

  let DXAxis: any[];
  let DYAxis: any[];

  const [graphData, setGraphData] = useState({});
  const [location, setLocation] = useState<any[]>([]);
  const [company, setCompany] = useState<any[]>([]);

  useEffect(() => {
    const fetchGraphData = async () => {
      const response = await fetch("https://fe-task-api.mainstack.io/");
      const data = await response.json();
      setGraphData(data.graph_data.views);
      setLocation(data.top_locations);
      setCompany(data.top_sources);
    };

    fetchGraphData();
  }, []);

  // X and Y axis for line graph
  xAxis = Object.keys(graphData);
  yAxis = Object.values(graphData);

  // X and Y axis for country graph
  DXAxis = location.map((item) => {
    return item.country;
  });
  DYAxis = location.map((item) => {
    return item.count;
  });

  // X and Y axis for Country graph
  DXAxis = company.map((item) => {
    return item.source;
  });
  DYAxis = company.map((item) => {
    return item.count;
  });

  return (
    <>
      <div className={styles.line}>
        <Line
          options={options}
          data={{
            labels: ["", "", "", "", "", "", "", "", "", ""],
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
      </div>
    </>
  );
};

export default OverviewChart;
