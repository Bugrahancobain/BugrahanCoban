import React from "react";
import Banner from "../components/Banner";
import Me from "../components/Me";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HomePage = ({ locale, t }) => {
  return (
    <div>
      <Navbar locale={locale} t={t} />
      <Banner locale={locale} t={t} />
      <Me locale={locale} t={t} />
      <Skills locale={locale} t={t} />
      <Contact locale={locale} t={t} />
      <Footer locale={locale} t={t} />
    </div>
  );
};

export default HomePage;
