import React from "react";
import "./Reasons.css";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import Ticket from "../../assets/tick.png";
import NB from "../../assets/nb.png";
import Adidas from "../../assets/adidas.png";
import Nike from "../../assets/nike.png";
const Reasons = () => (
  <div className="reasons">
    <div className="left">
      <img src={Image1} alt="" />
      <img src={Image2} alt="" />
      <img src={Image3} alt="" />
      <img src={Image4} alt="" />
    </div>
    <div className="right">
      <span>SOME RESONS</span>
      <div className="text">
        <p className="stroke-text">Why</p>
        <p>CHOOSE</p>
        <p>US ?</p>
      </div>
      <div className="checklist">
        <div>
          <img src={Ticket} alt="" />
          OVER 140+ EXPERT COACHS
        </div>
        <div>
          <img src={Ticket} alt="" />
          TRAIN SMARTER AND FASTER THAN BEFORE
        </div>
        <div>
          <img src={Ticket} alt="" />1 FREE PROGRAM FOR NEW MEMBER
        </div>
        <div>
          <img src={Ticket} alt="" />
          RELIABLE PARTNERS
        </div>
      </div>
      <span>OUR PARTNERS</span>
      <div className="icons">
        <img src={NB} alt="" />
        <img src={Adidas} alt="" />
        <img src={Nike} alt="" />
      </div>
    </div>
  </div>
);

export default Reasons;
