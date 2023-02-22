import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL, IPostData } from "../App";
import { convertTimeStampToDate } from "../utils/convertTimeStampToDate";

export interface IMyPostProps {
  postData: IPostData;
  getUserPostsData: () => Promise<void>;
}

export function MyPost({
  postData,
  getUserPostsData,
}: IMyPostProps): JSX.Element {
  const indexOfT = postData.creation_date.indexOf("T");
  const postDate = postData.creation_date.slice(0, indexOfT);

  const handleDeletePost = async (postId: number) => {
    await axios.delete(BASE_URL + "posts/profile?postid=" + postId);
    getUserPostsData();
  };

  return (
    <div className="ctn-post">
      <Link to={"/posts/" + postData.post_id}>
        <div className="ctn-post-img">
          <img src={postData.img} alt="" className="post-img" />
        </div>
        <div className="postDetails">
          <p className="postUserName">
            <i>{postData.username && postData.username}</i>
          </p>
        </div>
        <div className="post-title">
          <h3>{postData.title}</h3>
        </div>
        <p className="post-content">{postData.content.slice(0, 200)}...</p>
        <p className="post-date">
          <i>{convertTimeStampToDate(postData.creation_date)}</i>
        </p>
        <button
          className="delete-post-btn"
          onClick={() => handleDeletePost(postData.post_id)}
        >
          Delete
        </button>
        <p className="user-post-privacy">
          <i>{postData.privacy}</i>
        </p>
      </Link>
    </div>
  );
}
