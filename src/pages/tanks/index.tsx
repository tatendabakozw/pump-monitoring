import WaterBodiesTable from "@/components/tables/WaterBodiesTable";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Tanks = (props: Props) => {
  const router = useRouter();
  const info_headings = [
    { heading: "Total Pumps", count: 23, _id: "askd231" },
    // { heading: "Full Tanks", count: 6, _id: "128iuia" },
    // { heading: "Low Tanks", count: 5, _id: "081mmasd" },
    // { heading: "Very Low", count: 1, _id: "as991111nsad" },
    // { heading: "Overflow", count: 5, _id: "as12991nnsad" },
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
        <WaterBodiesTable />
      </div>
    </DashboardLayout>
  );
};

export default Tanks;
