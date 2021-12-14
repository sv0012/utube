import './_sidebar.scss';
import React from 'react';
import {
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied,
    MdSubscriptions,
 } from 'react-icons/md';
import { log_out } from '../../redux/actions/auth.action';
import { useDispatch } from 'react-redux';



const Sidebar = ({sidebar,handleToggleSidebar}) => {
   const dispatch = useDispatch();
   const handleLogOut = () => {
     
         dispatch(log_out())
      
   }


    return (
        <nav className={sidebar ? "sidebar open" : "sidebar"} onClick={()=>handleToggleSidebar()}>
            <li>
            <MdHome size={23} />
            <span>Home</span>
         </li>
         <li>
            <MdSubscriptions size={23} />
            <span>Subscriptions</span>
         </li>

         <li>
            <MdThumbUp size={23} />
            <span>Liked Video</span>
         </li>

         <li>
            <MdHistory size={23} />
            <span>History</span>
         </li>

         <li>
            <MdLibraryBooks size={23} />
            <span>Library</span>
         </li>
         <li>
            <MdSentimentDissatisfied size={23} />
            <span>I don't Know</span>
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
