import axios from "axios";
import { BASE_URL, IPostData } from "../App";

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
      <div className="ctn-post-img">
        <img src={postData.img} alt="" className="post-img" />
      </div>
      <p className="post-date">
        <i>{postDate}</i>
      </p>
      <div className="post-title">
        <h3>{postData.title}</h3>
      </div>
      <p>
        <i>{postData.category}</i>
      </p>
      <p className="post-content">{postData.content}</p>
      <button
        className="delete-post-btn"
        onClick={() => handleDeletePost(postData.post_id)}
      >
        Delete
      </button>
      <p className="user-post-privacy">
        <i>{postData.privacy}</i>
      </p>
    </div>
  );
}
