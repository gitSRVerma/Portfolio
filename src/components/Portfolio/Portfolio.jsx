import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import "swiper/css";
import Imgg1 from "../../img/imgg1.jpeg";
import Imgg2 from "../../img/imgg2.jpeg";
import Imgg3 from "../../img/imgg3.jpeg";
import Imgg4 from "../../img/imgg4.jpeg";
import Imgg5 from "../../img/imgg5.jpeg";
import Imgg6 from "../../img/imgg6.jpeg";
// import Zoom from "../../img/zoom.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>My Projects</span>
      <span>Portfolio</span>


      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div className="layer image-container">
            <img src={Imgg2} alt="" />
            <div class="image-overlay">CAFENA <br /><p>[Html, Css, Javascript]</p>
              <div className="git-icons">
                <a  href="https://github.com/gitSRVerma/CAFENA"><AiFillGithub className="icons-git" /></a>
                <a  href="https://cafena-aap9.onrender.com/"><AiFillEye className="icons-git" /></a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="layer image-container">
            <img src={Imgg6} alt="" />
            <div class="image-overlay">To-Do-List <br /><p>[Html, Css, Node.js, React.js, Express.js]</p>
              <div className="git-icons">
                <a  href="https://github.com/gitSRVerma/To-Do-List"><AiFillGithub className="icons-git" /></a>
                <a  href="https://fastidious-dragon-c7f58f.netlify.app/"><AiFillEye className="icons-git" /></a>
              </div>
             </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="layer image-container">
            <img src={Imgg5} alt="" />
            <div class="image-overlay">Login Page <br /><p>[Node.js, Express.js, EJS]</p>
              <div className="git-icons">
                <a  href="https://github.com/gitSRVerma/Login_Page"><AiFillGithub className="icons-git" /></a>
                <a  href="https://login-page-7q5d.onrender.com/"><AiFillEye className="icons-git" /></a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="layer image-container">
            <img src={Imgg4} alt="" />
            <div class="image-overlay">FIRSKY- Note Maker <br /><p>[Html, Css, Javascript, React.js]</p>
              <div className="git-icons">
                <a  href="https://github.com/gitSRVerma/CAFENA"><AiFillGithub className="icons-git" /></a>
                <a  href="https://cafena-aap9.onrender.com/"><AiFillEye className="icons-git" /></a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="layer image-container">
            <img src={Imgg3} alt="" />
            <div class="image-overlay">Digital Clock <br /><p>[Python, Tkinter]</p>
              <div className="git-icons">
                <a  href="https://github.com/gitSRVerma/Firsky-Note-Maker"><AiFillGithub className="icons-git" /></a>
                <a  href="https://github.com/gitSRVerma/Firsky-Note-Maker"><AiFillEye className="icons-git" /></a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className="layer image-container"> */}
          <img src={Imgg1} alt="" />
          {/* <div class="image-overlay">Your Text</div> */}
          {/* </div> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;


// <Swiper
// spaceBetween={30}
// slidesPerView={3}
// grabCursor={true}
// className="portfolio-slider"
// >
// <SwiperSlide>
//   <div className="layer image-container">
//     <img src={Imgg2} alt="" />
//     <div class="image-overlay">Your Text</div>
//   </div>
// </SwiperSlide>
// <SwiperSlide>
//   <div className="layer image-container">
//     <img src={Imgg6} alt="" />
//     <div class="image-overlay">Your Text</div>
//   </div>
// </SwiperSlide>
// <SwiperSlide>
//   <div className="layer image-container">
//     <img src={Imgg5} alt="" />
//     <div class="image-overlay">Your Text</div>
//   </div>
// </SwiperSlide>
// <SwiperSlide>
//   <div className="layer image-container">
//     <img src={Imgg4} alt="" />
//     <div class="image-overlay">Your Text</div>
//   </div>
// </SwiperSlide>
// <SwiperSlide>
//   <div className="layer image-container">
//     <img src={Imgg3} alt="" />
//     <div class="image-overlay">Your Text</div>
//   </div>
// </SwiperSlide>
// <SwiperSlide>
//   <div className="layer image-container">
//     <img src={Imgg1} alt="" />
//     <div class="image-overlay">Your Text</div>
//   </div>
// </SwiperSlide>
// </Swiper>