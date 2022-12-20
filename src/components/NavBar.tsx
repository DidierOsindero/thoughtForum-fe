import { Link } from "react-router-dom";

export const NavBar = (): JSX.Element => {
  return (
    <ul className="navBarList">
      <li>
        <Link to="./" className="navBarItem">
          Home
        </Link>
      </li>
      <div className="dropdown">
        <li>
          <Link to="./posts" className="navBarItem">
            Posts
          </Link>
        </li>
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
      </div>
      <li>
        <Link to="./write" className="navBarItem">
          Write
        </Link>
      </li>
      <li>
        <Link to="./profile" className="navBarItem">
          Profile
        </Link>
      </li>
    </ul>
  );
};
