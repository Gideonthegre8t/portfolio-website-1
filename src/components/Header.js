import React from "react";
import phoneIcon from "../assets/images/phone-icon.png";
import locationIcon from "../assets/images/location-icon.png";
import headerWallPaper from "../assets/images/background1.png";
import phoneWallpaper from "../assets/images/background_phone-size.png";
import navIcon from "../assets/images/nav-bar.png";

function Header() {
  return (
    <header className="header-container">
      <img className="header-wallpaper" src={headerWallPaper} alt="wallpaper" />
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
        <p className="top2-first-txt">FINANCIAL TECHNOLOGY ADVISORS </p>
        <img className="nav-icon" src={navIcon} alt="navigation-icon" />
        <div className="nav-menu">
          <p>HOME</p>
          <p>CLIENTS</p>
          <p>PARTNERS</p>
          <p>SERVICES</p>
          <p>CONTACT</p>
        </div>
      </div>

      <div className="black-line">
        <div className="nav-line"></div>
      </div>

      <div className="header-content">
        <p className="header-content1">
          WHAT DIFFERENTIATES US FROM OTHER ADVISERS ?{" "}
        </p>
        <p className="header-content2">
          OUR GENUINE MOTIVATION TO SEE OUR CLIENTS SUCCEED.
        </p>
      </div>
    </header>
  );
}

export default Header;
