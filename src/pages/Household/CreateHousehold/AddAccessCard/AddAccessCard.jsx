import React, { useState } from "react";
import { Form } from "react-bootstrap";
import PropertyResult from "../PropertyResult";
import AccessCard from "./AccessCard";

function AddAccessCard() {
    const [accessCard, setAccessCard] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setAccessCard(true)
  };

  return (
    <div className="mt-8">
      <Form className="mb-8" onSubmit={handleSearch}>
        <div className="row items-end">
          <div className="col-lg-5 mb-3">
            <label className="mb-3 text-sm">Property Code</label>
            <Form.Control />
          </div>
          <div className="col-lg-5 mb-3">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </Form>
      <PropertyResult show={accessCard} />
      <hr />
      <AccessCard show={accessCard} />
    </div>
  );
}

export default AddAccessCard;
