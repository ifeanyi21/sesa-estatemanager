import React from 'react'
import {Link} from 'react-router-dom'
import ProfilePicture from '../../../images/House.jpeg'
import ViewImage from '../../../components/ViewPageImage/ViewImage'
import HouseholdModal from './HouseholdModal/HouseholdModal'

function ViewHousehold() {
   
  return (
    <div>
          <Link to='/household' className='no-underline text-sm'>
            Household
        </Link> <span className='text-sm'>/ Household Details</span> 

        <div className="bg-white p-5 mt-8">
            <ViewImage image={ProfilePicture}/>
            <div className="table-responsive mt-24">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                        <td>Estate</td>
                        <td>Silver land</td>
                        </tr>
                        <tr>
                        <td>Property Code</td>
                        <td>09873</td>
                        </tr>
                        <tr>
                        <td>Property Type</td>
                        <td>3 Bedroom self con</td>
                        </tr>
                        <tr>
                        <td>Property Class</td>
                        <td>Residential</td>
                        </tr>
                        <tr>
                        <td>Property Address</td>
                        <td>Block 23 ikoyi</td>
                        </tr>

                        <tr>
                        <td>Number of occupants</td>
                        <td>5</td>
                        </tr>

                        <tr>
                        <td>Number of Access Card</td>
                        <td>5</td>
                        </tr>

                        <tr>
                        <td>Number of RFID</td>
                        <td>1</td>
                        </tr>

                        <tr>
                        <td>Number of Assigned Products</td>
                        <td>5</td>
                        </tr>
                    
                    </tbody>
                </table>
            </div>

             <footer className='flex justify-between mt-20'>
                 <HouseholdModal/>
               <button className='btn' style={{border:"1px solid #FF9500",color:"#FF9500"}}>Deactivate</button> 
            </footer>

        </div>
    </div>
  )
}

export default ViewHousehold