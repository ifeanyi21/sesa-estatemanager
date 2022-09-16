import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AppBar from '../AppBar/AppBar'
import SideBar from '../SideBar/SideBar'
import User from '../store/auth'
import CSS from './Layout.module.css'


function Layout({children}) {
  const {currentUser} = useContext(User)


  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  return (
    <RequireAuth>
       <div> 
      <AppBar/>
        <div className={`${CSS.LayoutMain} flex justify-between pb-32`}>
            <SideBar/>
            <div className={`${CSS.LayoutContainer} mt-8`}style={{width:'80%'}}>
                {children}
            </div>
        </div>
    </div>
    </RequireAuth>
   
  )
}

export default Layout