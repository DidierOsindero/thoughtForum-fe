import axios from "axios";
import { useEffect, useState } from "react";
import { PostType, PostPrivacy, BASE_URL } from "../../App";

interface INewPostData {
  img: string | null;
  title: string;
  content: string;
  category: PostType | null;
  privacy: PostPrivacy | null;
}

export const WritePage = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [newPostData, setNewPostData] = useState<INewPostData>({
    img: null,
    title: "",
    content: "",
    category: null,
    privacy: null,
  });

  useEffect(() => {
    if (selectedImage) {
      setImageURL(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

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
    console.log("FORM SUBMITTED");
    const config = { headers: { Authorization: "The Authorised Guy" } };
    const reponse = await axios.post(BASE_URL + "write", newPostData, config);
    const createdPost = reponse.data;
    console.log("Created Post", createdPost);
  };

  console.log(newPostData);
  return (
    <div className="WritePageContainer">
      <form onSubmit={(e) => handleSubmitPost(e)}>
        <div className="leftOfPage">
          <div className="createPostContainer">
            <div className="previewImageContainer">
              {imageURL && selectedImage && (
                <>
                  <img
                    className="createPostIMG"
                    src={imageURL}
                    alt={selectedImage.name}
                    height="100px"
                  />
                </>
              )}
              {!(imageURL && selectedImage) && (
                <>
                  <img
                    className="createPostIMG"
                    src="https://images.unsplash.com/photo-1635352723068-ffb3b922397f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGluc2VydCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                    height="100px"
                  />
                </>
              )}
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
            <label className="chooseIMG submitButton" htmlFor="img">
              {imageURL && selectedImage && <span>Change image</span>}
              {!(imageURL && selectedImage) && <span>Choose an image</span>}
            </label>
            <input
              className="createPostInputIMG"
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={(e) =>
                setSelectedImage(e.target.files ? e.target.files[0] : null)
              }
            ></input>

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
};
