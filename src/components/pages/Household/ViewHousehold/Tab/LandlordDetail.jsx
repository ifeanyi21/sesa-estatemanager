import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import HouseDropDown from "../DropDown";

function LandlordDetail() {
  const columnsLandlord = [
    { field: "resCode", headerName: "Res. Code", sortable: false, width: 250 },
    { field: "name", headerName: "Name", sortable: false, width: 270 },
    { field: "gender", headerName: "Gender", sortable: false, width: 250 },
    { field: "number", headerName: "Phone No.", sortable: false, width: 270 },
    {
      field: "class",
      headerName: "Resident Class",
      sortable: false,
      width: 260,
    },
    {
      field: "toggle",
      headerName: "",
      sortable: false,
      width: 30,
      renderCell: (params) => <HouseDropDown {...params} />,
    },
  ];

  const dummyLandord = [
    {
      id: 1,
      resCode: "0373",
      name: "Christopher",
      gender: "Male",
      number: "038373383",
      class: "Tenant (Resident)",
    },
  ];

  return (
    <Box
      sx={{
           height: 700,
        marginTop:"54px",
        width: "100%",
        "& .MuiDataGrid-columnSeparator--sideRight": {
          display: "none !important",
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          fontWeight: 600,
        },
         '& .MuiDataGrid-root':{
        border:0
      }
      }}
    >
      <div style={{ height: 700, width: "100%" }} className="bg-white">
        <DataGrid
          rows={dummyLandord}
          columns={columnsLandlord}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          disableColumnMenu
        />
      </div>
    </Box>
  );
}

export default LandlordDetail;
