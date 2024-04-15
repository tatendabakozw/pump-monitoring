import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bars3Icon } from "@heroicons/react/24/outline";

type Props = {};

const SideNav = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger className="p-2 rounded-full hover:bg-zinc-100">
        <Bars3Icon height={24} width={24} />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>More Info</SheetTitle>
          <SheetDescription>
            This side bar will show all categories and mote info on mobile
            navigation
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SideNav;
