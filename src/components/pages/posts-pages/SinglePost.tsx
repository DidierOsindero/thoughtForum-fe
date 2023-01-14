import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, IPostData } from "../../../App";
import { convertTimeStampToDate } from "../../../utils/convertTimeStampToDate";

export const SinglePost = (): JSX.Element => {
  const { id } = useParams();

  const [postData, setPostData] = useState<IPostData>();
  const getPostsData = async () => {
    const { data } = await axios.get(BASE_URL + "posts/" + id);
    setPostData(data[0]);
  };

  useEffect(() => {
    getPostsData();
  }, []);

  if (postData) {
    return (
      <div className="post">
        <img src={postData.img} alt="" className="postIMG" />
        <div className="postDetails">
          <p className="postUserName">
            <i>{postData.username && postData.username}</i>
          </p>
        </div>
        <div className="postTitle">
          <h3>{postData.title}</h3>
        </div>
        <p className="postContent">{postData.content}</p>
        <p className="postDate">
          <i>{convertTimeStampToDate(postData.creation_date)}</i>
        </p>
      </div>
    );
  } else {
    return <h1>Loading Full Post</h1>;
  }
};
