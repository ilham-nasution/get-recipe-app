import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RotateSpinner } from "react-spinners-kit";
import axios from "axios";

const Recipe = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [recipe, setRecipe] = useState({
    extendedIngredients: [],
  });

  useEffect(() => {
    const fetchRecipe = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=541436aa58c2400e94d3d976aeac8f84`
      );
      setRecipe(result.data);
      setIsLoading(false);
    };
    fetchRecipe();
  }, [id]);

  return (
    <React.Fragment>
      <div className="row flex-center margin-top-large">
        {isLoading ? <RotateSpinner size={100} color={"#534c5c"} /> : ""}
      </div>
      <div className="row">
        <div className="col">
          <img src={recipe.image} alt="food" />
          <h1>{recipe.title}</h1>
          <h5>Ready in {recipe.readyInMinutes} minutes</h5>
          <ul>
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
          <h4>{recipe.instructions}</h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Recipe;
