import React from 'react'
import '../css/header.css';
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardArrowDown} from "react-icons/md"
import { HiOutlineGlobeAlt} from "react-icons/hi";
import {RiAccountPinCircleFill} from "react-icons/ri"
const Header = () => {
  return (
    <div>
        <div className="headerfile">
            <div className="fileimage">
               <img src={require("../images/logo.png")} alt="company "/>
            </div>
            <div className="searchbar">
               <input type="text" placeholder="Start your Search"  /> <AiOutlineSearch className="icon"/>
            </div>
            <div className="account">
               <p>Become a Host</p>
               <MdKeyboardArrowDown className="arrow"/>
              < HiOutlineGlobeAlt className="globe"/>
              <RiAccountPinCircleFill className="account1"/>
            </div>
        </div>
        <hr />
        <div className="date">
           <p>Search Dates</p>
           {/* <hr /> */}
        </div>
        {/* <Firstdiv /> */}
        {/* <Card /> */}
    </div>
  )
}

export default Header;