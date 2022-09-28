import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  DeleteIcon,
  HorizontalToggleIcon,
  HouseholdAddIcon,
} from "../../../../components/SideBar/icons";
import SuccessModal from "../../../../components/SuccessMessage/SuccessMessage";
import { useState } from "react";
import { Form } from "react-bootstrap";
import House from "../../../../images/security.jpeg";
import { Box, Button, FormControl, MenuItem, Select, Skeleton } from "@mui/material";

function AddOccupant(props) {
  const { show } = props;

  const [modalShow, setModalShow] = useState(false);
  const [resCategory, setResCategory] = useState("0");
  const [content, setContent] = useState(false);

  const handleResCategory = (e) => {
    setResCategory(e.target.value);
  };

  return (
    <div>
      <Form className="mt-16 mb-8">
        <p className="text-lg font-medium mb-16">
          Add an occupant to this property
        </p>
        <div className="row items-end">
          <div className="col-lg-5 mb-3">
            <label className="mb-3 text-sm">Resident Code</label>
            <Form.Control disabled={show ? false : true} />
          </div>
          <div className="col-lg-5 mb-3">
            <button disabled={show ? false : true} className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </Form>

      <div className="results p-1 mb-5">
        <div className="row mb-8">
          <div className={`col-lg-2 mb-3`}>
            {show ? (
              <img
                src={House}
                style={{ border: "3px solid rgb(94 204 94)" }}
                className="w-36 h-36 object-cover rounded-full"
                alt=""
              />
            ) : (
               <Skeleton animation="wave" variant="circular" width={144} height={144} />
            )}
          </div>
          <div className="col-lg-3 mb-3 text-base">
            <p className="text-muted">
              Property Type : <span></span>
            </p>
            <p className="text-muted">
              Property Category : <span></span>
            </p>
            <p className="text-muted">
              Property Name : <span></span>
            </p>
            <p className="text-muted">
              Address : <span></span>
            </p>
          </div>
        </div>
        <Form>
          <div className="row mb-7">
            <div className="col-lg-6 mb-3">
              <label className="mb-2 text-sm">Resident Class</label>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <Select
                    sx={{
                      "& legend": { display: "none" },
                      "& fieldset": { top: 0 },
                    }}
                    name="resClass"
                    value={"Alpha"}
                    disabled={show ? false : true}
                  >
                    <MenuItem value={"Alpha"}>Alpha</MenuItem>
                    <MenuItem value={"Resident User"}>Resident User</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="col-lg-6 mb-3">
              <label className="mb-2 text-sm">Resident Category</label>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <Select
                    sx={{
                      "& legend": { display: "none" },
                      "& fieldset": { top: 0 },
                    }}
                    value={resCategory}
                    onChange={handleResCategory}
                    disabled={show ? false : true}
                  >
                    <MenuItem value={"0"}>Landlord (Developer)</MenuItem>
                    <MenuItem value={"1"}>Landlord (Tenant)</MenuItem>
                    <MenuItem value={"2"}>Resident</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            {resCategory === "1" && (
              <div className="col-lg-6 mb-3">
                <label className="mb-2 text-sm">Landlord Details</label>
                <Form.Control disabled={show ? false : true} />
              </div>
            )}
          </div>
          <div className="col-lg-5 mt-20">
            <p className="text-muted text-base mb-5">
              NB: Only 2 alphas by default and 6 resident users can be added to
              this household
            </p>
          </div>

          <div className="text-primary text-sm mb-2">
            Who is an Alpha Resident?
          </div>
          <div className="text-primary text-sm mb-10">
            Who is a Resident User?
          </div>
          <div className="flex justify-between items-center mb-14">
            <Button
              startIcon={<HouseholdAddIcon />}
              onClick={(e) => {
                e.preventDefault();
                setContent(true);
              }}
              disabled={show ? false : true}
            >
              <span className="capitalize">Add more resident</span>
            </Button>

            <button
              onClick={(e) => {
                e.preventDefault();
                setModalShow(true);
              }}
              disabled={show ? false : true}
              className="btn btn-primary w-32 h-10"
            >
              Add
            </button>
          </div>
        </Form>

        {/* Residents Captured */}
        {content && (
          <div className="row">
            <hr className="mb-16" />
            <p className="text-base mb-12">Resident(s) Captured</p>
            <div className="col-lg-12 p-3 border rounded">
              <div className="row">
                <div className="col-lg-2 mb-1">
                  <img
                    src={House}
                    className="w-28 h-28 rounded-full object-cover"
                    alt=""
                  />
                </div>
                <div className="col-lg-9 mb-1">
                  <p className="text-muted mb-3">
                    Resident Code : <span></span>
                  </p>
                  <p className="text-muted mb-3">
                    Resident Name : <span></span>
                  </p>
                  <p className="text-muted mb-3">
                    Resident Class : <span></span>
                  </p>
                  <p className="text-muted m-0">
                    Resident Catgeory : <span></span>
                  </p>
                </div>

                <div className="col-lg-1 mb-1 relative">
                  <Menu
                    as="div"
                    className="absolute right-5 inline-block text-left"
                  >
                    <div>
                      <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                        <HorizontalToggleIcon />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item
                            onClick={() => {
                              setContent(false);
                            }}
                          >
                            <button
                              className={
                                "bg-white text-gray-900 block w-full text-left px-4 py-2 text-base no-underline items-baseline"
                              }
                            >
                              <span className="inline-block mr-4">
                                <DeleteIcon />
                              </span>
                              Remove from property
                            </button>
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="col-lg-12 mb-5 flex justify-end"></div>
      <SuccessModal
        redirecturl="/household"
        text="a Resident to this house"
        id="1"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default AddOccupant;
