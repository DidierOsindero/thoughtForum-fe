export const HomePage = (): JSX.Element => {
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

      <div className="ctn-food-for-thought">
        <div className="thought">
          <h3 className="food-for-thought-txt">
            "All the world's a stage, and all the men and women merely players.
            They have their exits and their entrances; and one man in his time
            plays many parts." <br />
            <br />
            <i>Shakespeare</i>
          </h3>
        </div>
      </div>
    </div>
  );
};
