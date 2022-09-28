import React from 'react'
import {Link} from 'react-router-dom'
import ProfilePicture from '../../../images/House.jpeg'
import PrintAndDownload from '../../../components/PrintAndDownload/PrintAndDownloadButton'
import ViewImage from '../../../components/ViewPageImage/ViewImage'

function ViewProperty() {
  return (
    <div>
          <Link to='/properties' className='no-underline text-sm'>
            Property
        </Link> <span className='text-sm'>/ Property Details</span> 

        <div className="bg-white p-5 mt-8">
        <ViewImage image={ProfilePicture}/>
            <header className='flex justify-end mt-20 mb-10'>
               <PrintAndDownload/> 
            </header>

            <div className="table-responsive mt-8">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                        <td>Estate</td>
                        <td>Silverland</td>
                        </tr>
                        <tr>
                        <td>Property Code</td>
                        <td>09873</td>
                        </tr>
                        <tr>
                        <td>Property Category</td>
                        <td>Residential</td>
                        </tr>
                        <tr>
                        <td>Property Type</td>
                        <td>2 Bedroom self con.</td>
                        </tr>
                        <tr>
                        <td>Property Name</td>
                        <td>-</td>
                        </tr>
                        <tr>
                        <td>Address</td>
                        <td>Block 23</td>
                        </tr>
                        <tr>
                        <td>Address Description</td>
                        <td>.......</td>
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

export default ViewProperty