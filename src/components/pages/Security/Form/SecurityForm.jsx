import React,{useState} from 'react'
import {Form} from 'react-bootstrap'
import {useLocation,useParams,Link} from 'react-router-dom'
import SuccessModal from '../../../SuccessMessage/SuccessMessage'
import ProfilePicture from '../../../../images/security.jpeg'
import { Upload } from '../../../Upload/Upload'
import CSS from '../../Household/Household.module.css'
import UploadFileImage from "../../../../images/photo_library.svg"
import { Button } from '@mui/material'
import { DeleteButtonTrashIcon } from '../../../SideBar/icons'



function SecurityForm() {
    const [modalShow, setModalShow] = useState(false);
    const location = useLocation()
    const params = useParams()

    const handleSuccessMessage = (e)=>{
        e.preventDefault()
        setModalShow(true)
    }
  return (
    <Form onSubmit={handleSuccessMessage} className='mt-8'>
        {
            location.pathname === "/security/edit-security/"+params.id && <div className="row">
            <div className="col-lg-2 mb-3">
                <img src={ProfilePicture} className='w-32 h-32 object-cover rounded-full' style={{border:"3px solid #20B16A"}} alt="" />
            </div>
            <div className="col-lg-4 my-auto">
            <p className='text-muted text-sm text-left'>Staff Code: <span className='font-medium text-black'>09873</span></p>
            <p className='text-muted text-sm text-left'>Work Location: <span className='font-medium text-black'>H77363</span></p>
            <p className='text-muted text-sm text-left'>KYC: <span className='font-medium text-primary'>Validated</span></p>
            </div>
            </div>
        }



    <div className="row mb-8">
        <div className="col-lg-6 mb-3">
        <label className='text-sm mb-2'>First Name <span className='text-danger'>*</span></label>
     <Form.Control  />
        </div>

        <div className='col-lg-6 mb-3'>
        <label className='text-sm mb-2'>Last Name <span className='text-danger'>*</span></label>
     <Form.Control />
        </div>

        <div className='col-lg-6 mb-3'>
        <label className='text-sm mb-2'>Middle Name</label>
     <Form.Control  />
        </div>
      
        <div className="col-lg-6 mb-3">
        <label className='text-sm mb-2'>Date Of Birth <span className='text-danger'>*</span></label>
     <Form.Control type='date' />
        </div>
        <div className="col-lg-6 mb-3">
            
            <label className='text-sm mb-2'>Phone Number <span className='text-danger'>*</span></label>
            <div className='flex items-center justify-between'>
            <span>
                <select name="" id="">
                    <option value="">+234</option>
                </select>
            </span>
         <Form.Control type='number' style={{width:'80%'}} />
            </div>
            
            </div>

            <div className='col-lg-6 col-md-12 mb-5'>
        <label className='text-sm mb-2'>Gender<span className='text-danger'>*</span></label>
        <Form.Select aria-label="Default select example">
            <option value="1">Male</option>
            <option value="2">Female</option>
        </Form.Select>
    
        </div>

            <div className='col-lg-6 mb-5'>
            <label className='text-sm mb-2'>Home Address <span className='text-danger'>*</span></label>
         <Form.Control  />
            </div>

         

        {location.pathname === '/security/add-security' && 
            <div className={`${CSS.imageEstateStaff} mx-auto mb-5 p-1`}>
            <Upload  bodyText={
              <div className="text-center py-12 fileUploadContainer">
                <span className='flex justify-center items-center p-2'>
                  <img src={UploadFileImage} alt="Upload file" />
                  <p className='mb-0'>Drag Site worker picture here or  <span className="text-primary pointer">click</span> to
                upload</p>
                </span>
                
              
               
              </div>
            }
            />
            </div>
        }

   
    {location.pathname === '/security/add-security' &&   <h4 className='mb-10 text-lg'>KYR (Know Your Resident)</h4>}
            <div className="row">
            <div className="col-lg-6 mb-5">
            <label className='text-sm mb-2'>ID Type</label>
            <Form.Select name="" id="">
                <option value="">Passport</option>
                <option value="">Phone Number</option>
            </Form.Select>
            </div>
            <div className="col-lg-6 mb-5">
            <label className='text-sm mb-2'>ID Number</label>
            <Form.Control/>
            </div>
            {location.pathname === '/residents/add-residents' &&   <div className="col-12">
                <Link className='no-underline text-sm' to={'/kyr'}>What is KYR?</Link>
            </div>}
            </div>   

  {location.pathname === '/security/add-security' &&  <div className='col-12 mt-16'>
        <button className='btn btn-primary float-right'>Add Staff</button>
    </div>}

{ location.pathname === `/security/edit-security/${params.id}` &&   <div className='col-lg-12 mt-16'>
        <div className="flex justify-between items-center">
        <div>
           <button style={{backgroundColor:'#DA6900'}} className='btn btn-sm my-2 text-white mr-10'>Decativate</button>
           <Button style={{textTransform:"capitalize"}} variant="outlined" size="small" color="error" startIcon={<DeleteButtonTrashIcon/>}>
             <span className='mr-0'>Delete</span>
            </Button>
           </div>
          
            <div>
            <button className='btn btn-primary btn-sm'>Save Changes</button>
            </div>
        </div>
    </div>}
    </div>
  
    <SuccessModal
        text='a Security Guard'
        redirecturl='/security'
        id='2'
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
    </Form>
  )
}

export default SecurityForm