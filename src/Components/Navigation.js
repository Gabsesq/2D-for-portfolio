import React from 'react';
import { Link } from 'react-router-dom';
import '../Navigation.css'; // Ensure this path is correct
import homeImage from '../assets/TXTPICS/home.png'; // Import the image
import aboutImage from '../assets/TXTPICS/about.png'; // Import the image
import projectsImage from '../assets/TXTPICS/projects.png'; // Import the image
import contactImage from '../assets/TXTPICS/contact.png'; // Import the image

function Navigation() {
  console.log("Navigation component is rendering");

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={homeImage} alt="Home" />
          </Link>
        </li>
        <li>
          <Link to="/About">
            <img src={aboutImage} alt="About" />
          </Link>
        </li>
        <li>
          <Link to="/Projects">
            <img src={projectsImage} alt="Projects" />
          </Link>
        </li>
        <li>
          <Link to="/Contact">
            <img src={contactImage} alt="Contact" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
