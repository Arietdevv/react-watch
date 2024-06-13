import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useFuter } from "./FuterTwo";

const Futer = () => {
  return (
    <div id="futer">
      <div className="container">
        <div className="futer">
          <div className="futer1">
            <h6>LOGO</h6>
            <a href="">
              Apple Watch and the <br />
              app on iPhone
            </a>
            <div className="futer_icon">
              <a href="https://www.facebook.com/groups/AppleWatch/">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/applewatchlifestyle/">
                <InstagramIcon />
              </a>
              <a href="https://twitter.com/applewatchinfo1">
                <TwitterIcon />
              </a>
            </div>
          </div>
          <div className="futer1">
            <h6>Product</h6>
            <a href="">About Us</a>
            <a href="">Blog</a>
          </div>
          <div className="futer1">
            <h6>Features</h6>
            <a href="">Smart Watch</a>
            <a href="">Head Phone</a>
            <a href="">Home security</a>
            <a href="">Smart Lock</a>
          </div>
          <div className="futer1">
            <h6>About Us</h6>
            <a href="">Who we are</a>
            <a href="">Contact us</a>
            <a href="">support</a>
            <a href="">FAQ</a>
          </div>
          <div className="futer1">
            <h6>Subscribe</h6>
            <button>Russian</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Futer;
