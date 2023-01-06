import { IPostData, PostCategory } from "../App";

export const filterPostsByCategory = (
  postsArray: IPostData[],
  filterCategory: PostCategory | "all"
): IPostData[] => {
  return postsArray.filter((post) => {
    if (filterCategory !== "all") {
      return post.category === filterCategory;
    }
    return post;
  });
};
