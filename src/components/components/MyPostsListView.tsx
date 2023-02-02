import { IPostData } from "../../App";
import { MyPost } from "./MyPost";
export interface IMyPostsListViewProps {
  postDataArray: IPostData[];
  getUserPostsData: () => Promise<void>;
}

export function MyPostsListView({
  postDataArray,
  getUserPostsData,
}: IMyPostsListViewProps): JSX.Element {
  return (
    <div className="postsContainer">
      {postDataArray.map((postData) => {
        return (
          <MyPost
            postData={postData}
            key={postData.post_id}
            getUserPostsData={getUserPostsData}
          />
        );
      })}
    </div>
  );
}
