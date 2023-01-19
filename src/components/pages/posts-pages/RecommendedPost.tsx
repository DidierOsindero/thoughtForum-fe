import { IPostData } from "../../../App";

interface IRecommendedPost {
  postData: IPostData;
}

export const RecommendedPost = ({
  postData,
}: IRecommendedPost): JSX.Element => {
  return (
    <div className="recommendedPostContainer">
      <div className="recommendedPostGrid">
        <div className="recommendedPostImgContainer">
          <img className="recommendedPostImg" src={postData.img} alt="" />
        </div>
        <div className="recommendedPostTitleAndTeaserContainer">
          <span className="recommendedPostTitle">{postData.title} </span>
          <br />
          <span className="recommendedPostTeaser">
            {postData.content.slice(0, 110)}...
          </span>
        </div>
      </div>
    </div>
  );
};
