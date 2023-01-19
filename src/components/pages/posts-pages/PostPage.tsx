import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, IPostData } from "../../../App";
import { convertTimeStampToDate } from "../../../utils/convertTimeStampToDate";
import { RecommendedPost } from "./RecommendedPost";

export const PostPage = (): JSX.Element => {
  const { id } = useParams();

  const [postData, setPostData] = useState<IPostData>();
  const [recommendedPostData, setRecommendedPostData] = useState<IPostData[]>(
    []
  );

  const getPostData = useCallback(async () => {
    const { data } = await axios.get(BASE_URL + "posts/" + id);
    setPostData(data[0]);
  }, [setPostData, id]);

  const getRecommendedPostsData = useCallback(async () => {
    const { data } = await axios.get(
      BASE_URL + "posts/recommend/" + postData?.category
    );
    setRecommendedPostData(data);
  }, [postData]);

  useEffect(() => {
    getPostData();
  }, [getPostData]);

  useEffect(() => {
    getRecommendedPostsData();
  }, [postData, getRecommendedPostsData]);

  if (postData) {
    return (
      <div className="postPageContainer">
        <div className="postPageLeftContainer">
          <div className="postPagePostContainer">
            <img src={postData.img} alt="" className="postPageIMG" />
            <div className="postPagePostDetails">
              <p className="postPagePostUserName">
                <i>{postData.username && postData.username}</i>
              </p>
            </div>
            <div className="postPageTitle">
              <h3>{postData.title}</h3>
            </div>
            <p className="postPagePostContent">{postData.content}</p>
            <p className="postPagePostDate">
              <i>{convertTimeStampToDate(postData.creation_date)}</i>
            </p>
          </div>
        </div>
        <div className="postPageRightContainer">
          <div className="recommendedPostsContainer">
            <p className="recommendedText">Recommended:</p>
            {recommendedPostData.map((postData) => {
              return (
                <div key={postData.post_id}>
                  <RecommendedPost postData={postData} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading Full Post</h1>;
  }
};
