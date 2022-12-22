import { IPostData } from "../../App";
import { Post } from "./Post";
export interface IPostsListViewProps {
  postDataArray: IPostData[];
}

export function PostsListView({ postDataArray }: IPostsListViewProps) {
  return (
    <div className="postsContainer">
      {postDataArray.map((postData) => {
        return <Post postData={postData} />;
      })}
    </div>
  );
}
