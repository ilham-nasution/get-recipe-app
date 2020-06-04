import React from "react";
import { Link } from "react-router-dom";

const CategoryBtn = (props) => {
  return (
    <Link to={`/recipes/${props.name}`}>
      <button className={`btn-large margin ${props.color}`}>
        {props.name.replace(/\w\S*/g, (w) =>
          w.replace(/^\w/, (c) => c.toUpperCase())
        )}
      </button>
    </Link>
  );
};

export default CategoryBtn;
