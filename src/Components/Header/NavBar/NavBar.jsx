import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({ toggleDropNav, setToggleDropNav }) {
  function handleToggleDropNav() {
    setToggleDropNav(!toggleDropNav);
  }

  return (
    <div className="NavBar">
      <Link to="/">
        <h2 className="navLink">HOME</h2>
      </Link>
      <Link to="/explore">
        <h2 className="navLink">EXPLORE</h2>
      </Link>
      <h1 onClick={handleToggleDropNav}>///</h1>
    </div>
  );
}
