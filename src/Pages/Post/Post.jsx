import moment from "moment";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../asstets/staticData/Data";
import { useGlobalContext } from "../../Utils/Context/Context";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import './post.scss'
const Post = () => {
  const { singleNews, setSingleNews } = useGlobalContext();

  const postID = useParams().id;
  const UpdatePost = () => {
    setSingleNews(
      ...Data.newsList.articles.filter((item) => item._id === postID)
    );
  };
  useEffect(() => {
    UpdatePost();
    console.log(singleNews);
  }, [postID]);

  return (
    <div className="Post">
      <div className="postWrapper">
        <div className="article">
          <article>
           <div className="top"> <div className="image">
              <img src={singleNews?.media} alt="" />
            </div>
            <div className="title"><h1>{singleNews?.title.toUpperCase()}</h1></div>
            <div className="meta">
              <span className="auther">{singleNews?.author}</span>/
              <span className='date'>{moment(singleNews?.published_date).format('MMMM Do YYYY')}</span>/
              <span className='topic'>{singleNews?.topic}</span>
            </div></div>
            <div className="details">
              <p>{singleNews?.summary}</p>
            </div>
          </article>
        </div>
        <div className="coomentsSection">
          <div className="commentForm">
            <CommentBox></CommentBox>
          </div>
          <div className="commentList">
            <CommentList></CommentList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
