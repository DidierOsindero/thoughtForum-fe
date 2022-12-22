import { PostsListView } from "../templates/PostsListView";
import { dummyData } from "../../utils/dummyPostData";

export const PostsPage = (): JSX.Element => {
  return (
    <div className="postsPageContainer">
      <PostsListView postDataArray={dummyData} />
    </div>
  );
};
