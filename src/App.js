import React from "react";
import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import "./styles/style.css";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <ServiceSection />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
