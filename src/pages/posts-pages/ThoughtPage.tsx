import axios from "axios";
import { useEffect, useState } from "react";
import { IPostData, BASE_URL } from "../../App";
import { PostsListView } from "../../components/PostsListView";
import { Triangle } from "react-loader-spinner";

export const ThoughtPage = (): JSX.Element => {
  const [postDataArray, setPostDataArray] = useState<IPostData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPostsData = async () => {
    setIsLoading(true);
    const { data } = await axios.get(BASE_URL + "posts/thought");
    setIsLoading(false);
    setPostDataArray(data);
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div className="postsPageContainer">
      <h1 className="postsPageTitle">Thought</h1>
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
      {postDataArray && <PostsListView postDataArray={postDataArray} />}
    </div>
  );
};
