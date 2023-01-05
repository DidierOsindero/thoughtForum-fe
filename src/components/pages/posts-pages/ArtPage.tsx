import { useRef } from "react";
import { dummyData } from "../../../utils/dummyPostData";
import { PostsListView } from "../../templates/PostsListView";

export const ArtPage = (): JSX.Element => {
  const artDummyDatauseRef = useRef(
    dummyData.filter((el) => el.category === "art")
  );
  return (
    <div className="postsPageContainer">
      <h1 className="postsPageTitle">Art</h1>
      <PostsListView postDataArray={artDummyDatauseRef.current} />
    </div>
  );
};
