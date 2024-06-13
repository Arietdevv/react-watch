import React from "react";
import logo1 from "../image/Group 101.png";
import logo2 from "../image/Group 103.png";
import logo3 from "../image/Group 105.png";
import logo4 from "../image/Group 107.png";
import logo5 from "../image/Group 109.png";
import logo6 from "../image/Group 111.png";
import logo7 from "../image/Daco_4244679 1.png";

const Feature = () => {
  return (
    <div id="feature">
      <div className="container">
        <div className="feature">
          <div className="ture">
            <h1>our service Feature</h1>
            <p>
              Watch companies are now focusing more on trendy <br /> watches
              which targets the youngsters who always.
            </p>
          </div>
          <div className="feat">
            <div className="feat_a">
              <div className="feat_txt">
                <img src={logo1} alt="image" />
                <h3>android version</h3>
                <p>Android officially 10.0</p>
              </div>
              <div className="feat_txt">
                <img src={logo2} alt="image" />
                <h3>internet Service</h3>
                <p>4G Smart Watches</p>
              </div>
              <div className="feat_txt">
                <img src={logo3} alt="image" />
                <h3>music player</h3>
                <p>Use the Music app</p>
              </div>
            </div>
            <img src={logo7} alt="image" />
            <div className="feat_b">
              <div className="feat_txt">
                <img src={logo4} alt="image" />
                <h3>Battery</h3>
                <p>battery life is 18 hours</p>
              </div>
              <div className="feat_txt">
                <img src={logo5} alt="image" />
                <h3>settings</h3>
                <p>Choose your settings.</p>
              </div>
              <div className="feat_txt">
                <img src={logo6} alt="image" />
                <h3>messages</h3>
                <p>Open the Messages app</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
