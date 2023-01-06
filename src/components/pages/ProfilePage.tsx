import axios from "axios";
import { User } from "firebase/auth";
import { useCallback, useContext, useEffect, useState } from "react";
import { IPostData, BASE_URL, PostCategory } from "../../App";
import { UserContext } from "../../context";
import { filterPostsByCategory } from "../../utils/filterPostsByCategory";
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

  const [currentFilterCategory, setCurrentFilterCategory] = useState<
    PostCategory | "all"
  >("all");

  return (
    <div className="ProfilePageContainer">
      <h2 style={{ textAlign: "center" }}>{user?.displayName}</h2>
      <div className="leftOfPage">
        {filterPostsByCategory(userPostDataArray, currentFilterCategory)
          .length < 1 &&
          userPostDataArray.length > 0 && <h3>No posts in this category</h3>}
        {userPostDataArray.length < 1 && <h3>No posts</h3>}
        <MyPostsListView
          postDataArray={filterPostsByCategory(
            userPostDataArray,
            currentFilterCategory
          )}
          getUserPostsData={getUserPostsData}
        />
      </div>

      <div className="rightOfPage">
        <div className="createPostSettingsContainer">
          <h4>Category:</h4>
          <button onClick={() => setCurrentFilterCategory("all")}>All</button>
          <button onClick={() => setCurrentFilterCategory("thought")}>
            Thought
          </button>
          <button onClick={() => setCurrentFilterCategory("science")}>
            Science
          </button>
          <button onClick={() => setCurrentFilterCategory("art")}>Art</button>
        </div>
      </div>
    </div>
  );
};
