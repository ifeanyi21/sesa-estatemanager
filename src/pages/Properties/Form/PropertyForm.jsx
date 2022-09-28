import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import SuccessModal from "../../../components/SuccessMessage/SuccessMessage";
import { Upload } from "../../../components/Upload/Upload";
import UploadFileImage from "../../../images/photo_library.svg";
import { Box, Button, FormControl, MenuItem, Select } from "@mui/material";
import { DeleteButtonTrashIcon } from "../../../components/SideBar/icons";

function PropertyForm() {
  const [modalShow, setModalShow] = useState(false);
  const [type, setType] = useState("0");
  const [name, setName] = useState("");
  const location = useLocation();
  const params = useParams();

  const handleSuccessMessage = (e) => {
    e.preventDefault();
    setModalShow(true);
  };

  const getImage = (image) => {
    console.log(image);
  };

  const handlePropertyType = (e) => {
    setType(e.target.value);
    setName("");
  };

  return (
    <Form onSubmit={handleSuccessMessage} className="mt-8">
      <div className="row mb-8">
        <div className="mb-10">
          <p className="m-0 text-lg">Property Information</p>
        </div>
        <div className="col-lg-6 mb-3">
          <label className="text-sm mb-2 font-medium">
            Estate <span className="text-danger">*</span>
          </label>
          <Form.Control />
        </div>
        <div className="col-lg-6 mb-3">
          <label className="text-sm mb-2 font-medium">
            Property (Block No. & Flat No)
          </label>
          <Form.Control />
        </div>
        <div className="col-lg-6 mb-3">
          <label className="text-sm mb-2 font-medium">
            Area / Street <span className="text-danger">*</span>
          </label>
          <Form.Control />
        </div>
        <div className="col-lg-6 mb-3">
          <label className="text-sm mb-2 font-medium">
            Property Category <span className="text-danger">*</span>
          </label>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth size="small">
              <Select
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                name="propertyCategory"
                value={"1 bed room self con"}
              >
                <MenuItem value={"1 bed room self con"}>
                  1 bed room self con
                </MenuItem>
                <MenuItem value={"2 bed room self con"}>
                  2 bed room self con
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="col-lg-6 mb-3">
          <label className="text-sm mb-2 font-medium">
            Property Type <span className="text-danger">*</span>
          </label>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth size="small">
              <Select
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                value={type}
                onChange={handlePropertyType}
                name="propertyType"
              >
                <MenuItem value={"0"}>Residential</MenuItem>
                <MenuItem value={"1"}>Business</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="col-lg-6 mb-3">
          <label
            className={`${
              type === "0" && "text-muted"
            } text-sm mb-2 font-medium`}
          >
            Name <span className="text-danger">*</span>
          </label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={type === "1" ? false : true}
            readOnly={type === "1" ? false : true}
          />
        </div>

        <div
          className={`${
            location.pathname === "/properties/add-property"
              ? "col-lg-6"
              : "col-lg-12 "
          } mb-3`}
        >
          <label className="text-sm mb-2 font-medium">
            Address Description <span className="text-danger">*</span>
          </label>
          <Form.Control
            as={"textarea"}
            rows={6}
            maxLength={80}
            placeholder="This is the address direction that would be displayed on the print out handed to the visitor at check in."
          />
          <p className="mb-0 text-xs text-muted mt-2">
            Maximum of 80 characters
          </p>
        </div>

        {location.pathname === "/properties/add-property" && (
          <div className="col-lg-6 mb-8">
            <label className="mb-4"></label>
            <Upload
              getImage={getImage}
              bodyText={
                <div className="text-center py-12 fileUploadContainer">
                  <span className="flex justify-center items-center p-2">
                    <img src={UploadFileImage} alt="Upload file" />
                    <p className="mb-0">
                      Drag Property picture here or{" "}
                      <span className="text-primary pointer">click</span> to
                      upload
                    </p>
                  </span>
                </div>
              }
            />
          </div>
        )}

        {location.pathname === "/properties/add-property" && (
          <div className="col-12 mt-16">
            <button className="btn btn-primary float-right">
              Add Property
            </button>
          </div>
        )}

        {location.pathname === `/properties/edit-property/${params.id}` && (
          <div className="col-lg-12 mt-16">
            <div className="flex justify-between">
              <Button
                style={{ textTransform: "capitalize" }}
                variant="outlined"
                size="small"
                color="error"
                startIcon={<DeleteButtonTrashIcon />}
              >
                <span className="mr-0">Delete</span>
              </Button>

              <div>
                <button className="btn btn-primary">Save Changes</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <SuccessModal
        text="a Property"
        redirecturl="/properties/property"
        id="1"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Form>
  );
}

export default PropertyForm;
