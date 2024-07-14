import React, { useState, useEffect } from 'react';
import '../About.css';

function About() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Hello! My name is Gabriella Esquibel and I am a product of the results when you combine art and technology. I've learned a series of artistic softwares including Blender, Adobe Suite, Procreate, and Programming!";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.substring(0, currentIndex + 1));
      currentIndex += 1;
      if (currentIndex === fullText.length) {
        clearInterval(interval);
      }
    }, 50); // Adjust the speed by changing the interval (in ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1 className="about-header">A little bit about me</h1>
      <p className="about-content">{displayedText}</p>
    </div>
  );
}

export default About;


