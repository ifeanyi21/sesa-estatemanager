import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import ProfilePicture from "../../../../images/security.jpeg";
import DropDown from "./DropDown";

function RFIDMake(params) {
  return (
    <div className="flex items-center">
      <img
        src={ProfilePicture}
        className="w-10 h-10 rounded-full object-cover"
        alt=""
      />
      <p className="mb-0 ml-2">{params.row.make}</p>
    </div>
  );
}

function RFIDList() {
  const columnsRFID = [
    {
      field: "serialNumber",
      headerName: "RFID Serial Number",
      sortable: false,
      flex: 1,
      minWidth: 350,
    },
    {
      field: "regNumber",
      headerName: "Vehicle Reg. Number",
      sortable: false,
      flex: 1,
      minWidth: 350,
    },
    {
      field: "make",
      headerName: "Vehicle Make",
      sortable: false,
      flex: 1,
      minWidth: 330,
      renderCell: (params) => <RFIDMake {...params} />,
    },
    {
      field: "type",
      headerName: "Vehicle Type",
      sortable: false,
      flex: 1,
      minWidth: 300,
    },
    {
      field: "toggle",
      headerName: "",
      sortable: false,
      renderCell: (params) => <DropDown {...params} />,
    },
  ];

  const dummyRFID = [
    {
      id: 1,
      serialNumber: 1,
      regNumber: "0373",
      make: "Toyota",
      type: "Male",
    },
  ];

  return (
    <Box
      sx={{
        height: 700,
        marginTop: "54px",
        width: "100%",
        "& .MuiDataGrid-columnSeparator--sideRight": {
          display: "none !important",
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          fontWeight: 600,
        },
        "& .MuiDataGrid-root": {
          border: 0,
        },
        "& .MuiDataGrid-columnHeader .MuiDataGrid-cell": {
          marginRight: "100px !important",
        },
      }}
    >
      <div style={{ height: 700, width: "100%" }} className="bg-white">
        <DataGrid
          rows={dummyRFID}
          columns={columnsRFID}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          disableColumnMenu
        />
      </div>
    </Box>
  );
}

export default RFIDList;
