import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Form } from 'react-bootstrap';


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

export default function RequestTab() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{color:value===0?'black':'gray', textTransform:'capitalize',fontSize:14}}  wrapped label="Fund Wallet" {...a11yProps(0)} />
          <Tab style={{color:value===1?'black':'gray', textTransform:'capitalize',fontSize:14}}  wrapped label="Withdrawal Request" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div className="mt-3">
       <Form>
        <div className="row" style={{marginTop:10}}>
       <div className='col-12 mb-4'>
        <label className='text-xs mb-2 font-semibold'>Amount</label>
            <Form.Control type='number' />
        </div>
        <div className='col-12 mb-4'>
        <label className='text-xs mb-2 font-semibold'>Card Number</label>
            <Form.Control type='number' placeholder='0000 0000 0000 0000' />
        </div>
        <div className='col-lg-6 mb-4'>
        <label className='text-xs mb-2 font-semibold'>Expiriy Date</label>
            <Form.Control type='number' placeholder='MM/YY' />
        </div>
        <div className='col-lg-6 mb-4'>
        <label className='text-xs mb-2 font-semibold'>CVV</label>
            <Form.Control type='number' placeholder='***' />
        </div>
        <div className="col-12 mb-3 d-grip">
            <button className='btn btn-primary w-full'>Fund Wallet</button>
        </div>
       </div>
        </Form>
       </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Form>
        <div className="row mt-3">
       <div className='col-12 mb-3'>
        <label className='text-xs mb-2 font-semibold'>Amount</label>
            <Form.Control type='number' />
        </div>
        <div className='col-12 mb-3'>
        <label className='text-xs mb-2 font-semibold'>Description</label>
            <Form.Control type='text' />
        </div>
        <div className='col-12 mb-3'>
        <label className='text-xs mb-2 font-semibold'>Attach an Item</label>
            <Form.Control type='file' />
        </div>
        <div className='col-12 mb-3'>
        <label className='text-xs mb-2 font-semibold'>Send To</label>
            <Form.Control type='text' />
        </div>
        <div className="col-12 mb-3 d-grip">
            <button className='btn btn-primary w-full'>Send</button>
        </div>
       </div>
        </Form>
      </TabPanel>
    </Box>
  );
}
