import { DeactivateIcon, DeleteIcon, ToggleIcon } from '../../../../SideBar/icons'
import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';


export default function DropDown(params) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    console.log(params.id);
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
      <ToggleIcon/>
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

      <button onClick={handleClose} className="flex no-underline text-base items-baseline px-3 py-2"><DeactivateIcon/><span className='ml-2 text-black'>Deactivate</span> </button>
      <button className='no-underline flex items-center text-base px-3 py-2' onClick={handleClose}  style={{paddingLeft:0, justifyContent:"start", color:'black', textTransform:"inherit"}}><DeleteIcon/><span className='ml-4'>Remove</span> </button>
    </Menu>
  </div>
  )
}

