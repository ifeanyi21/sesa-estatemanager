import { Button, Menu } from "@mui/material";
import React, { useState } from "react";
import { FilterIcon } from "../SideBar/icons";

function Filter(props) {
  const { type } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="flex items-center"
        sx={{
          textTransform: "capitalize",
          color: "black",
          border: "1px solid gray",
        }}
      >
        <span className="mr-8">Filter</span> <FilterIcon />
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
        <div className="px-4 py-2">
          <p>Property Category</p>

          <div className="mb-2">
            <input className="scale-150" type="checkbox" name="business" />
            <label className="ml-3">Business</label>
          </div>

          <div className="mb-4">
            <input className="scale-150" type="checkbox" name="residential" />
            <label className="ml-3">Residential</label>
          </div>

          <p>Property Type</p>

          <div className="mb-2">
            <input className="scale-150" type="checkbox" name="2bdrm" />
            <label className="ml-3">2 Bedroom</label>
          </div>

          <div className="mb-2">
            <input className="scale-150" type="checkbox" name="3bdrm" />
            <label className="ml-3">3 Bedroom</label>
          </div>

          <div className="mb-4">
            <input className="scale-150" type="checkbox" name="duplex" />
            <label className="ml-3">Duplex</label>
          </div>

          <p>Reisdent Class</p>

          <div className="mb-2">
            <input className="scale-150" type="checkbox" name="tenant" />
            <label className="ml-3">Tenant (Resident)</label>
          </div>

          <div className="mb-2">
            <input className="scale-150" type="checkbox" name="landlordRes" />
            <label className="ml-3">Landlord (Resident)</label>
          </div>

          <div className="mb-2">
            <input
              className="scale-150"
              type="checkbox"
              name="landlordNonRes"
            />
            <label className="ml-3">Landlord(Non Resident)</label>
          </div>

          <div className="mb-4">
            <input className="scale-150" type="checkbox" name="landlordDev" />
            <label className="ml-3">Landlord (Developer)</label>
          </div>

          <p className={type === "0" ? "text-muted" : ""}>Reisdent Category</p>

          <div className="mb-2">
            <input
              className="scale-150"
              type="checkbox"
              name="alpha"
              disabled={type === 0 && true}
            />
            <label className={`${type === 0 && "text-muted"} ml-3`}>
              Alphas
            </label>
          </div>

          <div className="mb-2">
            <input
              className="scale-150"
              type="checkbox"
              name="resUser"
              disabled={type === 0 && true}
            />
            <label className={`${type === 0 && "text-muted"} ml-3`}>
              Resident User
            </label>
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default Filter;
