import React from "react";
import "./mail.css";

const mail = (props, color) => {
  return (
    <div className="mail" style={{borderColor: {color}}}> 
      <img src={props.image} alt="" />
      <span>{props.text}</span>
      {/* <button className="c-button">LEARN MORE</button> */}
    </div>
  );
};

export default mail;
