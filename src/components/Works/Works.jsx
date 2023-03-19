import React, { useContext } from "react";
import "./Works.css";
import Node from "../../img/node-js.png";
import Reactjs from "../../img/react.png";
import P_lan from "../../img/c++.png";
import Html from "../../img/html.png";
import Css from "../../img/css.png";
import Javascript from "../../img/javascript.png";
import Mongodb from "../../img/mongodb.png";
import Python from "../../img/python.png";
import Bigdata from "../../img/bigdata.png";
import Mysql from "../../img/mysql.png";
import Blockchain from "../../img/blockchain.png";
import Expressjs from "../../img/express-js.png";
import Git from "../../img/git.png";
import Github from "../../img/github.png";





import { themeContext } from "../../Context";
import { motion } from "framer-motion";
// import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Experiences and
          </span>
          <span>SKILLS</span>

          <div className="exp-section">
            <div><li className="skill-title">
            <span style={{ color: darkMode ? "white" : "" }}>
              CodeChef SRM
            </span>
              </li></div>
            <div className="skill-desc">2021-2022</div>
            <div className="skill-desc">Member of UI/UX design team.</div>
          </div>

          <div className="exp-section">
            <div><li className="skill-title">
            <span style={{ color: darkMode ? "white" : "" }}>
              Texplore
            </span>
              </li></div>
            <div className="skill-desc">2021-2022</div>
            <div className="skill-desc">Speaker at Texplore, that elucidate various streams in computer science<br /> such as DataScience, AIML..etc.</div>
          </div>



          {/* <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link> */}

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>





        {/* right side */}


      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >

          <div className="w-secCircle">
            <img src={Node} alt="" />
            <span class="tooltiptext13">Node-Js</span>
            {/* 1 */}
            {/* <p>Node.js</p> */}
          </div>

          <div className="w-secCircle tooltip13">
            <img src={Javascript} alt="" />
            <span class="tooltiptext13">Javascript</span>
            {/* 2 */}
          </div>

          <div className="w-secCircle tooltip13">
            <img src={Reactjs} alt="" />
            <span class="tooltiptext13">React-Js</span>
            {/* 3 */}
          </div>

          <div className="w-secCircle tooltip13">
            <img src={Mysql} alt="" />
            <span class="tooltiptext13">MySql</span>
            {/* 4 */}
          </div>

          <div className="w-secCircle tooltip13">
            <img src={Mongodb} alt="" />
            <span class="tooltiptext13">MongoDB</span>
            {/* 5 */}
          </div>

          <div className="w-secCircle tooltip13">
            <img src={Html} alt="" />
            <span class="tooltiptext13">HTML</span>
            {/* 6 */}
          </div>

          <div className="w-secCircle tooltip13">
            <img src={Css} alt="" />
            <span class="tooltiptext13">CSS</span>
            {/* 7 */}
          </div>

          <div className="w-secCircle tooltip13">
            <img src={Github} alt="" />
            <span class="tooltiptext13">GitHub</span>
            {/* 8 */}
          </div>

          <div className="w-secCircle tooltip13">
            <img src={Git} alt="" />
            <span class="tooltiptext13">Git</span>
            {/* 9 */}
          </div>
          {/* ....................................................... */}
          <div className="w-secCircle tooltip13">
            <img src={P_lan} alt="" />
            <span class="tooltiptext13">C++</span>
            {/* 10 */}
          </div>

          <div className="w-secCircle tooltip13">
            <img src={Bigdata} alt="" />
            <span class="tooltiptext13">Big-Data</span>
            {/* 11 */}
          </div>

          <div className="w-secCircle tooltip13">
            <img src={Python} alt="" />
            <span class="tooltiptext13">Python</span>
            {/* 12 */}
          </div>

          <div className="w-secCircle tooltip13">
            <img src={Blockchain} alt="" />
            <span class="tooltiptext13">Blockchain</span>
            {/* 13 */}
          </div>

          <div className="w-secCircle tooltip13">
            <img src={Expressjs} alt="" />
            <span class="tooltiptext13">Express-js</span>
            {/* 14 */}
          </div>


        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
