import React,{useState} from 'react'
import { Form } from 'react-bootstrap'
import House from '../../../../images/House.jpeg'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DeleteIcon } from '../../../SideBar/icons'
import SuccessModal from '../../../SuccessMessage/SuccessMessage'

function AddHousehold() {
  const [modalShow, setModalShow] = useState(false);
  const [resClass, setResClass] = useState("Landlord (Developer)");
  const [content, setContent] = useState(false);

  const handleResClass =  (e) =>{
    setResClass(e.target.value)
  }

  return (
    <div className='mt-8'>
      <Form className='mb-8'>
        <div className="row items-end">
          <div className="col-lg-5 mb-3">
            <label className='mb-3 text-sm'>Property Code</label>
            <Form.Control/>
          </div>
          <div className="col-lg-5 mb-3">
            <button className='btn btn-primary'>Search</button>
          </div>
        </div>
      </Form>
      <div className='results p-1 mb-8'>
        <div className="row">
          <div className="col-lg-3 mb-3">
            <img src={House} className='w-full h-full rounded' alt="" />
          </div>
          <div className="col-lg-3 mb-3">
            <p className='text-muted'>Property Type : <span></span></p>
            <p className='text-muted'>Property Category : <span></span></p>
            <p className='text-muted'>Property Name : <span></span></p>
            <p className='text-muted'>Address : <span></span></p>
            
          </div>
        </div>
      </div>
      <hr />
      <Form className='mt-16 mb-8'>
        <p className='text-lg font-medium mb-16'>Add an occupant to this property</p>
        <div className="row items-end">
          <div className="col-lg-5 mb-3">
            <label className='mb-3 text-sm'>Resident Code</label>
            <Form.Control/>
          </div>
          <div className="col-lg-5 mb-3">
            <button className='btn btn-primary'>Search</button>
          </div>
        </div>
      </Form>

      <div className='results p-1 mb-5'>
        <div className="row mb-8">
          <div className="col-lg-2 mb-3">
            <img src={House} style={{border:"3px solid rgb(94 204 94)"}} className='w-36 h-36 object-cover rounded-full' alt="" />
          </div>
          <div className="col-lg-3 mb-3 text-base">
            <p className='text-muted'>Property Type : <span></span></p>
            <p className='text-muted'>Property Category : <span></span></p>
            <p className='text-muted'>Property Name : <span></span></p>
            <p className='text-muted'>Address : <span></span></p>
            
          </div>
        </div>
        <Form>
        <div className="row mb-7">
        <div className="col-lg-6 mb-3">
            <label className='mb-2 text-sm'>Resident Class</label>
            <Form.Select value={resClass} onChange={handleResClass} style={{fontSize:14,width:'80%'}}>
              <option >Alpha</option>
              <option >Resident User</option>
            </Form.Select>
          </div>
          <div className="col-lg-6 mb-3">
            <label className='mb-2 text-sm'>Resident Category</label>
            <Form.Select style={{fontSize:14,width:'80%'}}>
              <option value="0">Landlord (Tenant)</option>
              <option value="1">Landlord (Developer)</option>
              <option value="2">Resident</option>
            </Form.Select>
          </div>
        </div>
        <div className="row mb-7">
        
        </div>
        <button onClick={(e)=>{e.preventDefault(); setContent(true)}} className='btn btn-outline-primary mb-8 mt-8'>Add Resident</button>
        </Form>
      <p className='text-muted text-xs mb-5'>NB: Only 2 alphas by default and 6 resident users can be added to this household</p>
      <div className='text-primary text-xs mb-2'>Who is an Alpha Resident?</div>
      <div className='text-primary text-xs mb-4'>Who is a Resident User?</div>

      {
        content && <div className="row">
        <div className="col-lg-12 p-4 border rounded">
          <div className="row">
          <div className="col-lg-3 mb-4">
          <img src={House} className='w-36 h-36 rounded-full object-cover' alt="" />
          </div>
          <div className="col-lg-8 mb-4">
              <p className='text-muted'>Resident Code : <span></span></p>
              <p className='text-muted'>Resident Name : <span></span></p>
              <p className='text-muted'>Resident Class : <span></span></p>
              <p className='text-muted'>Resident Catgeory : <span></span></p>
          </div>
  
          <div className="col-lg-1 mb-4 relative">
     
          <Menu as="div" className="absolute right-0 inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 15.2751C1.08333 15.2751 0.729333 15.1291 0.438 14.8371C0.146 14.5458 0 14.1918 0 13.7751C0 13.3584 0.146 13.0041 0.438 12.7121C0.729333 12.4208 1.08333 12.2751 1.5 12.2751C1.91667 12.2751 2.27067 12.4208 2.562 12.7121C2.854 13.0041 3 13.3584 3 13.7751C3 14.1918 2.854 14.5458 2.562 14.8371C2.27067 15.1291 1.91667 15.2751 1.5 15.2751ZM1.5 9.5001C1.08333 9.5001 0.729333 9.3541 0.438 9.0621C0.146 8.77076 0 8.41676 0 8.0001C0 7.58343 0.146 7.22943 0.438 6.9381C0.729333 6.6461 1.08333 6.5001 1.5 6.5001C1.91667 6.5001 2.27067 6.6461 2.562 6.9381C2.854 7.22943 3 7.58343 3 8.0001C3 8.41676 2.854 8.77076 2.562 9.0621C2.27067 9.3541 1.91667 9.5001 1.5 9.5001ZM1.5 3.7251C1.08333 3.7251 0.729333 3.5791 0.438 3.2871C0.146 2.99576 0 2.64176 0 2.2251C0 1.80843 0.146 1.4541 0.438 1.1621C0.729333 0.870765 1.08333 0.725098 1.5 0.725098C1.91667 0.725098 2.27067 0.870765 2.562 1.1621C2.854 1.4541 3 1.80843 3 2.2251C3 2.64176 2.854 2.99576 2.562 3.2871C2.27067 3.5791 1.91667 3.7251 1.5 3.7251Z" fill="#1C1B1F"/>
                </svg>
          </Menu.Button>
        </div>
  
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
                <Menu.Item onClick={()=>{setContent(false)}}>
                    <button className={'bg-white text-gray-900 block w-full text-left px-4 py-2 text-base no-underline items-baseline'}>
                      <span className='inline-block mr-4'><DeleteIcon/></span>
                      Remove from property
                    </button>
                </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
               </Menu>
              
            
          </div>
          </div>
         
        </div>
        </div>
      }
      

      </div>
      <div className="col-lg-12 mb-5 flex justify-end">
      <button onClick={()=>setModalShow(true)}  className='btn btn-primary'>Create Household</button>
      </div>
      <SuccessModal
      redirecturl='/household'
      text='a Resident to this house'
      id='1'
      show={modalShow}
      onHide={() => setModalShow(false)}/>
     
    </div>
  )
}

export default AddHousehold