import React from "react";
import { Link } from "react-router-dom";
import PrintAndDownload from "../../../components/PrintAndDownload/PrintAndDownloadButton";
import ReaportsHeader from "../../../components/ReportsHeader/ReaportsHeader";

function SecurityGuardDetails() {
  return (
    <div>
      <Link to="/reports" className="no-underline text-sm">
        Reports
      </Link>{" "}
      <span className="text-sm">/ Security Guard Report Details</span>
      <div className="bg-white p-5 mt-8">
        <ReaportsHeader />
        <header className="flex justify-end mt-8">
          <PrintAndDownload />
        </header>
        <div className="table-responsive mt-8">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Security Guard Code</td>
                <td>R09873</td>
              </tr>

              <tr>
                <td>Security Guard Name</td>
                <td>John Doe</td>
              </tr>

              <tr>
                <td>Number</td>
                <td>+234 809 772 7262</td>
              </tr>

              <tr>
                <td>Clock-In</td>
                <td>23 May, 2022 : 6:19am</td>
              </tr>

              <tr>
                <td>Check-In Counts</td>
                <td>23</td>
              </tr>

              <tr>
                <td>Check-Out-Counts</td>
                <td>22</td>
              </tr>

              <tr>
                <td>Clock-Out</td>
                <td>23 May, 2022 : 6:19am</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SecurityGuardDetails;
