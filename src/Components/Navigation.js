import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import chargeImage from '../assets/charge.jpg';
import homeImage from '../assets/TXTPICS/home.png';
import aboutImage from '../assets/TXTPICS/about.png';
import contactImage from '../assets/TXTPICS/contact.png';
import projectsImage from '../assets/TXTPICS/projects.png';
import '../Navigation.css';

const Navigation = () => {
  const [iconsVisible, setIconsVisible] = useState(false);

  // Create refs for each icon
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);

  const handleClick = () => {
    setIconsVisible(!iconsVisible);

    if (!iconsVisible) {
      // Position icons to align with the quarter circle initially
      gsap.set(homeRef.current, { x: 110, y: 60, opacity: 1 });
      gsap.set(aboutRef.current, { x: 65, y: 80,  opacity: 1 });
      gsap.set(contactRef.current, { x: 20, y: 120, opacity: 1 });
      gsap.set(projectsRef.current, { x: -20, y: 180, opacity: 1 });
  
      // Apply a rotation to the entire navbar-container
      gsap.to(".navbar-container", { rotation: -90, duration: .5 });
    }else {
      // Reset icons to original position along the same path
      gsap.to(".navbar-container", { rotation: 0, duration: .5 });
      gsap.set(homeRef.current, { x: 110, y: 60, opacity: 1, duration: 1});
      gsap.set(aboutRef.current, { x: 65, y: 80,  opacity: 1, duration: 1});
      gsap.set(contactRef.current, { x: 20, y: 120, opacity: 1, duration: 1 });
      gsap.set(projectsRef.current, { x: -20, y: 180, opacity: 1, duration: 1 });
    }
  };
  // Set initial opacity to 0 for the icons
  useEffect(() => {
    gsap.set([homeRef.current, aboutRef.current, contactRef.current, projectsRef.current], { opacity: 0 });
  }, []);

  return (
    <nav>
      <div className="time-display">
        <img src={chargeImage} alt="Charge" className="charge-icon" />
        12:30
      </div>

      {/* New Icon Grid Container with 9 squares */}
      <div className="icon-grid-container" onClick={handleClick}>
        <div className="icon-grid">
          <div className="grid-square"></div>
          <div className="grid-square"></div>
          <div className="grid-square"></div>
          <div className="grid-square"></div>
          <div className="grid-square"></div>
          <div className="grid-square"></div>
          <div className="grid-square"></div>
          <div className="grid-square"></div>
          <div className="grid-square"></div>
        </div>
      </div>

      {/* Navbar container with icons */}
      <div className="navbar-container">
        <div className="quarter-circle"></div>
        <div ref={homeRef} className="icon">
          <Link to="/">
            <img src={homeImage} alt="Home" />
          </Link>
        </div>
        <div ref={aboutRef} className="icon">
          <Link to="/about">
            <img src={aboutImage} alt="About" />
          </Link>
        </div>
        <div ref={contactRef} className="icon">
          <Link to="/contact">
            <img src={contactImage} alt="Contact" />
          </Link>
        </div>
        <div ref={projectsRef} className="icon">
          <Link to="/projects">
            <img src={projectsImage} alt="Projects" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

