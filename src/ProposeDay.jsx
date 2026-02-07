import React from 'react';

export default function ProposeDay({ onBack }) {
  const checkDate = () => {
    const today = new Date();
    const target = new Date(today.getFullYear(), 1, 8); // Feb 8
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    return today.getTime() >= target.getTime();
  };

  if (!checkDate()) {
    return (
      <div className="day-container locked">
        <div className="content-card">
          <h1>⏳ Locked</h1>
          <p>Bangaram wait for more few hours! (02-08)</p>
          <button onClick={onBack}>Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="day-container" style={{ backgroundColor: '#e0b0ff' }}>
      <span className="icon-large">💍</span>
      <h1>Propose Day</h1>
      <div className="content-card">
        <h2>My Heart Speaks 💍</h2>
        <p>It's not just about a ring, it's about a lifetime together.</p>
        <p><strong>Will you be mine forever?</strong></p>
      </div>
      <button onClick={onBack} className="back-btn">Back to Week</button>
    </div>
  );
}