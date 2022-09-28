import React from "react";
import PrintAndDownload from "../../../components/PrintAndDownload/PrintAndDownloadButton";
import ReportsDropDown from "../ReportsDropDown";
import DetailedInfoGraphics from "../DetailedInfoGraphics";
import { SearchIcon } from "../../../components/SideBar/icons";
import Table from "../../../components/Table/Table";
import { Box, FormControl, MenuItem, Select } from "@mui/material";

function EventsReports() {
  const dummyEvents = [
    {
      id: 1,
      eventCode: "E90373",
      eventName: "Child Dedication",
      propCode: "P03933",
      guests: 20,
      totalCheckIn: "19",
      startDate: "04/06/22",
      endDate: "04/06/22",
    },
    {
      id: 2,
      eventCode: "E90373",
      eventName: "Child Dedication",
      propCode: "P03933",
      guests: 20,
      totalCheckIn: "19",
      startDate: "04/06/22",
      endDate: "04/06/22",
    },
    {
      id: 3,
      eventCode: "E90373",
      eventName: "Child Dedication",
      propCode: "P03933",
      guests: 20,
      totalCheckIn: "19",
      startDate: "04/06/22",
      endDate: "04/06/22",
    },
    {
      id: 4,
      eventCode: "E90373",
      eventName: "Child Dedication",
      propCode: "P03933",
      guests: 20,
      totalCheckIn: "19",
      startDate: "04/06/22",
      endDate: "04/06/22",
    },
  ];

  const columns = [
    {
      sortable: false,
      field: "eventCode",
      headerName: "Event Code",
      flex: 1,
      minWidth: 130,
    },
    {
      sortable: false,
      field: "eventName",
      headerName: "Event Name",
      flex: 1,
      minWidth: 160,
    },
    {
      sortable: false,
      field: "propCode",
      headerName: "Prop. Code",
      flex: 1,
      minWidth: 140,
    },
    {
      sortable: false,
      field: "guests",
      headerName: "Expected Guest",
      flex: 1,
      minWidth: 140,
    },
    {
      sortable: false,
      field: "totalCheckIn",
      headerName: "Total Check - in",
      flex: 1,
      minWidth: 140,
    },
    {
      sortable: false,
      field: "startDate",
      headerName: "Start Date",
      flex: 1,
      minWidth: 120,
    },
    {
      sortable: false,
      field: "endDate",
      headerName: "End Date",
      flex: 1,
      minWidth: 120,
    },
    {
      sortable: false,
      field: "toggle",
      headerName: "",
      renderCell: (params) => {
        return (
          <ReportsDropDown params={params} viewUrl={"/reports/event-report/"} />
        );
      },
    },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h6 className="my-8">Event Report</h6>
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
      <DetailedInfoGraphics title="Top 3 Event Check-In" totalCount={15} />
      <div className="mt-8">
        <header className="flex items-baseline mb-8">
          <p className="text-lg">Visitor Report List</p>
          <div className="flex ml-3">
            <input
              type="date"
              name=""
              id=""
              className="ml-5 border p-2 rounded bg-white"
            />
            <input
              type="date"
              name=""
              id=""
              className="ml-5 border p-2 rounded bg-white"
            />
          </div>
        </header>
        <div className="col-lg-12">
          <div className="row mb-4 items-baseline">
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
          data={dummyEvents}
          checkboxSelection={true}
        />
      </div>
    </div>
  );
}

export default EventsReports;
