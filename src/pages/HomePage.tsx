import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, IPostData } from "../App";
import { Post } from "../components/Post";

export const HomePage = (): JSX.Element => {
  const [featuredPostsArr, setFeaturedPostsArr] = useState<IPostData[]>([]);

  useEffect(() => {
    const getFeaturedPosts = async () => {
      const { data } = await axios.get(BASE_URL + "posts/feature");
      setFeaturedPostsArr(data);
    };

    getFeaturedPosts();
  }, []);

  return (
    <div className="homePageContainer">
      <div className="welcomeMessageContainer">
        <h1>
          Welcome to
          {<br />}
          Thought Forum!
          {<br />}{" "}
        </h1>
      </div>
      <h3 className="additional-message">
        Write down your ideas and share them with others!
      </h3>

      <div className="ctn-posts">
        {featuredPostsArr.map((postData) => {
          return <Post postData={postData} key={postData.post_id} />;
        })}
      </div>

      <div className="ctn-food-for-thought">
        <div className="thought">
          <p className="food-for-thought-txt">
            <b className="food-for-thought-title">Food for Thought</b>
            <br />
            <br />
            "All the world's a stage, and all the men and women merely players.
            They have their exits and their entrances; and one man in his time
            plays many parts." <br />
            <br />
            <i className="food-for-thought-author">William Shakespeare</i>
          </p>
        </div>
      </div>
    </div>
  );
};
