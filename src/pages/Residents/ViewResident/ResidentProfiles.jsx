import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductList from "./ProductList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ResidentProfiles() {
  const residentProfile = [
    {
      id: 1,
      resType: "Landlord (Resident)",
    },
    {
      id: 2,
      resType: "Landlord (Tenant)",
    },
    {
      id: 3,
      resType: "Landlord (Developer)",
    },
  ];
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="none"
        >
          {residentProfile.map((profile, index) => {
            return (
              <Tab
                key={profile.id}
                style={{
                  color: value === index ? "black" : "gray",
                  textTransform: "capitalize",
                  fontSize: 20,
                }}
                wrapped
                label={`Profile ${index + 1}`}
                {...a11yProps(0)}
              />
            );
          })}
        </Tabs>
      </Box>
      {residentProfile.map((profile, index) => {
        return (
          <TabPanel value={value} index={index} key={profile.id}>
            <p className="text-lg mb-0 mt-8">Resident Type/Category</p>
            <div className="table-responsive mt-3 mb-8">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td className="w-1/2">Resident Type</td>
                    <td>{profile.resType}</td>
                  </tr>
                  <tr>
                    <td>Resident Category</td>
                    <td>Alpha</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg m-0">Property Type/Category</p>
            <div className="table-responsive mt-3 mb-8">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td className="w-1/2">Property Code</td>
                    <td>H7366</td>
                  </tr>
                  <tr>
                    <td>Home Address</td>
                    <td>Block 28</td>
                  </tr>
                  <tr>
                    <td>Date of Onboarding</td>
                    <td>21 May, 2021</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg m-0">Product Information</p>
            <hr />
            <ProductList />
          </TabPanel>
        );
      })}
    </Box>
  );
}
