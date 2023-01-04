import { useRef } from "react";
import { dummyData } from "../../../utils/dummyPostData";
import { PostsListView } from "../../templates/PostsListView";

export const ThoughtPage = (): JSX.Element => {
  const thoughtDummyDatauseRef = useRef(
    dummyData.filter((el) => el.category === "thought")
  );
  return (
    <div className="postsPageContainer">
      <h1 className="postsPageTitle">Thought</h1>
      <PostsListView postDataArray={thoughtDummyDatauseRef.current} />
    </div>
  );
};
