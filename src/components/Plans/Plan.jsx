import React from "react";
import "./Plan.css";
import { plansData } from "../../data/plansData";
import WhiteTick from "../../assets/whiteTick.png";

const Plan = () => (
  <div className="plans">
    <div className="plans-header">
      <p className="stroke-text">READY TO START</p>
      <p>YOUR JOURNEY</p>
      <p className="stroke-text">NOW WITHUS</p>
    </div>
    {/* Plans CARD */}
    <div className="plans-card">
      {plansData.map((plan, i) => (
        <div className="plan" key={i}>
          {plan.icon}
          <span>{plan.name}</span>
          <span>$ {plan.price}</span>
          <div className="features">
            {plan.features.map((feature, i) => (
              <div className="feature">
                <img src={WhiteTick} alt="" />
                <span key={i}>{feature}</span>
              </div>
            ))}
          </div>
          <div className="read-more">
            <span>See more benefits -></span>
          </div>
          <button>Join now</button>
        </div>
      ))}
    </div>
  </div>
);

export default Plan;
