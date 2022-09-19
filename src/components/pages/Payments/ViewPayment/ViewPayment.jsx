import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import PaymentProgressBar from '../PaymentProgressBar'
import ViewPaymentDropDown from './ViewPaymentDropDown'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BarChartContainer from '../../../Charts/BarChart/BarChart'

function ViewPayment() {
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
      const [userData, setUserData] = useState({
        labels: chartData.map(data=> data.day),
        datasets:[{
          label: "Wallet Trend",
          data: chartData.map(data=>data.funds),
          backgroundColor:["#3CE712"]
    
        }]
      })

      const [age, setAge] = useState('');

      const handleChange = (event) => {
        setAge(event.target.value);
      };

  return (
    <div>
         <Link to='/payments' className='no-underline text-sm'>
            Payment
        </Link> <span className='text-sm'>/ Payment Details</span> 

           <div  className="col-lg-12 mb-4 mt-8 bg-white p-3 rounded">
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
                <hr />
                <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-9 p-3 mb-8">
                  <div className="flex justify-end mb-1">
                  ₦5,000
                  </div>
                    <PaymentProgressBar percent={45}/>
                    <div className="text-center mt-1">
                    ₦2,000
                    </div>
                    <p className='text-muted mb-0'>45 Household paid so far</p>
                </div>
                </div>
            </div>

            <div className="mt-8">
                <div className="col-lg-12 bg-white p-5" >
                  <header className='flex justify-between'>
                  <h5>Payment Trend</h5>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">This Week</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={age}
                    label="This Week"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                    </MenuItem>
                    <MenuItem value={10}>This Week</MenuItem>
                  </Select>
                </FormControl>
                  </header>
                  <div style={{height:400}}>
                  <BarChartContainer data = {chartData} Xaxis="day" Yaxis="funds" datakey="funds" fill="#08D231" />
                  </div>
                <div className="flex justify-end mt-5">
                         <Link to={'/payments/'} className='no-underline'>View Recipients</Link>
                  </div>
                </div>
            </div>
            <div className="mt-8 bg-white rounded pb-5">
              <div className="px-4 py-4">
              {/* <FormControl sx={{ m: 1, minWidth: 150, }} size="small">
                  <InputLabel id="demo-select-small">Installments</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={age}
                    label="This Week"
                    onChange={handleChange}
                  >
                    {
                      testInstallment.map((installment,index)=>{
                        return <MenuItem key={index} value={index}> Installment {index+1}
                        </MenuItem>
                      })
                    }
                    
                  </Select>
                </FormControl> */}
              </div>
        
              {
                testInstallment.map((installment,index)=>{
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
                        <p className='text-muted m-0'>45 Household paid so far</p>
                  <hr /> 
                 </div>
                  )
                })
              }
              <Link to='/household/1' className='no-underline p-5'>View Households</Link>
            </div>
    </div>
  )
}

export default ViewPayment