import React from "react";
import { MdSearch } from "react-icons/md";
import { Data } from "../../../asstets/staticData/Data";

export const Topbar = () => {
  return (
    <div className="Topbar">
      <div className="left">
        <ul className="Pages">
         {Data.navItem.map((item)=> <li key={item.id} >{item.texts}</li>)}
        </ul>
      </div>
      <div className="right">
        <ul className="socialMedia">
        {Data.socialMedia.map((item)=> <li key={item.id} ><img src={item.icon} alt="" /></li>)}
        <li ><MdSearch></MdSearch></li>
        </ul>
      </div>
    </div>
  );
};
