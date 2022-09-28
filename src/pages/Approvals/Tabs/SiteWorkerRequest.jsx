import React from "react";
import { Link } from "react-router-dom";

function SiteWorkerRequest() {
  const requests = [
    {
      id: 1,
      code: "R63636",
      pCode: "P03636",
      status: "Pending",
    },
    {
      id: 2,
      code: "R63636",
      pCode: "P03636",
      status: "Approved",
    },
    {
      id: 3,
      code: "R63636",
      pCode: "P03636",
      status: "Declined",
    },
  ];
  return (
    <div>
      <div className="mb-8">
        <span className="text-muted">Today</span>
      </div>
      <div className="row">
        {requests.map((request) => {
          return (
            <div key={request.id} className="p-3 col-lg-5 mb-8 mr-16">
              <Link
                to={"worker/" + request.id}
                className="no-underline text-inherit hover:text-inherit"
              >
                <div className="  bg-white rounded p-3">
                  <header className="flex justify-between items-baseline mb-8">
                    <span
                      style={{ backgroundColor: "#FCEFE2", color: "#FF9500" }}
                      className="p-2 rounded"
                    >
                      Site Worker Request
                    </span>
                    <p>21 March, 2021</p>
                  </header>
                  <main>
                    <p>
                      Resident Code : <span>{request.code}</span>
                    </p>
                    <p>
                      Property Code : <span>{request.pCode}</span>
                    </p>
                    <p>
                      Status :{" "}
                      <span
                        className={`${
                          request.status === "Pending" && "text-warning"
                        } ${request.status === "Approved" && "text-success"} ${
                          request.status === "Declined" && "text-danger"
                        }`}
                      >
                        {request.status}
                      </span>
                    </p>
                  </main>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SiteWorkerRequest;
