import { useRef } from "react";
import { dummyData } from "../../../utils/dummyPostData";
import { PostsListView } from "../../templates/PostsListView";

export const SciencePage = (): JSX.Element => {
  const scienceDummyDatauseRef = useRef(
    dummyData.filter((el) => el.category === "science")
  );
  return (
    <div className="postsPageContainer">
      <PostsListView postDataArray={scienceDummyDatauseRef.current} />
    </div>
  );
};
