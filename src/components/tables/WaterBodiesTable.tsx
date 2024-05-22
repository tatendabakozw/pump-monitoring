import { data } from "@/utils/data";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const WaterBodiesTable = (props: Props) => {
  const router = useRouter();
  return (
    <div className="flex max-w-7xl w-full mx-auto flex-col">
      <div className="grid md:grid-cols-5 grid-cols-4 bg-secondary w-full heading-text rounded capitalize">
        <div className="col-span-1 p-2 font-medium text-sm">Water bodies</div>
        <div className=" col-span-1 p-2 font-medium text-sm">Location</div>
        <div className="col-span-1 p-2 font-medium text-sm">status</div>

        <div className="md:flex hidden col-span-1 p-2 font-medium text-sm">
          Percentage
        </div>

        <div className="col-span-1 p-2 font-medium text-sm">Volume(m3)</div>
      </div>
      {data.bodies_info.map((item) => (
        <div
          key={item.tank_id}
          onClick={() => router.push(`/tanks/${item.tank_id}`)}
          className="grid md:grid-cols-5 grid-cols-4 cursor-pointer bg-primary w-full main-text capitalize"
        >
          <div className="col-span-1 p-2 font-medium text-sm">{item.name}</div>
          <div className="col-span-1 p-2 font-medium text-sm">
            {item.lcoation}
          </div>
          <div className="col-span-1 p-2 font-medium text-sm">
            {item.status}
          </div>

          <div className="md:flex hidden col-span-1 p-2 font-medium text-sm">
            {item.percentage}
          </div>

          <div className="col-span-1 p-2 font-medium text-sm">
            {item.volume}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WaterBodiesTable;
