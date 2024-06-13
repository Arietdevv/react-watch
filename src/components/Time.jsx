import React from "react";
import logo8 from "../image/Group 117.png";

const Time = () => {
  return (
    <div id="time">
      <div className="container">
        <div className="time">
          {/* <img src={logo8} alt="image" /> */}
          <iframe
            width="560"
            height="315"
            src="https://r8121.kujo-jotaro.com/tensei-shitara-slime/film/1.1080.1fa77624c8aaa258.mp4?hash1=f0836d3acaec16537514e8acfe4cccee&hash2=a35c325206117adaf5c15c1084cae2bd"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="time_txt">
            <h1>
              The best watch for <br /> your best time.
            </h1>
            <p>
              Since the watch is such a popular Fashion accessory <br /> and is
              seen as an essential wardrobe piece for both <br /> men and women.
            </p>
            <a href="https://youtu.be/Nvb_Kta7v6U?si=fffhe77DLusYbC4z">
              Play video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
