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
  const gridRef = useRef(null);

  const handleClick = () => {
    setIconsVisible(!iconsVisible);

    if (!iconsVisible) {
      // Animate icons in a quarter circle (bottom left) from the 9-square grid
      gsap.to(homeRef.current, { x: 40, y: 0, duration: .5, opacity: 1 });
      gsap.to(aboutRef.current, { x: 60, y: 40, duration: .5, opacity: 1 });
      gsap.to(contactRef.current, { x: 90, y: 60, duration: .5, opacity: 1 });
      gsap.to(projectsRef.current, { x: 115, y: 70, duration: .5, opacity: 1 });
    } else {
      // Reset positions if hiding the icons
      gsap.to([homeRef.current, aboutRef.current, contactRef.current, projectsRef.current], {
        x: 100,
        y: -7,
        duration: 1,
        opacity: 0,
      });
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

      {/* Navigation icons */}
      <ul className="nav-icons" style={{ position: 'relative' }}>
        <li ref={homeRef} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Link to="/"> {/* Link to Home */}
            <img src={homeImage} alt="Home" />
          </Link>
        </li>
        <li ref={aboutRef} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Link to="/about"> {/* Link to About */}
            <img src={aboutImage} alt="About" />
          </Link>
        </li>
        <li ref={contactRef} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Link to="/contact"> {/* Link to Contact */}
            <img src={contactImage} alt="Contact" />
          </Link>
        </li>
        <li ref={projectsRef} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Link to="/projects"> {/* Link to Projects */}
            <img src={projectsImage} alt="Projects" />
          </Link>
        </li>
      </ul>

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
    </nav>
  );
};

export default Navigation;
