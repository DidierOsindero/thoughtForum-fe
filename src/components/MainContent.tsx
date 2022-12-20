import { HomePage } from "./pages/HomePage";
import { PostsPage } from "./pages/PostsPage";
import { Route, Routes } from "react-router-dom";

export const MainContent = (): JSX.Element => {
  return (
    <div className="mainContentWrapper">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </div>
  );
};
