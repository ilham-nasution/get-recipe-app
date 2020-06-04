import React from "react";
import CategoryBtn from "./CategoryBtn";
import Search from "./Search";

const Homepage = () => {
  return (
    <div>
      <h2>Choose your ingredient</h2>
      <div className="row flex-center">
        <CategoryBtn name="rice" />
        <CategoryBtn name="pasta" color="btn-warning" />
        <CategoryBtn name="bread" color="btn-success" />
      </div>
      <div className="row flex-center">
        <CategoryBtn name="corn" color="btn-danger" />
        <CategoryBtn name="potato" color="btn-primary" />
        <CategoryBtn name="wheat" color="btn-secondary" />
      </div>
      <h2>Search here</h2>
      <Search />
    </div>
  );
};

export default Homepage;
