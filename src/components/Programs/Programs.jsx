import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
const Programs = () => (
  <div className="programs">
    <div className="programs-header">
      <p className="stroke-text">EXPLORE OUR</p>
      <p>PROGRAMS</p>
      <p className="stroke-text">TO SHAPE YOU</p>
    </div>
    <div className="programs-categories">
      {programsData.map((program) => (
        <div className="category">
          {program.image}
          <span>{program.heading}</span>
          <span>{program.details}</span>
          <div className="join-now">
            <span>Join Now</span>
            <img src={RightArrow} alt="" />
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default Programs;
