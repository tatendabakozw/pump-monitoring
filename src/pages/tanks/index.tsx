import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";

type Props = {};

const Tanks = (props: Props) => {
  const info_headings = [
    { heading: "Total Pumps", count: 56, _id: "askd231" },
    { heading: "Full Tanks", count: 6, _id: "128iuia" },
    { heading: "Low Tanks", count: 5, _id: "081mmasd" },
    { heading: "Very Low", count: 1, _id: "as991111nsad" },
    { heading: "Overflow", count: 5, _id: "as12991nnsad" },
  ];
  return (
    <DashboardLayout>
      <div className="flex">
        <div className="flex flex-row  main-border-b w-full ">
          <div className="max-w-7xl flex flex-row w-full mx-auto divide-x-[1px] divide-slate-200 dark:divide-zinc-800 px-4">
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
      </div>
    </DashboardLayout>
  );
};

export default Tanks;
