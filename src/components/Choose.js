import React from "react";
import dudePic from "../assets/images/dude-image.png";
import ellipseImage from "../assets/images/Ellipse 1.png";

function Choose() {
  return (
    <div className="choose-container">
      <img className="dude-photo" src={dudePic} alt="dude1" />
      <div className="choose-text-container">
        <h1 className="choose-text1">WHY CHOOSE US ?</h1>
        <p className="choose-text2">
          A trust is a way of managing assets [money,investments ,land or
          buildings] for people -types of trust how they are taxed where to get
          helpA trust is a way of managing assets [money,investments ,land or
          buildings] for people -types of trust how they are taxed where to get
          help
        </p>

        <div className="choose-content-container">
          <div>
            <h1 className="choose-content-head">
              <img className="ellipse" src={ellipseImage} alt="ellipse" />
              Board Level Advisory
            </h1>
            <p className="choose-content-paragraph">
              A trust is a way of managing assets [money,investments ,land or
              buildings] for people -types of trust how they are taxed where to
              get help
            </p>
          </div>

          <div>
            <h1 className="choose-content-head">
              <img className="ellipse" src={ellipseImage} alt="ellipse" />
              Board Level Advisory
            </h1>
            <p className="choose-content-paragraph">
              A trust is a way of managing assets [money,investments ,land or
              buildings] for people -types of trust how they are taxed where to
              get help
            </p>
          </div>
        </div>

        <div className="choose-content-container2">
          <div>
            <h1 className="choose-content-head">
              <img className="ellipse" src={ellipseImage} alt="ellipse" />
              Board Level Advisory
            </h1>
            <p className="choose-content-paragraph">
              A trust is a way of managing assets [money,investments ,land or
              buildings] for people -types of trust how they are taxed where to
              get help
            </p>
          </div>

          <div>
            <h1 className="choose-content-head">
              <img className="ellipse" src={ellipseImage} alt="ellipse" />
              Board Level Advisory
            </h1>
            <p className="choose-content-paragraph">
              A trust is a way of managing assets [money,investments ,land or
              buildings] for people -types of trust how they are taxed where to
              get help
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
