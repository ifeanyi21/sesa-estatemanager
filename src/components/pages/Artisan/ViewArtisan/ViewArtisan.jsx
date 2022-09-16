import React from 'react'
import {Link} from 'react-router-dom'
import ProfilePicture from '../../../../images/security.jpeg'
import PrintAndDownload from '../../../PrintAndDownload/PrintAndDownloadButton'
import { Rating } from '@mui/material'

function ViewArtisan() {
  return (
    <div>
        <Link to='/artisan' className='no-underline text-sm'>
            Artisan
        </Link> <span className='text-sm'>/ Artisan Details</span> 

        <div className="bg-white p-5 mt-8">
        <div className='bg-slate-300 p-2 h-32 relative'>
                <div className='absolute top-16 left-5'>
                    <img  src={ProfilePicture} style={{border:"3px solid #20B16A"}} className='rounded-full w-36 h-36 object-cover' alt="Username" />
                </div>
            </div>
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
                        <td>Artisan Code</td>
                        <td>09873</td>
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
                        <td>Business Name</td>
                        <td>Farmer's Inc</td>
                        </tr>
                       
                        <tr>
                        <td>Rating</td>
                        <td><Rating defaultValue={3} readOnly /></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

            <div className="border p-4 shadow-md mt-8 rounded">
                <header className='flex justify-between'>
                    <div className='flex'>
                        <img src={ProfilePicture} className="h-12 w-12 object-cover rounded-full" alt="" />
                        <p className='font-bold ml-2'>Ratings</p>
                    </div>
                    <div className='text-muted'>
                        <p className='mb-2'>7 Aug 22</p>
                        <p>Peace Estate</p>
                    </div>
                </header>
                <div className="ml-4 col-lg-6 mt-8">
                <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                </div>
                
            </div>

            
        </div>

    </div>
  )
}

export default ViewArtisan