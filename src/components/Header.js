import React from "react";
import phoneIcon from "../assets/images/phone-icon.png";
import locationIcon from "../assets/images/location-icon.png";
import headerWallPaper from "../assets/images/background1.png";
import phoneWallpaper from "../assets/images/background_phone-size.png";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header-container wrapper">
      <div id="home">
        <img
          className="header-wallpaper"
          src={headerWallPaper}
          alt="wallpaper"
        />
        <img
          className="phone-header-wallpaper"
          src={phoneWallpaper}
          alt="wallpaper"
        />

        <div className="top1">
          <div className="phone-location-container">
            <div className="phone-icon">
              <img className="phone-img" src={phoneIcon} alt="phone-icon" />
              <p>1.800.555.1212</p>
            </div>
            <div className="location-icon">
              <img
                className="location-img"
                src={locationIcon}
                alt="location-icon"
              />
              <p>LONDON, UK TK14;43:</p>
            </div>
          </div>
          <div className="login-txt">
            <p>LOGIN</p>
          </div>
        </div>

        <div className="red-line"></div>

        <div className="top2">
          <p className="top2-first-txt animate slideInLeft">
            FINANCIAL TECHNOLOGY ADVISORS{" "}
          </p>
          <Navbar />
        </div>

        <div className="black-line"></div>

        <div classNamze="header-content">
          <p className="header-content1 animate slideInRight animate--delay animate--fast">
            WHAT DIFFERENTIATES US FROM OTHER ADVISERS ?{" "}
          </p>
          <p className="header-content2  animate slideInLeft animate--slow moveLeft ">
            OUR GENUINE MOTIVATION TO SEE OUR CLIENTS SUCCEED.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
