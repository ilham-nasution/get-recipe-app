import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await axios(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=541436aa58c2400e94d3d976aeac8f84`
      );
      setRecipe(result.data);
      setIngredients(result.data.extendedIngredients);
    };
    fetchRecipe();
  }, [id]);

  return (
    <div className="row flex-center">
      <div className="col">
        <img src={recipe.image} alt="food" />
        <h1>{recipe.title}</h1>
        <h5>Ready in {recipe.readyInMinutes} minutes</h5>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        <h4>{recipe.instructions}</h4>
      </div>
    </div>
  );
};

export default Recipe;
