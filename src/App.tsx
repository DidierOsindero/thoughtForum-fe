import "./App.css";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";

type PostType = "thought" | "science" | "art";
type PostPrivacy = "public" | "private";
export interface IPostData {
  user_id: string;
  post_id: string;
  img: string;
  title: string;
  content: string;
  type: PostType;
  privacy: PostPrivacy;
  hearts: number;
  date: string;
}

export interface IUserData {
  userid: string;
  first_name: string;
  last_name: string;
}

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
