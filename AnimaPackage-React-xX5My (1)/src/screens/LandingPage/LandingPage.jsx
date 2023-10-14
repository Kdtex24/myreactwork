import React from "react";
import { ButtonFill } from "../../components/ButtonFill";
import { Frame } from "../../components/Frame";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlap">
        <img className="unsplash" alt="Unsplash" src="/img/unsplash-rtzw4f02zy8.png" />
        <img className="unsplash-xclndgzag" alt="Unsplash" src="/img/unsplash-xclndg9z9ag.png" />
        <Frame
          className="header-navigation"
          createAccountClassName="header-navigation-3"
          divClassName="frame-16"
          divClassName1="frame-instance"
          divClassName2="frame-instance"
          divClassNameOverride="frame-instance"
          frameClassName="frame-16-instance"
          frameClassNameOverride="header-navigation-2"
          signInClassName="frame-instance"
        />
        <img className="img" alt="Rectangle" src="/img/rectangle.png" />
        <img className="vector" alt="Vector" src="/img/vector.svg" />
        <div className="frame-2">
          <p className="welcome-to-block">Welcome To Block Traders Academy</p>
          <div className="frame-3">
            <p className="learning-on-any">
              <span className="span">Learning</span>
              <span className="text-wrapper-5"> on any other platform would be settling for less</span>
            </p>
            <p className="p">
              Learn and Trade with Block Traders academy, enjoy profit yields,build a professional trader portfolio and
              enjoy profit with fully funded accounts.
            </p>
          </div>
        </div>
        <ButtonFill className="button-fill-instance" editProfileClassName="button-fill-2" text="Get Started" />
      </div>
    </div>
  );
};
