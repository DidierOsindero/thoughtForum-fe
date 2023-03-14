export const CommentsInput = (): JSX.Element => {
  return (
    <div className="comment-input-and-button">
      <textarea
        className="comment-input"
        placeholder="Share your thoughts..."
      ></textarea>
      <button className="upload-comment-btn">+</button>
    </div>
  );
};
