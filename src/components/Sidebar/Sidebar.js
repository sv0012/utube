import './_sidebar.scss';
import React from 'react';
import {
    MdExitToApp,
    MdThumbUp,
    MdHome,
    MdSubscriptions,
 } from 'react-icons/md';
import { log_out } from '../../redux/actions/auth.action';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



const Sidebar = ({sidebar,handleToggleSidebar}) => {
   const dispatch = useDispatch();
   const handleLogOut = () => {
     
         dispatch(log_out())
      
   }


    return (
        <nav className={sidebar ? "sidebar open" : "sidebar"} onClick={()=>handleToggleSidebar()}>
           <Link to='/'>
            <li>
               <MdHome size={23} />
               <span>Home</span>
            </li>
         </Link>
         <Link to='/feed/subscriptions'>
            <li>
               <MdSubscriptions size={23} />
               <span>Subscriptions</span>
            </li>
         </Link>
         <li>
         <Link to='/feed/likedVideos'>
            <MdThumbUp size={23} />
            <span>Liked Videos</span>
         </Link>   
         </li>

        
      

         <hr />

         <li onClick={handleLogOut}>
            <MdExitToApp size={23} />
            <span>Log Out</span>
         </li>

         <hr />
        </nav>
    )
}

export default Sidebar
