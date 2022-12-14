import React from "react";
import "./JoinUs.css";

const JoinUs = () => {
  return (
    <div className="joinus">
      <div className="left">
        <hr />
        <div className="divone">
          <span className="programs-header stroke-text">READY TO</span>
          <span className="programs-header">LEVEL UP</span>
        </div>
        <div className="divtwo">
          <span className="programs-header">YOUR BODY</span>
          <span className="programs-header stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right">
        <form className="email-container">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your Email Adress"
          />
          <button>Join now</button>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
