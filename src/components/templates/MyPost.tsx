import axios from "axios";
import { BASE_URL, IPostData } from "../../App";

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
    await axios.delete(BASE_URL + "profile/posts?postid=" + postId);
    getUserPostsData();
  };

  return (
    <div className="post">
      <div className="ctnPostIMG">
        <img src={postData.img} alt="" className="postIMG" />
      </div>
      <p className="postDate">
        <i>{postDate}</i>
      </p>
      <div className="postTitle">
        <h3>{postData.title}</h3>
      </div>
      <p>
        <i>{postData.category}</i>
      </p>
      <p className="postContent">{postData.content}</p>
      <button
        className="delete-post-btn"
        onClick={() => handleDeletePost(postData.post_id)}
      >
        Delete
      </button>
      <p className="userPostPrivacy">
        <i>{postData.privacy}</i>
      </p>
    </div>
  );
}
