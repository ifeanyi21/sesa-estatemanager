import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import DropDown from "./DropDown";


function AccessCardsList() {
  const columnsRFID = [
    {
      field: "serialNumber",
      headerName: "Access Card Serial Nos.",
      sortable: false,
      width: 350,
    },
    {
      field: "name",
      headerName: "Holder's Name",
      sortable: false,
      width: 350,
    },
    {
      field: "number",
      headerName: "Phone Number",
      sortable: false,
     width: 330,
    },
    { field: "category", headerName: "Resident Category", sortable: false, 
    width: 300 
},
    {
      field: "toggle",
      headerName: "",
      sortable: false,
     width: 60,
      renderCell: (params) => <DropDown {...params} />,
    },
  ];

  const dummyRFID = [
    {
      id: 1,
      serialNumber: 1,
      name: "John Doe",
      number: "8373993",
      category: "Resident User",
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
        "& .MuiDataGrid-columnHeader .MuiDataGrid-cell":{
            marginRight:"100px !important"
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

export default AccessCardsList;
