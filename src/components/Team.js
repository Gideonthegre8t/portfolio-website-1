import React from "react";
import teamMember from "../assets/images/team-member.png";
import teamWallpaper from "../assets/images/office-image.png";
import teamWallpaperPhone from "../assets/images/office-image-phone-size.png";
import teamMemberphone from "../assets/images/team-member-phone-size.png";

function Team() {
  return (
    <div className="team-container">
      <img className="team-wallpaper" src={teamWallpaper} alt="office-pics" />
      <img
        className="team-wallpaper-phone"
        src={teamWallpaperPhone}
        alt="office-pics"
      />

      <div className="team-head-container">
        <h1 className="team-header">MEET OUT TEAM</h1>
        <p className="team-paragraph1">Its all about people</p>
        <p className="team-paragraph2">
          From planning and strategy,to technology and marketing the, individual
          that make up XYZ company share a passion for financial success which
          influences everything we do. We prefer insourcing to outsourcing. so
          you have a team that understands your needs and is passionate about
          your success. The Result is consisitently great work and phenomal
          results that you are proud of.
        </p>
      </div>

      <div className="teammate-contact-container">
        <div className="contact-frame">
          <div className="photo-container">
            <div className="photo-frame">
              <img className="team-image" src={teamMember} alt="teammate" />
              <img className="team-image-phone" src={teamMemberphone} alt="teammate" />

            </div>
          </div>

          <div className="contact">
            <p>MEET MATT DANGERFIELD</p>
            <p>+44[0]20 3434 3949</p>
            <p>+44[0]20 3434 3949</p>
          </div>
        </div>

        <div className="contact-frame">
          <div className="photo-container">
            <div className="photo-frame">
              <img className="team-image" src={teamMember} alt="teammate" />
              <img className="team-image-phone" src={teamMemberphone} alt="teammate" />

            </div>
          </div>

          <div className="contact">
            <p>MEET MATT DANGERFIELD</p>
            <p>+44[0]20 3434 3949</p>
            <p>+44[0]20 3434 3949</p>
          </div>
        </div>

        <div className="contact-frame">
          <div className="photo-container">
            <div className="photo-frame">
              <img className="team-image" src={teamMember} alt="teammate" />
              <img className="team-image-phone" src={teamMemberphone} alt="teammate" />

            </div>
          </div>

          <div className="contact">
            <p>MEET MATT DANGERFIELD</p>
            <p>+44[0]20 3434 3949</p>
            <p>+44[0]20 3434 3949</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
