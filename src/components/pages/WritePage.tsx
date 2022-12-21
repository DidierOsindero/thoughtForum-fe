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
      <div className="leftOfPage">
        <div className="createPostContainer">
          <label className="chooseIMG submitButton" htmlFor="img">
            Choose an image
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

          {imageURL && selectedImage && (
            <>
              <div>Image Preview:</div>
              <img
                className="createPostIMG"
                src={imageURL}
                alt={selectedImage.name}
                height="100px"
              />
            </>
          )}
          <div className="featuredPostTitle">
            <h3>Hubris in Hamlet</h3>
            <form>
              <textarea
                className="createPostTextInput"
                placeholder="Write here..."
                required
              ></textarea>
              <br />
              <input className="submitButton" type="submit" value="✅ Post" />
            </form>
          </div>
        </div>
      </div>
      <div className="rightOfPage"> </div>
    </div>
  );
};
