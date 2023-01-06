import axios from "axios";
import { useEffect, useState } from "react";
import { IPostData, BASE_URL } from "../../../App";
import { PostsListView } from "../../templates/PostsListView";

export const ArtPage = (): JSX.Element => {
  const [postDataArray, setPostDataArray] = useState<IPostData[]>([]);
  const getPostsData = async () => {
    const { data } = await axios.get(BASE_URL + "posts/art");
    setPostDataArray(data);
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div className="postsPageContainer">
      <h1 className="postsPageTitle">Art</h1>
      {postDataArray && <PostsListView postDataArray={postDataArray} />}
    </div>
  );
};
