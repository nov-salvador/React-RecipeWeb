import { useState, useEffect } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import {pageLinks} from '../links/links';
function NavBar() {
  const [showSidebar, setShowSidebar]=useState(false)
  let location = useLocation()
  function closeSidebar(){
    setShowSidebar(false)
  }
  return (
    <>
      <div className="nav-bar">
        <Link to="/" className='logo bubbles'><span>i</span>LUTO Mo</Link>
        <div className='nav-link'>
          {pageLinks.map(el => (<NavLink  className={location.pathname == el.path ? "active" : ""}to={el.path} key={el.name}>{el.name}</NavLink>))}
        </div>
        <div onClick={() => setShowSidebar(!showSidebar)} className='sidebar-icon'>
          <i className={showSidebar ? "fa fa-bars close" : "fa fa-bars open"}></i>
          <i className={showSidebar ? "fa fa-close open" : "fa fa-close close"}></i>
        </div>
        {showSidebar && <Sidebar close={closeSidebar}/>}
      </div>
      
    </>
  );
}

export default NavBar;