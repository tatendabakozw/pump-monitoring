import PumpInfo from "@/components/pump-components/PumpInfo";
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
          <div className="flex flex-row items-center space-x-2 text-zinc-400">
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
        <PumpInfo id={id} />
      </div>
    </DashboardLayout>
  );
};

export default TankPumpInfo;
