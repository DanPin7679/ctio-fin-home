import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import styles from "../styles/Home.module.css";

export default function LineChart({ input_data }) {
  const canvasEl = useRef(null);

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");

    const data = {
      labels: input_data.ages,
      datasets: [
        {
          label: "Asset accumulation",
          data: input_data.assets,
          borderColor: "orange",
          pointBackgroundColor: "orange",
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {
        responsive: true,
      },
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <div className={styles.chart2}>
      <canvas id="myChart" ref={canvasEl} />
    </div>
  );
}
