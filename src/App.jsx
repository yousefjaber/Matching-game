import React, { useState } from 'react';
import fakeData from './data';
import TopMenu from './components/topMenu';
import ImageDisplay from './components/imageDisplay';
import BottomMenu from './components/bottomMenu';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [currentItem, setCurrentItem] = useState(0);
  const [positiveCount, setPositiveCount] = useState(0);
  const [negativeCount, setNegativeCount] = useState(0);

  const handlePositiveClick = () => {
    if (fakeData[currentItem].Image === fakeData[currentItem].description) {
      setPositiveCount(positiveCount + 1);
    } else {
      setNegativeCount(negativeCount + 1);
    }
    showNextItem();
  };

  const handleNegativeClick = () => {
    if (fakeData[currentItem].Image !== fakeData[currentItem].description) {
      setPositiveCount(positiveCount + 1);
    } else {
      setNegativeCount(negativeCount + 1);
    }
    showNextItem();
  };

  const showNextItem = () => {
    if (currentItem < fakeData.length - 1) {
      setCurrentItem(currentItem + 1);
    } else {
      setCurrentItem(0);
    }
  };

  return (
    <div className="App">
      <TopMenu positiveCount={positiveCount} negativeCount={negativeCount} />
      <ImageDisplay fakeData={fakeData} currentItem={currentItem} />
      <BottomMenu
        handlePositiveClick={handlePositiveClick}
        handleNegativeClick={handleNegativeClick}
      />
    </div>
  );
}

export default App;