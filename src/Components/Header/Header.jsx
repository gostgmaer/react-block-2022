import React from "react";
import { Data } from "../../asstets/staticData/Data";
import './header.scss'

import {MdReceipt } from "react-icons/md";
import { Topbar } from "./TopBar/Topbar";


const Header = () => {
  return (
    <div className="Header">
      <div className="topbarWrapper">
        <Topbar></Topbar>
      </div>
      <div className="headerWrapper">
      <div className="headerContainer">
        <div className="logo">
        <MdReceipt></MdReceipt>
        </div>
        <div className="navigation">
          <ul className="navitems">
            {Data.navItem.map((item)=><li key={item.id} className="navlink">{item.texts}</li>)}
            
            <li className="navlink btn">Conact Us</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
