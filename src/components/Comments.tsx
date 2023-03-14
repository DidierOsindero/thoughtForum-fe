import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../App";
import { convertTimeStampToDate } from "../utils/convertTimeStampToDate";
import "./Comments.css";
interface CommentsProps {
  postId: number;
}

interface ICommentsData {
  comment_id: number;
  post_id: number;
  comment: string;
  creation_date: string;
  user_id: string;
  username: string;
}

export const Comments = ({ postId }: CommentsProps): JSX.Element => {
  const [commentsData, setCommentsData] = useState<ICommentsData[]>([]);
  const getComments = async (postId: number) => {
    const { data } = await axios.get(`${BASE_URL}posts/${postId}/comments`);
    setCommentsData(data);
  };

  useEffect(() => {
    getComments(postId);
  }, [postId]);
  if (commentsData[0]) {
    return (
      <div className="ctn-comments">
        {commentsData.map((comment) => {
          return (
            <div className="ctn-comment" key={comment.comment_id}>
              <p>
                <b className="comment-username">{comment.username}:</b>{" "}
                {comment.comment}
              </p>
              <p>{convertTimeStampToDate(comment.creation_date)}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <></>;
  }
};
