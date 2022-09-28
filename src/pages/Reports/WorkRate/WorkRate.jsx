import { Box, FormControl, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import BarChartContainer from "../../../components/Charts/BarChart/BarChart";
import DoughnutChart from "../../../components/Charts/DoughnutChart";
import { DotIcon } from "../../../components/SideBar/icons";
import Table from "../../../components/Table/Table";

function WorkRate() {
  const chartData = [
    {
      id: 1,
      time: "5am",
      securityGuard: 383,
      system: 200,
    },
    {
      id: 2,
      time: "6am",
      securityGuard: 883,
      system: 500,
    },
    {
      id: 3,
      time: "7am",
      securityGuard: 898,
      system: 800,
    },
    {
      id: 4,
      time: "8am",
      securityGuard: 383,
      system: 240,
    },
    {
      id: 5,
      time: "9am",
      securityGuard: 903,
      system: 100,
    },
    {
      id: 6,
      time: "10am",
      securityGuard: 203,
      system: 202,
    },
    {
      id: 7,
      time: "11am",
      securityGuard: 813,
      system: 290,
    },
  ];

  const totalCheckin = [30000, 20000];

  const totalCheckOut = [40000, 20000];

  const [userData] = useState({
    datasets: [
      {
        data: totalCheckin.map((data) => data),
        backgroundColor: ["#08D231", "#F7E541"],
      },
    ],
  });

  const [userCheckout] = useState({
    datasets: [
      {
        data: totalCheckOut.map((data) => data),
        backgroundColor: ["#3D08D2", "#F74183"],
      },
    ],
  });

  const columns = [
    {
      sortable: false,
      field: "date",
      headerName: "Date",
      flex: 1,
      minWidth: 120,
    },
    {
      sortable: false,
      field: "modeOfContact",
      headerName: "Mode Of Contact",
      flex: 1,
      minWidth: 140,
    },
    {
      sortable: false,
      field: "accessCode",
      headerName: "Access Code",
      flex: 1,
      minWidth: 140,
    },
    {
      sortable: false,
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 140,
    },
    {
      sortable: false,
      field: "number",
      headerName: "Number",
      flex: 1,
      minWidth: 140,
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
      field: "nos",
      headerName: "Nos of Occ.",
      flex: 1,
      minWidth: 120,
    },
    {
      sortable: false,
      field: "accessType",
      headerName: "Access Type",
      flex: 1,
      minWidth: 120,
    },
    {
      sortable: false,
      field: "time",
      headerName: "Time",
      flex: 1,
      minWidth: 80,
    },
  ];

  const workRate = [
    {
      id: 1,
      date: "21 March, 2021",
      modeOfContact: "Security",
      accessCode: "V31483",
      name: "Daniella Rio",
      number: "0904848494",
      modeOfEntry: "Car",
      nos: "2",
      accessType: "Check in",
      time: "3:15pm",
    },
    {
      id: 2,
      date: "21 March, 2021",
      modeOfContact: "Security",
      accessCode: "V38373",
      name: "Daniella Rio",
      number: "0904848494",
      modeOfEntry: "Car",
      nos: "2",
      accessType: "Check in",
      time: "3:15pm",
    },
    {
      id: 3,
      date: "21 March, 2021",
      modeOfContact: "Security",
      accessCode: "V32283",
      name: "Deji",
      number: "0904848494",
      modeOfEntry: "Car",
      nos: "2",
      accessType: "Check in",
      time: "3:15pm",
    },
    {
      id: 4,
      date: "21 March, 2021",
      modeOfContact: "System",
      accessCode: "V38383",
      name: "Sola Ayo",
      number: "0904848494",
      modeOfEntry: "Car",
      nos: "2",
      accessType: "Check in",
      time: "3:15pm",
    },
    {
      id: 5,
      date: "21 March, 2021",
      modeOfContact: "System",
      accessCode: "V38383",
      name: "Sola Ayo",
      number: "0904848494",
      modeOfEntry: "Car",
      nos: "2",
      accessType: "Check in",
      time: "3:15pm",
    },
    {
      id: 6,
      date: "21 March, 2021",
      modeOfContact: "System",
      accessCode: "V38383",
      name: "Sola Ayo",
      number: "0904848494",
      modeOfEntry: "Car",
      nos: "2",
      accessType: "Check in",
      time: "3:15pm",
    },
    {
      id: 7,
      date: "21 March, 2021",
      modeOfContact: "System",
      accessCode: "V38383",
      name: "Sola Ayo",
      number: "0904848494",
      modeOfEntry: "Car",
      nos: "2",
      accessType: "Check in",
      time: "3:15pm",
    },
    {
      id: 8,
      date: "21 March, 2021",
      modeOfContact: "System",
      accessCode: "V38383",
      name: "Sola Ayo",
      number: "0904848494",
      modeOfEntry: "Car",
      nos: "2",
      accessType: "Check in",
      time: "3:15pm",
    },
    {
      id: 9,
      date: "21 March, 2021",
      modeOfContact: "System",
      accessCode: "V38383",
      name: "Sola Ayo",
      number: "0904848494",
      modeOfEntry: "Car",
      nos: "2",
      accessType: "Check in",
      time: "3:15pm",
    },
    {
      id: 10,
      date: "21 March, 2021",
      modeOfContact: "System",
      accessCode: "V38383",
      name: "Sola Ayo",
      number: "0904848494",
      modeOfEntry: "Car",
      nos: "2",
      accessType: "Check in",
      time: "3:15pm",
    },
    {
      id: 11,
      date: "21 March, 2021",
      modeOfContact: "System",
      accessCode: "V38383",
      name: "Sola Ayo",
      number: "0904848494",
      modeOfEntry: "Car",
      nos: "2",
      accessType: "Check in",
      time: "3:15pm",
    },
    {
      id: 12,
      date: "21 March, 2021",
      modeOfContact: "System",
      accessCode: "V38383",
      name: "Sola Ayo",
      number: "0904848494",
      modeOfEntry: "Car",
      nos: "2",
      accessType: "Check in",
      time: "3:15pm",
    },
    {
      id: 13,
      date: "21 March, 2021",
      modeOfContact: "System",
      accessCode: "V38383",
      name: "Sola Ayo",
      number: "0904848494",
      modeOfEntry: "Car",
      nos: "2",
      accessType: "Check in",
      time: "3:15pm",
    },
  ];

  return (
    <div>
      <div className="row">
        <div
          className="col-12 mb-4 flex justify-end items-center"
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
        <div className="col-lg-8 mb-5">
          <div className="bg-white p-4 rounded" style={{ height: "100%" }}>
            <h4 className="mb-8">Check In</h4>
            <BarChartContainer
              data={chartData}
              Xaxis="time"
              Yaxis="securityGuard"
              datakey="securityGuard"
              fill="#08D231"
              datakey1="system"
              fill1="#F7E541"
            />
          </div>
        </div>
        <div className="col-lg-4 mb-5">
          <div
            className="bg-white p-4 rounded"
            style={{ height: "100%", width: "100%" }}
          >
            <div style={{ height: 277 }}>
              <DoughnutChart
                chartData={userData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: true,
                      position: "right",
                      labels: {
                        usePointStyle: true,
                        pointStyle: "circle",
                      },
                    },
                  },
                }}
              />
            </div>

            <div className="flex justify-between my-8">
              <div className="flex items-center">
                <DotIcon color="#08D231" />{" "}
                <span className="ml-2">Security Guard</span>{" "}
              </div>
              <p className="m-0">20,000</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                {" "}
                <DotIcon color="#F7E541" /> <span className="ml-2">System</span>{" "}
              </div>
              <p className="m-0">20,000</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 mb-5">
          <div className="bg-white p-4 rounded" style={{ height: "100%" }}>
            <h4 className="mb-8">Check Out</h4>
            <BarChartContainer
              data={chartData}
              Xaxis="time"
              Yaxis="securityGuard"
              datakey="securityGuard"
              fill="#3D08D2"
              datakey1="system"
              fill1="#F74183"
            />
          </div>
        </div>
        <div className="col-lg-4 mb-5">
          <div className="bg-white p-4 rounded" style={{ height: "100%" }}>
            <div style={{ height: 277 }}>
              <DoughnutChart
                chartData={userCheckout}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: true,
                      position: "right",
                      labels: {
                        usePointStyle: true,
                        pointStyle: "circle",
                      },
                    },
                  },
                }}
              />
            </div>
            <div className="flex justify-between my-8">
              <div className="flex items-center">
                <DotIcon color="#3D08D2" />{" "}
                <span className="ml-2">Security Guard</span>{" "}
              </div>
              <p className="m-0">20,000</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                {" "}
                <DotIcon color="#F74183" /> <span className="ml-2">System</span>{" "}
              </div>
              <p className="m-0">20,000</p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="mt-8">
            <Table
              height="60vh"
              columns={columns}
              data={workRate}
              checkboxSelection={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkRate;
