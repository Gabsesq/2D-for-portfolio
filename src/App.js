// App.js
import React from 'react';
import './App.css';
import ImageComponent from './imgComp';  // Make sure the path is correct

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Include the ImageComponent */}
        <ImageComponent />
        
        <p>
          WELCOME TO MY PORTFOLIO
        </p>
      </header>
    </div>
  );
}

export default App;