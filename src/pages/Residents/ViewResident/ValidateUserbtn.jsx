import { useState } from 'react'
import ValidateUserModal from './ValidateUserModal';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';


function GoIcon(){
  return(
    <svg width="8" height="13" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.795898 14.9301L6.5009 9.22507C7.17465 8.55132 7.17465 7.44882 6.5009 6.77507L0.795898 1.07007" stroke="#666869" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )


}

export default function ValidateUserbtn() {
  const [modalShow, setModalShow] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="contained"
        size='small'
        sx={{width:"65px",height:"27px",backgroundColor:"#0660FE",fontSize:11}}
      >
        Validate
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
         <button onClick={() => { setModalShow(true); handleClose()}} className='inline-flex justify-between items-center w-full mb-2 rounded-md px-4 py-2 text-sm'>
            Phone Number Verification <span><GoIcon/></span>
        </button>  

        <button onClick={() =>{ setModalShow(true); handleClose()}} className='inline-flex justify-between items-center w-full mb-4 rounded-md px-4 py-2 text-sm'>
                Government ID <span><GoIcon/></span>
        </button>

        <p className='text-primary text-xs px-4 py-2'>NB: Any choice of validation cost N200</p>
      </Menu>
      <ValidateUserModal
         show={modalShow}
         onHide={() => setModalShow(false)}
      />
    </div>
  );
}
