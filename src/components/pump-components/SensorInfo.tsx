import React from "react";

const SensorInfo = () => {
  return (
    <div className="col-span-1 p-4 rounded-lg main-border bg-primary flex flex-col space-y-2">
      <p className="font-semibold text-lg">Sensor Info</p>
      <div className="flex justify-between flex-row items-center main-text text-sm">
        <p className="text-start">Sensor ID </p>
        <p className="text-end font-medium">1288</p>
      </div>
      <div className="flex justify-between flex-row items-center main-text text-sm">
        <p className="text-start">Battery life</p>
        <p className="text-end font-medium">10 years</p>
      </div>
    </div>
  );
};

export default SensorInfo;
