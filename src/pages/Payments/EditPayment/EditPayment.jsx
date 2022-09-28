import React from "react";
import { Link } from "react-router-dom";
import PaymentForm from "../Form/PaymentForm";

function EditPayment() {
  const dummyPayment = {
    duesName: "Road Management",
    trackPayment: 1,
    status: 0,
    amountType: 0,
    amount: "100000",
    paymentPlan: 0,
    startDate: "22/09/2022",
    endDate: "22/12/2022",
  };
  return (
    <>
      <Link to="/payments" className="no-underline text-sm">
        Payment
      </Link>{" "}
      <span className="text-sm">/ Edit Payment</span>
      <PaymentForm state={dummyPayment} />
    </>
  );
}

export default EditPayment;
