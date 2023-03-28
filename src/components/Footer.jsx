import React from "react";
import Linkedin from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";
import GitHub from "../assets/github.png";
import whatsapp from "../assets/whatsapp.png";
import Facebook from "../assets/fb.png";
import youtube from "../assets/yt.png";
const Footer = () => {
  return (
    <section id="footer">
      <div className="footer container">
        <div className="brand">
          <h1>
            <span>R</span>itik <span>T</span>rivedi
          </h1>
        </div>
        <h2>About the Web </h2>
        <div className="social-icon">
          <div className="social-item">
            <a href="https://github.com/Ritikktrivedi999">
              <img src={GitHub} alt="..." />
            </a>
          </div>
          <div className="social-item">
            <a href="https://www.linkedin.com/in/ritik-trivedi-598a4b21b">
              <img src={Linkedin} alt="..." />
            </a>
          </div>
          <div className="social-item">
            <a href="https://instagram.com/its_titled_trivedi_jii99?igshid=YmMyMTA2M2Y=">
              <img src={Instagram} alt="..." />
            </a>
          </div>
          <div className="social-item">
            <a href="https://wa.me/message/JJ4ZLY6JNG57P1">
              <img src={whatsapp} alt="..." />
            </a>
          </div>
          <div className="social-item">
            <a href="https://www.facebook.com/rohan.trivedi.3990">
              <img src={Facebook} alt="..." />
            </a>
          </div>
          <div className="social-item">
            <a href="https://youtube.com/@ritiktrivedi99">
              <img src={youtube} alt="..." />
            </a>
          </div>
        </div>
        <p>Copyright © 2020 Ritik Trivedi. All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
