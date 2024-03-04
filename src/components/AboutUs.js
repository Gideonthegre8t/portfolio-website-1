import React from "react";
import graphImage2 from "../assets/images/white-graph-image.png";
import graphImage2phone from "../assets/images/white-graph-image-phone.png";
import rightArrow from "../assets/images/right-arrow.png";

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-content">
        <div className="about-us-text">
          <h3 className="about-header">ABOUT US</h3>
          <img className="white-graph" src={graphImage2} alt="graph" />
          <img
            className="white-graph-phone"
            src={graphImage2phone}
            alt="graph"
          />
          <p className="about-us-text-1">FINANCIAL TECHNOLOGY ADVISORS</p>
          <p className="about-us-text-2">
            Since founding Financial Technology Advisors in 2014 we have
            dedicated ourselves to the position of services .What diffeentiates
            us from other advisors or consultancies is a genuine motivation to
            see our clients succeEd .today’s technology allows our clients to
            take their knowlegde to the market in ways that pr
          </p>
        </div>

        <div className="services">
          <h3 className="service-header">SERVICES</h3>
          <p>
            <img className="right-arrow" src={rightArrow} alt="arrow" />
            INVESTMENT MANAGMENT
          </p>
          <p>
            <img className="right-arrow" src={rightArrow} alt="arrow" />
            FINANCIAL PLANNING
          </p>
          <p>
            <img className="right-arrow" src={rightArrow} alt="arrow" />
            TAX & TRUSTS
          </p>
          <p>
            <img className="right-arrow" src={rightArrow} alt="arrow" />
            PROPERTY MANAGEMENT
          </p>
          <p>
            <img className="right-arrow" src={rightArrow} alt="arrow" />
            INVESTMENT MANAGEMENT
          </p>
          <p>
            <img className="right-arrow" src={rightArrow} alt="arrow" />
            FINANCIAL PLANNING
          </p>
          <p>
            <img className="right-arrow" src={rightArrow} alt="arrow" />
            TAX & TRUSTS
          </p>
        </div>

        <div className="recent-news">
          <h3 className="recent-news-header">RECENT NEWS</h3>
          <div className="recent-news-paragragh">
            <p className="recent-news-text">
              Lorem ipsum dolor sit amet consectetur. Ligula ac orci u
            </p>
            <p className="read-more-text">
              READ MORE{" "}
              <img className="right-arrow" src={rightArrow} alt="arrow" />
            </p>
          </div>
          <div className="recent-news-paragragh">
            <p className="recent-news-text">
              Lorem ipsum dolor sit amet consectetur. Ligula ac orci u
            </p>
            <p className="read-more-text">
              READ MORE{" "}
              <img className="right-arrow" src={rightArrow} alt="arrow" />
            </p>
          </div>
          <div className="recent-news-paragragh">
            <p className="recent-news-text">
              Lorem ipsum dolor sit amet consectetur. Ligula ac orci u
            </p>
            <p className="read-more-text">
              READ MORE{" "}
              <img className="right-arrow" src={rightArrow} alt="arrow" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
