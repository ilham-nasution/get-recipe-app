import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({ recipes: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.spoonacular.com/recipes/random?apiKey=541436aa58c2400e94d3d976aeac8f84&number=12"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="paper container">
      <nav className="border split-nav">
        <div className="nav-brand">
          <h3>
            <a href="#">Get Ur Recipe</a>
          </h3>
        </div>
      </nav>
      <div className="row flex-center child-borders">
        {data.recipes.map((recipe) => (
          <div className="col-3 col margin">
            <img src={recipe.image} alt="image" />

            <div className="card-body">
              <p className="card-title">{recipe.title}</p>
              <h5 className="card-subtitle">
                Ready in {recipe.readyInMinutes} minutes
              </h5>
              <button className="btn-small">Let me go here!</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
