import Navbar from "@/components/navigation/Navbar";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const GeneralLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      {children}
      <div className="footer">footer</div>
    </div>
  );
};

export default GeneralLayout;
