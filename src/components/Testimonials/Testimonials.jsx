import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import Right from "../../assets/rightArrow.png";
import Left from "../../assets/leftArrow.png";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className="testimonials">
      <div className="left">
        <span>TESTIMONIALS</span>
        <span className="programs-header stroke-text">WHAT THEY</span>
        <span className="programs-header">SAY ABOUT US</span>
        <span>{testimonialsData[selected].review}</span>
        <p>
          <span>{testimonialsData[selected].name}</span> -{" "}
          {testimonialsData[selected].status}
        </p>
      </div>
      <div className="right">
        <div className="empty"></div>
        <div className="background"></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={Left}
            alt=""
          />
          <img
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={Right}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
