import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import PaymentForm from '../Form/PaymentForm'
import PaymentContext from "../../../components/store/paymentStore";

function AddPayment() {

    const [state] = useContext(PaymentContext);

  return (
    <div>
         <Link to='/payments' className='no-underline text-sm'>
            Payment
        </Link> <span className='text-sm'>/ Add Payment</span> 

        <PaymentForm state={state}/>
    </div>
  )
}

export default AddPayment