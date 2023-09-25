import React from 'react'

export default function BottomMenu({ handlePositiveClick, handleNegativeClick }) {
  return (
    <div className="bottom-menu">
    <button onClick={handlePositiveClick}>Right</button>
    <button onClick={handleNegativeClick}>False</button>
  </div>
  );
}
