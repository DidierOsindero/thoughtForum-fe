import { HomePage } from "./pages/HomePage";
import { PostsPage } from "./pages/PostsPage";
import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import { WritePage } from "./pages/WritePage";

export const MainContent = (): JSX.Element => {
  return (
    <div className="mainContentWrapper">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </div>
  );
};
