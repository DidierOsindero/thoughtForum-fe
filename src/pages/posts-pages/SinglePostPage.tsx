import axios from "axios";
import { useState, useEffect, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, IPostData } from "../../App";
import { convertTimeStampToDate } from "../../utils/convertTimeStampToDate";
import { RecommendedPost } from "../../components/RecommendedPost";
import { User } from "firebase/auth";
import { UserContext } from "../../context/UserContext";
import { Comments } from "../../components/Comments";
import "./SinglePostsPage.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
export const SinglePostPage = (): JSX.Element => {
  const { id } = useParams();
  const { user } = useContext(UserContext) as {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
  };
  const [postData, setPostData] = useState<IPostData>();
  const [recommendedPostData, setRecommendedPostData] = useState<IPostData[]>(
    []
  );
  const [isHearted, setIsHearted] = useState<boolean>(false);

  const getPostsAndRecommendedPostsData = useCallback(async () => {
    try {
      //----------------------------------------------------------------------get post data for current post
      const responseCurrentPost = await axios.get(BASE_URL + "posts/" + id);
      const currentPostData: IPostData = responseCurrentPost.data[0];
      setPostData(currentPostData);

      //----------------------------------------------------------------------get user hearts data for current post
      if (user) {
        const token = await user?.getIdToken();
        const config = { headers: { Authorization: "Bearer " + token } };
        const responseUserHeart = await axios.get(
          BASE_URL + "posts/" + id + "/hearts",
          config
        );

        console.log("responseUserHeart", responseUserHeart.data);
        if (responseUserHeart.data) setIsHearted(true);
        else setIsHearted(false);
      }

      //----------------------------------------------------------------------get post data for recommended posts
      let responseRecommendedPosts;
      //check if there is a User signed in, if so, send user token in GET request
      if (user) {
        const token = await user?.getIdToken();
        const config = { headers: { Authorization: "Bearer " + token } };
        responseRecommendedPosts = await axios.get(
          BASE_URL + "posts/recommend/" + currentPostData.category + "/" + id,
          config
        );
      } else {
        responseRecommendedPosts = await axios.get(
          BASE_URL + "posts/recommend/" + currentPostData.category + "/" + id
        );
      }
      const recommendPostArr = responseRecommendedPosts.data;
      setRecommendedPostData(recommendPostArr);
    } catch (error) {
      console.error("There was an error fetching data for this page:", error);
    }
  }, [id, user]);

  useEffect(() => {
    getPostsAndRecommendedPostsData();
  }, [getPostsAndRecommendedPostsData]);

  const handleHearted = async () => {
    if (user) {
      const token = await user?.getIdToken();
      const config = { headers: { Authorization: "Bearer " + token } };
      await axios
        .post(BASE_URL + "posts/" + id + "/hearts", null, config)
        .then(() => {
          setIsHearted(true);

          //Add 1 to currentPostData hearts (on client side rather than refreshing from DB)
          const currentPostData = postData as IPostData;
          setPostData({
            ...currentPostData,
            hearts: Number(currentPostData.hearts) + 1,
          });
        })
        .catch((error) => {
          console.error("There was an error hearting the post:", error);
        });
    }
  };

  const handleUnHearted = async () => {
    if (user) {
      const token = await user?.getIdToken();
      const config = { headers: { Authorization: "Bearer " + token } };
      await axios
        .delete(BASE_URL + "posts/" + id + "/hearts", config)
        .then(() => {
          setIsHearted(false);

          //Remove 1 to currentPostData hearts (on client side rather than refreshing from DB)
          const currentPostData = postData as IPostData;
          setPostData({
            ...currentPostData,
            hearts: Number(currentPostData.hearts) - 1,
          });
        })
        .catch((error) => {
          console.error("There was an error un-hearting the post:", error);
        });
    }
  };

  console.log(isHearted);

  if (postData) {
    return (
      <div className="postPageContainer">
        <div className="postPageLeftContainer">
          <div className="postPagePostContainer">
            <img src={postData.img} alt="" className="postPageIMG" />
            <div className="postPagePostDetails">
              {user && !isHearted && (
                <AiOutlineHeart
                  size={35}
                  className="outlined-heart heart"
                  onClick={handleHearted}
                />
              )}
              {user && isHearted && (
                <AiFillHeart
                  size={35}
                  className="filled-heart heart"
                  onClick={handleUnHearted}
                />
              )}
              {!user && (
                <>
                  <AiFillHeart className="no-user-heart" />
                </>
              )}

              <span
                className={!user ? "hearts-count-no-user" : "hearts-count-user"}
              >
                {" "}
                - {postData.hearts}
              </span>
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
          <hr className="divider" />
          <h3>Comments</h3>
          <Comments postId={postData.post_id} />
        </div>
        <div className="post-page-right-container">
          <div className="recommended-posts-container">
            <p className="recommended-text">Recommended:</p>
            {recommendedPostData.length > 0 &&
              recommendedPostData.map((postData) => {
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
    return (
      <>
        {" "}
        <h1 className="loading-page-text">Loading Full Post</h1>
      </>
    );
  }
};
