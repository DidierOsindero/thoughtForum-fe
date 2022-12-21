import { Link } from "react-router-dom";

export const NavBar = (): JSX.Element => {
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
          <div className="navBarItemText">Sign-In</div>
        </li>
      </ul>
    </>
  );
};
