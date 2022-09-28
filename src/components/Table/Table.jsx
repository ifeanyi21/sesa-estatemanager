import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
//import {GridToolbarContainer,GridToolbarExport} from '@mui/x-data-grid'


// function CustomToolbar() {
//   return (
//     <GridToolbarContainer>
//       <GridToolbarExport />
//     </GridToolbarContainer>
//   );
// }

function Table(props) {
  const [pageSize, setPageSize] = useState(2);
  const { height, data, columns, checkboxSelection } = props;
  return (
    <Box
      sx={{
        height: { height },
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
        "& .MuiTablePagination-selectLabel":{
          marginBottom:0
        },
        "& .MuiTablePagination-toolbar":{
          alignItems:'baseline'
        }
      }}
    >
      <div style={{ width: "100%" }} className="bg-white">
        <DataGrid
          autoHeight
          rows={data}
          columns={columns}
          rowsPerPageOptions={[2, 10, 20, 40, 100]}
          disableSelectionOnClick
          disableColumnMenu
          checkboxSelection={checkboxSelection}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          pagination
          //components={{ Toolbar: CustomToolbar }}
        />
      </div>
    </Box>
  );
}

export default Table;
