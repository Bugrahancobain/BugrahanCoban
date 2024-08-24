import React from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwicher";

function Navbar({ locale, t }) {
  return (
    <div className="navbar">
      <div className="navbox">
        <div className="navlink">
          <div>
            <Link className="homeLink" href={`/${locale}`}>
              {t?.home}
            </Link>
          </div>
          <div>
            <Link className="myProjectLink" href={`/${locale}/myproject`}>
              {t?.myprojects}
            </Link>
          </div>
        </div>
        <div className="navBarRightSide">
          <div>
            <a
              className="bannerCvBtn"
              href="/BugrahanCobanCv.pdf"
              download="BugrahanCobanCv"
            >
              {t?.downloadmyfullresume}
            </a>
          </div>
          <div>
            <LanguageSwitcher locale={locale} t={t} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
