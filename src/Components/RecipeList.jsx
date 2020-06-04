import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
  const { ingredient } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=541436aa58c2400e94d3d976aeac8f84&ingredients=${ingredient}&number=12`
      );
      setData(result.data);
    };
    fetchData();
  }, [ingredient]);

  return (
    <div className="row flex-center child-borders">
      {data.map((recipe) => (
        <div key={recipe.id} className="col-3 col margin">
          <img src={recipe.image} alt="food" />

          <div className="card-body">
            <p className="card-title">{recipe.title}</p>
            <Link to={`/recipes/detail/${recipe.id}`} className="btn-small">
              Recipe detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
