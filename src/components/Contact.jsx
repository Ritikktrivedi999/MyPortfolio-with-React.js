import React from "react";
import contacticon from "../assets/contact.png";
import emailicon from "../assets/email.png";
import addressicon from "../assets/add.png";
import Skills from "../assets/skills.png";
import programming from "../assets/programming.png";
import otherskill from "../assets/otherskill.png";
const Contact = () => {
  return (
    <section id="contact">
      <div className="contact container">
        <div>
          <h1 className="section-title">
            Contact <span>info</span>
          </h1>
        </div>
        <div className="contact-items">
          <div className="contact-item">
            <div className="icon">
              <img src={contacticon} alt="..." />
            </div>
            <div className="contact-info">
              <h1>Phone</h1>
              <h2>+91 7049950018</h2>
              <h2>+91 8370036247</h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <img src={emailicon} alt="..." />
            </div>
            <div className="contact-info">
              <h1>Email</h1>
              <h2>ritikktrivedi9999@gmail.com</h2>
              <h2>rohanbharadwaj7922@gmail.com</h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <img src={addressicon} alt="..." />
            </div>
            <div className="contact-info">
              <h1>Address</h1>
              <h2>Bhavani Nagar Dhekaha Rewa Madhya Pradesh, India </h2>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="contact container">
        <div>
          <h1 className="section-title">
            My <span>Skills</span>
          </h1>
        </div>
        <div className="contact-items">
          <div className="contact-item">
            <div className="icon">
              <img src={Skills} alt="..." />
            </div>
            <div className="contact-info">
              <h1>Development Skills</h1>
              <h2>HTML5, CSS3, JavaScript, Bootsrrap5, ReactJs</h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <img src={programming} alt="..." />
            </div>
            <div className="contact-info">
              <h1>Programing Language</h1>
              <h2>C++ Basics</h2>
              <h2>C++ :Data Structure & Algorithms</h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <img src={otherskill} alt="..." />
            </div>
            <div className="contact-info">
              <h1>Other Skills</h1>
              <h2>Graphic Designing, Logo Designing </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
