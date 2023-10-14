/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LightMode = ({
  className,
  overlapGroupClassName,
  rectangleClassName,
  logoClassName,
  logo = "/img/logo-2.png",
}) => {
  return (
    <div className={`light-mode ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className={`rectangle ${rectangleClassName}`} />
        <img className={`logo ${logoClassName}`} alt="Logo" src={logo} />
      </div>
    </div>
  );
};

LightMode.propTypes = {
  logo: PropTypes.string,
};
