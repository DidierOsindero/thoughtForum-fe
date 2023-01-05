import axios from "axios";
import { User } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { PostType, PostPrivacy, BASE_URL } from "../../App";
import { UserContext } from "../../context";

interface INewPostData {
  img: string | null;
  title: string;
  content: string;
  category: PostType | null;
  privacy: PostPrivacy | null;
}

export const WritePage = (): JSX.Element => {
  //Image Address for placeholder image
  const placeholderImage =
    "https://images.unsplash.com/photo-1635352723068-ffb3b922397f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGluc2VydCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";

  //GET user from context
  const { user } = useContext(UserContext) as {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
  };

  const [imageURLInput, setImageURLInput] = useState<string>("");
  const [imageURL, setImageURL] = useState<string>(placeholderImage);

  const handleSaveImage = () => {
    setImageURL(imageURLInput);
    setImageURLInput("");
  };

  const [newPostData, setNewPostData] = useState<INewPostData>({
    img: placeholderImage,
    title: "",
    content: "",
    category: null,
    privacy: null,
  });

  useEffect(() => {
    setNewPostData((prev) => {
      return { ...prev, img: imageURL };
    });
  }, [imageURL]);

  const handlePostType = (chosenType: PostType) => {
    setNewPostData((prev) => {
      return { ...prev, category: chosenType };
    });
  };

  const handlePrivacyChoice = (chosenPrivacySetting: PostPrivacy) => {
    setNewPostData((prev) => {
      return { ...prev, privacy: chosenPrivacySetting };
    });
  };

  const handleSubmitPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = await user?.getIdToken();
    const config = { headers: { Authorization: "Bearer " + token } };
    const response = await axios.post(BASE_URL + "write", newPostData, config);
    const createdPost = response.data;
    alert("Post Submitted");
    setNewPostData({
      img: imageURL,
      title: "",
      content: "",
      category: null,
      privacy: null,
    });
    console.log("Created Post", createdPost);
  };

  if (user) {
    return (
      <div className="WritePageContainer">
        <form onSubmit={(e) => handleSubmitPost(e)}>
          <div className="leftOfPage">
            <div className="createPostContainer">
              <div className="previewImageContainer">
                <img
                  className="createPostIMG"
                  src={imageURL}
                  alt=""
                  height="100px"
                />
              </div>
              <div className="featuredPostTitle">
                <textarea
                  value={newPostData.title}
                  onChange={(e) =>
                    setNewPostData({ ...newPostData, title: e.target.value })
                  }
                  className="createPostTitleInput"
                  placeholder="Write title here..."
                  required
                  maxLength={50}
                ></textarea>
                <br />
                <textarea
                  value={newPostData.content}
                  onChange={(e) =>
                    setNewPostData({ ...newPostData, content: e.target.value })
                  }
                  className="createPostTextInput"
                  placeholder="Write post content here..."
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="rightOfPage">
            <div className="createPostSettingsContainer">
              <input
                className="createPostInputIMG"
                type="text"
                placeholder="Paste Image Address"
                value={imageURLInput}
                onChange={(e) => setImageURLInput(e.target.value)}
              ></input>
              <button
                className="chooseIMG submitButton"
                onClick={handleSaveImage}
              >
                Save Image
              </button>
              <div className="postTypeRadioContainer">
                <p>
                  <b>Type:</b>
                </p>

                <input
                  type="radio"
                  name="postTypeRadio"
                  value="thought"
                  required
                  onChange={(e) => handlePostType(e.target.value as PostType)}
                />
                <label htmlFor="postTypeRadio">Thought</label>
                <br />
                <input
                  type="radio"
                  name="postTypeRadio"
                  value="science"
                  onChange={(e) => handlePostType(e.target.value as PostType)}
                />
                <label htmlFor="postTypeRadio"> Science</label>
                <br />
                <input
                  type="radio"
                  name="postTypeRadio"
                  value="art"
                  onChange={(e) => handlePostType(e.target.value as PostType)}
                />
                <label htmlFor="postTypeRadio"> Art</label>
              </div>

              <div className="postTypeRadioContainer">
                <p>
                  <b>Privacy:</b>
                </p>

                <input
                  type="radio"
                  name="postPrivacyRadio"
                  value="public"
                  required
                  onChange={(e) =>
                    handlePrivacyChoice(e.target.value as PostPrivacy)
                  }
                />
                <label htmlFor="postPrivacyRadio">Public</label>
                <br />
                <input
                  type="radio"
                  name="postPrivacyRadio"
                  value="private"
                  onChange={(e) =>
                    handlePrivacyChoice(e.target.value as PostPrivacy)
                  }
                />
                <label htmlFor="postPrivacyRadio"> Private</label>
              </div>
              <br />
              <div>
                <input className="submitButton" type="submit" value="✅ Post" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    return <h1>Please Sign-In to write a post</h1>;
  }
};
