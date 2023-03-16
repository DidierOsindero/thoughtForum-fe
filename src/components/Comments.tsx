import axios from "axios";
import { User } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../App";
import { UserContext } from "../context/UserContext";
import { convertTimeStampToDate } from "../utils/convertTimeStampToDate";
import "./Comments.css";
import { CommentsInput } from "./CommentsInput";
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
  //GET user from context
  const { user } = useContext(UserContext) as {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
  };

  //Define Toast
  const sharedCommentNotif = () => toast("You have shared a comment ✅");

  //User input and comments states
  const [userInput, setUserInput] = useState<string>("");
  const [commentsData, setCommentsData] = useState<ICommentsData[]>([]);

  //Fetch comments on mount
  useEffect(() => {
    getComments(postId);
  }, [postId]);

  //Handler to submit comment
  const handleSubmitComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await postComment(userInput);
      sharedCommentNotif();
      await getComments(postId);
      setUserInput("");
    } catch (error) {
      console.error(error);
    }
  };

  //GET request for comments
  const getComments = async (postId: number) => {
    const { data } = await axios
      .get(`${BASE_URL}posts/${postId}/comments`)
      .catch(function (error) {
        console.error("There was an error getting the comments:");
        throw error;
      });
    setCommentsData(data);
  };

  //POST request for comments
  const postComment = async (commentText: string) => {
    const token = await user?.getIdToken();
    const config = { headers: { Authorization: "Bearer " + token } };
    await axios
      .post(
        `${BASE_URL}posts/comments`,
        { post_id: postId, commentText },
        config
      )
      .catch(function (error) {
        console.error("There was an error posting the comment:");
        throw error;
      });
  };

  return (
    <div className="ctn-comments">
      {commentsData.map((comment) => {
        return (
          <div className="ctn-comment" key={comment.comment_id}>
            <p>
              <b className="comment-username">{comment.username}:</b>{" "}
              {comment.comment}
            </p>
            <p className="comment-date">
              {convertTimeStampToDate(comment.creation_date)}
            </p>
          </div>
        );
      })}
      <CommentsInput
        userInput={userInput}
        setUserInput={setUserInput}
        handleSubmitComment={handleSubmitComment}
      />
    </div>
  );
};
