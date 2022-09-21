import React from "react";
import { Link } from "react-router-dom";
import PrintAndDownload from "../../../PrintAndDownload/PrintAndDownloadButton";
import ReaportsHeader from "../../../ReportsHeader/ReaportsHeader";

function VisitorDetails() {
  return (
    <div>
      <Link to="/reports" className="no-underline text-sm">
        Reports
      </Link>{" "}
      <span className="text-sm">/ Visitor Report Details</span>
      <div className="bg-white p-5 mt-8">
        <ReaportsHeader />
        <header className="flex justify-end mt-8">
          <PrintAndDownload />
        </header>
        <div className="table-responsive mt-8">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Access Code</td>
                <td>09873</td>
              </tr>

              <tr>
                <td>Visitor Name</td>
                <td>hello world</td>
              </tr>

              <tr>
                <td>Visitor Number</td>
                <td>+234 809 772 7262</td>
              </tr>

              <tr>
                <td>House Code</td>
                <td>H73737</td>
              </tr>

              <tr>
                <td>Resident Code</td>
                <td>R6363</td>
              </tr>

              <tr>
                <td>Visitor Type</td>
                <td>WIV</td>
              </tr>

              <tr>
                <td>Mode of Entry</td>
                <td>Car</td>
              </tr>

              <tr>
                <td>Number of Occupants</td>
                <td>3</td>
              </tr>

              <tr>
                <td>Check-In</td>
                <td>23 May, 2022 : 6:19am</td>
              </tr>

              <tr>
                <td>Processed By</td>
                <td>Security Guard</td>
              </tr>

              <tr>
                <td>Security Guard Name</td>
                <td>Oke</td>
              </tr>

              <tr>
                <td>Security Guard Code</td>
                <td>S23484</td>
              </tr>

              <tr>
                <td>Sign Out</td>
                <td>Yes</td>
              </tr>

              <tr>
                <td>Check- Out</td>
                <td>23 May, 2022 : 6:19am</td>
              </tr>

              <tr>
                <td>Processed By</td>
                <td>Security Guard</td>
              </tr>

              <tr>
                <td>Security Guard Name</td>
                <td>Oke</td>
              </tr>

              <tr>
                <td>Security Guard Code</td>
                <td>S23484</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default VisitorDetails;
