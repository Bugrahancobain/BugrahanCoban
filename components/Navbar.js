import React, { useState, useEffect } from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwicher";
import { FaBars } from "react-icons/fa6";

function Navbar({ locale, t }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        !event.target.closest(".faBarsIconClass") &&
        !event.target.closest(".navlink")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="navbar">
      <div className="navbox">
        <FaBars className="faBarsIconClass" onClick={handleMenuOpen} />
        <div className={`navlink ${menuOpen ? "open" : ""}`}>
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
              href="/bugrahancobancv.pdf"
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
