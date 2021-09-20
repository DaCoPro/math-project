import "./Header.css";
import NavBar from "./NavBar/NavBar";
import DropNav from "./DropNav/DropNav";
import { useState } from "react";

export default function Header() {
  const [toggleDropNav, setToggleDropNav] = useState(false);
  return (
    <div className="Header">
      <div className="mainHeader">
        <NavBar
          toggleDropNav={toggleDropNav}
          setToggleDropNav={setToggleDropNav}
        />
      </div>
      <div className="dropHeader">{toggleDropNav ? <DropNav /> : null}</div>
    </div>
  );
}
