import React from "react";
import AppBar from "../../components/AppBar/AppBar";
import SideBar from "../../components/SideBar/SideBar";
import Main from "./MainContent/Main";
import SideBarColoumn from "./SideBarColoumn/SideBarColoumn";
import CSS from "./Overview.module.css";

function Overview() {
  return (
    <>
      <AppBar />
      <div className={`${CSS.OverViewMain} flex justify-between h-auto pb-5`}>
        <SideBar />
        <Main />
        <SideBarColoumn />
      </div>
    </>
  );
}

export default Overview;
