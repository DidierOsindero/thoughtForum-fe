import { IPostData } from "../../App";

export interface IMyPostProps {
  postData: IPostData;
}

export function MyPost({ postData }: IMyPostProps): JSX.Element {
  return (
    <div className="post">
      <img src={postData.img} alt="" className="postIMG" />
      <div className="postTitle">
        <h3>{postData.title}</h3>
        <p className="postContent">{postData.content}</p>
      </div>
      <button>Edit</button>
    </div>
  );
}
