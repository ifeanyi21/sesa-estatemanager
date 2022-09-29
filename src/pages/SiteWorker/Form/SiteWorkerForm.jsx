import React, { useState } from "react";
import { Form } from "react-bootstrap";
import House from "../../../images/House.jpeg";
import SuccessModal from "../../../components/SuccessMessage/SuccessMessage";
import { useLocation, Link, useParams } from "react-router-dom";
import MultipleSelectChip from "../../../components/MultiSelect/MultipleSelect";
import { Upload } from "../../../components/Upload/Upload";
import UploadFileImage from "../../../images/photo_library.svg";
import CSS from "../../Household/Household.module.css";
import ProfilePicture from "../../../images/security.jpeg";
import { Box, Button, FormControl, MenuItem, Select } from "@mui/material";
import { DeleteButtonTrashIcon } from "../../../components/SideBar/icons";

function SiteWorkerForm() {
  const location = useLocation();
  const { id } = useParams();
  const [modalShow, setModalShow] = useState(false);
  //const [weekdays, setWeekdays] = useState([])

  const getWeekdays = (weekdays) => {
    console.log(weekdays); // get weekdays from multiple select tab
  };

  const getImage = (image) => {
    console.log(image);
  };

  return (
    <div className="mt-10">
      {location.pathname === "/site-worker/edit-site-worker/" + id && (
        <div className="row">
          <div className="col-lg-2 mb-3">
            <img
              src={ProfilePicture}
              className="w-32 h-32 object-cover rounded-full"
              style={{ border: "3px solid #20B16A" }}
              alt=""
            />
            <Button variant="text" component="label" sx={{ marginLeft: 4 }}>
              Edit
              <input hidden accept="image/*" type="file" />
            </Button>
          </div>
          <div className="col-lg-4 my-auto">
            <p className="text-muted text-sm text-left">
              Staff Code: <span className="font-medium text-black">09873</span>
            </p>
            <p className="text-muted text-sm text-left">
              Work Location:{" "}
              <span className="font-medium text-black">H77363</span>
            </p>
            <p className="text-muted text-sm text-left">
              KYC: <span className="font-medium text-primary">Validated</span>
            </p>
          </div>
        </div>
      )}

      {location.pathname === "/site-worker/add-site-worker" && (
        <>
          <Form className="mb-8">
            <div className="row items-end">
              <div className="col-lg-5 mb-3">
                <label className="mb-3">Property Code</label>
                <Form.Control />
              </div>
              <div className="col-lg-5 mb-3">
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </Form>
          <div className="results p-1 mb-5">
            <div className="row">
              <div className="col-lg-3 mb-3">
                <img
                  src={House}
                  className="rounded-full w-36 h-36 object-cover"
                  alt=""
                />
              </div>
              <div className="col-lg-3 mb-3">
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
          </div>
          <hr />
        </>
      )}

      <Form className="mt-20 mb-16">
        <p className="text-lg mb-10">Site Worker Information</p>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <label className="mb-3">First Name</label>
            <Form.Control />
          </div>

          <div className="col-lg-6 mb-3">
            <label className="mb-3">Last Name</label>
            <Form.Control />
          </div>

          <div className="col-lg-6 mb-3">
            <label className="mb-3">Midlle Name</label>
            <Form.Control />
          </div>

          <div className="col-lg-6 mb-3">
            <label className="mb-3">Home Address</label>
            <Form.Control />
          </div>

          <div className="col-lg-6 mb-3">
            <label className="text-sm mb-3">
              Phone Number <span className="text-danger">*</span>
            </label>
            <div className="flex items-baseline justify-between">
              <span>
                <select name="" id="" className="border p-2 rounded">
                  <option value="">+234</option>
                </select>
              </span>
              <Form.Control
                type="number"
                placeholder="Phone Number"
                style={{ width: "80%" }}
              />
            </div>
          </div>

          <div className="col-lg-6 mb-3">
            <label className="mb-3">Date Of Birth</label>
            <Form.Control type="date" />
          </div>

          <div className="col-lg-6 col-md-12 mb-3">
            <label className="text-sm mb-3">
              Gender<span className="text-danger">*</span>
            </label>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth size="small">
                <Select
                  sx={{
                    "& legend": { display: "none" },
                    "& fieldset": { top: 0 },
                  }}
                  name="gender"
                  value={"Male"}
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div className="col-lg-6 mb-3">
            <label className="mb-3">Email Address</label>
            <Form.Control />
          </div>

          <div className="col-lg-6 mb-3">
            <label className="mb-3"></label>
            <MultipleSelectChip getWeekdays={getWeekdays} />
          </div>

          <div className="row">
            <div className="col-lg-6 mb-3">
              <label className="mb-3">Clock-in-Time</label>
              <Form.Control type="time" />
              <span className="text-muted text-sm">Enforcing coming in</span>
            </div>

            <div className="col-lg-6 mb-3">
              <label className="mb-3">Clock-out-Time</label>
              <Form.Control type="time" />
            </div>
          </div>

          <div className="col-lg-12 mb-8">
            <label className="mb-3">Security guard Message</label>
            <Form.Control
              as={"textarea"}
              placeholder="This message will be displayed to the security guard when the site worker checks in / out"
              rows={6}
              maxLength={30}
            />
            <span className="text-muted text-sm">
              Maximum of 30 Characters{" "}
            </span>
          </div>

          {location.pathname === "/site-worker/add-site-worker" && (
            <div className="col-12 mb-10">
              <div className={`${CSS.imageEstateStaff} mx-auto p-1`}>
                <Upload
                  getImage={getImage}
                  bodyText={
                    <div className="text-center py-12 fileUploadContainer">
                      <span className="flex justify-center items-center p-2">
                        <img src={UploadFileImage} alt="Upload file" />
                        <p className="mb-0">
                          Drag Site worker picture here or{" "}
                          <span className="text-primary pointer">click</span> to
                          upload
                        </p>
                      </span>
                    </div>
                  }
                />
              </div>
            </div>
          )}

          <h4 className="mb-8">
            KYR <span className="font-light">(Know Your Resident)</span>{" "}
          </h4>

          <div className="row mb-44" style={{ marginTop: 30 }}>
            <div className="col-lg-6 mb-5">
              <label className="text-sm mb-2">ID Type</label>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <Select
                    sx={{
                      "& legend": { display: "none" },
                      "& fieldset": { top: 0 },
                    }}
                    name="id_type"
                    value={"Passport"}
                  >
                    <MenuItem value={"Passport"}>Passport</MenuItem>
                    <MenuItem value={"Phone Number"}>Phone Number</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="col-lg-6 mb-5">
              <label className="text-sm mb-2">ID Number</label>
              <Form.Control />
            </div>

            <div className="col-12">
              <Link className="no-underline text-sm" to={"/kyr"}>
                What is KYR?
              </Link>
            </div>
          </div>
        </div>
      </Form>

      {location.pathname === "/site-worker/add-site-worker" && (
        <div className="col-lg-12 mb-5 flex justify-end">
          {" "}
          <button
            onClick={() => setModalShow(true)}
            className="btn btn-primary"
          >
            Add Site Worker
          </button>
        </div>
      )}

      {location.pathname === "/site-worker/edit-site-worker/" + id && (
        <div className="flex justify-between items-center">
          <div>
            <button
              style={{ backgroundColor: "#FF9500" }}
              className="btn btn-sm my-2 text-white mr-10"
            >
              Decativate
            </button>
            <Button
              style={{ textTransform: "capitalize" }}
              variant="outlined"
              size="small"
              color="error"
              startIcon={<DeleteButtonTrashIcon />}
            >
              <span className="mr-0">Delete</span>
            </Button>
          </div>

          <div>
            <button className="btn btn-primary btn-sm">Save Changes</button>
          </div>
        </div>
      )}

      <SuccessModal
        redirecturl="/site-worker"
        text="a Site Worker"
        id="1"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default SiteWorkerForm;
