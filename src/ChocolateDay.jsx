import React from 'react';

export default function ChocolateDay({ onBack }) {
  const checkDate = () => {
    const today = new Date();
    const target = new Date(today.getFullYear(), 1, 9); // Feb 9
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    return today.getTime() >= target.getTime();
  };

  if (!checkDate()) {
    return (
      <div className="day-container locked">
        <div className="content-card">
          <h1>⏳ Locked</h1>
          <p>Babylu its loading the day... (02-09)</p>
          <button onClick={onBack}>Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="day-container" style={{ backgroundColor: '#d2691e' }}>
      <span className="icon-large">🍫</span>
      <h1>Chocolate Day</h1>
      <div className="content-card">
        <h2>Sweetness Overload 🍫</h2>
        <p>Life is like a chocolate box, and you are my favorite flavor.</p>
        <p>Sending you lots of virtual chocolates!</p>
      </div>
      <button onClick={onBack} className="back-btn">Back to Week</button>
    </div>
  );
}