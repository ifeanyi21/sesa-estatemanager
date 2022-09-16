import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import User from "../store/auth";
import { ACTION_TYPES } from "../store/Actions/Actions";

function PasswordIcon() {
  return (
    <svg
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.625 18C1.175 18 0.791667 17.8417 0.475 17.525C0.158333 17.2083 0 16.825 0 16.375V7.625C0 7.175 0.158333 6.79167 0.475 6.475C0.791667 6.15833 1.175 6 1.625 6H3V4C3 2.88333 3.38767 1.93733 4.163 1.162C4.93767 0.387334 5.88333 0 7 0C8.11667 0 9.06267 0.387334 9.838 1.162C10.6127 1.93733 11 2.88333 11 4V6H12.375C12.825 6 13.2083 6.15833 13.525 6.475C13.8417 6.79167 14 7.175 14 7.625V16.375C14 16.825 13.8417 17.2083 13.525 17.525C13.2083 17.8417 12.825 18 12.375 18H1.625ZM4 6H10V4C10 3.16667 9.70833 2.45833 9.125 1.875C8.54167 1.29167 7.83333 1 7 1C6.16667 1 5.45833 1.29167 4.875 1.875C4.29167 2.45833 4 3.16667 4 4V6ZM1.625 17H12.375C12.5583 17 12.7083 16.9417 12.825 16.825C12.9417 16.7083 13 16.5583 13 16.375V7.625C13 7.44167 12.9417 7.29167 12.825 7.175C12.7083 7.05833 12.5583 7 12.375 7H1.625C1.44167 7 1.29167 7.05833 1.175 7.175C1.05833 7.29167 1 7.44167 1 7.625V16.375C1 16.5583 1.05833 16.7083 1.175 16.825C1.29167 16.9417 1.44167 17 1.625 17ZM7 13.5C7.41667 13.5 7.77067 13.354 8.062 13.062C8.354 12.7707 8.5 12.4167 8.5 12C8.5 11.5833 8.354 11.2293 8.062 10.938C7.77067 10.646 7.41667 10.5 7 10.5C6.58333 10.5 6.22933 10.646 5.938 10.938C5.646 11.2293 5.5 11.5833 5.5 12C5.5 12.4167 5.646 12.7707 5.938 13.062C6.22933 13.354 6.58333 13.5 7 13.5Z"
        fill="#1C1B1F"
      />
    </svg>
  );
}

function LogOutIcon() {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.79995 17C1.34995 17 0.970618 16.846 0.661952 16.538C0.353952 16.2293 0.199951 15.8417 0.199951 15.375V1.625C0.199951 1.15833 0.353952 0.771 0.661952 0.463C0.970618 0.154333 1.34995 0 1.79995 0H8.22495V1H1.79995C1.64995 1 1.51262 1.06267 1.38795 1.188C1.26262 1.31267 1.19995 1.45833 1.19995 1.625V15.375C1.19995 15.5417 1.26262 15.6873 1.38795 15.812C1.51262 15.9373 1.64995 16 1.79995 16H8.22495V17H1.79995ZM12.275 12.05L11.575 11.325L13.875 9H5.22495V8H13.875L11.575 5.675L12.275 4.95L15.8 8.5L12.275 12.05Z"
        fill="#FF2B2B"
      />
    </svg>
  );
}

export default function DropDownAdminPanel(params) {
  const { dispatch } = useContext(User);

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = ()=>{
        localStorage.removeItem("sesauser");
    localStorage.removeItem("sesaToken");
    dispatch({ type: ACTION_TYPES.LOGOUT });

    navigate("/");
  }
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 6.375C5.9 6.375 5.80433 6.35833 5.713 6.325C5.621 6.29167 5.525 6.225 5.425 6.125L1.05 1.75C0.933334 1.63333 0.875 1.51233 0.875 1.387C0.875 1.26233 0.933334 1.15 1.05 1.05C1.15 0.933334 1.26667 0.875 1.4 0.875C1.53333 0.875 1.65 0.933334 1.75 1.05L6 5.275L10.25 1.025C10.35 0.925 10.4667 0.875 10.6 0.875C10.7333 0.875 10.85 0.933334 10.95 1.05C11.0667 1.15 11.125 1.26667 11.125 1.4C11.125 1.53333 11.0667 1.65 10.95 1.75L6.575 6.125C6.475 6.225 6.37933 6.29167 6.288 6.325C6.196 6.35833 6.1 6.375 6 6.375Z"
            fill="#1C1B1F"
          />
        </svg>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem className="bg-white" onClick={handleClose}>
          <Link to={"/overview/password"} className="flex no-underline">
            <PasswordIcon />
            <span className="ml-3 text-black">Change Password</span>{" "}
          </Link>
        </MenuItem>

          <Button
            color="error"
            className="no-underline text-inherit flex items-center w-full px-3 py-2"
            style={{ paddingLeft: 0, justifyContent: "start", textTransform:"capitalize", fontSize:16 }}
            onClick={handleLogOut}
          >
            <LogOutIcon />
            <span className="ml-3">Log Out</span>{" "}
          </Button>

      </Menu>
    </div>
  );
}
