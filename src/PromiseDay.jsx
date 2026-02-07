import React from 'react';

export default function PromiseDay({ onBack }) {
  const checkDate = () => {
    const today = new Date();
    const target = new Date(today.getFullYear(), 1, 11); // Feb 11
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    return today.getTime() >= target.getTime();
  };

  if (!checkDate()) {
    return (
      <div className="day-container locked">
        <div className="content-card">
          <h1>⏳ Locked</h1>
          <p>Bangaram its loading the day... (02-11)</p>
          <button onClick={onBack}>Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="day-container" style={{ backgroundColor: '#87ceeb' }}>
      <span className="icon-large">🤞</span>
      <h1>Promise Day</h1>
      <div className="content-card">
        <h2>My Vow to You 🤞</h2>
        <p>I promise to always be by your side, through thick and thin.</p>
        <p>Forever and always.</p>
      </div>
      <button onClick={onBack} className="back-btn">Back to Week</button>
    </div>
  );
}