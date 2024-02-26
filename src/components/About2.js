import React from "react";
import financialService from "../assets/images/financial-services.png";
import ellipseImage from "../assets/images/Ellipse 1.png";
import taxFinanceImage from "../assets/images/tax-and-finance-image.png";
import researchTrainingImage from "../assets/images/research-image.png";

function About2() {
  return (
    <section className="about2-container">
      <h1 className="about2-text1">WHAT WE DO</h1>
      <p className="about2-text2">
        FTA is dedicated to seeing you choose the right technology strategy
        ensuring you maintain a competitive edge over your peers
      </p>
      <div className="about2-story3-container">
        <div className="about2-story1">
          <img
            className="about2-story1-image"
            src={financialService}
            alt="financialService"
          />
          <h1 className="about2-story1-text1">
            <img className="ellipse" src={ellipseImage} alt="ellipse" />
            Financial Services
          </h1>
          <p className="about2-story1-text2">
            A trust is a way of managing assets [money,investments ,land or
            buildings] for people -types of trust how they are taxed where to
            get help
          </p>
        </div>

        <div className="about2-story1">
          <img
            className="about2-story1-image"
            src={taxFinanceImage}
            alt="taxAndFinance"
          />
          <h1 className="about2-story1-text1">
            <img className="ellipse" src={ellipseImage} alt="ellipse" />
            Tax & Finances
          </h1>
          <p className="about2-story1-text2">
            A trust is a way of managing assets [money,investments ,land or
            buildings] for people -types of trust how they are taxed where to
            get help
          </p>
        </div>

        <div className="about2-story1">
          <img
            className="about2-story1-image"
            src={researchTrainingImage}
            alt="researchAndTraining"
          />
          <h1 className="about2-story1-text1">
            <img className="ellipse" src={ellipseImage} alt="ellipse" />
            Research & Training
          </h1>
          <p className="about2-story1-text2">
            A trust is a way of managing assets [money,investments ,land or
            buildings] for people -types of trust how they are taxed where to
            get help
          </p>
        </div>
      </div>
    </section>
  );
}

export default About2;
