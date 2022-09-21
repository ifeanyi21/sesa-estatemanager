import React from "react";
import { Link } from "react-router-dom";
import ProfilePicture from "../../../../images/security.jpeg";
import PrintAndDownload from "../../../PrintAndDownload/PrintAndDownloadButton";
import ViewImage from "../../../ViewPageImage/ViewImage";

function ViewSecurityGuard() {
  return (
    <div>
      <Link to="/security" className="no-underline text-sm">
        Security
      </Link>{" "}
      <span className="text-sm">/ Security Guard Details</span>
      <div className="bg-white p-5 mt-8">
        <ViewImage image={ProfilePicture} />
        <header className="flex justify-end mt-20">
          <PrintAndDownload />
        </header>
        <div className="table-responsive mt-8">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Full Name</td>
                <td>Kamsey West</td>
              </tr>
              <tr>
                <td>Security Guard Code</td>
                <td>09873</td>
              </tr>
              <tr>
                <td>Date Of Birth</td>
                <td>15 May, 1967</td>
              </tr>
              <tr>
                <td>Email Address</td>
                <td>kamseywest@twitter.com</td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>+234 809 772 7262</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>Male</td>
              </tr>

              <tr>
                <td>Home Address</td>
                <td>Block 23</td>
              </tr>

              <tr>
                <td>ID Type</td>
                <td></td>
              </tr>

              <tr>
                <td className="flex justify-between items-baseline">
                  KYR Status
                </td>
                <td className="text-primary">Full Match</td>
              </tr>

              <tr>
                <td>Status</td>
                <td className="text-success">Active</td>
              </tr>

              <tr>
                <td>Date of Onboarding</td>
                <td>21 May, 2021</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewSecurityGuard;
