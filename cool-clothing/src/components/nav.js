import { Link } from "react-router-dom";
import "../css.css";

//this is the navigation component
function Nav() {
  //returns a navbar at the top of the page
  return (
    <nav id="nav">
      <ul>
        <h3 id="logo" style={{ display: "inline" }}>
          Cool Wears
        </h3>
        {/* links to all the pages on the site*/}
        <li>
          <Link style={{ color: "white" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={{ color: "white" }} to="/Shopping">
            Shop
          </Link>
        </li>
        <li>
          <Link style={{ color: "white" }} to="/Profile">
            Profile
          </Link>
        </li>
        <li>
          <Link style={{ color: "white" }} to="/Legal">
            Legal
          </Link>
        </li>
        <li>
          <Link style={{ color: "white" }} to="/Cost">
            Calculate
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
