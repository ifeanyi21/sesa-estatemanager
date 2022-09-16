import { DeleteIcon, EditEstateIcon, } from '../../../SideBar/icons'
import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Link,useNavigate } from 'react-router-dom';
import {Modal, Button as BootStrapButton} from 'react-bootstrap';


export default function ViewPaymentDropDown(params) {

    const [show, setShow] = useState(false);


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleShow = () =>{ 
    setShow(true)
    setAnchorEl(false)
};
  



  return (
    <div>
    <Button
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
     <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 15.2746C1.58333 15.2746 1.22933 15.1286 0.938 14.8366C0.646 14.5453 0.5 14.1913 0.5 13.7746C0.5 13.3579 0.646 13.0036 0.938 12.7116C1.22933 12.4203 1.58333 12.2746 2 12.2746C2.41667 12.2746 2.77067 12.4203 3.062 12.7116C3.354 13.0036 3.5 13.3579 3.5 13.7746C3.5 14.1913 3.354 14.5453 3.062 14.8366C2.77067 15.1286 2.41667 15.2746 2 15.2746ZM2 9.49961C1.58333 9.49961 1.22933 9.35361 0.938 9.06161C0.646 8.77028 0.5 8.41628 0.5 7.99961C0.5 7.58294 0.646 7.22894 0.938 6.93761C1.22933 6.64561 1.58333 6.49961 2 6.49961C2.41667 6.49961 2.77067 6.64561 3.062 6.93761C3.354 7.22894 3.5 7.58294 3.5 7.99961C3.5 8.41628 3.354 8.77028 3.062 9.06161C2.77067 9.35361 2.41667 9.49961 2 9.49961ZM2 3.72461C1.58333 3.72461 1.22933 3.57861 0.938 3.28661C0.646 2.99528 0.5 2.64128 0.5 2.22461C0.5 1.80794 0.646 1.45361 0.938 1.16161C1.22933 0.870276 1.58333 0.724609 2 0.724609C2.41667 0.724609 2.77067 0.870276 3.062 1.16161C3.354 1.45361 3.5 1.80794 3.5 2.22461C3.5 2.64128 3.354 2.99528 3.062 3.28661C2.77067 3.57861 2.41667 3.72461 2 3.72461Z" fill="#1C1B1F"/>
    </svg>
    
    </Button>
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >

      <Link to={'/payment/edit-payment/'+params.id}  onClick={handleClose} className='no-underline text-inherit flex items-baseline px-3 py-2 text-base'><EditEstateIcon/><span className='ml-3 text-black'>Edit Details</span> </Link>
      <button className='no-underline flex items-center text-base px-3 py-2'onClick={handleShow}  style={{paddingLeft:0, justifyContent:"start", color:'black', textTransform:"inherit"}}><DeleteIcon/><span className='ml-4'>Delete Payment</span> </button>
    </Menu>
    <DeletePayment 
    show={show}
    onHide={() => setShow(false)}
    />
  </div>
  )
}






function DeletePayment({show, onHide}) {
  const navigate = useNavigate()

  const handleDelete = ()=>{
    navigate("/payments")
  }

  return (
    <>

      <Modal show={show} onHide={onHide}>
        <Modal.Header>
          <Modal.Title>Delete Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Are you sure you want to delete this payment plan? If you delete, it will be permanently lost
        <div className="col-lg-12 flex justify-end">
        <div className='w-20 mt-5 mr-3'>
        <button onClick={onHide} className='btn border'>Cancel</button>
        </div>
        <div className='w-20 mt-5'>
        <BootStrapButton className='btn btn-danger' onClick={handleDelete}>Delete</BootStrapButton>
        </div>
        </div>
       
        </Modal.Body>
        
     
  
      </Modal>
    </>
  );
}



