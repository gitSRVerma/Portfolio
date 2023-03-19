import React from "react";

import './FloatingDiv.css'


// const FloatinDiv = ({img, text1, text2}) => {
const FloatinDiv = (props) => {
  return (
    // darkMode
    <div className="floatingDiv">
      {/* <img src={props.img} alt="" /> */}
      <img src={props.img} alt="" />
      <span>
        {props.text1} 
        {/* making it dynamic using props */}
        <br/>
        {props.text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
