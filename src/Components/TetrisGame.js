import React, { useState, useEffect } from 'react';
import '../TetrisGame.css';

const ROWS = 20;
const COLS = 10;

const TetrisGame = () => {
  const [grid, setGrid] = useState(createEmptyGrid());

  // Logic for creating an empty grid
  function createEmptyGrid() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }

  // Handle key press events for controlling the pieces
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        // Move piece left
        console.log('Move left');
      } else if (e.key === 'ArrowRight') {
        // Move piece right
        console.log('Move right');
      } else if (e.key === 'ArrowDown') {
        // Move piece down faster
        console.log('Move down');
      } else if (e.key === 'ArrowUp') {
        // Rotate piece
        console.log('Rotate');
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Placeholder for rendering the grid
  const renderGrid = () => {
    return grid.map((row, rowIndex) => (
      <div key={rowIndex} className="tetris-row">
        {row.map((cell, cellIndex) => (
          <div key={cellIndex} className={`tetris-cell ${cell ? 'filled' : ''}`} />
        ))}
      </div>
    ));
  };

  return (
    <div className="tetris-container">
      <h2>Tetris Game</h2>
      <div className="tetris-grid">{renderGrid()}</div>
    </div>
  );
};

export default TetrisGame;
