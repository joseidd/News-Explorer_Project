import React from "react";
import authorImg from "../../assets/jose.jpeg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <img src={authorImg} alt="Johan Suarez" className="about__author-image" />
      <div className="about__content">
        <h4 className="about__header">Jose Duran</h4>
        <p className="about__paragraph">
          I am a dedicated and innovative software engineer with a deep passion
          for technology and problem-solving. With several years of experience,
          I have honed my skills in designing, developing, and deploying
          software solutions that drive efficiency and productivity. My
          expertise spans across multiple programming languages and frameworks,
          allowing me to adapt quickly to new technologies and deliver
          high-quality code that meets business objectives.
        </p>
      </div>
    </div>
  );
};

export default About;
