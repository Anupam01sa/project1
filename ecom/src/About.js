import React from "react";
import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name: "About MY shop",
  };

  return <HeroSection myData={data} />;
};

export default About;
