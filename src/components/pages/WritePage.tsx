export const WritePage = (): JSX.Element => {
  return (
    <div className="WritePageContainer">
      <div className="leftOfPage">
        <div className="createPostContainer">
          <img
            src="https://images.unsplash.com/photo-1553782749-5ab8693a5f4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hha2VzcGVhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="featuredPostIMG"
          />
          <div className="featuredPostTitle">
            <h3>Hubris in Hamlet</h3>
            <form>
              <textarea
                className="createPostTextInput"
                placeholder="Write here..."
                required
              ></textarea>
              <br />
              <input
                className="submitCreatedPost"
                type="submit"
                value="✅ Post"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="rightOfPage"> </div>
    </div>
  );
};
