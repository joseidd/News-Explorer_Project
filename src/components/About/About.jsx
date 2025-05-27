import React from "react";
import authorImg from "../../assets/author.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <img src={authorImg} alt="Johan Suarez" className="about__author-image" />
      <div className="about__content">
        <h4 className="about__header">About the author</h4>
        <p className="about__paragraph">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
          <span className="about__paragraph-seperater">
            You can also talk about your experience with TripleTen, what you
            learned there, and how you can help potential customers.
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
