export const HomePage = (): JSX.Element => {
  return (
    <div className="homePageContainer">
      <div className="welcomeMessageContainer">
        <h1>
          Welcome to
          {<br />}
          Thought Forum!
          {<br />} {<br />}
          Write down your ideas and share them with others!
        </h1>
      </div>
      <div className="featuredPostsContainer">
        <div className="featuredPost">
          <img
            src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80"
            alt=""
            className="featuredPostIMG"
          />
          <div className="featuredPostTitle">
            <h3>Why do we think the way we do?</h3>

            <p className="featuredPostContent">
              In their most common sense, the terms thought and thinking refer
              to conscious cognitive processes that can happen independently of
              sensory stimulation. Their most paradigmatic forms are judging,
              reasoning, concept formation, problem solving, and deliberation.
              But other mental processes, like considering an idea, memory, or
              imagination, are also often included. These processes can happen
              internally independent of the sensory organs, unlike perception.{" "}
            </p>
          </div>
        </div>

        <div className="featuredPost">
          <img
            src="https://images.unsplash.com/photo-1553782749-5ab8693a5f4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hha2VzcGVhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="featuredPostIMG"
          />
          <div className="featuredPostTitle">
            <h3>Hubris in Hamlet</h3>

            <p className="featuredPostContent">
              The Tragedy of Hamlet, Prince of Denmark, often shortened to
              Hamlet (/ˈhæmlɪt/), is a tragedy written by William Shakespeare
              sometime between 1599 and 1601. It is Shakespeare's longest play,
              with 29,551 words. Set in Denmark, the play depicts Prince Hamlet
              and his attempts to exact revenge against his uncle, Claudius, who
              has murdered Hamlet's father in order to seize his throne and
              marry Hamlet's mother.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
