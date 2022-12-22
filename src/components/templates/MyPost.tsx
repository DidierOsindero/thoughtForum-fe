import { IPostData } from "../../App";

export interface IMyPostProps {
  postData: IPostData;
}

export function MyPost({ postData }: IMyPostProps): JSX.Element {
  return (
    <div className="post">
      <img src={postData.img} alt="" className="postIMG" />
      <p className="postDate">
        <i>{postData.date}</i>
      </p>
      <div className="postTitle">
        <h3>{postData.title}</h3>
      </div>
      <p className="postContent">{postData.content}</p>
      <button>Edit</button>
    </div>
  );
}
