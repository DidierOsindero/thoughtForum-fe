import { Link } from "react-router-dom";
import { IPostData } from "../App";
import { convertTimeStampToDate } from "../utils/convertTimeStampToDate";

export interface IPostProps {
  postData: IPostData;
}

export function Post({ postData }: IPostProps): JSX.Element {
  return (
    <div className="post">
      <Link to={"/posts/" + postData.post_id}>
        <div className="ctnPostIMG">
          <img src={postData.img} alt="" className="postIMG" />
        </div>
        <div className="postDetails">
          <p className="postUserName">
            <i>{postData.username && postData.username}</i>
          </p>
        </div>
        <div className="postTitle">
          <h3>{postData.title}</h3>
        </div>
        <p className="postContent">{postData.content.slice(0, 200)}...</p>
        <p className="postDate">
          <i>{convertTimeStampToDate(postData.creation_date)}</i>
        </p>
      </Link>
    </div>
  );
}
