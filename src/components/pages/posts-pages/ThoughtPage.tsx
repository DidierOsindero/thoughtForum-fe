import axios from "axios";
import { useEffect, useState } from "react";
import { IPostData, BASE_URL } from "../../../App";

import { PostsListView } from "../../templates/PostsListView";

export const ThoughtPage = (): JSX.Element => {
  const [postDataArray, setPostDataArray] = useState<IPostData[]>([]);
  const getPostsData = async () => {
    const { data } = await axios.get(BASE_URL + "posts/thought");
    setPostDataArray(data);
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div className="postsPageContainer">
      <h1 className="postsPageTitle">Thought</h1>
      {postDataArray && <PostsListView postDataArray={postDataArray} />}
    </div>
  );
};
