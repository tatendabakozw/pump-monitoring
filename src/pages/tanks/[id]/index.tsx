import AlertHistory from "@/components/pump-components/AlertHistory";
import PumpInfo from "@/components/pump-components/PumpInfo";
import PumpUsageHistory from "@/components/pump-components/PumpUsageHistory";
import SensorInfo from "@/components/pump-components/SensorInfo";
import DashboardLayout from "@/layouts/DashboardLayout";
import { ServerIcon } from "@heroicons/react/16/solid";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const TankPumpInfo = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <DashboardLayout>
      <div className="flex bg-secondary h-full flex-1 flex-col">
        <div className="max-w-7xl p-4 mx-auto w-full ">
          <div
            onClick={() => router.back()}
            className="flex flex-row cursor-pointer items-center space-x-2 text-zinc-400"
          >
            <ArrowLeftIcon height={16} width={16} />
            <p>Pumps</p>
          </div>
        </div>
        <div className="bg-primary  main-border-t main-border-b">
          <div className="max-w-7xl w-full mx-auto p-4">
            <div className="flex flex-row items-center space-x-4">
              <ServerIcon height={16} width={16} />
              <p>Pump {id}</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl w-full mx-auto p-4 grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="col-span-1 flex flex-col gap-4">
            <PumpInfo id={id} />
            {/* <SensorInfo /> */}
            <PumpUsageHistory />
          </div>
          <div className="cols-span-1">
            <AlertHistory />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TankPumpInfo;
