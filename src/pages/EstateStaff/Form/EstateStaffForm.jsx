import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useLocation, Link, useParams } from "react-router-dom";
import SuccessModal from "../../../components/SuccessMessage/SuccessMessage";
import CSS from "../../Household/Household.module.css";
import UploadFileImage from "../../../images/photo_library.svg";
import { Upload } from "../../../components/Upload/Upload";
import ProfilePicture from "../../../images/security.jpeg";
import { Box, Button, FormControl, MenuItem, Select } from "@mui/material";
import { DeleteButtonTrashIcon } from "../../../components/SideBar/icons";
import MultipleSelectChip from "../../../components/MultiSelect/MultipleSelect";

function EstateStaffForm() {
  const [modalShow, setModalShow] = useState(false);
  const location = useLocation();
  const { id } = useParams();

  const handleSuccessMessage = (e) => {
    e.preventDefault();
    setModalShow(true);
  };

  const getWeekdays = (weekdays) => {
    console.log(weekdays); // get weekdays from multiple select tab
  };

  const getImage = (image) => {
    console.log(image);
  };

  return (
    <Form onSubmit={handleSuccessMessage} className="mt-8">
      {location.pathname === "/estate-staff/edit-estate-staff/" + id && (
        <div className="row mb-4">
          <div className="col-lg-2 mb-3">
            <img
              src={ProfilePicture}
              className="w-32 h-32 object-cover rounded-full mb-2"
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
              KYC: <span className="font-medium text-primary">Validated</span>
            </p>
          </div>
        </div>
      )}

      <div className="row mb-8">
        <p className="text-lg mb-10">Estate Staff Information</p>
        <div className="col-lg-6 mb-3">
          <label className="text-sm mb-2">
            First Name <span className="text-danger">*</span>
          </label>
          <Form.Control />
        </div>
        <div className="col-lg-6 mb-3">
          <label className="text-sm mb-2">
            Last Name <span className="text-danger">*</span>
          </label>
          <Form.Control />
        </div>
        <div className="col-lg-6 mb-3">
          <label className="text-sm mb-2">Middle Name</label>
          <Form.Control />
        </div>

        <div className="col-lg-6 mb-3">
          <label className="text-sm mb-2">
            Email Address <span className="text-danger">*</span>
          </label>
          <Form.Control type="email" />
        </div>

        <div className="col-lg-6 mb-3">
          <label className="text-sm mb-2">
            Phone Number <span className="text-danger">*</span>
          </label>
          <div className="flex items-center justify-between">
            <span>
              <select name="" id="" className="border p-2 rounded">
                <option value="">+234</option>
              </select>
            </span>
            <Form.Control type="number" style={{ width: "84%" }} />
          </div>
        </div>
        <div className="col-lg-6 mb-3">
          <label className="text-sm mb-2">
            Date Of Birth <span className="text-danger">*</span>
          </label>
          <Form.Control type="date" />
        </div>

        <div className="col-lg-6 col-md-12 mb-3">
          <label className="text-sm mb-2">
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
          <label className="text-sm mb-2">
            Home Address <span className="text-danger">*</span>
          </label>
          <Form.Control />
        </div>

        <div className="col-lg-12">
          <div className="col-lg-6 col-md-12 mb-5">
            <MultipleSelectChip getWeekdays={getWeekdays} />
          </div>
        </div>

        <div className="col-lg-12 mb-10">
          <label className="text-sm mb-2">
            Message <span className="text-danger">*</span>
          </label>
          <Form.Control
            required
            as="textarea"
            placeholder="This message will be displayed to the security guard when the estate staff checks in / out"
            rows={6}
            maxLength={30}
          />
          <span className="text-muted text-sm">Maximum of 30 Characters </span>
        </div>

        {location.pathname === "/estate-staff/add-estate-staff" && (
          <div className="col-12 mb-10">
            <div className={`${CSS.imageEstateStaff} mx-auto p-1`}>
              <Upload
                getImage={getImage}
                bodyText={
                  <div className="text-center py-3 fileUploadContainer">
                    <span className="flex justify-center items-center p-2">
                      <img src={UploadFileImage} alt="Upload file" />
                      <p className="mb-0">
                        Drag Estate Staff picture here or{" "}
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

        <div className="row mb-44">
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

        {location.pathname === "/estate-staff/add-estate-staff" && (
          <div className="col-12 mt-16">
            <button className="btn btn-primary float-right">Add Staff</button>
          </div>
        )}

        {location.pathname === `/estate-staff/edit-estate-staff/${id}` && (
          <div className="col-lg-12 mt-16">
            <div className="flex justify-between">
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
                <button className="btn btn-primary btn-sm my-2">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <SuccessModal
        text="an Estate Staff"
        redirecturl="/estate-staff"
        id="1"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Form>
  );
}

export default EstateStaffForm;
