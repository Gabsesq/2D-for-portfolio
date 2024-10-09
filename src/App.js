import React, { useEffect } from 'react';
import './App.css';
import './glitch.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import ProjectShowcase from './Components/ProjectShowcase';
import Navigation from './Components/Navigation';

import TetrisGame from './Components/TetrisGame';

function App() {
  useEffect(() => {
    const glitchEffect = () => {
      const appElement = document.querySelector('.App');
      if (appElement) {
        appElement.classList.remove('glitch-active');
        void appElement.offsetWidth;
        appElement.classList.add('glitch-active');
      }
    };

    const interval = setInterval(() => {
      glitchEffect();
    }, Math.random() * 10000 + 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<ProjectShowcase />} />
          <Route path="/Tetris" element={<TetrisGame />} /> {/* New route for Tetris */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
