import React from "react";
import Myphoto from "../assets/my.png";
const About = () => {
  return (
    <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <img src={Myphoto} alt="..." />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">
            About <span>me</span>
          </h1>
          <h2>Front End Developer</h2>
          <hr />
          <p>
            Experienced Event Coordinator with a demonstrated history of working
            in the non-profit organization management industry. Skilled in
            Frontend Development, Microsoft Excel, Engineering, Communication,
            Event Management, and Graphic Design. Strong development
            professional with a B.Tech focused in Electronics and communication
            from Government Engineering college Rewa Madhya Pradesh.Worked as a
            Headboy for 1.5 years and managed lots of events , functions and
            sports activities during Schooling.
            <br />
            Skilled in HTML5,CSS3,Bootstrap,JavaScript and ReactJS. Knowledge of
            C++ Programming language and basic concepts of Data Structure and
            Algorithms. Intern at FastFindFirm as a Frontend Developer and at
            Oasis Infobyte as web Development and Designing Intern.
          </p>
          <a
            href="https://drive.google.com/file/d/1LY65EKKlG_KFhXMVPe1Jwvgon-aU4fd8/view?usp=share_link"
            className="cta"
          >
            Download Resume
          </a>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default About;
