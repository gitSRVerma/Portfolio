import React from "react";
import "./Card.css";

const Card = (props, color) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={props.emoji} alt="" />
      <span>{props.heading}</span>
      <span>{props.detail}</span>
      {/* <button className="c-button">LEARN MORE</button> */}
    </div>
  );
};

export default Card;
