import Navbar from "@/components/navigation/Navbar";
import React, { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children?: ReactNode;
};

const GeneralLayout = ({ children }: Props) => {
  return (
    <div className={`flex flex-col w-full ${inter.className}`}>
      <Navbar />
      {children}
      <div className="footer">footer</div>
    </div>
  );
};

export default GeneralLayout;
