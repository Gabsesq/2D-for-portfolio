import React, { useState, useEffect } from 'react';
import '../About.css';

function About() {
  const textItems = [
    "Hello!",
    "My name is Gabriella Esquibel. I am passionate about bringing ideas to life through art and technology.",
    "I am a new grad who is looking for a full stack, backend, or frontend role.",
    "My favorite languages are java and python. I have an array of Softwares and frameworks in my skillset such as: Reactjs, SQL, ROR, Tesseract, Expressjs, Node.js, and more.",
    "I picked a career in Software Development because of the endless ability and necesity to learn new concepts. Applying these concepts and bringing ideas to life brings me fulfillment.",
    "Some additional artistic softwares I know include: Blender, Adobe suite, and procreate",
    "Please visit my messenger app in this phone to connect! (And checkout my image gallery if you have some time)",
  ];

  const [visibleItems, setVisibleItems] = useState(Array(textItems.length).fill(false));

  useEffect(() => {
    const timers = visibleItems.map((_, index) => {
      return setTimeout(() => {
        setVisibleItems((prev) => {
          const newVisibleItems = [...prev];
          newVisibleItems[index] = true;
          return newVisibleItems;
        });
      }, index * 1000); // Each item appears 2 seconds after the previous one
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer)); // Clear timers on component unmount
    };
  }, []);

  return (
    <div className="about-container">
      {textItems.map((text, index) => (
        <div key={index} className={`text-bubble ${visibleItems[index] ? 'visible' : ''}`}>
          {text}
        </div>
      ))}
    </div>
  );
}

export default About;
