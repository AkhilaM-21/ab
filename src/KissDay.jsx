import React from 'react';

export default function KissDay({ onBack }) {
  const checkDate = () => {
    const today = new Date();
    const target = new Date(today.getFullYear(), 1, 13); // Feb 13
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    return today.getTime() >= target.getTime();
  };

  if (!checkDate()) {
    return (
      <div className="day-container locked">
        <div className="content-card">
          <h1>⏳ Locked</h1>
          <p>Kannalu its loading the day... (02-13)</p>
          <button onClick={onBack}>Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="day-container" style={{ backgroundColor: '#ff1493' }}>
      <span className="icon-large">💋</span>
      <h1>Kiss Day</h1>
      <div className="content-card">
        <h2>Sealed with Love 💋</h2>
        <p>A kiss is a secret told to the mouth instead of the ear.</p>
        <p>Sending you a million kisses!</p>
      </div>
      <button onClick={onBack} className="back-btn">Back to Week</button>
    </div>
  );
}