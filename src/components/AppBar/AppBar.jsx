import Logo from '../../images/logo.png'
import AppBarDropDown from './DropDown'
import CSS from './AppBar.module.css'
import SmallScreenSideBar from '../SideBar/SmallScreenSideBar'
import React,{useState,useContext} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Notifications from './Notifications'
import User from '../store/auth'
import { NotificationBell } from '../SideBar/icons'

function AppBar() {

  const { currentUser } = useContext(User)

  return (
    <div className={`${CSS.appBarWrapper} border-b border-gray-300 flex justify-between bg-white`}>
      <SmallScreenSideBar/>
        <div className={`${CSS.leftAppBar} bg-white`} style={{width:'20%'}}>
          <div className='fixed p-2 bg-white border-r border-gray-300' style={{width:"inherit"}}>
            <div className='flex ml-8 items-baseline'>       
            <img width={32} src={Logo} alt="SESA DIGITAL LOGO" />
            <h6 className='ml-1 text-xl mb-0'>SESA <small className='text-xs text-blue-300'>digital</small></h6>
            </div>
          </div>
           
        </div>
        <div className={`${CSS.rightAppBar} flex items-center justify-between border-l border-gray-300 p-2`}style={{width:'22%'}}>
            <div className='flex items-center'>
                <div className='flex items-center'>
                   <img className='rounded-full mr-2' src={Logo} width={32} alt={`${currentUser.f_name} ${currentUser.l_name}`} />
                   <div>
                   <p className='text-base m-0 capitalize'>{`${currentUser.f_name} ${currentUser.l_name}`}</p>
                   <p className='text-muted text-xs m-0'>Estate Manager</p>
                   </div>
                   <div className="w-5">
                   <AppBarDropDown/>
                   </div>
                </div>
            </div>
            <div className='ml-6'>
              <DropDownAdminPanel/>
            </div>
        </div>
        
    </div>
  )
}

export default AppBar





 function DropDownAdminPanel() {
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
    <Button className='text-black'
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
      <NotificationBell/>
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

      <Notifications/>

    </Menu>
  </div>
  )
}


