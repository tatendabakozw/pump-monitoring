import React from "react";

type Props = {};

const AlertHistory = (props: Props) => {
  const pump_alerts = [
    {
      priority: "Very low",
      _id: "pomma2",
      time: "09/12/23 14:42",
      status: "Acknowledged",
      reponsible: "Tatenda Bako",
    },
  ];
  return (
    <div className="col-span-1 p-4 rounded-lg main-border bg-primary flex flex-col space-y-2">
      <p className="font-semibold text-lg">Sensor Info</p>
      <div className="grid grid-cols-4 text-sm font-semibold heading-text">
        <div className="col-span-1">Alert type</div>
        <div className="col-span-1">Time</div>
        <div className="col-span-1">Status</div>
        <div className="col-span-1">Reponsible</div>
      </div>
      {pump_alerts.map((item) => (
        <div
          key={item._id}
          className="grid grid-cols-4 text-sm font-medium main-text"
        >
          <div className="col-span-1">{item.priority}</div>
          <div className="col-span-1">{item.time}</div>
          <div className="col-span-1">{item.status}</div>
          <div className="col-span-1">{item.reponsible}</div>
        </div>
      ))}
    </div>
  );
};

export default AlertHistory;
