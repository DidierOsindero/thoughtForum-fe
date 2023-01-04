import { User } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../../context";
import { dummyData } from "../../utils/dummyPostData";
import { dummyUserData } from "../../utils/dummyUserData";
import { MyPostsListView } from "../templates/MyPostsListView";
const currentUser = dummyUserData[0];

export const ProfilePage = (): JSX.Element => {
  //GET user from context
  const { user } = useContext(UserContext) as {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
  };

  return (
    <div className="ProfilePageContainer">
      <h2 style={{ textAlign: "center" }}>{user?.displayName}</h2>
      <div className="leftOfPage">
        <MyPostsListView
          postDataArray={dummyData.filter(
            (el) => el.user_id === currentUser.userid
          )}
        />
      </div>

      <div className="rightOfPage">
        <div className="createPostSettingsContainer">
          <h4>Category:</h4>
          <button>Thought</button>
          <br />
          <button>Science</button>
          <br />
          <button>Art</button>
        </div>
      </div>
    </div>
  );
};
