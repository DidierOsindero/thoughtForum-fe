import "./App.css";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";

export type PostType = "thought" | "science" | "art";
export type PostPrivacy = "public" | "private";
export interface IPostData {
  user_id: string;
  post_id: number;
  img: string;
  title: string;
  content: string;
  type: PostType;
  privacy: PostPrivacy;
  hearts: number;
  creation_date: string;
}

export interface IUserData {
  userid: string;
  first_name: string;
  last_name: string;
}

export const BASE_URL = "http://localhost:5002/";

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
