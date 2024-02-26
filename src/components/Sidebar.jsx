import { useEffect, useState } from "react";
import {  pageLinks } from "../links/links";
import { Link } from "react-router-dom";
function Sidebar({close}) {
  const [url,setUrl] = useState('')
  useEffect(()=>{
    setUrl(window.location.pathname)
  })
  return (
    <div className="side-bar" onClick={close}>
      <div className="side-bar-link mono">{pageLinks.map(el => (<Link className={url === el.path ? "active" : ""} to={el.path} key={el.name}>{<i className={el.icon}></i>} {el.name}</Link>))}</div>
    </div>
  );
}

export default Sidebar;