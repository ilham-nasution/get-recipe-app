import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import RecipeList from "./Components/RecipeList";
import Recipe from "./Components/Recipe";
import Homepage from "./Components/Homepage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="paper container">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/recipes/:ingredient" component={RecipeList} />
          <Route exact path="/recipes/detail/:id" component={Recipe} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
