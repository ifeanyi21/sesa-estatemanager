import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfilePicture from "../../../images/security.jpeg";
import PrintAndDownload from "../../../components/PrintAndDownload/PrintAndDownloadButton";
import Modal from "react-bootstrap/Modal";
import ViewImage from "../../../components/ViewPageImage/ViewImage";

function ViewSiteWorker() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <Link to="/site-worker" className="no-underline text-sm">
        Site Worker
      </Link>{" "}
      <span className="text-sm">/ Site Worker Details</span>
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
                <td>Site Worker Code</td>
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
                <td className="text-success">Validated</td>
              </tr>

              <tr>
                <td>Work Days</td>
                <td>Thursdays, Fridays</td>
              </tr>

              <tr>
                <td>Work Location</td>
                <td></td>
              </tr>

              <tr>
                <td>Property Code</td>
                <td>H83737</td>
              </tr>

              <tr>
                <td>Clock-in-Time</td>
                <td></td>
              </tr>

              <tr>
                <td>Clock-out-Time</td>
                <td></td>
              </tr>

              <tr>
                <td>Security guard Message</td>
                <td></td>
              </tr>

              <tr>
                <td>Date of Onboarding</td>
                <td>21 May, 2021</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-10">
          <button className="btn btn-primary btn-sm">Open Account</button>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setModalShow(true)}
          >
            Generate ID Card
          </button>
        </div>

        <GenerateID show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
}

export default ViewSiteWorker;

function GenerateID(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="border-0"></Modal.Header>
      <Modal.Body className="p-5">
        <div className="row border-2 border-gray-500 p-4">
          <div className="col-lg-3">
            <img
              src={ProfilePicture}
              className="rounded-full w-24 h-24 object-cover"
              alt="ID"
            />
          </div>
          <div className="col-lg-5 mb-10">
            <p className="m-0">Ajao Estate</p>
            <p className="text-xs text-muted">Estate Name</p>
            <div className="my-3"></div>
            <p className="m-0">Isaac Newton</p>
            <p className="text-xs text-muted">Site Worker</p>
            <div className="my-3"></div>
            <p className="m-0">098383</p>
            <p className="text-xs text-muted">Site Worker ID</p>
          </div>
          <div className="col-lg-4 mb-10">
            <p className="m-0">7:30am</p>
            <p className="text-xs text-muted">Clock-in-Time</p>
            <div className="my-3"></div>
            <p className="m-0">6:00pm</p>
            <p className="text-xs text-muted">Clock-out-Time </p>
            <div className="my-3"></div>
          </div>
          <div className="text-center text-xs text-muted">
            <p className="mb-2">
              If found please return to the EstateManager at No 12, Adeniran
              Ajao Estate
            </p>
            <p className="m-0">Powered by SESAdigital ( www.sesadigital.com)</p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button className="btn btn-primary btn-lg w-80">Print</button>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
