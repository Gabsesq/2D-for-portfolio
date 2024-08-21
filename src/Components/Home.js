import React from 'react';
import ImageComponent from './ImageComponent';
import '../Home.css';
import '../App.css';

function Home() {
  console.log("Home component is rendering");

  return (
    <div className="Home">
      <header className="App-header">
        <p className='Welcome'>YOU HAVE ENTERED GABRIELLA'S PHONE:</p>
      </header>
      <div className="image-container">
        <ImageComponent />
      </div>
    </div>
  );
}

export default Home;
