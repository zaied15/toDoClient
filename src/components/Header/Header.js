import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>
        <Link to="/">Home</Link> <Link to="/login">Login</Link>
      </h2>
    </div>
  );
};

export default Header;
