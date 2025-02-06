import React from 'react'
// importing all icons from react-icon/vsc
import * as Icons from 'react-icons/vsc'
import { Link, useLocation } from 'react-router-dom';

const SidebarLinks = ({ element }) => {

    // icon
    const Icon = Icons[element.icon];

    // location
    const location = useLocation();


  return (
    <Link to={element.path}>
      <div className={`w-[222px] flex flex-row gap-3 py-2 px-8 items-center ${location.pathname === element.path ? "bg-[#002868]  border-l-2 border-[#002868] " : ""} `} >
          <Icon className={` ${location.pathname === element.path ? "text-yellow-50" : "text-black"}`} />
          <p className={` font-medium text-base ${location.pathname === element.path ? " text-yellow-50" : "text-black"}`} >{element.name}</p>
      </div>
    </Link>
  )
}

export default SidebarLinks;