import React from "react";
import { Link } from "react-router-dom";
import PrintAndDownload from "../../../components/PrintAndDownload/PrintAndDownloadButton";
import ReaportsHeader from "../../../components/ReportsHeader/ReaportsHeader";

function EventDetails() {
  return (
    <div>
      <Link to="/reports" className="no-underline text-sm">
        Reports
      </Link>{" "}
      <span className="text-sm">/ Event Report Details</span>
      <div className="bg-white p-5 mt-8">
        <ReaportsHeader />
        <header className="flex justify-end mt-8">
          <PrintAndDownload />
        </header>
        <div className="table-responsive mt-8">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Mode of Contact</td>
                <td>RFID</td>
              </tr>
              <tr>
                <td>Event Code</td>
                <td>09873</td>
              </tr>
              <tr>
                <td>Event Name</td>
                <td>Child Dedication</td>
              </tr>

              <tr>
                <td>Resident Code</td>
                <td>R7727</td>
              </tr>

              <tr>
                <td>House Code</td>
                <td>H7262</td>
              </tr>

              <tr>
                <td>Address Description</td>
                <td>-</td>
              </tr>

              <tr>
                <td>Start Date</td>
                <td>21 March, 2022</td>
              </tr>

              <tr>
                <td>End Date</td>
                <td>21 March, 2022</td>
              </tr>

              <tr>
                <td>Expected Number of Guests</td>
                <td>62</td>
              </tr>

              <tr>
                <td>Check in (Guests)</td>
                <td>62</td>
              </tr>

              <tr>
                <td>Status</td>
                <td></td>
              </tr>

              <tr>
                <td>Event Approved Date</td>
                <td>21 March, 2002</td>
              </tr>

              <tr>
                <td>Comment</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-20 table-responsive">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Visitor Details</th>
                <th scope="col">Mode of Entry</th>
                <th scope="col">No of Occupants</th>
                <th scope="col">Check-In</th>
                <th scope="col">Guard Name</th>
                <th scope="col">Check-Out</th>
                <th scope="col">Guard Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>21 March, 2021</td>
                <td> Osaze John</td>
                <td>Pedestrian</td>
                <td>8</td>
                <td>9:00am</td>
                <td>Wike John</td>
                <td>9:00pm</td>
                <td>Wike John</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
