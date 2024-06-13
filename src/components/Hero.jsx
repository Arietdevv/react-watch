import React from "react";
import logo from "../image/pngwing.png";
import { NavLink, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero_txt">
            <span>YOUR WATCH YOUR STYLE</span>
            <h1>
              Have You <br /> Ever Worn A <br /> Real Watch.
            </h1>
            <p>
              The styles of watches available to consumers are <br /> endless
              and profit also endless. if you are Fashion Geek <br /> and have
              guts to sort out need related to{" "}
            </p>
            <button onClick={() => navigate("/add")}>GET STATED</button>
          </div>
          <img src={logo} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
