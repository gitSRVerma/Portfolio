import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import {SiLeetcode} from "react-icons/si";
import {SiLinktree} from "react-icons/si";



const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>shivangiverma.2816@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/shivangi-rani-verma-b18425206/">
            <LinkedIn color="white" size={"3rem"} />     
          </a>
          <a href="https://github.com/gitSRVerma">
            <Gitub color="white" size={"3rem"} />        
          </a>
          <a href="https://www.instagram.com/shivangi_2816/">
          <Insta color="white" size={"3rem"} />      
          </a>
          <a href="https://twitter.com/shivangi_2816?t=wq6EHHpjrk5citYYFQvvYw&s=08">
          <Twitter color="white" size={"3rem"} />      
          </a>
          <a href="https://twitter.com/shivangi_2816?t=wq6EHHpjrk5citYYFQvvYw&s=08">
          <SiLeetcode color="white" size={"3rem"} />      
          </a>
          <a href="https://linktr.ee/shivangi_2816">
          <SiLinktree color="white" size={"3rem"} />      
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
