import React, { useState } from "react";
import arrow from "../assets/images/arrow.png";

const ReachOutForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add validation logic
    console.log("Form submitted:", { firstName, lastName, email, phone });
    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="reach-us-container">
      <div className="reach-us-text">
        <h2 className="reach-us-text1">REACH OUT TO US</h2>
        <p className="reach-us-text2">
          Lorem ipsum dolor sit amet consectetur. Ligula ac orci ut ac cursus
          pulvinar. Eget at mauris tempor tempor mollis nisl. Viverra at sed
          nibh ullamcorper lobortis cras velit nunc lectus. Aenean ornare i
        </p>
      </div>

      <div>
        <form className="form-container" onSubmit={handleSubmit}>
          <p className="nothing-selected">
            Nothing selected <img className="arrow" src={arrow} alt="arrow" />
          </p>
          <div className="line" />

          <div className="input-container">
            <div className="name-tab">
              <label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="First name"
                />
              </label>
              <br />
              <label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  placeholder="Last name"
                />
              </label>
              <br />
            </div>

            <div className="details">
              <label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                />
              </label>
              <br />
              <label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="Phone number"
                />
              </label>
              <br />
              {/* <button type="submit">Submit</button> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReachOutForm;
