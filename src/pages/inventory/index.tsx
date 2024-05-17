import DashboardLayout from "@/layouts/DashboardLayout";
import OverviewLayout from "@/layouts/OverviewLayout";
import React from "react";

type Props = {};

const Inventory = (props: Props) => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl px-4 py-16 w-full mx-auto">
        <div className="flex flex-col space-y-1">
          <p className="text-start font-bold heading-text text-xl ">
            Manage your inventory
          </p>
          <p className="text-start main-text text-lg text-zinc-500 max-w-2xl">
            Choose how you like to manage your inventory. Start by adding items
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Inventory;
