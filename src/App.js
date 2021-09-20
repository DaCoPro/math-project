import "./App.css";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/Home/Home";
import Learn from "./Pages/Learn/Learn";
import Explore from "./Pages/Explore/Explore";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/explore">
          <Explore />
        </Route>
        <Route exact path="/learn">
          <Learn />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
