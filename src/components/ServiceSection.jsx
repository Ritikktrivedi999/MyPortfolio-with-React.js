import React from "react";
import Service1 from "../assets/ss.png";
const ServiceSection = () => {
  return (
    <section id="services">
      <div className="services container">
        <div className="service-top">
          <h1 className="section-title">
            Serv<span>i</span>ces
          </h1>
          <p>I used to Provide the Following Service</p>
        </div>
        <div className="service-bottom">
          <div className="service-item">
            <div className="icon">
              <img src={Service1} alt="..." />
            </div>
            <h2>Web Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              debitis rerum, magni voluptatem sed architecto placeat beatae
              tenetur officia quod
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <img src={Service1} alt="..." />
            </div>
            <h2>Website Development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              debitis rerum, magni voluptatem sed architecto placeat beatae
              tenetur officia quod
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <img src={Service1} alt="..." />
            </div>
            <h2>Graphic & Logo Designing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              debitis rerum, magni voluptatem sed architecto placeat beatae
              tenetur officia quod
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <img src={Service1} alt="..." />
            </div>
            <h2>Portflio Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              debitis rerum, magni voluptatem sed architecto placeat beatae
              tenetur officia quod
            </p>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default ServiceSection;
