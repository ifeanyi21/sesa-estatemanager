import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ResidentList from "../Tab/ResidentList";
import LandlordDetail from "../Tab/LandlordDetail";
import RFIDList from "../Tab/RFIDList";
import AccessCardsList from "../Tab/AccessCards";
import ProductFees from "../Tab/ProductFees";

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
      {value === index && <Box sx={{ px: 2 }}>{children}</Box>}
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

export default function HouseholdTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ fontSize: 10.9 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          sx={{
            "& .css-zx9imm-MuiButtonBase-root-MuiTab-root ": {
              fontSize: 15,
            },
            backgroundColor: "#EDEDFC",
            borderColor: "divider",
            height: "68px",
          }}
          indicatorColor="none"
        >
          <Tab
            style={{
              color: value === 0 ? "#0556E5" : "gray",
              textTransform: "capitalize",
              height: "68px",
            }}
            label="Resident List"
            {...a11yProps(0)}
          />
          <Tab
            style={{
              color: value === 1 ? "#0556E5" : "gray",
              textTransform: "capitalize",
              height: "68px",
            }}
            label="Landlord Details"
            {...a11yProps(1)}
          />
          <Tab
            style={{
              color: value === 2 ? "#0556E5" : "gray",
              textTransform: "capitalize",
              height: "68px",
            }}
            label="RFID's"
            {...a11yProps(2)}
          />
          <Tab
            style={{
              color: value === 3 ? "#0556E5" : "gray",
              textTransform: "capitalize",
              height: "68px",
            }}
            label="Access Cards"
            {...a11yProps(3)}
          />
          <Tab
            style={{
              color: value === 4 ? "#0556E5" : "gray",
              textTransform: "capitalize",
              height: "68px",
            }}
            label="Product Fees"
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ResidentList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LandlordDetail />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RFIDList />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AccessCardsList />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ProductFees />
      </TabPanel>
    </Box>
  );
}
