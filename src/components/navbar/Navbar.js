import React from 'react'
import {appLogo1} from "../../assets/index"
import { navLinkData } from '../../constants';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b [1px] border-b-gray-600">
      <div className="h-20 flex ">
        <img src={appLogo1} alt="logo" />
      </div>
      <div>
        <ul className = "flex item-center gap-10">
          {navLinkData.map(({_id, title, link})=> (
              <li className ="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" key={_id}>
               <Link 
               activeClass="active"
               to={link}
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
               >
                {title}
               </Link> 
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar