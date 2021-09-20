import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/">HomePage</Link>
      <Link to="/explore">Concepts</Link>
      <Link to="/learn">Concepts</Link>
    </div>
  );
}
