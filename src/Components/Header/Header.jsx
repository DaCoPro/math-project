import "./Header.css";
import { useHistory } from "react-router";

import DropNav from "./DropNav/DropNav";
import { useState } from "react";

export default function Header({ setActiveSubject, setActiveConcept }) {
  const history = useHistory();
  const [toggleDropNav, setToggleDropNav] = useState(false);
  function handleHomeClick() {
    setActiveSubject(null);
    setActiveConcept(null);
    history.push("/");
  }
  return (
    <div className="Header">
      <div className="mainHeader">
        <h1 onClick={handleHomeClick}>H</h1>
      </div>
      <div className="dropHeader">
        <DropNav
          setActiveConcept={setActiveConcept}
          setActiveSubject={setActiveSubject}
        />
      </div>
    </div>
  );
}
