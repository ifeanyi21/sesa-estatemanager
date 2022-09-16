import React from 'react'
import { Link } from 'react-router-dom'
import PaymentForm from '../Form/PaymentForm'

function AddPayment() {
  return (
    <div>
         <Link to='/payments' className='no-underline text-sm'>
            Payment
        </Link> <span className='text-sm'>/ Add Payment</span> 

        <PaymentForm/>
    </div>
  )
}

export default AddPayment