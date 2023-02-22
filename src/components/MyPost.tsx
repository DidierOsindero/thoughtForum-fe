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
        <div className="postDetails"></div>
        <div className="post-title">
          <h3>{postData.title}</h3>
        </div>
        <p className="post-content">{postData.content.slice(0, 200)}...</p>
        <p className="post-date">
          <i>{convertTimeStampToDate(postData.creation_date)}</i>
        </p>
        <p className="user-post-privacy">
          <i>{postData.privacy}</i>
        </p>
      </Link>
      <button
        className="delete-post-btn"
        onClick={() => handleDeletePost(postData.post_id)}
      >
        Delete
      </button>
    </div>
  );
}
