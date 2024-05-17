import React, { ReactNode, useContext, useEffect } from "react";
import Navbar from "../components/navigation/Navbar";
import Head from "next/head";
import { Toaster } from "@/components/ui/toaster";

type Props = {
  children?: ReactNode;
};

const DashboardLayout = (props: Props) => {
  return (
    <>
      <Toaster />
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <div className="nav">
          <Navbar />
        </div>
        {props.children}
      </div>
    </>
  );
};

export default DashboardLayout;
