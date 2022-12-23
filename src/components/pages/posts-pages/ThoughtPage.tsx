import { useRef } from "react";
import { dummyData } from "../../../utils/dummyPostData";
import { PostsListView } from "../../templates/PostsListView";

export const ThoughtPage = (): JSX.Element => {
  const thoughtDummyDatauseRef = useRef(
    dummyData.filter((el) => el.category === "thought")
  );
  return (
    <div className="postsPageContainer">
      <PostsListView postDataArray={thoughtDummyDatauseRef.current} />
    </div>
  );
};
