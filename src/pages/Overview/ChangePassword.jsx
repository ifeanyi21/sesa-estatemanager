import { Button } from "react-bootstrap";
import React from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    e.preventDefault();
    console.log("Password Changed");
    navigate("/overview");
  };
  return (
    <div className="bg-white p-4 mb-36">
      <p className="text-lg font-medium mb-5">Account Settings</p>
      <Form onSubmit={handlePasswordChange}>
        <p className="mb-4">Password</p>
        <div className="row">
          <div className="col-lg-5 mb-3">
            <label className="text-sm mb-2">Current Password</label>
            <Form.Control />
          </div>
          <div className="col-lg-5 mb-3">
            <label className="text-sm mb-2">New Password</label>
            <Form.Control />
          </div>
          <div className="col-lg-5 mb-3">
            <label className="text-sm mb-2">Re -Enter New Password</label>
            <Form.Control />
          </div>
        </div>
        <div className="col-lg-10 flex justify-end my-10">
          <Button type="submit" className="w-32">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ChangePassword;
