import React, { useEffect, useState } from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom'
import PrintAndDownload from '../../../PrintAndDownload/PrintAndDownloadButton'
import ProductList from './ProductList'
import ValidateUserBtn from './ValidateUserbtn'
import Spinner from 'react-bootstrap/Spinner';
import { KYRSTATUSICON } from '../../../SideBar/icons'

function LoadingScreen() {
  return (
    <div className='flex justify-center my-64'>
    
      <Spinner animation="grow" size="lg" variant="primary"/>

    </div>
  );
}



function ViewResident() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const {id} = useParams()
    

      const GetResidents = async () => {
    const token = localStorage.getItem("sesaToken")

    const req = await fetch("https://real.sesadigital.com/api/users", {
      method:"GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    
    });

          const data = await req.json()
          
    
          const currentResident = data.filter(resident => {
              return resident.id.toString() === id
          })

          if (currentResident.length === 1) {
                setData(currentResident)
                setLoading(false)
          } else {
              navigate('/residents')
          }
          
  
  };

  useEffect(() => {
    GetResidents()
  }, []);
    

    
  return (
    <div>
          <Link to='/residents' className='no-underline text-sm'>
            Residents
          </Link> <span className='text-sm'>/ Resident Profile</span> 
          {
              loading?<LoadingScreen/>:  <div className="bg-white p-5 mt-8">
        <div className='bg-slate-300 p-2 h-32 relative'>
                <div className='absolute top-16 left-10'>
                          <img src={data[0].image} className='rounded-full w-36 h-36 object-cover' style={{ border: "3px solid #20B16A" }} alt={ data[0]['f_name']} />
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
                        <td>Full Name</td>
                                  <td>{data[0]['f_name'] }</td>
                        </tr>
                        <tr>
                        <td>Resident Code</td>
                        <td>{data[0]['id'] }</td>
                        </tr>
                        <tr>
                        <td>Date Of Birth</td>
                        <td>15 May, 1967</td>
                        </tr>
                        <tr>
                        <td>Email Address</td>
                        <td>{data[0]['email'] }</td>
                        </tr>
                        <tr>
                        <td>Phone Number</td>
                        <td>{data[0]['phone'] }</td>
                        </tr>
                        <tr>
                        <td>Gender</td>
                        <td>{data[0]['gender'] }</td>
                        </tr>
                        <tr>
                        <td>ID Type</td>
                        <td className='uppercase'>{data[0]['id_type'] }</td>
                        </tr>
                        <tr>
                        <td>ID Number</td>
                        <td>{data[0]['id_number'] }</td>
                        </tr>
                        <tr>
                        <td className='w-1/2'>Status</td>
                        <td className='text-success'>{data[0]['status'] }</td>
                        </tr>
                        <tr>
                        <td className='flex justify-between items-baseline'><span className='flex'> <span className='mr-2'> KYR Status</span> <KYRSTATUSICON/></span> <ValidateUserBtn/></td>
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
            <h5 className='font-semibold m-0'>Resident Type/Category</h5>
            <div className="table-responsive mt-8 mb-8">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                        <td className='w-1/2'>Property Code</td>
                        <td>H7366</td>
                        </tr>
                        <tr>
                        <td>Home Address</td>
                        <td>Block 28</td>
                        </tr>
                        <tr>
                        <td>Resident Type</td>
                        <td>Landlord (Resident)</td>
                        </tr>
                        <tr>
                        <td>Resident Category</td>
                        <td>Alpha</td>
                        </tr>
                        <tr>
                        <td>Date of Onboarding</td>
                        <td>21 May, 2021</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5 className='font-semibold mb-8'>Product List</h5>
            <ProductList/>
               
        </div>
          }
      
    </div>
  )
}

export default ViewResident