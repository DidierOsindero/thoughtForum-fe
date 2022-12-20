import { Link } from "react-router-dom";

export const NavBar = (): JSX.Element => {
  return (
    <ul className="navBarList">
      <li>
        <Link to="./" className="navBarItem">
          Home
        </Link>
      </li>
      <li>
        <Link to="./posts" className="navBarItem">
          Posts
        </Link>
      </li>
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
