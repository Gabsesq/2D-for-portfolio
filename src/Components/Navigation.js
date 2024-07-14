import React from 'react';
import { Link } from 'react-router-dom';
import '../Navigation.css'; // Ensure this path is correct

function Navigation() {
  console.log("Navigation component is rendering");

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/About">
            <button>About</button>
          </Link>
        </li>
        <li>
          <Link to="/Projects">
            <button>Projects</button>
          </Link>
        </li>
        <li>
          <Link to="/Contact">
            <button>Contact</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
