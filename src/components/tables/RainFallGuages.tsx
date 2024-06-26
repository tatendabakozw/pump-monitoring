import React from "react";

type Props = {};

const RainFallGuages = (props: Props) => {
  const rainfall_guages = [
    {
      location: "4E",
      pump_type: "Obit pump",
      pump_head: "120",
      pump_size: "29.84",
      pump_rate: "19.023",
      _id: "asd992",
    },
    {
      location: "4E",
      pump_type: "Obit pump",
      pump_head: "120",
      pump_size: "29.84",
      pump_rate: "19.023",
      _id: "asd9923",
    },
    {
      location: "4E",
      pump_type: "Obit pump",
      pump_head: "120",
      pump_size: "29.84",
      pump_rate: "19.023",
      _id: "yt2",
    },
    {
      location: "9W",
      pump_type: "Obit pump",
      pump_head: "120",
      pump_size: "29.84",
      pump_rate: "19.023",
      _id: "auu88",
    },
    //
    {
      location: "9W",
      pump_type: "Obit pump",
      pump_head: "120",
      pump_size: "29.84",
      pump_rate: "19.023",
      _id: "as1122222",
    },
    {
      location: "10E",
      pump_type: "Obit pump",
      pump_head: "120",
      pump_size: "29.84",
      pump_rate: "19.023",
      _id: "oo01",
    },
    {
      location: "10E",
      pump_type: "Obit pump",
      pump_head: "120",
      pump_size: "29.84",
      pump_rate: "19.023",
      _id: "gh991aa",
    },
    {
      location: "10W",
      pump_type: "Obit pump",
      pump_head: "120",
      pump_size: "29.84",
      pump_rate: "19.023",
      _id: "mm77b",
    },
    {
      location: "13E",
      pump_type: "Obit pump",
      pump_head: "120",
      pump_size: "29.84",
      pump_rate: "19.023",
      _id: "u787111sdd",
    },
    {
      location: "13W",
      pump_type: "Obit pump",
      pump_head: "120",
      pump_size: "29.84",
      pump_rate: "19.023",
      _id: "s1212121",
    },
    {
      location: "13W",
      pump_type: "Obit pump",
      pump_head: "120",
      pump_size: "29.84",
      pump_rate: "19.023",
      _id: "11ioi11",
    },
    {
      location: "13W Gizzle",
      pump_type: "Sakugawara",
      pump_head: "60",
      pump_size: "29.84",
      pump_rate: "38.046",
      _id: "11ioi1",
    },
    {
      location: "14E",
      pump_type: "Sakugawara",
      pump_head: "60",
      pump_size: "22",
      pump_rate: "29.05",
      _id: "11iyyIoi1",
    },
    {
      location: "14E",
      pump_type: "Sakugawara",
      pump_head: "60",
      pump_size: "5.5",
      pump_rate: "7.0125",
      _id: "11iyIoi1",
    },
    {
      location: "14W",
      pump_type: "Sakugawara",
      pump_head: "60",
      pump_size: "11",
      pump_rate: "14.025",
      _id: "11iyPIoi1",
    },
    {
      location: "14W",
      pump_type: "Sakugawara",
      pump_head: "60",
      pump_size: "11",
      pump_rate: "14.025",
      _id: "11iyhIoi1",
    },
    {
      location: "15E",
      pump_type: "Sakugawara",
      pump_head: "60",
      pump_size: "22",
      pump_rate: "28.05",
      _id: "11iyhhIoi1",
    },
    {
      location: "15E",
      pump_type: "Sakugawara",
      pump_head: "60",
      pump_size: "22",
      pump_rate: "28.05",
      _id: "11iyrrrhIoi1",
    },
  ];

  return (
    <div className="flex flex-col bg-primary main-border gap-4 p-4 rounded-lg ">
      <div className="flex flex-col space-y-1">
        <p className=" font-semibold">Perfomance indicators.</p>
        <p className="text-zinc-400 text-xs font-medium">
          Pump key perfomance indicators.
        </p>
      </div>
      <div className="grid grid-cols-5 text-sm font-semibold heading-text py-2">
        <div className="col-span-1">Location (level)</div>
        <div className="col-span-1">Pump Type </div>
        <div className="col-span-1">Pump Head</div>
        <div className="col-span-1">Pump Size (Kw)</div>
        <div className="col-span-1">Pump rate (1/s)</div>
      </div>
      {rainfall_guages.map((item, index) => (
        <div
          key={item._id}
          className="grid grid-cols-5 text-sm font-medium main-text py-1"
        >
          <div className="col-span-1">{item.location}</div>
          <div className="col-span-1">{item.pump_type}</div>
          <div className="col-span-1">{item.pump_head}</div>
          <div className="col-span-1">{item.pump_size}</div>
          <div className="col-span-1">{item.pump_rate}</div>
        </div>
      ))}
    </div>
  );
};

export default RainFallGuages;
