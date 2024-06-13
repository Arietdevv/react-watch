import { AccountCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <a href="#">Home</a>
          <a href="#">Feature</a>
          <a href="#">Product</a>
          <a href="#">Testmonial</a>
          <button onClick={() => navigate("/add")}>GET STATED</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
