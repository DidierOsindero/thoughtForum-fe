import { useEffect, useState } from "react";

export const WritePage = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      setImageURL(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <div className="WritePageContainer">
      <form>
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
              <h3>Hubris in Hamlet</h3>

              <textarea
                className="createPostTextInput"
                placeholder="Write here..."
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
            <br />
            <input type="radio" name="postTypeRadio" value="thought" required />
            <label htmlFor="postTypeRadio">Thought</label>
            <br />
            <input type="radio" name="postTypeRadio" value="science" />
            <label htmlFor="postTypeRadio"> Science</label>
            <br />
            <input type="radio" name="postTypeRadio" value="art" />
            <label htmlFor="postTypeRadio"> Art</label>
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
