import axios from "axios";
import { User } from "firebase/auth";
import { useCallback, useContext, useEffect, useState } from "react";
import { IPostData, BASE_URL, PostCategory } from "../App";
import { UserContext } from "../context/UserContext";
import { filterPostsByCategory } from "../utils/filterPostsByCategory";
import { MyPostsListView } from "../components/MyPostsListView";
import { Triangle } from "react-loader-spinner";

export const ProfilePage = (): JSX.Element => {
  //GET user from context
  const { user } = useContext(UserContext) as {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
  };

  const [userPostDataArray, setUserPostDataArray] = useState<IPostData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getUserPostsData = useCallback(async () => {
    setIsLoading(true);
    const token = await user?.getIdToken();
    const config = { headers: { Authorization: "Bearer " + token } };
    const { data } = await axios.get(BASE_URL + "posts/profile", config);
    setIsLoading(false);
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
          isLoading === false &&
          userPostDataArray.length > 0 && <h3>No posts in this category</h3>}

        {userPostDataArray.length < 1 && isLoading === false && (
          <h3>No posts</h3>
        )}

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

      {isLoading && (
        <div className="ctn-loading-triangle">
          <Triangle
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperClass="loading-triangle"
            visible={true}
          />
        </div>
      )}
    </div>
  );
};
