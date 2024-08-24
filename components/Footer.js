import React from "react";

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
            <i className="fa-brands fa-linkedin iconClass"></i>
          </a>
          <a target="_blank" href="https://x.com/Muzisyen_Adam">
            <i className="fa-brands fa-square-twitter iconClass"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/muzisyenadam/">
            <i className="fa-brands fa-square-instagram iconClass"></i>
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=905061566364&text&type=phone_number&app_absent=0"
          >
            <i className="fa-brands fa-square-whatsapp iconClass"></i>
          </a>
          <a target="_blank" href="https://github.com/Bugrahancobain">
            <i className="fa-brands fa-square-github iconClass"></i>
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
