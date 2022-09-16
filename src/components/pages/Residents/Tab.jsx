import ResidentProfile from './ResidentProfile/ResidentProfile';
import UniqueResidents from './UniqueResidents/UniqueResidents';
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';



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
        <Box sx={{ p: 0 }}>
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

export default function ResidentsTab() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', color:"black"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{
            '& .css-zx9imm-MuiButtonBase-root-MuiTab-root ':{
              fontSize:10.9
            }
        }}>
          <Tab style={{color:value===0?'black':'gray',fontSize:16, textTransform:'capitalize'}} wrapped label="Unique Resident" {...a11yProps(0)} />
          <Tab style={{color:value===1?'black':'gray',fontSize:16, textTransform:'capitalize'}} wrapped label="Resident Profile" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <UniqueResidents/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ResidentProfile/>
      </TabPanel>
    </Box>
  );
}
