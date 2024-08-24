import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareTwitter,
  faSquareInstagram,
  faSquareWhatsapp,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer({ locale, t }) {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="cv">
        <a
          className="footerCvBtn"
          href="/bugrahancobancv.pdf"
          download="BugrahanCobanCv"
        >
          {t?.downloadmyfullresume}
        </a>
      </div>
      <div className="social">
        <div className="icons">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/bu%C4%9Frahan-%C3%A7oban-37934724a/?originalSubdomain=tr"
          >
            <FontAwesomeIcon icon={faLinkedin} className="iconClass" />
          </a>
          <a target="_blank" href="https://x.com/Muzisyen_Adam">
            <FontAwesomeIcon icon={faSquareTwitter} className="iconClass" />
          </a>
          <a target="_blank" href="https://www.instagram.com/muzisyenadam/">
            <FontAwesomeIcon icon={faSquareInstagram} className="iconClass" />
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=905061566364&text&type=phone_number&app_absent=0"
          >
            <FontAwesomeIcon icon={faSquareWhatsapp} className="iconClass" />
          </a>
          <a target="_blank" href="https://github.com/Bugrahancobain">
            <FontAwesomeIcon icon={faSquareGithub} className="iconClass" />
          </a>
        </div>
      </div>
      <div className="reserved">
        © Buğrahan Çoban {year}. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
}

export default Footer;
