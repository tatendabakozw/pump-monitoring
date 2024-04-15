import Image from "next/image";
import React from "react";

type Props = {};

function HeroSection({}: Props) {
  return (
    <div className="herosection min-h-[60vh] bg-red-100 w-full p-4 flex flex-col ">
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 h-full flex-1 items-center">
        <div className="col-span-1 flex flex-col space-y-4 flex-1">
          <p className="text-5xl font-medium">SHOP SMART, SHOP ERICKSONPLAZA</p>
          <p className="text-2xl font-medium">
            Buy from your favorite Zim Stores
          </p>
          <p>
            Don&apos;t miss out on the opportunity to shop smart. Explore our
            offerings now and make a purchase that aligns with your needs and
            budget.
          </p>
          <div className="flex ">
            <button className="bg-red-600 text-white rounded-full px-8 py-2">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="col-span-1 h-full relative flex-1">
          <Image
            src={"/hero1.png"}
            layout="fill"
            objectFit="contain"
            alt="herosection 1 item"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
