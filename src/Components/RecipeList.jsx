import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
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
    <div className="row flex-center child-borders">
      {data.recipes.map((recipe) => (
        <div key={recipe.id} className="col-3 col margin">
          <img src={recipe.image} alt="food" />

          <div className="card-body">
            <p className="card-title">{recipe.title}</p>
            <h5 className="card-subtitle">
              Ready in {recipe.readyInMinutes} minutes
            </h5>
            <Link to={`/recipe/${recipe.id}`} className="btn-small">
              Let me go here!
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
