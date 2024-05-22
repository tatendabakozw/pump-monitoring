import React from "react";

type Props = {
  id: any;
};

function PumpInfo({ id }: Props) {
  return (
    <div className="col-span-1 p-4 rounded-lg main-border bg-primary flex flex-col space-y-2">
      <p className="font-semibold text-lg">Pump {id}</p>
      <div className="flex justify-between flex-row items-center main-text text-sm">
        <p className="text-start">Pump energy saved</p>
        <p className="text-end font-medium">62.14%</p>
      </div>
      <div className="flex justify-between flex-row items-center main-text text-sm">
        <p className="text-start">Volume pumped</p>
        <p className="text-end font-medium">67792 gal</p>
      </div>
      <p className="text-start">Work order</p>
      <div className="flex justify-between flex-row items-center main-text text-sm">
        <p className="text-start">last worked</p>
        <p className="text-end font-medium">07/12/2023 14:41</p>
      </div>
      <div className="flex justify-between flex-row items-center main-text text-sm">
        <p className="text-start">last repaired</p>
        <p className="text-end font-medium">07/05/2023 10:01</p>
      </div>
    </div>
  );
}

export default PumpInfo;
