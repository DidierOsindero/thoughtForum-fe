import axios from "axios";
import { User } from "firebase/auth";
import { useCallback, useContext, useEffect, useState } from "react";
import { IPostData, BASE_URL, PostCategory } from "../../App";
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
    if (data) {
      setUserPostDataArray(data);
    }
  }, [user]);

  useEffect(() => {
    getUserPostsData();
  }, [getUserPostsData]);

  console.log("USER POSTS", userPostDataArray);

  const handleFilter = (category: PostCategory) => {
    console.log("trying to filter by", category);
  };

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
          <button onClick={() => handleFilter("thought")}>Thought</button>
          <button onClick={() => handleFilter("science")}>Science</button>
          <button onClick={() => handleFilter("art")}>Art</button>
        </div>
      </div>
    </div>
  );
};
