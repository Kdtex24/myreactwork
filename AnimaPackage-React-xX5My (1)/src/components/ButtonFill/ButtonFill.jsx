/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonFill = ({ className, editProfileClassName, text = "Edit Profile" }) => {
  return (
    <button className={`button-fill ${className}`}>
      <div className={`edit-profile ${editProfileClassName}`}>{text}</div>
    </button>
  );
};

ButtonFill.propTypes = {
  text: PropTypes.string,
};
