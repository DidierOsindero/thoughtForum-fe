import "./App.css";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";

export interface IPostData {
  userID: string;
  postID: string;
  img: string;
  title: string;
  content: string;
  type: string;
  privacy: string;
  hearts: number;
  date: string;
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
