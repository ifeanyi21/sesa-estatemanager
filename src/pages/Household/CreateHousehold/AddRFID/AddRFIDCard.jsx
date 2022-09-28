import React, { Fragment, useState } from "react";
import Car from "../../../../images/car.jpeg";
import { Menu, Transition } from "@headlessui/react";
import {
  DeleteIcon,
  HorizontalToggleIcon,
  HouseholdAddIcon,
} from "../../../../components/SideBar/icons";
import SuccessModal from "../../../../components/SuccessMessage/SuccessMessage";
import UploadFileImage from "../../../../images/photo_library.svg";
import { Upload } from "../../../../components/Upload/Upload";
import CSS from "../../Household.module.css";
import { Form } from "react-bootstrap";
import { Button } from "@mui/material";

function AddRFIDCard(props) {
    const { show } = props;

  const [modalShow, setModalShow] = useState(false);
  const [content, setContent] = useState(false);

  const getImage = (image) => {
    console.log(image);
  };

  return (
    <div>
      <Form className="mt-16 mb-8">
        <p className="text-lg font-medium mb-16">
          Add an RFID to this property
        </p>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <label className="mb-2 font-normal text-sm">
              RFID Serial Number
            </label>
            <Form.Control disabled={show ? false : true}/>
          </div>
          <div className="col-lg-6 mb-4">
            <label className="mb-2 font-normal text-sm">
              Vehicle Registration Number
            </label>
            <Form.Control disabled={show ? false : true}/>
          </div>
          <div className="col-lg-6 mb-4">
            <label className="mb-2 font-normal text-sm">Vehicle Make</label>
            <Form.Control disabled={show ? false : true}/>
          </div>
          <div className="col-lg-6 mb-4">
            <label className="mb-2 font-normal text-sm">Vehicle Type</label>
            <Form.Control disabled={show ? false : true}/>
          </div>
          <div className="col-lg-12 p-2 mb-28" style={{ marginTop: "3rem" }}>
            <div className={`${CSS.imageUploader}  ${!show && "hidden"} mx-auto p-1`}>
              <Upload
                getImage={getImage}
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
              disabled={show ? false : true}
            >
              <span className="capitalize">Add more RFID</span>
            </Button>

            <button
              onClick={(e) => {
                e.preventDefault();
                setModalShow(true);
              }}
              className="btn btn-primary w-32 h-10"
              disabled={show ? false : true}
            >
              Add
            </button>
          </div>
        </div>
      </Form>
      {content && (
        <div className="row">
          <hr className="mb-16" />
          <p className="text-base mb-12">RFIDS's Captured</p>

          <div className="col-lg-12 p-3 border rounded mb-3">
            <div className="row">
              <div className="col-lg-2 mb-1">
                <img
                  src={Car}
                  className="w-28 h-28 rounded-full object-cover"
                  alt=""
                />
              </div>
              <div className="col-lg-9 mb-1">
                <p className="text-muted mb-3">
                  RFID Serial Number : <span></span>
                </p>
                <p className="text-muted mb-3">
                  Vehicle Registration No : <span></span>
                </p>
                <p className="text-muted mb-3">
                  Vehicle Make : <span></span>
                </p>
                <p className="text-muted m-0">
                  Vehicle Type : <span></span>
                </p>
              </div>

              <div className="col-lg-1 mb-4 relative">
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

      <SuccessModal
        redirecturl="/household"
        text="an RFID to this property"
        id="1"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default AddRFIDCard;
