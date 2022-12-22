import { IPostData } from "../../App";
import { dummyUserData } from "../../utils/dummyUserData";

export interface IPostProps {
  postData: IPostData;
}

export function Post({ postData }: IPostProps): JSX.Element {
  const creatorOfPost = dummyUserData.find(
    (user) => postData.user_id === user.userid
  );
  return (
    <div className="post">
      <img src={postData.img} alt="" className="postIMG" />
      <div className="postDetails">
        <p className="postUserName">
          <i>
            {creatorOfPost?.first_name} {creatorOfPost?.last_name}
          </i>
        </p>
      </div>
      <div className="postTitle">
        <h3>{postData.title}</h3>
      </div>
      <p className="postContent">{postData.content}</p>
      <p className="postDate">
        <i>{postData.creation_date}</i>
      </p>
    </div>
  );
}
