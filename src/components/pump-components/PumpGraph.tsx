import React from "react";
import LineGraph from "../graphs/LineGraph";

type Props = {};

const PumpGraph = (props: Props) => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Usage",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Energy saved",
      },
    },
  };

  return (
    <div className="p-4 bg-primary main-border rounded-lg">
      <LineGraph data={data} options={options} />
    </div>
  );
};

export default PumpGraph;
