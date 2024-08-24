import React from "react";
import Projects from "../components/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export function getStaticProps({ locale }) {
  return {
    props: {
      locale,
      t: {
        ...require(`../lang/${locale}.json`),
      },
    },
  };
}
const myproject = ({ locale, t }) => {
  return (
    <div>
      <Navbar locale={locale} t={t} />
      <div>
        <img
          loading="lazy"
          src="/MyProjectBannerImage.webp"
          alt="MyProjectBannerImage"
          className="MyProjectBannerImg"
        />
        <div className="MyProjectBannerMain">
          <h1 className="MyProjectBannerTitle">{t?.MyProjectBannerTitle}</h1>
        </div>
      </div>
      <Projects locale={locale} t={t} />
      <Footer locale={locale} t={t} />
    </div>
  );
};

export default myproject;
