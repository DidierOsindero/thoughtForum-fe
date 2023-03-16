import { hexCodesArray } from "../data/hexCodesArray";

export const colourPicker = (username: string): string => {
  if (username === "" || undefined) throw Error("Invalid input");
  return hexCodesArray[hashUsername(username)];
};
export const hashUsername = (username: string) => {
  let total = 0;
  const WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(username.length, 100); i++) {
    const char = username[i];
    const value = char.charCodeAt(0);
    total = (total * WEIRD_PRIME + value) % hexCodesArray.length;
  }
  return total;
};
