import React from "react";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="hero container">
        <div>
          <h1>
            Hello, <span></span>
          </h1>
          <h1>
            My Name is <span></span>
          </h1>
          <h1>
            Ritik <span></span>
          </h1>
          <br />
          <div>
            <Typewriter
              options={{
                strings: [
                  "A Frontend Developer",
                  "A Designer",
                  "A Passionate Coder",
                ],
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName: "typewriterpara",
              }}
            />
          </div>
          <a
            href="mailto:ritikktrivedi9999@gmail.com"
            type="button"
            className="cta"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
