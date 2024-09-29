import React from 'react';
import './ProgressBar.css';

function ProgressBar({ donated, goal, label }) {
  const progressPercentage = goal > 0 ? Math.min((donated / goal) * 100, 100) : 0;

  return (
    <div>
      <h3>{label}</h3>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}>
          {progressPercentage.toFixed(2)}% ({donated} / {goal})
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
