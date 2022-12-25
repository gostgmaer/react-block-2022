import moment from "moment/moment";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Utils/Context/Context";
import "./postcard.scss";
const Postcard = ({ item }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const { postId, setPostId } = useGlobalContext();

  const setID = (id) => {
    setPostId(id);
  };

  return (
    <div className="Postcard">
      <div className="postCardWrapper">
        <div class="tagList">
          <ul>
            <li>{item.topic}</li>
          </ul>
        </div>
        <div  class="title">
          <Link  to={`/post/${item._id}`}>
            {item.title.substring(0, 32)}...
          </Link>
        </div>
        <div class="imageBlock">
          <Link to={`/post/${item.title.replace(/\s+/g, "-").toLowerCase()}`}>
            <img src={item.media} alt="" />
          </Link>
        </div>
        <div class="summery">
          <p>
            {isShowMore ? item.excerpt : `${item.excerpt.substring(0, 55)}...`}{" "}
            <span onClick={() => setIsShowMore(!isShowMore)}>
              {isShowMore ? "Show Less" : "Show More"}
            </span>{" "}
          </p>
        </div>
        <div class="metaData">
          <span>{item.author.toUpperCase()}</span>/
          <span className="date">
            {moment(item.published_date).format("MMMM Do YYYY")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Postcard;
