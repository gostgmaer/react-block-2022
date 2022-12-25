import React from "react";
import { MdFavorite, MdThumbUp } from "react-icons/md";
import { Data } from "../../asstets/staticData/Data";

const CommentList = () => {
  return (
    <div className="CommentListData">
      <ul className="comments">
        {Data?.comments.map((item) => {
          return (
            <li key={item.id}>
              <div className="user"><div className="username"><img src={item.avator} width={30} height={30} alt="" /> <span>{item.name}</span></div>  <div className="like"><MdFavorite></MdFavorite> <MdThumbUp></MdThumbUp></div></div>
              <div className="content">
                <p>{item.text}</p>
               
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentList;
