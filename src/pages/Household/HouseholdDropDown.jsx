import { DeleteIcon, EditEstateIcon, ToggleIcon, ViewEstateIcon } from '../../components/SideBar/icons'
import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';



export default function HouseholdDropDown(params) {

  const [anchorEl, setAnchorEl] = useState(null);
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

      <Link to={'/household/'+params.id} onClick={handleClose} className="flex no-underline text-base items-baseline px-3 py-2"><ViewEstateIcon/><span className='ml-2 text-black'>View Details</span> </Link>
      <Link to={'/household/edit-household/'+params.id}  onClick={handleClose} className='no-underline text-inherit flex items-baseline px-3 py-2 text-base'><EditEstateIcon/><span className='ml-3 text-black'>Edit Details</span> </Link>
      <button className='no-underline flex items-center text-base px-3 py-2' onClick={handleClose}  style={{paddingLeft:0, justifyContent:"start", color:'black', textTransform:"inherit"}}><DeleteIcon/><span className='ml-4'>Delete</span> </button>
    </Menu>
  </div>
  )
}
