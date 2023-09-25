import React, { useState, useEffect } from 'react';

export default function ImageDisplay({ fakeData }) {
  const [randomImageIndex, setRandomImageIndex] = useState(0);
  const [randomDescriptionIndex, setRandomDescriptionIndex] = useState(0);

  useEffect(() => {
    const newImageIndex = Math.floor(Math.random() * fakeData.length);
    const newDescriptionIndex = Math.floor(Math.random() * fakeData.length);
    
    setRandomImageIndex(newImageIndex);
    setRandomDescriptionIndex(newDescriptionIndex);
  }, [fakeData]);

  return (
    <div className="image-display">
      <img src={fakeData[randomImageIndex].Image} alt={fakeData[randomDescriptionIndex].description} className='image-size' />
      <p className='image-description'>{fakeData[randomDescriptionIndex].description}</p>
    </div>
  );
}


