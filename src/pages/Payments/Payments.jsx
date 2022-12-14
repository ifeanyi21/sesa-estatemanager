import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmptyData from "../../components/EmptyData/EmptyData";
import PaymentProgressBar from "./PaymentProgressBar";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa'

function Payments() {
  const array = [
    {
      id: 1,
      paymentPlan: "Full",
    },
    {
      id: 10,
      paymentPlan: "Installment",
    },
    {
      id: 11,
      paymentPlan: "Full",
    },
    {
      id: 9,
      paymentPlan: "Installment",
    },
    {
      id: 12,
      paymentPlan: "Full",
    },
    {
      id: 29,
      paymentPlan: "Installment",
    },
    {
      id: 20,
      paymentPlan: "Full",
    },
    {
      id: 39,
      paymentPlan: "Installment",
    },
    {
      id: 50,
      paymentPlan: "Full",
    },
    {
      id: 19,
      paymentPlan: "Installment",
    },
    {
      id: 44,
      paymentPlan: "Full",
    },
    {
      id: 5,
      paymentPlan: "Installment",
    },
    {
      id: 48,
      paymentPlan: "Full",
    },
    {
      id: 43,
      paymentPlan: "Installment",
    },
  ];

  const [pageNumber, setPageNumber] = useState(1);
  const paymentPage = 4;
  const pagesVisited = pageNumber * paymentPage;

  const pageCount = Math.ceil(array.length / paymentPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      {array.length > 0 ? (
        <>
          <div className="flex justify-between mb-8">
            <h4 className="text-lg">Payment Data</h4>
            <Link to={"add-payment"} className="btn btn-primary btn-sm h-8">
              Add Payments
            </Link>
          </div>

          <div className="px-2">
            <div className="row">
              {array
                .slice(pagesVisited, pagesVisited + paymentPage)
                .map((payment, index) => {
                  return (
                    <div
                      key={index}
                      className="col-lg-12 mb-8 px-4 bg-white py-3 rounded"
                    >
                      <div className="row">
                        <div className="col-lg-6 col-md-6 p-3">
                          <p className="text-muted mb-3">
                            Product Code :{" "}
                            <span className="text-black">{payment.id}</span>
                          </p>
                          <p className="text-muted mb-3">
                            Product Name : <span className="text-black"></span>
                          </p>
                          <p className="text-muted mb-3">
                            Amount Type : <span className="text-black"></span>
                          </p>
                          <p className="text-muted mb-3">
                            Payment Plan :{" "}
                            <span className="text-black">
                              {payment.paymentPlan}
                            </span>
                          </p>
                          <p className="text-muted mb-3">
                            Amount (Total) :{" "}
                            <span className="text-black"></span>
                          </p>
                        </div>
                        <div className="col-lg-6 col-md-6 p-3">
                          <p className="text-muted mb-3">
                            Start Date : <span className="text-black"></span>
                          </p>
                          <p className="text-muted mb-3">
                            End Date : <span className="text-black"></span>
                          </p>
                          <p className="text-muted mb-3">
                            Track Payment : <span className="text-black"></span>
                          </p>
                          <p className="text-muted mb-3">
                            Active : <span className="text-black"></span>
                          </p>
                        </div>
                      </div>
                      <hr />
                      <p className="font-bold mb-1">Payment Status</p>
                      <div className="row">
                        <div className="col-lg-7 p-2 mb-8">
                          <div className="flex justify-end mb-1">???5,000</div>
                          <PaymentProgressBar percent={45 + payment.id} />
                          <div className="text-center mt-1">???2,000</div>
                          <p className="text-muted m-0">
                            45 Out of 200 residents paid
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Link
                          to={`${
                            payment.paymentPlan === "Installment"
                              ? "/payments/installments/" + payment.id
                              : "/payments/full/" + payment.id
                          }`}
                          className="no-underline"
                        >
                          More Details
                        </Link>
                      </div>
                    </div>
                  );
                })}

              <ReactPaginate
                previousLabel={<FaChevronLeft color="#000"/>}
                nextLabel={<FaChevronRight color="#000"/>}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                nextLinkClassName={"nextBtn"}
                previousLinkClassName={"prevBtn"}
              />
            </div>
          </div>
        </>
      ) : (
        <EmptyData text="Payments" />
      )}
    </div>
  );
}

export default Payments;
