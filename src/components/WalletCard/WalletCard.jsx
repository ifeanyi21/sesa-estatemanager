import React, { useState } from "react";
import WalletLogo from "../../images/sesawalletlogo.png";
import { useLocation } from "react-router-dom";
import {
  NairaIcon,
  ToggleEyeIcon,
  WalletCircleBottom,
  WalletCircleTop,
  WalletGroupedIcon,
} from "../SideBar/icons";

function WalletCard({ name, to }) {
  const location = useLocation();
  const [showAmount, setShowAmount] = useState(true);
  return (
    <div
      style={{ backgroundColor: "#6200EA", height: 205 }}
      className="overflow-hidden flex relative text-center m-auto w-full rounded-md text-white mb-12"
    >
      <img
        className="absolute left-2 top-3 z-10"
        style={{ width: 69, }}
        src={WalletLogo}
        alt="Sesa Logo"
      />

      <div
        className={`absolute top-20 ${
          location.pathname === "/overview" || location.pathname === "/wallet"
            ? "left-1/2"
            : "left-2/3"
        }`}
      >
        <WalletCircleBottom />
      </div>
      <div className="absolute left-6">
        <WalletCircleTop />
      </div>
      <div className="absolute -bottom-2">
        <WalletGroupedIcon />
      </div>

      <p className="absolute z-40 left-3 text-sm bottom-1 text-white">{name}</p>

      <div className="m-auto z-40 text-lg font-bold flex items-center">
        {showAmount ? (
          <>
            <span className="mr-1">
              <NairaIcon />
            </span>{" "}
            <span className="font-medium" style={{ fontSize: 32 }}>
              233,500.<span className="text-lg">89</span>{" "}
            </span>{" "}
          </>
        ) : (
          <p className="m-auto z-40 text-2xl font-bold flex items-center">
            **********
          </p>
        )}

        <button onClick={()=>setShowAmount(!showAmount)} className="ml-3">
          <ToggleEyeIcon />
        </button>
      </div>
    </div>
  );
}

export default WalletCard;
