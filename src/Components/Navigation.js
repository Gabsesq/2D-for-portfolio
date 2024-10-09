import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import chargeImage from '../assets/charge.jpg'; // Adjust the image paths
import homeImage from '../assets/TXTPICS/home.png'; // Correct the image path
import aboutImage from '../assets/TXTPICS/about.png';
import contactImage from '../assets/TXTPICS/contact.png';
import projectsImage from '../assets/TXTPICS/projects.png';
import '../Navigation.css'; // Keep the CSS file

const Navigation = () => {
  const [iconsVisible, setIconsVisible] = useState(false); // State to toggle visibility

  const handleClick = () => {
    setIconsVisible(!iconsVisible); // Toggle visibility when clicking on mini squares
  };

  return (
    <nav>
      {/* Time display */}
      <div className="time-display">
        <img src={chargeImage} alt="Charge" className="charge-icon" /> {/* Display the charge icon */}
        12:30
      </div>

      {/* Navigation icons with links to routes, initially hidden */}
      <ul className={`nav-icons ${iconsVisible ? 'visible' : 'hidden'}`}>
        <li>
          <Link to="/"> {/* Link to Home route */}
            <img src={homeImage} alt="Home" />
          </Link>
        </li>
        <li>
          <Link to="/about"> {/* Link to About route */}
            <img src={aboutImage} alt="About" />
          </Link>
        </li>
        <li>
          <Link to="/contact"> {/* Link to Contact route */}
            <img src={contactImage} alt="Contact" />
          </Link>
        </li>
        <li>
          <Link to="/projects"> {/* Link to Projects route */}
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
