import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import PaymentProgressBar from '../PaymentProgressBar'
import ViewPaymentDropDown from './ViewPaymentDropDown'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BarChartContainer from '../../../components/Charts/BarChart/BarChart'
import PaymentModal from './PaymentModal/PaymentModal';

function Status(params){
  return(
    <div className={params.row.status === "Paid"?"text-success":"text-orange-600"}>{params.row.status}</div>
  )
}

function ViewInstallmentsPayment() {
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

      const testInstallment = [1,2,3,4,5]
    
      // eslint-disable-next-line
      const [showInstallment, setShowInstallment] = useState(1)
      const [installments, setInstallments] = useState([])


      const handleInstallments = (e)=>{
        setShowInstallment(e.target.value)
        const showIndividualInstallment = testInstallment.filter(item=>{
          return item === e.target.value
        })  
        
        setInstallments(showIndividualInstallment)
      
      }

   const columnsres = [
        {field:"residentCode", headerName:"Resident Code",sortable:false,width:150},
        {field:"residentName", headerName:"Resident Name",sortable:false,width:200},
        {field:"propertyCategory", headerName:"Property Category",sortable:false,width:200},
        {field:"propertyType", headerName:"Property Type",sortable:false,width:250},
         {field:"propertyName", headerName:"Property Name",sortable:false,width:250},
        {field:"class", headerName:"Residential Class",sortable:false,width:200},
        {field:"status", headerName:"Status",sortable:true,width:130,
        renderCell:params=> <Status {...params}/>
        },  
      ]

       const dummyHouseHold = [
        {
          id:1,
          residentCode:'H7383',
          propertyCategory:"Residential",
          residentName:"Property Name",
          class:'Landlord (Developer)',
          propertyType:"2-Bedroom self con",
          propertyName:"Grey",
          accessCard:'20',
          status:"Paid"
        },
               {
          id:3,
          residentCode:'H73383',
          propertyCategory:"Residential",
          residentName:"Property Name",
          class:'Landlord (Non. Res)',
          propertyType:"2-Bedroom self con",
          propertyName:"Grey",
          accessCard:'3',
          status:"Not Paid"
        },
        {
          id:2,
          residentCode:'H73836',
          propertyCategory:"Residential",
          residentName:"Name",
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
                       <p className='m-0 text-base font-medium'>Payment Review</p>
                    </div>
               
                    <div className="flex justify-end mb-1 text-sm">
                  ₦5,000
                  </div>
                 
                     <PaymentProgressBar percent={45}/> 
                     <div className="text-center mt-1 text-sm">
                    ₦2,000
                    </div> 
                  </div>
                  <p className='text-muted mb-0'>2 of 5 installments</p>
                </div>
                </div>
            </div>

            <div className="w-full mt-1">
                <div className="col-lg-12 bg-white p-5" >
                  <header className='flex justify-between'>
                  <h5>Payment Trend</h5>
                  <FormControl sx={{ m: 1 }} size="small">
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    defaultValue={1}
                      sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                  >
                   
                    <MenuItem value={1}>This Week</MenuItem>
                    <MenuItem value={2}>This Month</MenuItem>
                    <MenuItem value={3}>This Year</MenuItem>
                  </Select>
                </FormControl>
                  </header>
                  <div style={{height:400}}>
                  <BarChartContainer data = {chartData} Xaxis="day" Yaxis="funds" datakey="funds" fill="#08D231" />
                  </div>
               
                </div>
            </div>


            <div className="mt-1 bg-white rounded pb-5">
              <FormControl sx={{ m: 1, minWidth: 120,paddingLeft:4 }} size="small">
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="Installments"
                  defaultValue={0}
                  onChange={handleInstallments}
                     sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                >
                   <MenuItem value={0}>Installments</MenuItem>
                  {
                    testInstallment.map((installment,index)=>{
                      return (
                         <MenuItem key={index} value={index+1}>Installment {index+1}</MenuItem>
                      )
                    })
                  }
                 
                </Select>
              </FormControl>

              
              {
                installments.map((installment,index)=>{
                  return (
                    <div key={index} className="col-lg-7 px-5 py-4 mb-1">
                    <p className='mb-4'>Installment {installment}</p>
                    <div className="flex justify-end mb-1">
                      ₦5,000
                      </div>
                    <PaymentProgressBar percent={45}/>
                    <div className="text-center mt-1">
                        ₦2,000
                        </div>
                        <p className='text-muted m-0'>45 of 200 households paid</p>
                 </div>
                  )
                })
              }


              {
                installments>0 && <div className='flex justify-end px-4'>
                <PaymentModal columns={columnsres} type={'residents'} dummyHouseHold={dummyHouseHold}/>
              </div>
              }
             
          
            </div>
            
    </div>
  )
}

export default ViewInstallmentsPayment