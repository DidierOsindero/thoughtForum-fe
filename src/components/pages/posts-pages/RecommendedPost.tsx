import { IPostData } from "../../../App";

interface IRecommendedPost {
  postData: IPostData;
}

export const RecommendedPost = ({
  postData,
}: IRecommendedPost): JSX.Element => {
  return (
    <div className="recommendedPostContainer">
      <img className="recommendedPostImg" src={postData.img} />
      <p className="recommendedPostTitle">{postData.title}</p>
      <p className="recommendedPostTeaser">{postData.content}</p>
    </div>
  );
};
