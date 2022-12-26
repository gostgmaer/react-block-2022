import React from "react";
import { Data } from "../../asstets/staticData/Data";

const Sidebar = () => {
  const unique = Array.from(
    new Set(Data.newsList.articles.map((item) => item.topic))
  );
  console.log("unique", unique);
  return <div className="Sidebar">
    <div className="sidebarWrapper">
        <div className="searchBlock"> <div className="serach"><input placeholder="Search..." type='search' className="form-control" /></div> </div>
        <div className="FeaturedPost">
           
        </div>
        <div className="categories"></div>
        <div className="ads"></div>
    </div>
  </div>;
};

export default Sidebar;
