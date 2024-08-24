import React from "react";

function Projects({ locale, t }) {
  return (
    <div className="projects">
      <div className="projectCards">
        <div className="card">
          <a
            style={{ textDecoration: "none" }}
            className="projectlink"
            target="_blank"
            href="https://www.karamans.com/"
          >
            <img
              loading="lazy"
              className="cardImg"
              src="/karamans-logo.webp"
              alt="Karamans"
              style={{ width: "100%" }}
            />

            <div className="cardContainer">
              <h4>
                <b>Karamans Tekstil</b>
              </h4>
              <p>
                <b>{t?.status}:</b> {t?.finished} / {t?.outOfRelease}
              </p>
            </div>
          </a>
        </div>
        <div className="card">
          <a
            style={{ textDecoration: "none" }}
            className="projectlink"
            target="_blank"
            href="https://www.dosecalculate.me/"
          >
            <img
              loading="lazy"
              className="cardImg"
              src="/doseCalculate.webp"
              alt="doseCalculate"
              style={{ width: "100%" }}
            />

            <div className="cardContainer">
              <h4>
                <b>Dose Calculate</b>
              </h4>
              <p>
                <b>{t?.status}:</b> {t?.inProgress} / {t?.release}
              </p>
            </div>
          </a>
        </div>
        <div className="card">
          <a
            style={{ textDecoration: "none" }}
            className="projectlink"
            target="_blank"
            href="https://bugrahancoban.com/"
          >
            <img
              loading="lazy"
              className="cardImg"
              src="/ComingSoon.webp"
              alt="comingSoon"
              style={{ width: "100%" }}
            />

            <div className="cardContainer">
              <h4>
                <b>{t?.comingSoon}</b>
              </h4>
              <p>
                <b>{t?.status}:</b> {t?.inProgress} / {t?.outOfRelease}
              </p>
            </div>
          </a>
        </div>
        <div className="card">
          <a
            style={{ textDecoration: "none" }}
            className="projectlink"
            target="_blank"
            href="https://bugrahancoban.com/"
          >
            <img
              loading="lazy"
              className="cardImg"
              src="/ComingSoon.webp"
              alt="comingSoon"
              style={{ width: "100%" }}
            />

            <div className="cardContainer">
              <h4>
                <b>{t?.comingSoon}</b>
              </h4>
              <p>
                <b>{t?.status}:</b> {t?.inProgress} / {t?.outOfRelease}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
