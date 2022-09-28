import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import ProfilePicture from '../../../images/security.jpeg'
import PrintAndDownload from '../../../components/PrintAndDownload/PrintAndDownloadButton'
import ViewImage from '../../../components/ViewPageImage/ViewImage';
import GenerateID from './GenerateID';

export default function ViewEstateStaff() {
    const [modalShow, setModalShow] = useState(false);
  return (
    <div>
          <Link to='/estate-staff' className='no-underline text-sm'>
            Estate Staff
        </Link> <span className='text-sm'>/ Estate Staff Details</span> 

        <div className="bg-white p-5 mt-8">
        <ViewImage image={ProfilePicture}/>
            <header className='flex justify-end mt-20'>
               <PrintAndDownload/> 
            </header>

            <div className="table-responsive mt-8">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                        <td>Full Name</td>
                        <td>Kamsey West</td>
                        </tr>
                        <tr>
                        <td>Estate Staff Code</td>
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
                        <td>Home Address</td>
                        <td>Block 23</td>
                        </tr>

                        <tr>
                        <td>ID Type</td>
                        <td></td>
                        </tr>

                        <tr>
                        <td className='flex justify-between items-baseline'>KYR Status</td>
                        <td className='text-primary'>Full Match</td>
                        </tr>
                       
                        <tr>
                        <td>Work Days</td>
                        <td>Thursdays, Fridays</td>
                        </tr>

                        <tr>
                        <td>Date of Onboarding</td>
                        <td>21 May, 2021</td>
                        </tr>

                        <tr>
                        <td>Status</td>
                        <td className='text-success'>Validated</td>
                        </tr>

                        <tr>
                        <td>Message to the security</td>
                        <td></td>
                        </tr>

                    </tbody>
                </table>
            </div>
         
         <div className="flex justify-between mt-10">
            <button className='btn btn-primary btn-sm'>Open Account</button>
            <button className='btn btn-outline-primary btn-sm' onClick={() => setModalShow(true)}>Generate ID Card</button>
         </div>

         

      <GenerateID
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
    </div>
  )
}
