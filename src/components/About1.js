import React from "react";
import graphImage from "../assets/images/graph-image.png";
import about1Wallpaper from "../assets/images/Closeup of tablet in woman's hands.png";

function About1() {
  return (
    <section className="about1-container">
      <div className="about1-story1">
        <h1 className="about1-text1">WHO WE ARE</h1>
        <p className=" about1-text2">
          I believe that through knowledge and discipline ,financial peace for
          all of us{" "}
        </p>
        <p className="about1-text3">
          Since founding Financial Technology Advisers in 2014 we have dedicated
          ourselves to he provision of services what differentiates us from
          other advisers or consultances is a a genuine motivation to see our
          clients succeed today’s technology allows our clients to take their
          knowledge o the market in ways that previous generaions could only
          dream of
        </p>
        <p className="about1-text4">
          That’s why FTA is dedicated to seeing you choose the right technology
          strategy ensuring you maintain a competitive edge over your peers
        </p>
        <img src={graphImage} alt="graph" />
        <p className="about1-text5">FINANCIAL TECHNOLOGY ADVISORS</p>
      </div>

      <div className="about1-story2">
        <p className="about1-story2-txt">
          TODAY’S TECHNOLOGY ALLOWS OUR CLIENTS TO TAKE THEIR KNOWLEDGE TO THE
          MARKET IN WAYS THAT PREVIOUS GENERATIONS COULD ONLY DREAM OF{" "}
        </p>
        <img className="about1-image" src={about1Wallpaper} alt="graph" />
      </div>
    </section>
  );
}

export default About1;
