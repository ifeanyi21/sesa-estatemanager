import React, { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { DeleteIcon, HorizontalToggleIcon, HouseholdAddIcon } from "../../../../SideBar/icons";
import SuccessModal from "../../../../SuccessMessage/SuccessMessage";
import { Upload } from "../../../../Upload/Upload";
import CSS from "../../Household.module.css";
import UploadFileImage from "../../../../../images/photo_library.svg";
import { Form } from "react-bootstrap";
import House from "../../../../../images/security.jpeg";
import { Button } from "@mui/material";

function AccessCard() {
  const [modalShow, setModalShow] = useState(false);
  const [content, setContent] = useState(false);
  return (
    <div>
      <Form className="mt-16 mb-8">
        <p className="text-lg font-medium mb-16">
          Add an Access Card to this property
        </p>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <label className="mb-2 font-normal text-sm">
              Access Card Serial Number
            </label>
            <Form.Control />
          </div>
          <div className="col-lg-12"></div>
          <div className="col-lg-6 mb-4">
            <label className="mb-2 font-normal text-sm">Name</label>
            <Form.Control />
          </div>
          <div className="col-lg-6 mb-4">
            <label className="mb-2 font-normal text-sm">Number</label>
            <Form.Control />
          </div>
          <div className="col-lg-12 p-2 mb-28">
            <div
              className={`${CSS.imageUploader} mx-auto p-1`}
              style={{ marginTop: "3rem" }}
            >
              <Upload
                bodyText={
                  <div className="text-center py-12 fileUploadContainer">
                    <span className="flex justify-center items-center p-2">
                      <img src={UploadFileImage} alt="Upload file" />
                      <p className="mb-0">
                        Drag Vehicle picture here or{" "}
                        <span className="text-primary pointer">click</span> to
                        upload
                      </p>
                    </span>
                  </div>
                }
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Button
              startIcon={<HouseholdAddIcon />}
              onClick={(e) => {
                e.preventDefault();
                setContent(true);
              }}
            >
              <span className="capitalize">Add more Access Card</span>
            </Button>

            <button
              onClick={(e) => {
                e.preventDefault()
                setModalShow(true)
            }}
              className="btn btn-primary w-32 h-10"
            >
              Add
            </button>
          </div>
        </div>
      </Form>
      {content && (
        <div className="row">
          <hr className="mb-16" />
          <p className="text-base mb-12">Access Card's Captured</p>
          <div className="col-lg-12 p-3 border rounded mb-3">
            <div className="row">
              <div className="col-lg-2 mb-1">
                <img
                  src={House}
                  style={{ border: "3px solid rgb(94 204 94)" }}
                  className="w-28 h-28 rounded-full object-cover"
                  alt=""
                />
              </div>
              <div className="col-lg-9 mb-1">
                <p className="text-muted mb-3">
                  Name : <span></span>
                </p>
                <p className="text-muted mb-3">
                  Phone Number : <span></span>
                </p>
                <p className="text-muted m-0">
                  Access Card Serial No. : <span></span>
                </p>
              </div>

              <div className="col-lg-1 mb-4 relative">
                <Menu
                  as="div"
                  className="absolute right-5 inline-block text-left"
                >
                  <div>
                    <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                     <HorizontalToggleIcon/>
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

      <SuccessModal
        redirecturl="/household"
        text="an Access Card to this property"
        id="1"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default AccessCard;
