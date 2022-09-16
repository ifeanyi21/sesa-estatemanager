import {createContext, useReducer} from 'react'
import { PaymentReducer } from '../Reducer/Reducer'

const PaymentContext = createContext()

export const INITIAL_STATE = {
    duesName:"",
    trackPayment:0,
    status:0,
    amountType:0,
    amount:"",
    paymentPlan:0,
    startDate:"",
    endDate:"",
}

export function PaymentProvider({children}){

    const [state, dispatch] = useReducer(PaymentReducer, INITIAL_STATE)

    return <PaymentContext.Provider value={[state,dispatch]}>
        {children}
    </PaymentContext.Provider>
}

export default PaymentContext