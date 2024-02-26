import { Link, useLocation } from "react-router-dom"

export const pageLinks =[
  {
    name: "Recipes",
    path: "/recipes",
    icon: "fa fa-cutlery"
  },
  {
    name: "Home",
    path: "/",
    icon: "fa fa-home"
  },
  {
    name: "Settings",
    path: "/settings",
    icon: "fa fa-gear fa-spin"
  },
  
]


// export const aTagLinks = pageLinks.map(el => (<a className= "active"href={el.path} key={el.name}>{el.name}</a>))
// export const aTagLinksWIcons = pageLinks.map(el => (<a className={window.location.pathname == pageLinks.path ? "active" : ""} href={el.path} key={el.name}>{<i className={el.icon}></i>} {el.name}</a>))

