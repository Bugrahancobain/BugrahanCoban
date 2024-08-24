import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareTwitter,
  faSquareInstagram,
  faSquareWhatsapp,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

function AboutMe({ locale, t }) {
  return (
    <div className="aboutMe">
      <div className="aboutTop">
        <div className="aboutMeTitle">
          <span className="title2Word">{t?.aboutmeTitleTwoWorld}</span>
          <span className="titleOtherWord">{t?.aboutmeTitleOutherWorld}</span>
        </div>
        <div className="icons">
          <a
            aria-label="linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/bu%C4%9Frahan-%C3%A7oban-37934724a/?originalSubdomain=tr"
          >
            <FontAwesomeIcon icon={faLinkedin} className="iconClass" />
          </a>
          <a
            aria-label="twitter"
            target="_blank"
            href="https://x.com/Muzisyen_Adam"
          >
            <FontAwesomeIcon icon={faSquareTwitter} className="iconClass" />
          </a>
          <a
            aria-label="instagram"
            target="_blank"
            href="https://www.instagram.com/muzisyenadam/"
          >
            <FontAwesomeIcon icon={faSquareInstagram} className="iconClass" />
          </a>
          <a
            aria-label="whatsapp"
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=905061566364&text&type=phone_number&app_absent=0"
          >
            <FontAwesomeIcon icon={faSquareWhatsapp} className="iconClass" />
          </a>
          <a
            aria-label="github"
            target="_blank"
            href="https://github.com/Bugrahancobain"
          >
            <FontAwesomeIcon icon={faSquareGithub} className="iconClass" />
          </a>
        </div>
      </div>
      <div className="aboutBottom">
        <div className="bottomleft">
          <p className="firstContext">{t?.aboutmefirstcontext}</p>
          <p className="secondContext">{t?.aboutmesecondcontext}</p>
        </div>
        <div className="bottomRight">
          <p className="firstContext">{t?.aboutmethirdcontext}</p>
          <p className="secondContext">{t?.aboutmefourthcontext}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
