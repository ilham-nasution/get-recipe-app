import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border split-nav">
      <div className="nav-brand">
        <h3>
          <Link to="/">Get Ur Recipe</Link>
        </h3>
      </div>
    </nav>
  );
};

export default Navbar;
