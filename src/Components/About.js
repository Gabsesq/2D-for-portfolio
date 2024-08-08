import React, { useState, useEffect } from 'react';
import '../About.css';
import me from '../assets/TXTPICS/GOLF.png';
import maddie from '../assets/TXTPICS/MADDIE.png';
import oliver from '../assets/TXTPICS/OLIVER.png';
import txt1 from '../assets/TXTPICS/txt1.png';
import txt2 from '../assets/TXTPICS/TXT2.png'; 
import txt3 from '../assets/TXTPICS/TXT3.png'; 
import txt4 from '../assets/TXTPICS/TXT4.png'; 
import txt5 from '../assets/TXTPICS/TXT5.png'; 
import txt6 from '../assets/TXTPICS/TXT6.png';

function About() {
  const [visibleItems, setVisibleItems] = useState([false, false, false, false, false, false, false, false, false]);

  useEffect(() => {
    const timers = visibleItems.map((_, index) => {
      return setTimeout(() => {
        setVisibleItems((prev) => {
          const newVisibleItems = [...prev];
          newVisibleItems[index] = true;
          return newVisibleItems;
        });
      }, index * 2000); // Each item appears 1 second after the previous one
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer)); // Clear timers on component unmount
    };
  }, []);

  return (
    <div className="about-container">
      <img src={txt1} alt="Text 1" className={`about-item ${visibleItems[0] ? 'visible' : ''}`} />
      <img src={me} alt="GOLF" className={`about-item ${visibleItems[1] ? 'visible' : ''}`} />
      <img src={txt2} alt="Text 2" className={`about-item ${visibleItems[2] ? 'visible' : ''}`} />
      <img src={txt3} alt="Text 3" className={`about-item ${visibleItems[3] ? 'visible' : ''}`} />
      <img src={txt4} alt="Text 4" className={`about-item ${visibleItems[4] ? 'visible' : ''}`} />
      <img src={txt5} alt="Text 5" className={`about-item ${visibleItems[5] ? 'visible' : ''}`} />
      <img src={txt6} alt="Text 6" className={`about-item ${visibleItems[6] ? 'visible' : ''}`} />
      <img src={maddie} alt="Maddie" className={`about-item ${visibleItems[7] ? 'visible' : ''}`} />
      <img src={oliver} alt="Oliver" className={`about-item ${visibleItems[8] ? 'visible' : ''}`} />
    </div>
  );
}

export default About;
