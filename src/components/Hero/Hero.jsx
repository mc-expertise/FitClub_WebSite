import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
const Hero = () => (
  <>
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="best-fit">
          <div></div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div className="first-text">
            <span className="stroke-text">Shape</span> Your
          </div>
          <div className="second-text">Ideal Body</div>
          <p>
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </p>
        </div>
        {/* Figures */}
        <div className="figures">
          <div className="one">
            + 140
            <span>EXPERT COACHES</span>
          </div>
          <div className="two">
            + 976
            <span>MEMBERS JOINED</span>
          </div>
          <div className="three">
            + 50
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        {/* Hero Buttons */}
        <div className="hero-buttons">
          <button className="btnone">Get Strated</button>
          <button className="btntwo">Learn More</button>
        </div>
      </div>
      {/* Right Side */}
      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span>
          116 bpm
        </div>
        <img src={hero_image} alt="hero" className="man" />
        <img src={hero_image_back} alt="background" className="background" />
        <div className="calories">
          <div className="img-calories">
            <img src={Calories} alt="calors" />
          </div>
          <div className="text-content">
            <span>Calories burned</span>
            220 kcal
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Hero;
