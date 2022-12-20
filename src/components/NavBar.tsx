import { Link } from "react-router-dom";

export const NavBar = (): JSX.Element => {
  return (
    <ul className="navBarListTest">
      <li className="dropdown">
        <div className="dropbtn">
          <Link to="./posts" className="navBarItemTest">
            Posts
          </Link>
        </div>
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
    </ul>
    // <ul className="navBarList">
    //   <li>
    //     <Link to="./" className="navBarItem">
    //       Home
    //     </Link>
    //   </li>
    //   <div className="dropdown">
    //     <Link to="./posts" className="navBarItem">
    //       Posts
    //     </Link>
    //     {/* <div className="dropdownContent">
    //       <Link to="./posts/thought" className="dropdownItem">
    //         Thought
    //       </Link>
    //       <Link to="./posts/science" className="dropdownItem">
    //         Science
    //       </Link>
    //       <Link to="./posts/art" className="dropdownItem">
    //         Art
    //       </Link>
    //     </div> */}
    //     <div className="dropdownContent">
    //       <div className="dropdownItem">Flags</div>
    //       <div className="dropdownItem">Capitals</div>
    //       <div className="dropdownItem">Population</div>
    //     </div>
    //   </div>
    //   <li>
    //     <Link to="./write" className="navBarItem">
    //       Write
    //     </Link>
    //   </li>
    //   <li>
    //     <Link to="./profile" className="navBarItem">
    //       Profile
    //     </Link>
    //   </li>
    // </ul>
  );
};
