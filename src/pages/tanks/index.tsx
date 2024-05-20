import DashboardLayout from "@/layouts/DashboardLayout";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Tanks = (props: Props) => {
  const router = useRouter();
  const info_headings = [
    { heading: "Total Pumps", count: 56, _id: "askd231" },
    { heading: "Full Tanks", count: 6, _id: "128iuia" },
    { heading: "Low Tanks", count: 5, _id: "081mmasd" },
    { heading: "Very Low", count: 1, _id: "as991111nsad" },
    { heading: "Overflow", count: 5, _id: "as12991nnsad" },
  ];

  const tank_info = [
    {
      tank_id: "1101",
      lcoation: "Zone A",
      status: "full",
      content: "gasoline",
      percentage: "16%",
      volume: "11404",
      order: "Refill",
      last_used: "07/21/14 14:40pm",
    },
    {
      tank_id: "1102",
      lcoation: "Zone D",
      status: "full",
      content: "gasoline",
      percentage: "16%",
      volume: "11404",
      order: "Refill",
      last_used: "07/21/14 14:40pm",
    },
    {
      tank_id: "1105",
      lcoation: "Zone B",
      status: "full",
      content: "gasoline",
      percentage: "16%",
      volume: "11404",
      order: "Refill",
      last_used: "07/21/14 14:40pm",
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-row  main-border-b w-full ">
          <div className="max-w-7xl flex md:flex-row flex-col w-full mx-auto md:divide-x-[1px]  divide-y-[1px] divide-slate-200 dark:divide-zinc-800 px-4">
            {info_headings.map((item) => (
              <div key={item._id} className="text-start p-4 flex flex-col">
                <p className="main-text font-medium text-sm">{item.heading}</p>
                <p className="heading-text text-lg font-semibold">
                  {item.count}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex max-w-7xl w-full mx-auto flex-col">
          <div className="grid md:grid-cols-8 grid-cols-4 bg-secondary w-full heading-text rounded capitalize">
            <div className="col-span-1 p-2 font-medium text-sm">Tank ID</div>
            <div className=" col-span-1 p-2 font-medium text-sm">Location</div>
            <div className="col-span-1 p-2 font-medium text-sm">status</div>
            <div className="md:flex hidden col-span-1 p-2 font-medium text-sm">
              Content
            </div>
            <div className="md:flex hidden col-span-1 p-2 font-medium text-sm">
              Percentage
            </div>
            <div className="md:flex hidden col-span-1 p-2 font-medium text-sm">
              Order
            </div>
            <div className="md:flex hidden col-span-1 p-2 font-medium text-sm">
              Last used
            </div>
            <div className="col-span-1 p-2 font-medium text-sm">Volume</div>
          </div>
          {tank_info.map((item) => (
            <div
              key={item.tank_id}
              onClick={() => router.push(`/tanks/${item.tank_id}`)}
              className="grid md:grid-cols-8 grid-cols-4 cursor-pointer bg-primary w-full main-text capitalize"
            >
              <div className="col-span-1 p-2 font-medium text-sm">
                {item.tank_id}
              </div>
              <div className="col-span-1 p-2 font-medium text-sm">
                {item.lcoation}
              </div>
              <div className="col-span-1 p-2 font-medium text-sm">
                {item.status}
              </div>
              <div className="md:flex hidden col-span-1 p-2 font-medium text-sm">
                {item.content}
              </div>
              <div className="md:flex hidden col-span-1 p-2 font-medium text-sm">
                {item.percentage}
              </div>
              <div className="md:flex hidden col-span-1 p-2 font-medium text-sm">
                {item.order}
              </div>
              <div className="md:flex hidden col-span-1 p-2 font-medium text-sm">
                {item.last_used}
              </div>
              <div className="col-span-1 p-2 font-medium text-sm">
                {item.volume}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Tanks;
