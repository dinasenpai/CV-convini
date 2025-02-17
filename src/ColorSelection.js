import React from 'react';

const ColorSelection = ({ onSelectColor }) => {
  const handleColorClick = (color) => {
    onSelectColor(color); // Pass selected color to the parent component
  };

  return (
    <div>
      <button onClick={() => handleColorClick('blue')}>Blue</button>
      <button onClick={() => handleColorClick('red')}>Red</button>
      <button onClick={() => handleColorClick('green')}>Green</button>
    </div>
  );
};

export default ColorSelection;
