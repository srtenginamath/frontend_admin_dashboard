import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import "./Layout.css";




const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className="layout__content">
        <TopNav />
        <div className="layout__content-main">
          <Outlet />
        </div>
      </div>
    </div>

   
  );
};

export default Layout;
