import React, { useState, useEffect } from 'react';
import '../About.css';
import me from '../assets/me.jpg'; // Import the image
import '../me.css';
import oliver from '../assets/oliver.jpg'; // Import the image
import maddie from '../assets/maddie.jpg'; // Import the image


function About() {
  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedBullets, setDisplayedBullets] = useState([]);
  const [showImage, setShowImage] = useState(false);

  const fullText1 = "Hello! My name is Gabriella Esquibel and I am a product of the results when you combine art and technology.";

  useEffect(() => {
    let currentIndex1 = 0;
    const fullText2 = [
      "My favorite languages are Java, Python and secretly LISP", 
      "I picked tech because of the endless learning",
      "Some side softwares I've learned along the way: Procreate, adobe suite, blender, animation",
      "I played college golf, love/hate relationship", 
      "Singing and dancing is one of my favorite pass-times", 
      "I love my dogs!!!"
    ]; // List of bullet points

    const interval1 = setInterval(() => {
      if (currentIndex1 < fullText1.length) {
        setDisplayedText1((prev) => prev + fullText1[currentIndex1]);
        currentIndex1 += 1;
      } else {
        clearInterval(interval1);
        setShowImage(true); // Show the image after the first text is fully typed
        setTimeout(typeBullets, 500); // Start typing the bullet points after a delay
      }
    }, 15);

    const typeBullets = () => {
      fullText2.forEach((bullet, index) => {
        setTimeout(() => {
          setDisplayedBullets((prev) => [...prev, bullet]);
        }, index * 500);
      });
    };

    return () => {
      clearInterval(interval1); // Clean up interval on component unmount
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="container">
      <h1 className="about-header">A little bit about me</h1>
      <p className="about-content">{displayedText1}</p>
      {showImage && <img src={me} alt="Gabriella Esquibel" className="about-image" />} {/* Display the image */}
      <ul className="about-content">
        {displayedBullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
      {showImage && <img src={oliver} alt="Oliver" className="about-image" />} 
      {showImage && <img src={maddie} alt="Maddie" className="about-image" />} 
    </div>
  );
}

export default About;
