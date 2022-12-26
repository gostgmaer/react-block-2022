import React from "react";
import { Data } from "../../asstets/staticData/Data";
import Postcard from "../../Components/Postcard/Postcard";
import './posts.scss'





const Posts = () => {
  return (
    <div className="Posts">
      <div className="postWrapper">
        <div className="top"></div>
        <div className="middle">
        
          <div className="itemList">
            {Data.newsList.articles.map((item) => (
              <Postcard key={item._id} item={item}></Postcard>
            ))}
          </div>
        </div>
        <div className="pageIndex">
          <div className="left">
            <div className="PageNumber">
             Page:  <span>{Data.newsList.page}</span> / <span>{Data.newsList.total_pages}</span>
            </div>
          </div>
          <div className="middleItems">
            <ul>
              <li className="btn" >{"Previous"}</li>
              {Array.from(Array(5).keys()).map((item) => (
                <li className="btn" key={item}>{item + 1}</li>
              ))}
              <li className="btn">{"Next"}</li>
            </ul>
          </div>
          <div className="right">
           Total Items: <div className="totalItem"><span>{Data.newsList.page_size}</span> / <span>{Data.newsList.total_hits}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
