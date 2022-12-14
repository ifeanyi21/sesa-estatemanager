import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { useLocation, useParams, Link } from "react-router-dom";
import SuccessModal from "../../../components/SuccessMessage/SuccessMessage";
import { Upload } from "../../../components/Upload/Upload";
import UploadFileImage from "../../../images/photo_library.svg";
import { Box, Button, FormControl, MenuItem, Select } from "@mui/material";
import { DeleteButtonTrashIcon } from "../../../components/SideBar/icons";
import ProfilePicture from "../../../images/security.jpeg";
import User from "../../../components/store/auth";

function ResidentForm() {
  const [modalShow, setModalShow] = useState(false);
  const location = useLocation();
  const params = useParams();

  //eslint-disable-next-line
  const { currentUser } = useContext(User);

  const getImage = (image) => {
    console.log(image);
  };

  const [residentDetails, setResidentDetails] = useState({
    f_name: "",
    m_name: "",
    l_name: "",
    dob: "",
    email: "",
    phone: "",
    image: [],
    gender: "Male",
    id_type: "Passport",
    id_number: "",
    //estate_id:currentUser.estates[0].id
    estate_id: 1,
  });

  console.log(residentDetails);

  const handleChange = (e) => {
    setResidentDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSuccessMessage = async (e) => {
    e.preventDefault();
    //     const token = localStorage.getItem("sesaToken")
    //      const req = await fetch('https://real.sesadigital.com/api/createUser',{
    //     method:"POST",
    //     headers:{
    //       "Accept":"application/json",
    //         "Content-Type": "application/json",
    //        "Authorization": `Bearer ${token}`
    //     },
    //     body: JSON.stringify(residentDetails)
    //   })

    //   const data = await req.json()

    //     console.log(data);
    setModalShow(true);
  };

  return (
    <Form onSubmit={handleSuccessMessage} className="mt-8">
      {location.pathname === `/residents/edit-resident/${params.id}` && (
        <div className="row" style={{ marginBottom: 50 }}>
          <div className="col-lg-2">
            <img
              src={ProfilePicture}
              className="w-32 h-32 object-cover rounded-full"
              style={{ border: "3px solid rgb(94 204 94)" }}
              alt=""
            />
            <Button variant="text" component="label" sx={{ marginLeft: 4 }}>
              Edit
              <input hidden accept="image/*" type="file" />
            </Button>
          </div>
          <div className="col-lg-8 text-left">
            <p className="text-muted text-sm">
              Resident Code:{" "}
              <span className="font-medium text-black">09873</span>
            </p>
            <p className="text-muted text-sm">
              Residing Estate:{" "}
              <span className="font-medium text-black">Magodo Estate</span>
            </p>
            <p className="text-muted text-sm">
              Date of Onboarding:{" "}
              <span className="font-medium text-black">21 March, 2021</span>
            </p>
            <p className="text-muted text-sm">
              Status: <span className="font-medium text-black">Active</span>
            </p>
            <p className="text-muted text-sm">
              KYR Status:{" "}
              <span className="font-medium text-success">Validated</span>
            </p>
          </div>
        </div>
      )}

      <div className="row mb-8">
        <div className="mb-10">
          <p className="m-0 text-lg">Resident Information</p>
        </div>

        <div className="col-lg-6 mb-3">
          <label className="text-sm mb-2">
            First Name <span className="text-danger">*</span>
          </label>
          <Form.Control name="f_name" onChange={handleChange} />
        </div>
        <div className="col-lg-6 mb-3">
          <label className="text-sm mb-2">Middle Name</label>
          <Form.Control name="m_name" onChange={handleChange} />
        </div>
        <div className="col-lg-6 mb-3">
          <label className="text-sm mb-2">
            Last Name <span className="text-danger">*</span>
          </label>
          <Form.Control name="l_name" onChange={handleChange} />
        </div>
        <div className="col-lg-6 mb-3">
          <label className="text-sm mb-2">
            Date Of Birth <span className="text-danger">*</span>
          </label>
          <Form.Control name="dob" onChange={handleChange} type="date" />
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
            <Form.Control
              type="number"
              name="phone"
              onChange={handleChange}
              style={{ width: "84%" }}
            />
          </div>
        </div>
        <div className="col-lg-6 mb-3">
          <label className="text-sm mb-2">
            Email Address <span className="text-danger">*</span>
          </label>
          <Form.Control type="email" name="email" onChange={handleChange} />
        </div>

        <div className="col-lg-6 col-md-12 mb-5">
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
                onChange={handleChange}
                value={residentDetails.gender}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        {location.pathname === "/residents/add-residents" && (
          <div className="col-12 mb-10">
            <Upload
              getImage={getImage}
              bodyText={
                <div className="text-center py-3 fileUploadContainer">
                  <span className="flex justify-center items-center">
                    <img src={UploadFileImage} alt="Upload file" />
                    <p className="mb-0">
                      Drag Resident picture here or{" "}
                      <span className="text-primary pointer">click</span> to
                      upload
                    </p>
                  </span>
                </div>
              }
            />
          </div>
        )}

        <h4 className="mb-8">
          KYR <span className="font-light">(Know Your Resident)</span>{" "}
        </h4>
        <div className="row">
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
                  onChange={handleChange}
                  value={residentDetails.id_type}
                >
                  <MenuItem value={"Passport"}>Passport</MenuItem>
                  <MenuItem value={"Phone Number"}>Phone Number</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="col-lg-6 mb-5">
            <label className="text-sm mb-2">ID Number</label>
            <Form.Control name="id_number" onChange={handleChange} />
          </div>
          {location.pathname === "/residents/add-residents" && (
            <div className="col-12">
              <Link className="no-underline text-sm" to={"/kyr"}>
                What is KYR?
              </Link>
            </div>
          )}
        </div>

        {location.pathname === "/residents/add-residents" && (
          <div className="col-12 mt-16">
            <button className="btn btn-primary float-right">
              Add Resident
            </button>
          </div>
        )}

        {location.pathname === `/residents/edit-resident/${params.id}` && (
          <div className="col-lg-12 mt-16">
            <div className="flex justify-between">
              <div>
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
          </div>
        )}
      </div>

      <SuccessModal
        text="a Resident"
        redirecturl="/residents/resident"
        id="1"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Form>
  );
}

export default ResidentForm;
