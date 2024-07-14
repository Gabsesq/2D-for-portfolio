import React from 'react';
import ImageComponent from './ImageComponent';
import '../Home.css';
import '../App.css';

function Home() {
  console.log("Home component is rendering");

  return (
    <div className="Home">
      <header className="App-header">
        <p>WELCOME TO MY PORTFOLIO !!!</p>
      </header>
      <div className="image-container">
        <ImageComponent />
      </div>
    </div>
  );
}

export default Home;