import {Link} from 'react-router-dom'
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AddRFID from '../CreateHousehold/AddRFID/AddRFID';
import AddHousehold from '../CreateHousehold/AddHouse/AddHousehold';
import AddAccessCard from '../CreateHousehold/AddAccessCard/AddAccessCard';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{color:"black"}}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          {children}
        </Box>
      )}
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function EditHousehold() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
       <Link to='/household' className='no-underline text-sm'>
             Household
       </Link> <span className='text-sm'>/ Edit Household</span> 
        <div className="bg-white p-4 my-8 rounded">
          
    <Box sx={{ width: '100%', color:"black"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable"
  scrollButtons="auto">
          <Tab  style={{color:value===0?'black':'gray',fontSize:16, textTransform:'capitalize'}}  wrapped label="Edit Resident" {...a11yProps(0)} />
          <Tab  style={{color:value===1?'black':'gray',fontSize:16, textTransform:'capitalize'}}  wrapped label="Edit RFID" {...a11yProps(1)} />
          <Tab  style={{color:value===2?'black':'gray',fontSize:16, textTransform:'capitalize'}}  wrapped label="Edit Access Card" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AddHousehold/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddRFID/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AddAccessCard/>
      </TabPanel>
    </Box>
    </div>
    </div>
  
  );
}
