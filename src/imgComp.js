import React from 'react';
import './App.css'; // Assuming your CSS is defined here
import myImage from './assets/Untitled_Artwork.png';  // Correct the import path based on your project structure

const ImageComponent = () => {
  return (
    <div className="container">
      {/* Using the imported image directly */}
      <img src={myImage} alt="Overlay" className="image-overlay" style={{ width:'600px', height:'auto'}} />
      {/* You can add more content here that will appear on top of the background and image */}
    </div>
  );
};

export default ImageComponent;
