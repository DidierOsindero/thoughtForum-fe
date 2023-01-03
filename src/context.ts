import { createContext } from "react";
export const UserTokenContext = createContext<{
  userToken: string | null;
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
} | null>(null);
