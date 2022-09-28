import React from "react";
import EventRequests from "./Tabs/EventRequests";
import OnBoardingRequest from "./Tabs/Onboarding";
import SesaDigital from "./Tabs/SesaDigital";
import SiteWorkerRequest from "./Tabs/SiteWorkerRequest";
import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { FormControl, MenuItem, Select } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ color: "black" }}
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

export default function Approvals() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", color: "black" }}>
      <div className="mb-8 flex justify-between">
        <h4>Approval List</h4>
        <div className="flex items-center">
           <span className="mr-3">Sort By</span>
          <Box sx={{ minWidth: 120, backgroundColor: "white" }}>
            <FormControl fullWidth size="small">
              <Select
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                label="Sort"
                name="sort"
                defaultValue={0}
              >
                <MenuItem value={0}>Today</MenuItem>
                <MenuItem value={1}>This Week</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>

      <Box
        sx={{ borderBottom: 1, borderColor: "divider", marginBottom: "16px" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            style={{
              color: value === 0 ? "black" : "gray",
              fontSize: 16,
              textTransform: "capitalize",
            }}
            wrapped
            label="Event Request"
            {...a11yProps(0)}
          />
          <Tab
            style={{
              color: value === 1 ? "black" : "gray",
              fontSize: 16,
              textTransform: "capitalize",
            }}
            wrapped
            label="Resident Onboarding"
            {...a11yProps(1)}
          />
          <Tab
            style={{
              color: value === 2 ? "black" : "gray",
              fontSize: 16,
              textTransform: "capitalize",
            }}
            wrapped
            label="Site Worker Request"
            {...a11yProps(2)}
          />
          <Tab
            style={{
              color: value === 3 ? "black" : "gray",
              fontSize: 16,
              textTransform: "capitalize",
            }}
            wrapped
            label="SESAdigital Request"
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <EventRequests />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OnBoardingRequest />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SiteWorkerRequest />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SesaDigital />
      </TabPanel>
    </Box>
  );
}
