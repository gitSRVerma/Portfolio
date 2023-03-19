import React, {useContext} from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../Context";


import { Pagination } from "swiper";
import "swiper/css/pagination";
// import profilePic1 from "../../img/profile1.jpg";
// import profilePic2 from "../../img/profile2.jpg";
// import profilePic3 from "../../img/profile3.jpg";
// import profilePic4 from "../../img/profile4.jpg";


const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const clients = [
    {
      head: "2020 - 2024",
      name: "SRM Institute of Science and Technology",
      review:
        "B.Tech - Computer Science and Engineering",
      place: "Chennai, Tamil Nadu", 
      grade: "9.64 CGPA",
    },
    {
      head: "2018 - 2020",
      name: "Sri Chaitainya School",
      review:
        "CLASS XII - CBSE",
      place: "Visakhapatnam, Andhra Pradesh",
      grade: "89.6%",
    },
    {
      head: "2016 - 2020",
      name: "Vignan Vidyalayam School",
      review:
        "CLASS X - CBSE",
      place: "Visakhapatnam, Andhra Pradesh",
      grade: "86.4%",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        {/* <span>Education</span> */}
        <span style={{ color: darkMode ? 'white' : '' }}>Education</span>
        {/* <span>!...</span> */}
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                {/* <img src={client.img} alt="" /> */}
                {/* {client.head} <br /> */}
                <span style={{ color: darkMode ? 'white' : '' }}>{client.head}</span>
                <span style={{ color: darkMode ? 'white' : '' }}>{client.name}</span>
                {/* <span style={{color: darkMode?'white': ''}}>{client.name</span> */}
                <span>{client.review}</span>
                <span>{client.place}</span>
                <span>{client.grade}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
