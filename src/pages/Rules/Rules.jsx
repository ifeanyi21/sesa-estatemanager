import React from "react";
import { Link } from "react-router-dom";
import EmptyData from "../../components/EmptyData/EmptyData";
import { DotIcon } from "../../components/SideBar/icons";

function Rules() {
  const rules = [
    {
      id: 1,
      date: "12 March, 2022",
      ruleName: "Ajao Estate Rules and Regulation",
    },
    {
      id: 2,
      date: "12 May, 2021",
      ruleName: "Silverland Estate Rules and Regulation",
    },
    {
      id: 3,
      date: "12 May, 2021",
      ruleName: "Silverland Estate Rules and Regulation",
    },
    {
      id: 4,
      date: "12 May, 2021",
      ruleName: "Silverland Estate Rules and Regulation",
    },
  ];
  return (
    <div>
      {rules.length > 0 ? (
        <>
          <h4>Rules & Regulation</h4>
          <div className="mt-8 mb-32">
            <header className="flex mb-5">
              <Link
                className="btn-primary btn no-underline btn-sm mr-3 flex"
                to={"/rules/add-rule"}
              >
                <span className="mr-3">+</span> <span>Add Rules</span>{" "}
              </Link>
              <Link
                className="btn no-underline btn-sm flex"
                to={"/rules/add-message"}
                style={{ backgroundColor: "#DA6900", color: "white" }}
              >
                <span className="mr-3">+</span>
                <span>Add Vistior Message</span>
              </Link>
            </header>
            <div className="row">
              {rules.map((rule) => {
                return (
                  <div key={rule.id} className="col-lg-5 mb-8 mr-8">
                    <div className="p-3 bg-white rounded-sm">
                      <header className="flex items-baseline">
                        <DotIcon color={"#EF6AF2"} />
                        <h6 className="ml-3">{rule.ruleName}</h6>
                      </header>
                      <main className="flex items-baseline justify-between mt-8">
                        <p className="text-muted">Created {rule.date}</p>
                        <Link to={"/rules/" + rule.id} className="no-underline">
                          View Details
                        </Link>
                      </main>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <EmptyData text="Rule" />
      )}
    </div>
  );
}

export default Rules;
