import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../../../images/security.jpeg'

function ValidatedResult() {
  return (
      <div>
          <Link to='/residents' className='no-underline text-sm'>
            Residents
          </Link> <span className='text-sm'>/ Resident Profile</span>  <span className='text-sm'>/ Validated Result</span> 
          {
        <div className="bg-white p-5 mt-8">
            <h3>User's Caption Details</h3>
            <div className='mt-16 mb-32'>
            <img src={Image} className='rounded-full w-32 h-32 object-cover' style={{ border: "3px solid #20B16A" }} alt="" />
              <div className="table-responsive mt-8 mb-8">
                <table className="table table-bordered">
                    <tbody className='capitalize'>
                        <tr>
                        <td>Full Name</td>
                        <td>Micheal John</td>
                        </tr>
                        <tr>
                        <td>Phone Number</td>
                        <td>090373838</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>     

            <h3>User's Validation Result</h3>
            <div className='mt-16'>
            <img src={Image} className='rounded-full w-32 h-32 object-cover' style={{ border: "3px solid #20B16A" }} alt="" />
              <div className="table-responsive mt-8 mb-8">
                <table className="table table-bordered">
                    <tbody className='capitalize'>
                        <tr>
                        <td>Full Name</td>
                        <td>Micheal John</td>
                        </tr>
                        <tr>
                        <td>Phone Number</td>
                        <td>090373838</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>        
        </div>
          }
      
    </div>
  )
}

export default ValidatedResult