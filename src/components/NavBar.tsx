import { Link } from "react-router-dom";

export const NavBar = (): JSX.Element => {
  return (
    <ul className="navBarListTest">
      <li className="listItemTest">
        <Link to="./" className="navBarItemTest">
          <div className="pageLinkContainer">Home</div>
        </Link>
      </li>
      <li className="dropdown">
        <Link to="./posts" className="navBarItemTest">
          <div className="dropbtn">Posts</div>
        </Link>
        <div className="dropdown-content">
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
      <li className="listItemTest">
        <Link to="./write" className="navBarItemTest">
          <div className="pageLinkContainer">Write</div>
        </Link>
      </li>
      <li className="listItemTest">
        <Link to="./profile" className="navBarItemTest">
          <div className="pageLinkContainer">Profile</div>
        </Link>
      </li>
    </ul>
  );
};
