import "./App.css";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/Home/Home";
import Learn from "./Pages/Learn/Learn";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const subjects = ["trig"];
  const [activeSubject, setActiveSubject] = useState(null);
  const [activeConcept, setActiveConcept] = useState(null);
  return (
    <div className="App">
      <Header
        setActiveSubject={setActiveSubject}
        setActiveConcept={setActiveConcept}
      />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/learn">
          <Learn activeSubject={activeSubject} activeConcept={activeConcept} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
