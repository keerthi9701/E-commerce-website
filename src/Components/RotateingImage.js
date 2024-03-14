// RotatingImage.jsx
import React, { useState } from 'react';

const RotatingImage = ({ src }) => {
  const [isRotating, setIsRotating] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e) => {
    setIsRotating(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isRotating) {
      const deltaX = e.clientX - startX;
      const sensitivity = 1;
      setRotation((rotation + deltaX * sensitivity) % 360);
      setStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsRotating(false);
  };

  return (
    <img
      src={src}
      alt="Rotating Image"
      style={{
        transform: `rotate(${rotation}deg)`,
        cursor: isRotating ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    />
  );
};

export default RotatingImage;
