import { PostsListView } from "../templates/PostsListView";
//import { dummyData } from "../../utils/dummyPostData";
import axios from "axios";
import { BASE_URL, IPostData } from "../../App";
import { useEffect, useState } from "react";

export const PostsPage = (): JSX.Element => {
  const [postDataArray, setPostDataArray] = useState<IPostData[]>([]);
  const getPostsData = async () => {
    const { data } = await axios.get(BASE_URL + "posts");
    setPostDataArray(data);
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div className="postsPageContainer">
      <h1 className="postsPageTitle">All Posts</h1>
      {postDataArray && <PostsListView postDataArray={postDataArray} />}
    </div>
  );
};
