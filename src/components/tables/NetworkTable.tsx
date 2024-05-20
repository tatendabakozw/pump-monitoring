import React from "react";

type Props = {};

const NetworkTable = (props: Props) => {
  return (
    <div className="flex flex-col bg-primary main-border gap-4 p-4 rounded-lg ">
      <div className="flex flex-col space-y-1">
        <p className=" font-semibold">Network Table.</p>
        <p className="text-zinc-400 text-xs font-medium">
          Description of what network table shows.
        </p>
      </div>
      <div className="grid grid-cols-7 text-sm font-semibold heading-text py-2">
        <div className="col-span-2">Node ID</div>
        <div className="col-span-1">Elavation (ft)</div>
        <div className="col-span-1">Demand GPM</div>
        <div className="col-span-1">Head (ft)</div>
        <div className="col-span-1">Pressure (psi)</div>
        <div className="col-span-1">Quality</div>
      </div>
      {[1, 2, 3, 4].map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-7 text-sm font-medium main-text py-1"
        >
          <div className="col-span-2">Node ID</div>
          <div className="col-span-1">Elavation (ft)</div>
          <div className="col-span-1">Demand GPM</div>
          <div className="col-span-1">Head (ft)</div>
          <div className="col-span-1">Pressure (psi)</div>
          <div className="col-span-1">Quality</div>
        </div>
      ))}
    </div>
  );
};

export default NetworkTable;
