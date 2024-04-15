import React from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import SideNav from "./SideNav";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full bg-white py-2">
      <div className="max-w-7xl w-full mx-auto px-4 text-zinc-700 space-x-4 flex flex-row items-center">
        <SideNav />
        <div className="flex w-32 h-10  relative">
          <Image src="/logo.svg" alt="Ecommerce site logo" layout="fill" />
        </div>
        <div className="flex-1"></div>
        <button className="p-2 rounded-full hover:bg-zinc-100">
          <MagnifyingGlassIcon height={24} width={24} />
        </button>
        <div className="md:flex hidden flex-row items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-zinc-100">
            <ShoppingBagIcon height={24} width={24} />
          </button>
          <button className="p-2 rounded-full hover:bg-zinc-100">
            <UserIcon height={24} width={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
