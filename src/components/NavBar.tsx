import { Link } from "react-router-dom";
import { auth, googleAuthProvider } from "../configureFirebase";
import { signInWithPopup, User } from "firebase/auth";
import { useState } from "react";

export const NavBar = (): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);

  const handSignInClicked = async () => {
    console.log("Signing In User");
    const userCredential = await signInWithPopup(auth, googleAuthProvider);
    setUser(userCredential.user);
  };

  const handSignOutClicked = async () => {
    auth.signOut();
    setUser(null);
    alert("You have been signed-out");
  };

  console.log("USER:", user);
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
        <li className="navBarListItem">
          <Link to="./profile" className="navBarItemLink">
            <div className="navBarItemText">Profile</div>
          </Link>
        </li>
        <li className="navBarListItemRight">
          {user === null && (
            <div className="navBarItemText" onClick={handSignInClicked}>
              Sign-In
            </div>
          )}
          {user && (
            <div className="navBarItemText" onClick={handSignOutClicked}>
              Sign-Out
            </div>
          )}
        </li>
      </ul>
    </>
  );
};
