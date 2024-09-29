import React, { useState } from 'react';
import './ProgressBar.css';

function ProgressBar({ incrementValue, decrementValue }) {
  const [progress, setProgress] = useState(0);

  // Function to increase progress based on incrementValue
  const increaseProgress = () => {
    if (progress + incrementValue <= 100) {
      setProgress(progress + incrementValue);
    } else {
      setProgress(100); // Cap at 100%
    }
  };

  // Function to decrease progress based on decrementValue
  const decreaseProgress = () => {
    if (progress - decrementValue >= 0) {
      setProgress(progress - decrementValue);
    } else {
      setProgress(0); // Cap at 0%
    }
  };

  return (
    <div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>

      {/* Buttons to increase and decrease progress */}
     
    </div>
  );
}

export default ProgressBar;
