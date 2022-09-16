import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AttendanceDetails from './Attendance/Attendance';
import EstateStaffReport from './EstateStaff/EstateStaff';
import EventsReports from './EventsReports/EventsReports';
import GroupAccess from './GroupAccess/GroupAccess';
import ResidentAccess from './ResidentAccess/ResidentAccess';
import SecurityGuardActivity from './SecurityGuardActivity/SecurityGuardActivity';
import SiteWorkerReport from './SiteWorker/SiteWorkerReport';
import VisitorAccess from './VisitorAccess/VisitorAccess';
import WorkRate from './WorkRate/WorkRate';
import CSS from '../../Layout/Layout.module.css'
import AppBar from '../../AppBar/AppBar';
import SideBar from '../../SideBar/SideBar';


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
      {value === index && (
        <Box sx={{ px: 3 }}>
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

export default function Reports() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar/>
        <div className={`${CSS.LayoutMain} flex justify-between h-full pb-32`}>
        <SideBar/>
        <div className={`${CSS.LayoutReport}`}style={{width:'80%'}}>
        <Box sx={{ width: '100%', }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor:"white",fontSize:10.9 }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable"
          sx={{
            '& .css-zx9imm-MuiButtonBase-root-MuiTab-root ':{
              fontSize:15
            }
        }}
          >
            <Tab  style={{color:value===0?'black':'gray', textTransform:'capitalize'}}  wrapped label="Resident Access" {...a11yProps(0)} />
            <Tab  style={{color:value===1?'black':'gray', textTransform:'capitalize'}}  wrapped label="Visitor Access" {...a11yProps(1)} />
            <Tab  style={{color:value===2?'black':'gray', textTransform:'capitalize'}}  wrapped label="Group Access" {...a11yProps(2)} />
            <Tab  style={{color:value===3?'black':'gray', textTransform:'capitalize'}}  wrapped label="Estate Staff" {...a11yProps(3)} />
            <Tab  style={{color:value===4?'black':'gray', textTransform:'capitalize'}}  wrapped label="Site Worker" {...a11yProps(4)} />
            <Tab  style={{color:value===5?'black':'gray', textTransform:'capitalize'}}  wrapped label="Events" {...a11yProps(5)} />
            <Tab  style={{color:value===6?'black':'gray', textTransform:'capitalize'}}  wrapped label="Security Guard Activity" {...a11yProps(6)} />
            <Tab  style={{color:value===7?'black':'gray', textTransform:'capitalize'}}  wrapped label="Attendance" {...a11yProps(7)} />
            <Tab  style={{color:value===8?'black':'gray', textTransform:'capitalize'}}  wrapped label="Work Rate" {...a11yProps(8)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ResidentAccess/>
        </TabPanel>
        <TabPanel value={value} index={1}>
      <VisitorAccess/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <GroupAccess/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <EstateStaffReport/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <SiteWorkerReport/>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <EventsReports/>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <SecurityGuardActivity/>
        </TabPanel>
        <TabPanel value={value} index={7}>
          <AttendanceDetails/>
        </TabPanel>
        <TabPanel value={value} index={8}>
          <WorkRate/>
        </TabPanel>
      </Box> 
    </div>  
        </div>

 
    </div>

  );
}
