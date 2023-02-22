import { Link } from "react-router-dom";
import { auth, googleAuthProvider } from "../configureFirebase";
import { signInWithPopup, User } from "firebase/auth";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

export const NavBar = (): JSX.Element => {
  //Define Toast
  const signedOutNotif = () => toast("You have been signed-out ✅");

  const { user, setUser } = useContext(UserContext) as {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
  };

  const handSignInClicked = async () => {
    const userCredential = await signInWithPopup(auth, googleAuthProvider);
    setUser(userCredential.user);
  };

  const handSignOutClicked = async () => {
    auth.signOut();
    setUser(null);
    signedOutNotif();
  };

  useEffect(() => {
    function handleAuthStateChange(user: User | null) {
      setUser(user);
    }

    const unsubscribeFn = auth.onAuthStateChanged(handleAuthStateChange);
    return unsubscribeFn;
  }, [setUser]);

  return (
    <>
      <ul className="navBarList">
        <li className="navBarListItem">
          <Link to="./" className="navBarItemLink">
            <div className="navBarItemText">Home</div>
          </Link>
        </li>
        <li className="dropdown">
          <Link to="./posts" className="navBarItemLink">
            <div className="dropbtn">Posts</div>
          </Link>
          <div className="dropdownContent">
            <Link to="./posts/thought" className="dropdownItem">
              Thought
            </Link>
            <Link to="./posts/science" className="dropdownItem">
              Science
            </Link>
            <Link to="./posts/art" className="dropdownItem">
              Art
            </Link>
          </div>
        </li>
        <li className="navBarListItem">
          <Link to="./write" className="navBarItemLink">
            <div className="navBarItemText">Write</div>
          </Link>
        </li>

        {/* Only Display PROFILE if user is signed in */}

        {user && (
          <li className="navBarListItem">
            <Link to="./profile" className="navBarItemLink">
              <div className="navBarItemText">Profile</div>
            </Link>
          </li>
        )}
        <li className="navBarListItemRight">
          {user === null && (
            <div className="navBarItemText" onClick={handSignInClicked}>
              Sign-In
            </div>
          )}
          {user && (
            <Link to="./" className="navBarItemLink">
              <div className="navBarItemText" onClick={handSignOutClicked}>
                Sign-Out
              </div>
            </Link>
          )}
        </li>
      </ul>
    </>
  );
};
