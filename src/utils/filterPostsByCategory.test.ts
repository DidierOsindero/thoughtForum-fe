import { filterPostsByCategory } from "./filterPostsByCategory";
import {
  dummyArtData,
  dummyData,
  dummyScienceData,
  dummyThoughtData,
} from "../data/dummyPostData";

describe("Given a category, filterPostsByCategory returns all posts which match the given category", () => {
  it("should return all posts from dummyData", () => {
    expect(filterPostsByCategory(dummyData, "all")).toStrictEqual(dummyData);
  });

  it("should only return art posts from dummyData", () => {
    expect(filterPostsByCategory(dummyData, "art")).toStrictEqual(dummyArtData);
  });

  it("should only return science posts from dummyData", () => {
    expect(filterPostsByCategory(dummyData, "science")).toStrictEqual(
      dummyScienceData
    );
  });

  it("should only return thought posts from dummyData", () => {
    expect(filterPostsByCategory(dummyData, "thought")).toStrictEqual(
      dummyThoughtData
    );
  });
});
