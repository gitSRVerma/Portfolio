// rafce
import React, { useContext } from "react";
// import { useState, useEffect } from 'react';
import "./Intro.css";

// import Vector1 from "../../img/Vector1.png";
// import Vector2 from "../../img/Vector2.png";
// import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
// import profile0 from "../../img/profile0.png";
import my_img from "../../img/my_img.jpeg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";


// const Intro = () => {
function Intro() {
  // Transition
  const transition = { duration: 2, type: "spring" };
  var ReactRotatingText = require('react-rotating-text');

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          {/* <span>Shivangi Verma</span> */}
          <div className="into-heading"><ReactRotatingText className="react-rotating-text-cursor" items={['Shivangi Verma']} caretStyle={{ width: '100px', height: '100px' }} style={{ fontSize: '54px' }} /></div>
          <span>
          Enthusiastic Computer Science student with programming skills, seeking opportunities<br />
          to further develop my computational skills in Web Development and Big Data field,<br />
          Problem solving and producting the Quality work. 
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Contact me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/gitSRVerma">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/shivangi-rani-verma-b18425206/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/shivangi_2816/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>



      {/* ................RIGHT SIDE................ */}

      {/* right image side */}
      <div className="i-right">
        {/* <img src={profile0} alt="" /> */}
        <img className="my-img" src={my_img} alt="" />
        {/* <img src={Vector1} alt="" /> */}
        {/* <img src={Vector2} alt="" /> */}
        {/* animation */}
        {/* ............................................. */}

        <motion.img  //this is the 3th child in the i-right  (3rd element)
          initial={{ top: "-15%", left: "-20%" }}
          whileInView={{ left: "-10%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        {/* ...................................(4th element)...... */}
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* .....................................(5th element)....... */}

        {/* animation */}
        <motion.div
          initial={{ left: "4rem", top: "18rem" }}
          whileInView={{ left: "-5rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Aspiring Software" text2="Engineer" />
        </motion.div>



        {/* ..................................(6th element).............. */}

        {/* Blur divs */}

        <div className="blur"
          style={{
            background: "rgb(238 210 255)"
          }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "15rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
        <div
          className="blur"
          style={{
            // background: "#f6fc49",
            background: "#fae5d9",
            top: "14rem",
            width: "21rem",
            height: "11rem",
            left: "17rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
