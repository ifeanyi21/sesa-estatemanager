import React from "react";
import PrintAndDownload from "../../../components/PrintAndDownload/PrintAndDownloadButton";
import ReportsDropDown from "../ReportsDropDown";
import ReportInfoGraphics from "../ReportInfoGraphics";
import { SearchIcon } from "../../../components/SideBar/icons";
import DateRangePicker from "../../../components/DatePicker/DateRangePicker";
import Table from "../../../components/Table/Table";
import { Box, FormControl, MenuItem, Select } from "@mui/material";

function ResidentAccess() {
  const dummyResident = [
    {
      id: 1,
      date: "21 March, 2022",
      modeOfContact: "Resident Code",
      accessCode: "R90373",
      name: "Kunle",
      number: "088393838",
      accessType: "Check-In",
      time: "3:19pm",
    },
    {
      id: 2,
      date: "21 March, 2022",
      modeOfContact: "Resident Code",
      accessCode: "R90373",
      name: "Kunle",
      number: "088393838",
      accessType: "Check-In",
      time: "3:19pm",
    },
    {
      id: 3,
      date: "21 March, 2022",
      modeOfContact: "Resident Code",
      accessCode: "R90373",
      name: "Kunle",
      number: "088393838",
      accessType: "Check-In",
      time: "3:19pm",
    },
    {
      id: 4,
      date: "21 March, 2022",
      modeOfContact: "Resident Code",
      accessCode: "R90373",
      name: "Kunle",
      number: "088393838",
      accessType: "Check-In",
      time: "3:19pm",
    },
  ];

  const columns = [
    {
      sortable: false,
      field: "date",
      headerName: "Date",
      minWidth: 150,
      flex: 1,
    },
    {
      sortable: false,
      field: "modeOfContact",
      headerName: "Mode of contact",
      minWidth: 140,
      flex: 1,
    },
    {
      sortable: false,
      field: "accessCode",
      headerName: "Access Code",
      minWidth: 130,
      flex: 1,
    },
    {
      sortable: false,
      field: "name",
      headerName: "Name",
      minWidth: 130,
      flex: 1,
    },
    {
      sortable: false,
      field: "number",
      headerName: "Number",
      minWidth: 120,
      flex: 1,
    },
    {
      sortable: false,
      field: "accessType",
      headerName: "Access Type",
      minWidth: 170,
      flex: 1,
    },
    {
      sortable: false,
      field: "time",
      headerName: "Time",
      minWidth: 100,
      flex: 1,
    },
    {
      sortable: false,
      field: "toggle",
      headerName: "",
      renderCell: (params) => {
        return (
          <ReportsDropDown
            params={params}
            viewUrl={"/reports/resident-report/"}
          />
        );
      },
    },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h6 className="my-8">Resident Access Report</h6>
        <div
          className="mb-4 flex justify-end items-center"
          style={{ marginTop: "2rem" }}
        >
          <span className="mr-3">Sort By</span>
          <Box sx={{ minWidth: 120, backgroundColor: "white" }}>
            <FormControl fullWidth size="small">
              <Select
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                label="Sort"
                name="sort"
                defaultValue={0}
              >
                <MenuItem value={0}>Today</MenuItem>
                <MenuItem value={1}>This Week</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>

      <ReportInfoGraphics />
      <div className="mt-8">
        <header className="flex items-baseline mb-8">
          <p className="text-lg">Resident Report List</p>
          <div className="flex ml-9">
            <DateRangePicker />
          </div>
        </header>
        <div className="col-lg-12">
          <div className="row items-baseline">
            <div className="col-lg-6 mb-1">
              <div className="flex items-baseline">
                <div className="w-4/5">
                  <div className="relative rounded-md h-9">
                    <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
                      <span className="text-gray-500">
                        <SearchIcon />
                      </span>
                    </div>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 border-gray-300 rounded-md h-9"
                      placeholder="Search"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <select
                        id="SortBy"
                        name="SortBy"
                        className="focus:ring-indigo-500 focus:border-indigo-500 h-9 py-0 pl-1 pr-4 border bg-transparent text-gray-500 rounded"
                      >
                        <option>Sort By</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 flex justify-end">
              <PrintAndDownload />
            </div>
          </div>
        </div>
      </div>
      {/* <Box
        sx={{
          height: 300,
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
        <div className="bg-white mt-8 flex">
          <div style={{ width: "100%" }} className="bg-white">
            <DataGrid
              autoHeight
              disableColumnMenu
              rows={dummyResident}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </div>
      </Box> */}
      <div className="mt-8">
        <Table
          height="60vh"
          columns={columns}
          data={dummyResident}
          checkboxSelection={true}
        />
      </div>
    </div>
  );
}

export default ResidentAccess;
