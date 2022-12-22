import { IPostData } from "../../App";
import { MyPost } from "./MyPost";
export interface IMyPostsListViewProps {
  postDataArray: IPostData[];
}

export function MyPostsListView({
  postDataArray,
}: IMyPostsListViewProps): JSX.Element {
  return (
    <div className="postsContainer">
      {postDataArray.map((postData) => {
        return <MyPost postData={postData} key={postData.postID} />;
      })}
    </div>
  );
}
