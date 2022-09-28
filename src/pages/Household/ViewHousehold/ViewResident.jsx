import React from 'react'
import {Link,useParams} from 'react-router-dom'
import ProfilePicture from '../../../images/security.jpeg'
import PrintAndDownload from '../../../components/PrintAndDownload/PrintAndDownloadButton'
import ValidateUserbtn from '../../Residents/ViewResident/ValidateUserbtn'

function ViewHouseholdResident() {
    const {houseId}= useParams()
  return (
    <div>
          <Link to='/household' className='no-underline text-sm'>
            Household
        </Link> / <Link to={'/household/'+houseId} className='no-underline text-sm'>
            Household Details
        </Link>  <span className='text-sm'>/ Resident Details</span> 

        <div className="bg-white p-5 mt-8 ">
        <div className='bg-slate-300 p-2 h-32 relative'>
                <div className='absolute top-16 left-10'>
                    <img  src={ProfilePicture} style={{border:"3px solid #20B16A"}} className='rounded-full w-36 h-36 object-cover' alt="Username" />
                </div>
            </div>
            <header className='flex justify-end mt-16 mb-8'>
               <PrintAndDownload/> 
            </header>
            <p className='text-xl font-medium m-0'>Bio Data</p>
            <div className="table-responsive mt-8 mb-8">
                <table className="table table-bordered">
                    <tbody className='capitalize'>
                        <tr>
                        <td className='w-1/2'>Full Name</td>
                        <td>Kamsey West</td>
                        </tr>
                        <tr>
                        <td>Resident Code</td>
                        <td>09873</td>
                        </tr>
                        <tr>
                        <td>Date Of Birth</td>
                        <td>15 May, 1967</td>
                        </tr>
                        <tr>
                        <td>Email Address</td>
                        <td>kamseywest@twitter.com</td>
                        </tr>
                        <tr>
                        <td>Phone Number</td>
                        <td>+234 809 772 7262</td>
                        </tr>
                        <tr>
                        <td>Gender</td>
                        <td>Male</td>
                        </tr>
                        <tr>
                        <td>ID Type</td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>ID Number</td>
                        <td>667373 73</td>
                        </tr>
                        <tr>
                        <td>Status</td>
                        <td className='text-primary'></td>
                        </tr>
                        <tr>
                        <td className='flex justify-between items-baseline'>KYR Status <ValidateUserbtn/></td>
                        <td className='text-danger'>Not Validated</td>
                        </tr>
                        <tr>
                        <td>Product Count</td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>Date of Onboarding</td>
                        <td>21 May, 2021</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ViewHouseholdResident