import { filterPostsByCategory } from "./filterPostsByCategory";
import {
  dummyArtData,
  dummyData,
  dummyScienceData,
  dummyThoughtData,
} from "../data/dummyPostData";
test("Given a category, filterPostsByCategory returns all posts which match the given category", () => {
  expect(filterPostsByCategory(dummyData, "all")).toStrictEqual(dummyData);
  expect(filterPostsByCategory(dummyData, "art")).toStrictEqual(dummyArtData);
  expect(filterPostsByCategory(dummyData, "science")).toStrictEqual(
    dummyScienceData
  );
  expect(filterPostsByCategory(dummyData, "thought")).toStrictEqual(
    dummyThoughtData
  );
});
