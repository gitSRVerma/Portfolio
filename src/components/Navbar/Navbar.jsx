// import React, { useContext } from "react";
import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
// import { themeContext } from "../../Context";



const navbar = () => {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Shivangi</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}> 
          {/* here style is used to remove the dots made using the list items */}
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
              {/* <span style={{ color: darkMode ? "black" : "" }}>
                CodeChef SRM
              </span> */}
              ABOUT
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                SKILLS
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                WORK
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                EDUCATION
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">CONTACT</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
