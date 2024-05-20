import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";

type Props = {};

const Sensors = (props: Props) => {
  return (
    <DashboardLayout>
      <div className="flex">
        <div className="max-w-7xl w-full mx-auto px-4">Sensors</div>
      </div>
    </DashboardLayout>
  );
};

export default Sensors;
