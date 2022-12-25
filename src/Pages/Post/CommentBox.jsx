// @ts-nocheck
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Data } from "../../asstets/staticData/Data";
import { useGlobalContext } from "../../Utils/Context/Context";
const CommentBox = () => {

  const {comment, setComment} =useGlobalContext()


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [comments, setcomments] = useState("");
  const [isremember, setIsremember] = useState(false);

  const SubmitCommnet = () => {
    let obj = {
      name: name,
      email: email,
      website: website,
      comment: comments,avator:'',
      id:uuidv4()
    };
    Data.comments.find((data)=>data.email===email)?console.log('Email address already Exist'):Data.comments.push(obj);

    console.log(obj);
    console.log(Data.comments);
  };

  return (
    <div className="CommentBox">
      <h3>Leave a Reply </h3>
      <p>
        Your email address will not be published. Required fields are marked{" "}
        <span className="important">*</span>
      </p>
      <div className="forms">
       
        <div className="topfields">
         
          <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="name *" className="col" required />
          <input
            type="text" onChange={(e)=>setEmail(e.target.value)}
            placeholder="email address *"
            className="col"
            required
          />
          <input type="text" onChange={(e)=>setWebsite(e.target.value)} placeholder="webiste" className="col" />
        </div>
        <textarea
          className="col-lg" onChange={(e)=>setcomments(e.target.value)}
          cols="30"
          placeholder="Add a Comment"
          rows="8"></textarea>
        <div className="checkbox col-lg">
          {" "}
          <input type="checkbox" onChange={(e)=>setIsremember(!isremember)} name="save" id="issave" />
          <span>
            Save my name, email, and website in this browser for the next time I
            comment.
          </span>
        </div>
        <div className="btn-submit">
          <button onClick={SubmitCommnet} className="btn">
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
