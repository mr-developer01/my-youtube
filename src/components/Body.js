import React from "react";
import {Outlet} from "react-router-dom";
// import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <div className="fixed">
        <Sidebar />
      </div>
      <div className="ml-56">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
