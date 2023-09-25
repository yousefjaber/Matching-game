import React from 'react'
import 'font-awesome/css/font-awesome.min.css';


export default function TopMenu({ positiveCount, negativeCount }) {
  return (<div className='icon-container'>
    <div >
      <img src="positive-icon.png" alt="Positive" className="positive-icon" />
      <span>{positiveCount}</span>
    </div>
    <div >
      <img src="negative-icon.png" alt="Negative" className="negative-icon" />
      <span>{negativeCount}</span>
    </div>
    </div>
  );
}
