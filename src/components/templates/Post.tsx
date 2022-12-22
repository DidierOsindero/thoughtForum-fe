import { IPostData } from "../../App";

export interface IPostProps {
  postData: IPostData;
}

export function Post({ postData }: IPostProps) {
  return (
    <div className="post">
      <img src={postData.img} alt="" className="postIMG" />
      <div className="postTitle">
        <h3>{postData.title}</h3>
        <p className="postContent">{postData.content}</p>
      </div>
    </div>
  );
}
