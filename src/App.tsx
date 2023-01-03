import "./App.css";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";
import { UserTokenContext } from "./context";
import { useState } from "react";
import { User } from "firebase/auth";

export type PostType = "thought" | "science" | "art";
export type PostPrivacy = "public" | "private";
export interface IPostData {
  user_id: string;
  post_id: number;
  img: string;
  title: string;
  content: string;
  category: PostType;
  privacy: PostPrivacy;
  hearts: number;
  creation_date: string;
}

export interface IUserData {
  userid: string;
  first_name: string;
  last_name: string;
}

export const BASE_URL = "http://localhost:4000/";

function App(): JSX.Element {
  const [userToken, setUserToken] = useState<string | null>(null);
  return (
    <div className="app">
      <UserTokenContext.Provider value={{ userToken, setUserToken }}>
        <Header />
        <MainContent />
        <Footer />
      </UserTokenContext.Provider>
    </div>
  );
}

export default App;
