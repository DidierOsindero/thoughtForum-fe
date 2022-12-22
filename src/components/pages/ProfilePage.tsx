import { dummyData } from "../../utils/dummyPostData";
import { MyPostsListView } from "../templates/MyPostsListView";
const dummyUserID = "1";
const dummyUserName = "Kawasi James";

export const ProfilePage = (): JSX.Element => {
  return (
    <div className="ProfilePageContainer">
      <h2 style={{ textAlign: "center" }}>{dummyUserName}</h2>
      <div className="leftOfPage">
        <MyPostsListView
          postDataArray={dummyData.filter((el) => el.userid === dummyUserID)}
        />
      </div>

      <div className="rightOfPage">
        <div className="createPostSettingsContainer">
          <h4>Category:</h4>
          <button>Thought</button>
          <br />
          <button>Science</button>
          <br />
          <button>Art</button>
        </div>
      </div>
    </div>
  );
};
