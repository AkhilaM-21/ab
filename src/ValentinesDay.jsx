import React from 'react';

export default function ValentinesDay({ onBack }) {
  const checkDate = () => {
    const today = new Date();
    const target = new Date(today.getFullYear(), 1, 14); // Feb 14
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    return today.getTime() >= target.getTime();
  };

  if (!checkDate()) {
    return (
      <div className="day-container locked">
        <div className="content-card">
          <h1>⏳ Locked</h1>
          <p>Bava its loading the day... (02-14)</p>
          <button onClick={onBack}>Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="day-container" style={{ backgroundColor: '#ff0000' }}>
      <span className="icon-large">❤️</span>
      <h1>Valentine's Day</h1>
      <div className="content-card">
        <h2>My Forever Valentine ❤️</h2>
        <p>Every day is Valentine's Day when I'm with you.</p>
        <p><strong>I Love You!</strong></p>
      </div>
      <button onClick={onBack} className="back-btn">Back to Week</button>
    </div>
  );
}