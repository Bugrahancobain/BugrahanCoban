import React from "react";

export const Banner = ({ locale, t }) => {
  return (
    <div>
      <img
        loading="lazy"
        src="/BannerImg.webp"
        alt="BannerImage"
        className="bannerImg"
      />

      <div className="bannerMain">
        <h1 className="bannerTitle">Buğrahan Çoban</h1>
        <p className="bannerContext">{t?.bannerContext}</p>
      </div>
    </div>
  );
};

export default Banner;
