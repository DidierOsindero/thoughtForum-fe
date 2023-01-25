import { PostsListView } from "../templates/PostsListView";
import axios from "axios";
import { BASE_URL, IPostData } from "../../App";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

export const PostsPage = (): JSX.Element => {
  const [postDataArray, setPostDataArray] = useState<IPostData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPostsData = async () => {
    setIsLoading(true);
    const { data } = await axios.get(BASE_URL + "posts");
    setIsLoading(false);
    setPostDataArray(data);
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div className="postsPageContainer">
      <h1 className="postsPageTitle">All Posts</h1>
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
