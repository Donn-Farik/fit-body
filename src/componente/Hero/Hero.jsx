import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
const transition = { type: "spring", duration: 3 };
const mobile = window.innerWidth <= 768 ? true : false;
function Hero() {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "160px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={transition} // Ajusta la duración a 1000 ms (1 segundo)
          ></motion.div>
          <span>the best fitness club in the city</span>
        </div>

        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here would help you to shape and build your ideal bodoy and
              live up your life to fillest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span> +140</span>
            <span>expert</span>
          </div>
          <div>
            <span> +140</span>
            <span>expert</span>
          </div>
          <div>
            <span> +50</span>
            <span>fitness program</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1px" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span> 116Bpm</span>
        </motion.div>
        {/* hero image */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />
        <div className="calories">
          <img src={Calories} alt="" />
          <span>Clories Burned</span>
          <span>220 Kcal</span>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
