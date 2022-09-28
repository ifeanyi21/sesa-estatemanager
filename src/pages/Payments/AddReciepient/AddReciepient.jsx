import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AlphaIcon,
  FilterIcon,
  PaymentCreatedIcon,
  PaymentTwoIcon,
} from "../../../components/SideBar/icons";
import SuccessModal from "../../../components/SuccessMessage/SuccessMessage";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import PaymentContext from "../../../components/store/paymentStore";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

function DisplayResidentName(params) {
  return (
    <div className="flex">
      <span>{params.row.name}</span>{" "}
      {params.row.alpha && (
        <span className="ml-3">
          {" "}
          <AlphaIcon />
        </span>
      )}
    </div>
  );
}

function AddReciepients() {
  const [state] = useContext(PaymentContext);

  const dummyProperty = [
    {
      id: 1,
      code: "H73733",
      address: "Blk 2, fit 3 Zone A",
      category: "Residential",
      name: "-",
      type: "2 Bedroom self con",
      class: "Landlord Developer",
    },
    {
      id: 2,
      code: "H73733",
      address: "Blk 2, fit 3 Zone A",
      category: "Business",
      name: "-",
      type: "2 Bedroom self con",
      class: "Landlord Developer",
    },
    {
      id: 3,
      code: "H73733",
      address: "Blk 2, fit 3 Zone A",
      category: "Residential",
      name: "-",
      type: "2 Bedroom self con",
      class: "Landlord Developer",
    },
  ];

  const columnsProperty = [
    {
      sortable: false,
      field: "code",
      headerName: "Property Code",
      flex: 1,
      minWidth: 120,
    },
    {
      sortable: false,
      field: "address",
      headerName: "Address",
      flex: 1,
      minWidth: 180,
    },
    {
      sortable: false,
      field: "category",
      headerName: "Property Category",
      flex: 1,
      minWidth: 150,
    },
    {
      sortable: false,
      field: "name",
      headerName: "Property Name",
      flex: 1,
      minWidth: 150,
    },
    {
      sortable: false,
      field: "type",
      headerName: "Property Type",
      flex: 1,
      minWidth: 180,
    },
    {
      sortable: false,
      field: "class",
      headerName: "Residential Class",
      flex: 1,
      minWidth: 180,
    },
  ];

  const dummyResident = [
    {
      id: 1,
      code: "H73733",
      address: "Blk 2, fit 3 Zone A",
      category: "Residential",
      name: "Chris Row",
      pName: "-",
      type: "2 Bedroom self con",
      class: "Landlord Developer",
      alpha: true,
    },
    {
      id: 2,
      code: "H73733",
      address: "Blk 2, fit 3 Zone A",
      category: "Residential",
      name: "Chris Doe",
      pName: "-",
      type: "2 Bedroom self con",
      class: "Landlord Developer",
      alpha: false,
    },
    {
      id: 3,
      code: "H73733",
      address: "Blk 2, fit 3 Zone A",
      category: "Residential",
      name: "John Dee",
      pName: "-",
      type: "3 Bedroom self con",
      class: "Landlord Developer",
      alpha: true,
    },
  ];

  const columnsResident = [
    {
      sortable: false,
      field: "code",
      headerName: "Resident Code",
      flex: 1,
      minWidth: 120,
    },
    {
      sortable: false,
      field: "name",
      headerName: "Resident Name",
      flex: 1,
      minWidth: 120,
      renderCell: (params) => {
        return <DisplayResidentName {...params} />;
      },
    },
    {
      sortable: false,
      field: "category",
      headerName: "Property Category",
      flex: 1,
      minWidth: 150,
    },
    {
      sortable: false,
      field: "pName",
      headerName: "Property Name",
      flex: 1,
      minWidth: 150,
    },
    {
      sortable: false,
      field: "type",
      headerName: "Property Type",
      flex: 1,
      minWidth: 180,
    },
    {
      sortable: false,
      field: "class",
      headerName: "Residential Class",
      flex: 1,
      minWidth: 180,
    },
  ];

  const [type, setType] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [property] = useState(dummyProperty);

   const [filterArray,] = useState([]);

  const handleSuccessMessage = (e) => {
    e.preventDefault();
    setModalShow(true);
  };

  const [selectedProperty, setSelectedProperty] = useState([]);

  const onSelectedProperty = (ids) => {
    const selectedRowsData = ids.map((id) =>
      dummyProperty.find((row) => row.id === id)
    );
    setSelectedProperty(selectedRowsData);
  };

  const [selectedResident, setSelectedResident] = useState([]);

  const onSelectedResident = (ids) => {
    const selectedRowsData = ids.map((id) =>
      dummyResident.find((row) => row.id === id)
    );
    setSelectedResident(selectedRowsData);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    // switch (filterArray.length) {
    //   case key:
      
    //   break;
    //   case key:
     
    //   break;

    //   default:
    //     setFilterArray([])
    // }

  };

  const [filterOptions, setFilterOptions] = useState({
    business: false,
    residential: false,
    "2bdrm": false,
    "3bdrm": false,
    duplex: false,
    tenant: false,
    landlordDev: false,
    landlordNonRes: false,
    landlordRes: false,
    resUser: false,
    alpha: false,
  });

  const handleTypeChange = (e) => {
    setType(e.target.value);
    setSelectedProperty([]);
    setSelectedResident([]);

    setFilterOptions((prev) => {
      return {
        ...prev,
        resUser: false,
        alpha: false,
      };
    });
  };

  const handleFilter = (e) => {
    setFilterOptions((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.checked,
      };
    });
  };


  return (
    <div>
      <Link to="/payments" className="no-underline text-sm">
        Payment
      </Link>{" "}
      /{" "}
      <Link to="/payments/add-payment" className="no-underline text-sm">
        Add Payment
      </Link>{" "}
      <span className="text-sm">/ Add Reciepients</span>
      <div className="bg-white p-4 mt-8 rounded">
        <div className="my-8 justify-center flex">
          {!modalShow ? <PaymentTwoIcon /> : <PaymentCreatedIcon />}
        </div>

        <Form className="p-3" onSubmit={handleSuccessMessage}>
          <div>
            <h6 className="mb-8">Filter Selection</h6>
            <header className="row items-center">
              <div className="col-md-4 mb-1">
                <Box sx={{ width: "100%" }}>
                  <FormControl fullWidth size="small">
                    <Select
                      sx={{
                        "& legend": { display: "none" },
                        "& fieldset": { top: 0 },
                      }}
                      value={type}
                      onChange={handleTypeChange}
                    >
                      <MenuItem value={0}>Households</MenuItem>
                      <MenuItem value={1}>Residents</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="col-md-2 mb-1">
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
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <div className="px-4 py-2">
                      <p>Property Category</p>

                      <div className="mb-2">
                        <input
                          className="scale-150"
                          type="checkbox"
                          name="business"
                          onChange={handleFilter}
                          checked={filterOptions["business"]}
                        />
                        <label className="ml-3">Business</label>
                      </div>

                      <div className="mb-4">
                        <input
                          className="scale-150"
                          type="checkbox"
                          name="residential"
                          onChange={handleFilter}
                          checked={filterOptions["residential"]}
                        />
                        <label className="ml-3">Residential</label>
                      </div>

                      <p>Property Type</p>

                      <div className="mb-2">
                        <input
                          className="scale-150"
                          type="checkbox"
                          name="2bdrm"
                          onChange={handleFilter}
                          checked={filterOptions["2bdrm"]}
                        />
                        <label className="ml-3">2 Bedroom</label>
                      </div>

                      <div className="mb-2">
                        <input
                          className="scale-150"
                          type="checkbox"
                          name="3bdrm"
                          onChange={handleFilter}
                          checked={filterOptions["3bdrm"]}
                        />
                        <label className="ml-3">3 Bedroom</label>
                      </div>

                      <div className="mb-4">
                        <input
                          className="scale-150"
                          type="checkbox"
                          name="duplex"
                          onChange={handleFilter}
                          checked={filterOptions["duplex"]}
                        />
                        <label className="ml-3">Duplex</label>
                      </div>

                      <p>Reisdent Class</p>

                      <div className="mb-2">
                        <input
                          className="scale-150"
                          type="checkbox"
                          name="tenant"
                          onChange={handleFilter}
                          checked={filterOptions["tenant"]}
                        />
                        <label className="ml-3">Tenant (Resident)</label>
                      </div>

                      <div className="mb-2">
                        <input
                          className="scale-150"
                          type="checkbox"
                          name="landlordRes"
                          onChange={handleFilter}
                          checked={filterOptions["landlordRes"]}
                        />
                        <label className="ml-3">Landlord (Resident)</label>
                      </div>

                      <div className="mb-2">
                        <input
                          className="scale-150"
                          type="checkbox"
                          name="landlordNonRes"
                          onChange={handleFilter}
                          checked={filterOptions["landlordNonRes"]}
                        />
                        <label className="ml-3">Landlord(Non Resident)</label>
                      </div>

                      <div className="mb-4">
                        <input
                          className="scale-150"
                          type="checkbox"
                          name="landlordDev"
                          onChange={handleFilter}
                          checked={filterOptions["landlordDev"]}
                        />
                        <label className="ml-3">Landlord (Developer)</label>
                      </div>

                      <p className={type === "0" ? "text-muted" : ""}>
                        Reisdent Category
                      </p>

                      <div className="mb-2">
                        <input
                          className="scale-150"
                          type="checkbox"
                          name="alpha"
                          disabled={type === 0 && true}
                          onChange={handleFilter}
                          checked={filterOptions["alpha"]}
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
                          onChange={handleFilter}
                          checked={filterOptions["resUser"]}
                        />
                        <label className={`${type === 0 && "text-muted"} ml-3`}>
                          Resident User
                        </label>
                      </div>
                      <div className="flex justify-end mt-16">
                        <Button onClick={handleClose}>
                          Done
                        </Button>
                      </div>
                    </div>
                  </Menu>
                </div>
              </div>
              {type === 1 && (
                <div className="col-md-4 flex items-start">
                  <p className="text-base text-black">
                    NB: All alphas are denoted with the icon{" "}
                  </p>
                  <span className="ml-2">
                    <AlphaIcon />
                  </span>
                </div>
              )}

              <div className={`${type === 1 ? "col-md-2" : "col-md-6"} mb-1`}>
                <div className="flex justify-end">
                  {type === 0 && (
                    <button
                      className={`btn btn-primary btn-sm ${
                        selectedProperty.length <= 0 && "disabled"
                      }`}
                    >
                      Create Dues
                    </button>
                  )}
                  {type === 1 && (
                    <button
                      className={`btn btn-primary btn-sm   ${
                        selectedResident.length <= 0 && "disabled"
                      }`}
                    >
                      Create Dues
                    </button>
                  )}
                </div>
              </div>
            </header>
          </div>

          {type === 0 && (
            <Box
              sx={{
                width: "100%",
                "& .MuiDataGrid-columnSeparator--sideRight": {
                  display: "none !important",
                },
                "& .MuiDataGrid-columnHeaderTitle": {
                  fontWeight: 600,
                },
                "& .MuiCheckbox-root": {
                  color: "#D9D9D9",
                },
                "& .MuiCheckbox-root.Mui-checked": {
                  color: "#0446B9",
                },
              }}
            >
              <div className="bg-white mt-5">
                <div style={{ width: "100%" }} className="bg-white">
                  <DataGrid
                    autoHeight
                    disableColumnMenu
                    rows={filterArray.length === 0 ? property : filterArray}
                    columns={columnsProperty}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    onSelectionModelChange={(ids) => onSelectedProperty(ids)}
                  />
                </div>
              </div>
            </Box>
          )}

          {type === 1 && (
            <Box
              sx={{
                width: "100%",
                "& .MuiDataGrid-columnSeparator--sideRight": {
                  display: "none !important",
                },
                "& .MuiDataGrid-columnHeaderTitle": {
                  fontWeight: 600,
                },
                "& .MuiCheckbox-root": {
                  color: "#D9D9D9",
                },
                "& .MuiCheckbox-root.Mui-checked": {
                  color: "#0446B9",
                },
              }}
            >
              <div className="bg-white mt-5">
                <div style={{ width: "100%" }} className="bg-white">
                  <DataGrid
                    autoHeight
                    disableColumnMenu
                    rows={dummyResident}
                    columns={columnsResident}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    onSelectionModelChange={(ids) => onSelectedResident(ids)}
                  />
                </div>
              </div>
            </Box>
          )}
        </Form>

        <SuccessModal
          text="a Payment"
          redirecturl={`/payments/${
            state.paymentPlan === 0 ? "full" : "installments"
          }`}
          id="2"
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
}

export default AddReciepients;
