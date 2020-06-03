import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import RecipeList from "./Components/RecipeList";
import Recipe from "./Components/Recipe";

const App = () => {
  return (
    <Router>
      <div className="paper container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={RecipeList} />
          <Route exact path="/recipe/:id" component={Recipe} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
