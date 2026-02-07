import React from 'react';

export default function TeddyDay({ onBack }) {
  const checkDate = () => {
    const today = new Date();
    const target = new Date(today.getFullYear(), 1, 10); // Feb 10
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    return today.getTime() >= target.getTime();
  };

  if (!checkDate()) {
    return (
      <div className="day-container locked">
        <div className="content-card">
          <h1>⏳ Locked</h1>
          <p>Kannalu its loading the day... (02-10)</p>
          <button onClick={onBack}>Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="day-container" style={{ backgroundColor: '#ffb6c1' }}>
      <span className="icon-large">🧸</span>
      <h1>Teddy Day</h1>
      <div className="content-card">
        <h2>Cuddles & Hugs 🧸</h2>
        <p>Sending you a fluffy teddy bear to hug when I'm not there.</p>
        <p>You are my cutest teddy!</p>
      </div>
      <button onClick={onBack} className="back-btn">Back to Week</button>
    </div>
  );
}