import { ToggleIcon, ViewEstateIcon } from '../../components/SideBar/icons'
import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';



export default function ArtisanDropDown(params) {
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

      <Link to={'/artisan/'+params.id} onClick={handleClose} className="flex no-underline text-base items-baseline px-3 py-2"><ViewEstateIcon/><span className='ml-2 text-black'>View Details</span> </Link>
    </Menu>
  </div>
  )
}

