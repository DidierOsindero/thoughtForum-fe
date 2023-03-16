import { User } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

interface CommentsInputProps {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmitComment: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export const CommentsInput = ({
  userInput,
  setUserInput,
  handleSubmitComment,
}: CommentsInputProps): JSX.Element => {
  //GET user from context
  const { user } = useContext(UserContext) as {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
  };

  if (user) {
    return (
      <div className="comment-input-and-button">
        <form onSubmit={(e) => handleSubmitComment(e)}>
          <textarea
            className="comment-input"
            placeholder="Share your thoughts..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          ></textarea>
          <button className="upload-comment-btn">+</button>
        </form>
      </div>
    );
  } else {
    return <h5>Sign-in to share your thoughts</h5>;
  }
};
