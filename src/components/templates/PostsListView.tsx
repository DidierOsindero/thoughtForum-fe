import { IPostData } from "../../App";
import { Post } from "./Post";
export interface IPostsListViewProps {
  postDataArray: IPostData[];
}

export function PostsListView({
  postDataArray,
}: IPostsListViewProps): JSX.Element {
  return (
    <div className="postsContainer">
      {postDataArray.map((postData) => {
        return <Post postData={postData} key={postData.post_id} />;
      })}
    </div>
  );
}
