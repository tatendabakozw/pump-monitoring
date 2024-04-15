import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const GeneralLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col w-full">
      <div className="nav">asdfjlksdf</div>
      {children}
      <div className="footer">footer</div>
    </div>
  );
};

export default GeneralLayout;
