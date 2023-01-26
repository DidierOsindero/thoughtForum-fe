import axios from "axios";
import { useEffect, useState } from "react";
import { IPostData, BASE_URL } from "../../../App";
import { PostsListView } from "../../templates/PostsListView";
import { Triangle } from "react-loader-spinner";

export const ArtPage = (): JSX.Element => {
  const [postDataArray, setPostDataArray] = useState<IPostData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPostsData = async () => {
    setIsLoading(true);
    const { data } = await axios.get(BASE_URL + "posts/art");
    setIsLoading(false);
    setPostDataArray(data);
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div className="postsPageContainer">
      <h1 className="postsPageTitle">Art</h1>
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
