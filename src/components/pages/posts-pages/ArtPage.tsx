import { useRef } from "react";
import { dummyData } from "../../../utils/dummyPostData";
import { PostsListView } from "../../templates/PostsListView";

export const ArtPage = (): JSX.Element => {
  const artDummyDatauseRef = useRef(
    dummyData.filter((el) => el.type === "art")
  );
  return (
    <div className="postsPageContainer">
      <PostsListView postDataArray={artDummyDatauseRef.current} />
    </div>
  );
};
