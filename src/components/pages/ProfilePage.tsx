import axios from "axios";
import { User } from "firebase/auth";
import { useCallback, useContext, useEffect, useState } from "react";
import { IPostData, BASE_URL } from "../../App";
import { UserContext } from "../../context";
import { MyPostsListView } from "../templates/MyPostsListView";

export const ProfilePage = (): JSX.Element => {
  //GET user from context
  const { user } = useContext(UserContext) as {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
  };

  const [userPostDataArray, setUserPostDataArray] = useState<IPostData[]>([]);

  const getUserPostsData = useCallback(async () => {
    const token = await user?.getIdToken();
    const config = { headers: { Authorization: "Bearer " + token } };
    const { data } = await axios.get(BASE_URL + "profile/posts", config);
    setUserPostDataArray(data);
  }, [user]);

  useEffect(() => {
    getUserPostsData();
  }, [getUserPostsData]);

  console.log("USER POSTS", userPostDataArray);

  return (
    <div className="ProfilePageContainer">
      <h2 style={{ textAlign: "center" }}>{user?.displayName}</h2>
      <div className="leftOfPage">
        <MyPostsListView
          postDataArray={userPostDataArray}
          getUserPostsData={getUserPostsData}
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
