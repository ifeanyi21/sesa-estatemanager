import React from 'react'
import { Link } from 'react-router-dom'
import PaymentProgressBar from '../PaymentProgressBar'
import ViewPaymentDropDown from './ViewPaymentDropDown'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BarChartContainer from '../../../Charts/BarChart/BarChart'
import PaymentModal from './PaymentModal/PaymentModal';

function Status(params){
  return(
    <div className={params.row.status === "Paid"?"text-success":"text-orange-600"}>{params.row.status}</div>
  )
}

function ViewFullPayment() {
    const chartData = [
        {
          id:1,
          day:"Monday",
          funds: 13883,
        },
        {
          id:3,
          day:"Tuesday",
          funds: 9883,
        },
        {
          id:4,
          day:"Wednesday",
          funds: 2283,
        },
        {
          id:5,
          day:"Thursday",
          funds: 5583,
        },
        {
          id:6,
          day:"Friday",
          funds: 4983,
        },
       
      ]

   const columnsres = [
        {field:"propertyCode", headerName:"Property Code",sortable:false,width:150},
        {field:"address", headerName:"Address",sortable:false,width:200},
        {field:"propertyCategory", headerName:"Property Category",sortable:false,width:200},
         {field:"propertyName", headerName:"Property Name",sortable:false,width:250}, {field:"propertyType", headerName:"Property Type",sortable:false,width:250},
        {field:"class", headerName:"Residential Class",sortable:false,width:200},
        {field:"status", headerName:"Status",sortable:true,width:130,
        renderCell:params=> <Status {...params}/>
        },  
      ]

       const dummyHouseHold = [
        {
          id:1,
          propertyCode:'H7383',
          propertyCategory:"Residential",
          address:"Block 21",
          class:'Landlord (Developer)',
          propertyType:"2-Bedroom self con",
          propertyName:"Grey",
          accessCard:'20',
          status:"Paid"
        },
               {
          id:3,
          propertyCode:'H73383',
          propertyCategory:"Residential",
          address:"Block 83",
          class:'Landlord (Non. Res)',
          propertyType:"2-Bedroom self con",
          propertyName:"Grey",
          accessCard:'3',
          status:"Not Paid"
        },
        {
          id:2,
          propertyCode:'H73836',
          propertyCategory:"Residential",
          address:"Block 213",
          class:'Landlord (Resident)',
          propertyType:"3-Bedroom self con",
          propertyName:"Grey",
          accessCard:'21',
          status:"Paid"
        },
 
      ]




  return (
    <div>
         <Link to='/payments' className='no-underline text-sm'>
            Payment
        </Link> <span className='text-sm'>/ Payment Details</span> 

           <div  className="col-lg-12 mt-8 bg-white p-3 rounded">
                <div className="row">
                
                <div className="col-lg-6 col-md-4 p-3">
                    <p className='text-muted mb-3'>Product Code : <span className='text-black'></span></p>
                    <p className='text-muted mb-3'>Product Name : <span className='text-black'></span></p>
                    <p className='text-muted mb-3'>Amount Type : <span className='text-black'></span></p>
                    <p className='text-muted mb-3'>Payment Plan : <span className='text-black'></span></p>
                    <p className='text-muted mb-3'>Amount (Total) : <span className='text-black'></span></p>
                </div>
                <div className="col-lg-6 col-md-6 p-3">
                  <div className="flex justify-between">
                  <div>
                  <p className='text-muted mb-3'>Start Date : <span className='text-black'></span></p>
                    <p className='text-muted mb-3'>End Date : <span className='text-black'></span></p>
                    <p className='text-muted mb-3'>Track Payment : <span className='text-black'></span></p>
                    <p className='text-muted mb-3'>Status : <span className='text-black'></span></p>
                  </div>
                 <ViewPaymentDropDown/>
                  </div>
                </div>
              

            </div>
                 <hr style={{color:"#DEDEDE"}} />
                <div className="row">
                <div className="col-lg-12 p-3">
                  
                  <div className='col-lg-6'>
                    <div className="mb-14">
                       <p className='m-0 text-base font-medium'>Payment Status</p>
                    </div>
                    <div className="flex justify-end mb-1 text-sm">
                  ₦5,000
                  </div>
                     <PaymentProgressBar percent={45}/> 
                     <div className="text-center mt-1 text-sm">
                    ₦2,000
                    </div> 
                  </div>
                  <p className='text-muted mb-0'>45 of 200 residents paid</p>
                     <div className="flex justify-end">
                  <PaymentModal columns={columnsres} type={'property'} dummyHouseHold={dummyHouseHold}/>
                  </div>
                </div>
                </div>
            </div>

            <div className="w-full mt-1">
                <div className="col-lg-12 bg-white p-5" >
                  <header className='flex justify-between'>
                  <h5>Payment Trend</h5>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">This Week</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    label="This Week"
                    defaultValue={1}
                  >
                   
                    <MenuItem value={1}>This Week</MenuItem>
                  </Select>
                </FormControl>
                  </header>
                  <div style={{height:400}}>
                  <BarChartContainer data = {chartData} Xaxis="day" Yaxis="funds" datakey="funds" fill="#08D231" />
                  </div>
               
                </div>
            </div>
    </div>
  )
}

export default ViewFullPayment