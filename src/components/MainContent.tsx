import { HomePage } from "./pages/HomePage";
import { PostsPage } from "./pages/PostsPage";

export const MainContent = (): JSX.Element => {
  return (
    <div className="mainContentWrapper">
      <HomePage />
      <PostsPage />
    </div>
  );
};
