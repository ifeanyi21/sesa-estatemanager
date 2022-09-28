import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import {
  FailedCheckMark,
  NoRecordsFoundCheckMark,
  SuccessCheckMark,
} from "../../../components/SideBar/icons";
import LoadingIcon from "../../../images/loadingIcon.gif";

export default function ValidateUserModal(props) {
  const [screen, setScreen] = useState(0);

  const handleVerification = (e) => {
    e.preventDefault();

    setScreen(1);

    setTimeout(() => {
      if (Math.floor(Math.random() * 3) + 1 === 1) {
        setScreen(2);
      } else if (Math.floor(Math.random() * 3) + 1 === 2) {
        setScreen(3);
      } else {
        setScreen(4);
      }
    }, 1000);
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      {screen === 0 && (
        <Modal.Header className="border-0" closeButton></Modal.Header>
      )}

      <Modal.Body className="p-5">
        {screen === 0 && (
          <>
            <h4 className="text-center mb-5">Profile Verification</h4>
            <Form onSubmit={handleVerification}>
              <div className="row text-sm">
                <div className="col-lg-12 mb-14">
                  <label className="mb-3">ID Type</label>
                  <Form.Select style={{ fontSize: "0.875rem" }}>
                    <option value={0}>Mobile Number</option>
                    <option value={1}>Government ID</option>
                    <option value={2}>BVN</option>
                  </Form.Select>
                </div>
                <div className="col-lg-12 mb-20">
                  <label className="mb-3">ID Number</label>
                  <Form.Control required/>
                </div>
                <div className="col-lg-12 mb-3 text-center">
                  <p className="text-base mb-4">
                    Powered By <span className="font-bold">Identity Pass</span>{" "}
                  </p>
                  <Button type="submit" className="w-full">
                    Confrim
                  </Button>
                </div>
              </div>
            </Form>
          </>
        )}
        {screen === 1 && <img src={LoadingIcon} alt="" />}
        {screen === 2 && (
          <>
            <div className="flex justify-center">
              <SuccessCheckMark />
            </div>
            <div className="text-center mt-7">
              <span className="text-xl font-bold">Successful</span>
              <p>User identity has been verified successfully</p>
              <Link
                to="/residents/validate-resident/1"
                className="btn btn-primary w-full"
              >
                View Result
              </Link>
            </div>
          </>
        )}

        {screen === 3 && (
          <>
            <div className="flex justify-center">
              <FailedCheckMark />
            </div>
            <div className="text-center mt-7">
              <span className="text-xl font-bold">Failed</span>
              <p>User identity verification failed</p>
              <Button
                onClick={() => setScreen(0)}
                className="btn btn-primary w-full"
              >
                Back
              </Button>
            </div>
          </>
        )}

        {screen === 4 && (
          <>
            <div className="flex justify-center">
              <NoRecordsFoundCheckMark />
            </div>
            <div className="text-center mt-7">
              <span className="text-xl font-bold">Record not found</span>
              <p>User identity record was not found</p>
              <Button
                onClick={() => setScreen(0)}
                className="btn btn-primary w-full"
              >
                Back
              </Button>
            </div>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
}
