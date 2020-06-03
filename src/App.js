import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import RecipeList from "./Components/RecipeList";
import Recipe from "./Components/Recipe";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="paper container">
        <Navbar />
        <div className="row flex-center">
          <Link to="/recipes/rice">
            <button className="btn-large margin">Rice</button>
          </Link>
          <Link to="/recipes/pasta">
            <button className="btn-large btn-warning margin">Pasta</button>
          </Link>
          <Link to="/recipes/bread">
            <button className="btn-large btn-success margin">Bread</button>
          </Link>
        </div>
        <div className="row flex-center">
          <Link to="/recipes/corn">
            <button className="btn-large btn-danger margin">Corn</button>
          </Link>
          <Link to="/recipes/potato">
            <button className="btn-large btn-primary margin">Potato</button>
          </Link>
          <Link to="/recipes/wheat">
            <button className="btn-large btn-secondary margin">Wheat</button>
          </Link>
        </div>

        <Switch>
          <Route exact path="/recipes/:ingredient" component={RecipeList} />
          <Route exact path="/recipes/:ingredient/:id" component={Recipe} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
