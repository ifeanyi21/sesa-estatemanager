import React,{useState, useContext} from 'react'
import { Form, InputGroup } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { AddIcon } from '../../../SideBar/icons'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ACTION_TYPES } from '../../../store/Actions/Actions';
import PaymentContext from '../../../store/paymentStore';
import { Button } from '@mui/material';

function PaymentForm() {

    const [state, dispatch] = useContext(PaymentContext)
    const navigate = useNavigate()

    const [installmentType, setInstallmentType] = useState("0")
    const [click, setClick] = useState([1])
    const [allInstallments, setInstallments] = useState({})

    //const [installmentsArray, setInstallmentsArray] = useState([])

    const handleChange = (e) =>{
        dispatch({type:ACTION_TYPES.CHANGE, payload:{name:e.target.name, value:e.target.value}})
    }

    const handleInstallments = (e) => {
        setInstallments((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })

    }

    console.log(allInstallments);

    

    const handleInstallmentType = (e)=>{
        setInstallmentType(e.target.value)
        setClick([1])
    }

    const handleNewInstallment = (e)=>{
        e.preventDefault()        
        if(click.length === 12){
        }else{
            setClick(prev=>[...prev, parseInt(prev[prev.length-1]+1)])
        }
    }

    const handlePayment = (e)=>{
        e.preventDefault()
        navigate('/payments/add-payment/add-reciepients')
    }


    


  return (
    <div className="bg-white p-4 mt-8 rounded">
        <Form className="p-3" onSubmit={handlePayment}>
            <div className="my-8 justify-center flex">
            <svg width="303" height="31" viewBox="0 0 303 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15.5" cy="15.5" r="15.5" fill="#0446B9"/>
                <line x1="37" y1="15" x2="266" y2="15" stroke="#0446B9" strokeDasharray="7 7"/>
                <circle cx="287.5" cy="15.5" r="15" stroke="#0446B9" strokeDasharray="7 7"/>
            </svg>
            </div>
       
            <div className="mt-16"> 
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <label className="mb-2 text-sm">Dues Name</label>
                        <Form.Control required name="duesName" value={state.duesName} onChange={handleChange}/>
                    </div>

                    <div className="col-lg-6 mb-4">
                        <label className="mb-2 text-sm">Track Payment</label>
                        <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth size="small" >
                        <Select
                        label="Track payment"
                        name='trackPayment'
                        onChange={handleChange}
                        value={state.trackPayment}
                        >
                        <MenuItem value={0}>No</MenuItem>
                        <MenuItem value={1}>Yes</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                    </div>

                    <div className="col-lg-6 mb-4">
                        <label className="mb-2 text-sm">Status</label>
                        <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth size="small">

                        <Select
                        label="Status"
                        onChange={handleChange}
                        value={state.status}
                        name="status"
                        >
                        <MenuItem value={0}>Active</MenuItem>
                        <MenuItem value={1}>Inactive</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                    </div>

                    <div className="col-lg-6 mb-4">
                    <label className="mb-2 text-sm">Amount Type</label>
                    <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth size="small" >

                        <Select
                        label="Amount Type"
                        onChange={handleChange}
                        value={state.amountType}
                        name="amountType"
                        disabled={state.paymentPlan === 1 ? true : false}

                        >
                        <MenuItem value={0}>Fixed</MenuItem>
                        <MenuItem value={1}>Flexible</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                    </div>

                    {
                       state.amountType === 0 &&   
                        <div className="col-lg-12">
                        <div className="row">
                        <div className="col-lg-6 mb-4">
                        <label className="mb-2 text-sm">Amount</label>
                        <Form.Control   
                        onChange={handleChange}
                        value={state.amount}
                        name="amount"
                        type="number"
                        required/>
                    </div>

                    <div className="col-lg-6 mb-4">
                        <label className="mb-2 text-sm">Payment Plan</label>
                        <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth size="small">

                        <Select
                        value={state.paymentPlan}
                        name="paymentPlan"
                        label="Payment Plan"
                        onChange={handleChange}
                        >
                        <MenuItem value={0}>Full</MenuItem>
                        <MenuItem value={1}>Installment</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                    </div>
                        </div>
                    </div>
                    }    
                                  

                    {/* User chooses full Payment plan */}

                    {
                        state.paymentPlan === 0 && 
                        <div className="col-lg-12">
                             <div className='row'>
                            <div className="col-lg-6 mb-3">
                            <label className="mb-2 text-sm">Start Date</label>
                            <Form.Control required type='date' name="startDate" value={state.startDate} onChange={handleChange}/>
                            </div>

                            <div className="col-lg-6 mb-3">
                            <label className="mb-2 text-sm">End Date</label>
                            <Form.Control required type='date' name='endDate' value={state.endDate} onChange={handleChange}/>
                            </div>
                        </div>
                        </div>
                    }

                    {/* User chooses installment plan */}

                    {
                        state.paymentPlan === 1 && 
                          <>
                        <p className='my-3 font-semibold'>Installment Setting</p>
                        <div className="row">
                        <div className="col-lg-6 mb-4">
                            <label className="mb-2 text-sm">Installment Type</label>
                            <Form.Select value={installmentType} onChange={handleInstallmentType}>
                                <option value={"0"}>Percentage</option>
                                <option value={"1"}>Amount</option>
                            </Form.Select>
                        </div>

                        {/* User chooses Percentage */}

                        {
                            installmentType === "0" && <div className="col-lg-12">
                            {
                                click.map((item)=>{
                                    return(
                                        <div className="row mb-8" key={item+1}>
                                        <p className='text-primary'>Installment {item}</p>
                                        <div className="col-lg-4 mb-3">
                                            <label className="mb-2 text-sm">Installment Amount</label>
                                            <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1" style={{backgroundColor:"transparent", borderRight:0}}>%</InputGroup.Text>
                                            <Form.Control required type='number' name={`installmentAmount${item}`} onChange={handleInstallments } style={{borderLeft:0}}
                                            />
                                        </InputGroup>
                                        </div>
            
                                        <div className="col-lg-4 mb-3">
                                            <label className="mb-2 text-sm">Start Date</label>
                                            <Form.Control required type='date' name={`startDate${item}`} onChange={handleInstallments }/>
                                        </div>
            
                                        <div className="col-lg-4 mb-3">
                                            <label className="mb-2 text-sm">End Date</label>
                                            <Form.Control required type='date' name={`endDate${item}`} onChange={handleInstallments }/>
                                        </div>
                                      
                                    </div>
                                    )
                                })
                            }
                           
    
                            <button onClick={handleNewInstallment} disabled={click.length>= 12 ?true : false} className='flex items-center mb-4'><AddIcon/> <span className={`${click.length>=12? 'text-muted':"text-primary"}`}>Add another amount set</span> </button>
    
                            <p className='text-muted text-xs'>Max of 12 Installments</p>


                             {/* Installment list  */}
                             <div className='mt-20 text-base'>
                                    <p className='text-gray-700'>Total Amount: ₦ {state.amount }</p>
                                    <p className='text-gray-700 text-primary'>Installment 1: ₦ 20,000</p>
                                    <p className='text-gray-700 text-success'>Balance 1: ₦ 80,000</p>
                                </div>
                        </div>
                        }
    
                        

                        {/* User chooses Amount */}

                        {
                            installmentType === "1" &&  <div className="col-lg-12">
                            {
                                click.map((item)=>{
                                    return(
                                        <div className="row mb-8" key={item}>
                                        <p className='text-primary'>Installment {item}</p>
                                        <div className="col-lg-4 mb-3">
                                        <label className="mb-2 text-sm">Installment Amount Naira</label>

                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1" style={{backgroundColor:"transparent", borderRight:0}}>₦</InputGroup.Text>
                                            <Form.Control required type='number' name={`installmentAmount${item}`} style={{borderLeft:0}}
                                            />
                                        </InputGroup>
                                        </div>
            
                                        <div className="col-lg-4 mb-3">
                                            <label className="mb-2 text-sm">Start Date</label>
                                            <Form.Control required type='date' name={`startDateAmount${item}`}/>
                                        </div>
            
                                        <div className="col-lg-4 mb-3">
                                            <label className="mb-2 text-sm">End Date</label>
                                            <Form.Control required type='date' name={`endDateAmount${item}`}/>
                                        </div>
                                      
                                    </div>
                                    )
                                })
                
                            }
                           
    
                     <button onClick={handleNewInstallment} disabled={click.length>= 12 ?true : false} className='flex items-center mb-4'><AddIcon/> <span className={`${click.length>=12? 'text-muted':"text-primary"}`}>Add another amount set</span> </button>
    
                            <p className='text-muted text-xs'>Max of 12 Installments</p>


                                {/* Installment list  */}
                                <div className='mt-20 text-base'>
                                    <p className='text-gray-700'>Total Amount: ₦ {state.amount}</p>
                                    <p className='text-gray-700 text-primary'>Installment 1: ₦ 20,000</p>
                                    <p className='text-gray-700 text-success'>Balance 1: ₦ 80,000</p>
                                </div>
                        </div>
                        }
                       
                        </div>
                        </>
                    }
                    <div className="mt-5 flex justify-end">
                    <Button type='submit' variant='contained' className='btn btn-primary no-underline'>Next</Button>
                    </div>
                </div>
            </div>
      
        </Form>
    </div>
  )
}

export default PaymentForm

