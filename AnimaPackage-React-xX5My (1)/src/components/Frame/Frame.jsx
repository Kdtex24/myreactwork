/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { LightMode } from "../LightMode";
import "./style.css";

export const Frame = ({
  className,
  divClassName,
  divClassNameOverride,
  divClassName1,
  divClassName2,
  frameClassName,
  signInClassName,
  frameClassNameOverride,
  createAccountClassName,
}) => {
  return (
    <div className={`frame ${className}`}>
      <div className="group">
        <div className="frame-wrapper">
          <div className="div">
            <LightMode
              className="light-mode-instance"
              logo="/img/logo.png"
              logoClassName="light-mode-3"
              overlapGroupClassName="design-component-instance-node"
              rectangleClassName="light-mode-2"
            />
            <div className="div-2">
              <div className="div-wrapper">
                <div className={`text-wrapper ${divClassName}`}>Home</div>
              </div>
              <div className="div-wrapper">
                <div className={`text-wrapper-2 ${divClassNameOverride}`}>About us</div>
              </div>
              <div className="div-3">
                <div className={`text-wrapper-3 ${divClassName1}`}>Education Arena</div>
                <img className="gridicons-dropdown" alt="Gridicons dropdown" src="/img/gridicons-dropdown-3.svg" />
              </div>
              <div className="div-3">
                <div className={`text-wrapper-4 ${divClassName2}`}>Trading Arena</div>
                <img className="gridicons-dropdown" alt="Gridicons dropdown" src="/img/gridicons-dropdown-3.svg" />
              </div>
            </div>
            <div className="div-4">
              <div className={`sign-in-wrapper ${frameClassName}`}>
                <div className={`sign-in ${signInClassName}`}>Sign In</div>
              </div>
              <div className={`create-account-wrapper ${frameClassNameOverride}`}>
                <div className={`create-account ${createAccountClassName}`}>Create Account</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
