import axios from "axios";
import { BASE_URL, IPostData } from "../../App";

export interface IMyPostProps {
  postData: IPostData;
}

export function MyPost({ postData }: IMyPostProps): JSX.Element {
  const indexOfT = postData.creation_date.indexOf("T");
  const postDate = postData.creation_date.slice(0, indexOfT);

  const handleDeletePost = async (postId: number) => {
    const response = await axios.delete(
      BASE_URL + "profile/posts?postid=" + postId
    );
    console.log("Deleted Post:", response.data);
  };
  return (
    <div className="post">
      <img src={postData.img} alt="" className="postIMG" />
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
