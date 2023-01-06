import "./App.css";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";
import { UserContext } from "./context";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";

export type PostCategory = "thought" | "science" | "art";
export type PostPrivacy = "public" | "private";
export interface IPostData {
  user_id: string;
  username: string;
  post_id: number;
  img: string;
  title: string;
  content: string;
  category: PostCategory;
  privacy: PostPrivacy;
  hearts: number;
  creation_date: string;
}

export interface IUserData {
  userid: string;
  username: string;
}

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://thought-forum-backend.onrender.com/"
    : "http://localhost:4000/";

function App(): JSX.Element {
  //Console log new user details
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="app">
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <MainContent />
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
