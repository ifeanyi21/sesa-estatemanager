import React from "react";
import PrintAndDownload from "../../../components/PrintAndDownload/PrintAndDownloadButton";
import ReportsDropDown from "../ReportsDropDown";
import DetailedInfoGraphics from "../DetailedInfoGraphics";
import { SearchIcon } from "../../../components/SideBar/icons";
import DateRangePicker from "../../../components/DatePicker/DateRangePicker";
import Table from "../../../components/Table/Table";
import { Box, FormControl, MenuItem, Select } from "@mui/material";

function GroupAccess() {
  const dummyVisitor = [
    {
      id: 1,
      date: "21 March, 2022",
      accessCode: "R90373",
      visitorDetails: "Kunle",
      businessName: "Farmer's Inc",
      propCode: "P03933",
      modeOfEntry: "Car",
      checkIn: "3:19pm",
      checkOut: "6:49pm",
    },
    {
      id: 2,
      date: "21 March, 2022",
      accessCode: "R90373",
      visitorDetails: "Kunle",
      businessName: "Farmer's Inc",
      propCode: "P03933",
      modeOfEntry: "Car",
      checkIn: "3:19pm",
      checkOut: "6:49pm",
    },
    {
      id: 3,
      date: "21 March, 2022",
      accessCode: "R90373",
      visitorDetails: "Kunle",
      businessName: "Farmer's Inc",
      propCode: "P03933",
      modeOfEntry: "Car",
      checkIn: "3:19pm",
      checkOut: "6:49pm",
    },
    {
      id: 4,
      date: "21 March, 2022",
      accessCode: "R90373",
      visitorDetails: "Kunle",
      businessName: "Farmer's Inc",
      propCode: "P03933",
      modeOfEntry: "Car",
      checkIn: "3:19pm",
      checkOut: "6:49pm",
    },
  ];

  const columns = [
    {
      sortable: false,
      field: "date",
      headerName: "Date",
      flex: 1,
      minWidth: 140,
    },
    {
      sortable: false,
      field: "accessCode",
      headerName: "Access Code",
      flex: 1,
      minWidth: 120,
    },
    {
      sortable: false,
      field: "visitorDetails",
      headerName: "Visitor Name",
      flex: 1,
      minWidth: 150,
    },
    {
      sortable: false,
      field: "businessName",
      headerName: "Business Name",
      flex: 1,
      minWidth: 160,
    },
    {
      sortable: false,
      field: "propCode",
      headerName: "Prop. Code",
      flex: 1,
      minWidth: 100,
    },
    {
      sortable: false,
      field: "modeOfEntry",
      headerName: "Mode of Entry",
      flex: 1,
      minWidth: 120,
    },
    {
      sortable: false,
      field: "checkIn",
      headerName: "Check - in",
      flex: 1,
      minWidth: 100,
    },
    {
      sortable: false,
      field: "checkOut",
      headerName: "Check - out",
      flex: 1,
      minWidth: 100,
    },
    {
      sortable: false,
      field: "toggle",
      headerName: "",
      renderCell: (params) => {
        return (
          <ReportsDropDown
            params={params}
            viewUrl={"/reports/business-report/"}
          />
        );
      },
    },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h6 className="my-8">Business Visitors Report</h6>
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

      <DetailedInfoGraphics title="Top 3 Group Access Check-In" />
      <div className="mt-8">
        <header className="flex items-baseline mb-8">
          <p className="text-lg">Visitor Report List</p>
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
      <div className="mt-8">
        <Table
          height="60vh"
          columns={columns}
          data={dummyVisitor}
          checkboxSelection={true}
        />
      </div>
    </div>
  );
}

export default GroupAccess;
