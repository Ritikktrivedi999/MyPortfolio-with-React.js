import React from "react";
import Imgg from "../assets/imgg.png";
const Portfolio = () => {
  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">
            Recent <span>Projects</span>
          </h1>
        </div>
        <div className="all-projects">
          <div className="project-item">
            <div className="project-info">
              <h1>Project 1</h1>
              <h2>Coding is Love</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
                iusto cupiditate voluptatum impedit unde rem ipsa distinctio
                illum quae mollitia ut, accusantium eius odio ducimus illo neque
                atque libero non sunt harum? Ipsum repellat animi, fugit
                architecto voluptatum odit et!
              </p>
            </div>
            <div className="project-img">
              <img src={Imgg} alt="..." />
            </div>
          </div>
          <div className="project-item">
            <div className="project-info">
              <h1>Project 2</h1>
              <h2>Coding is Love</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
                iusto cupiditate voluptatum impedit unde rem ipsa distinctio
                illum quae mollitia ut, accusantium eius odio ducimus illo neque
                atque libero non sunt harum? Ipsum repellat animi, fugit
                architecto voluptatum odit et!
              </p>
            </div>
            <div className="project-img">
              <img src={Imgg} alt="..." />
            </div>
          </div>
          <div className="project-item">
            <div className="project-info">
              <h1>Project 3</h1>
              <h2>Coding is Love</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
                iusto cupiditate voluptatum impedit unde rem ipsa distinctio
                illum quae mollitia ut, accusantium eius odio ducimus illo neque
                atque libero non sunt harum? Ipsum repellat animi, fugit
                architecto voluptatum odit et!
              </p>
            </div>
            <div className="project-img">
              <img src={Imgg} alt="..." />
            </div>
          </div>
          <div className="project-item">
            <div className="project-info">
              <h1>Project 4</h1>
              <h2>Coding is Love</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
                iusto cupiditate voluptatum impedit unde rem ipsa distinctio
                illum quae mollitia ut, accusantium eius odio ducimus illo neque
                atque libero non sunt harum? Ipsum repellat animi, fugit
                architecto voluptatum odit et!
              </p>
            </div>
            <div className="project-img">
              <img src={Imgg} alt="..." />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Portfolio;
