import { Chart } from "chart.js";
import React, { useEffect, useRef } from "react";
export const generateMarketData = () => {
  const data = [];
  const startTime = new Date().setHours(0, 0, 0, 0); // Start of the day
  const endTime = new Date().setHours(23, 59, 59, 999); // End of the day
  const numMinutes = (endTime - startTime) / (1000 * 60); // Total number of minutes in a day

  for (let i = 0; i < numMinutes; i++) {
    const timestamp = startTime + i * 60000; // Increment timestamp by 1 minute (in milliseconds)
    const value = Math.floor(Math.random() * (3000 - 2000 + 1)) + 2000; // Random value between 2000 and 3000
    data.push({ timestamp, value });
  }

  return data;
};
const LineChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const forexData = generateMarketData();
    const timestamps = forexData.map((data) => data.timestamp);
    const values = forexData.map((data) => data.value);

    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      const ctx = chartRef.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: timestamps, // Use timestamps as labels
          datasets: [
            {
              label: "Forex Data",
              data: values, // Use forex values
              borderColor: "rgb(75, 192, 192)",
              borderWidth: 1,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "time", // Configure x scale as time scale
              time: {
                unit: "minute",
              },
            },
            y: {
              beginAtZero: false,
            },
          },
        },
      });
    }
  }, []);
  return <canvas ref={chartRef}></canvas>;
};

export default LineChart;
