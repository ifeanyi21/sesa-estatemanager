import React from "react";
import PrintAndDownload from "../../../components/PrintAndDownload/PrintAndDownloadButton";
import CSS from "../../../components/PrintAndDownload/PrintAndDownload.module.css";
import ReportsDropDown from "../ReportsDropDown";
import ProfilePicture from "../../../images/security.jpeg";
import Table from "../../../components/Table/Table";

function GuardName(params) {
  return (
    <div className="flex items-center">
      <img
        src={ProfilePicture}
        className="w-10 h-10 rounded-full object-cover"
        alt=""
      />
      <p className="mb-0 ml-2">{params.row.guardName}</p>
    </div>
  );
}

function AttendanceDetails() {
  const dummy = [
    {
      id: 1,
      date: "21 March, 2022",
      guardName: "Kunle Asa",
      guardCode: "A7373",
      number: "093837373",
      clockin: "9:01Am",
      clockout: "5:31pm",
    },
    {
      id: 2,
      date: "21 March, 2022",
      guardName: "Kunle",
      guardCode: "A7373",
      number: "093837373",
      clockin: "9:01Am",
      clockout: "5:31pm",
    },
    {
      id: 3,
      date: "21 March, 2022",
      guardName: "Kunle",
      guardCode: "A7373",
      number: "093837373",
      clockin: "9:01Am",
      clockout: "5:31pm",
    },
    {
      id: 4,
      date: "21 March, 2022",
      guardName: "Kunle",
      guardCode: "A7373",
      number: "093837373",
      clockin: "9:01Am",
      clockout: "5:31pm",
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
      field: "guardCode",
      headerName: "Guard Code",
      flex: 1,
      minWidth: 130,
    },
    {
      sortable: false,
      field: "guardName",
      headerName: "Guard Name",
      flex: 1,
      minWidth: 220,
      renderCell: (params) => {
        return <GuardName {...params} />;
      },
    },
    {
      sortable: false,
      field: "number",
      headerName: "Phone No.",
      flex: 1,
      minWidth: 150,
    },
    {
      sortable: false,
      field: "clockin",
      headerName: "Clock - in",
      flex: 1,
      minWidth: 180,
    },
    {
      sortable: false,
      field: "clockout",
      headerName: "Clock - out",
      flex: 1,
      minWidth: 130,
    },
    {
      sortable: false,
      field: "toggle",
      headerName: "",
      renderCell: (params) => {
        return (
          <ReportsDropDown params={params} viewUrl={"/reports/guard-report/"} />
        );
      },
    },
  ];

  return (
    <div>
      <div className="mt-8">
        <h6 className="mb-8">Security Guard Attendance Report</h6>
        <header className="row" style={{ paddingLeft: 10 }}>
          <div
            className={`col-lg-3 bg-white p-3 rounded-md w-72 mr-8 mb-2`}
            style={{ boxShadow: "0px 2px 4px rgba(102, 104, 105, 0.25)" }}
          >
            <h6 className="font-extralight text-sm">Total Number of Guards</h6>
            <p className="text-3xl font-semibold" style={{ color: "#0446B9" }}>
              14
            </p>
            <hr />
            <p className="text-sm text-muted font-extralight">21 March 2022</p>
          </div>

          <div
            className={`col-lg-3 bg-white p-3 rounded-md w-72 mb-2`}
            style={{ boxShadow: "0px 2px 4px rgba(102, 104, 105, 0.25)" }}
          >
            <h6 className="font-extralight text-sm">Guards on Duty</h6>
            <p className="text-3xl font-semibold" style={{ color: "#0446B9" }}>
              8
            </p>
            <hr />
            <p className="text-sm text-muted font-extralight">21 March 2022</p>
          </div>
        </header>
        <header
          className={`flex items-baseline mt-8 justify-between ${CSS.header}`}
        >
          <div className="flex justify-between items-baseline">
            <p className="mb-0 mr-3">Attendance Report List</p>
            <div className="flex ml-3">
              <input
                type="date"
                name=""
                id=""
                className="ml-5 border bg-white focus:ring-indigo-500 focus:border-indigo-500 block h-9 pl-7 pr-12 border-gray-300 rounded-md"
              />
              <input
                type="date"
                name=""
                id=""
                className="ml-5 border bg-white focus:ring-indigo-500 focus:border-indigo-500 block h-9 pl-7 pr-12 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <PrintAndDownload />
        </header>
      </div>

      <div className="mt-8">
        <Table
          height="60vh"
          columns={columns}
          data={dummy}
          checkboxSelection={true}
        />
      </div>
    </div>
  );
}

export default AttendanceDetails;
