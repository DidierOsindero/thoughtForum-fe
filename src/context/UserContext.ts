import { User } from "firebase/auth";
import { createContext } from "react";
export const UserContext = createContext<{
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
} | null>(null);
