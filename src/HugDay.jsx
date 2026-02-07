import React from 'react';

export default function HugDay({ onBack }) {
  const checkDate = () => {
    const today = new Date();
    const target = new Date(today.getFullYear(), 1, 12); // Feb 12
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    return today.getTime() >= target.getTime();
  };

  if (!checkDate()) {
    return (
      <div className="day-container locked">
        <div className="content-card">
          <h1>⏳ Locked</h1>
          <p>Babylu its loading the day... (02-12)</p>
          <button onClick={onBack}>Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="day-container" style={{ backgroundColor: '#ffa500' }}>
      <span className="icon-large">🫂</span>
      <h1>Hug Day</h1>
      <div className="content-card">
        <h2>A Warm Embrace 🫂</h2>
        <p>Sometimes a hug speaks what words can't.</p>
        <p>Sending you the tightest, warmest hug ever!</p>
      </div>
      <button onClick={onBack} className="back-btn">Back to Week</button>
    </div>
  );
}