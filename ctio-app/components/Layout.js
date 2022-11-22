import React from "react";
import NavSideBar from "./NavSideBar";
import NavTopBar from "./NavTopBar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col bg-slate-900 text-white">
      <div className="max-h-20 bg-slate-800 shadow-md shadow-slate-700">
        <NavTopBar></NavTopBar>
      </div>
      <div className="grow flex">
        <div className="pt-10 mt-1 border-2 border-slate-900 border-r-slate-700">
          <NavSideBar></NavSideBar>
        </div>
        <div className="container mx-auto pt-10">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
