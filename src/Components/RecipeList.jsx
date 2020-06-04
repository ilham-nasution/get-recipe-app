import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { RotateSpinner } from "react-spinners-kit";
import axios from "axios";

const Homepage = () => {
  const { ingredient } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=541436aa58c2400e94d3d976aeac8f84&ingredients=${ingredient}&number=12`
      );
      setData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [ingredient]);

  return (
    <React.Fragment>
      <div className="row flex-center margin-top-large">
        {isLoading ? <RotateSpinner size={100} color={"#534c5c"} /> : ""}
      </div>
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
    </React.Fragment>
  );
};

export default Homepage;
