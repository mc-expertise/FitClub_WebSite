import "./Header.css";
import Logo from "../../assets/logo.png";
const Header = () => (
  <div className="header">
    <img src={Logo} alt="" className="logo" />
    <div className="links-content">
      <ul className="links">
        <li>Home</li>
        <li>Programs</li>
        <li>Why Us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  </div>
);

export default Header;
