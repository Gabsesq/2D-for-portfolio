import React from 'react';
import '../App.css'; // Ensure the path is correct
import UntitledArtwork from '../assets/Untitled_Artwork.png'; // Ensure the path is correct

function ImageComponent() {
  console.log("ImageComponent is rendering");

  return (
    <div className="image-container">
      <img src={UntitledArtwork} alt="Artwork" className="App-logo" />
    </div>
  );
}

export default ImageComponent;
