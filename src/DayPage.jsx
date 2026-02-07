import React from 'react';
import { RoseDay, ProposeDay, ChocolateDay, TeddyDay, PromiseDay, HugDay, KissDay, ValentinesDay } from './DayContents';

const dayComponents = {
  1: RoseDay,
  2: ProposeDay,
  3: ChocolateDay,
  4: TeddyDay,
  5: PromiseDay,
  6: HugDay,
  7: KissDay,
  8: ValentinesDay,
};

export default function DayPage({ day, onBack }) {
  const checkDate = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const [month, date] = day.date.split('-');
    
    // Create target date object (Month is 0-indexed in JS Date)
    const targetDate = new Date(currentYear, parseInt(month) - 1, parseInt(date));
    
    // Reset time to midnight for accurate date comparison
    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    return today.getTime() >= targetDate.getTime();
  };

  const isUnlocked = checkDate();

  if (!isUnlocked) {
    return (
      <div className="day-container locked">
        <div className="content-card">
          <h1>⏳ Locked</h1>
          <p>Loading the day... Wait for that particular date ({day.date})!</p>
          <button onClick={onBack}>Go Back</button>
        </div>
      </div>
    );
  }

  const SpecificDayContent = dayComponents[day.id] || (() => <p className="special-message">{day.message}</p>);

  return (
    <div className="day-container" style={{ backgroundColor: day.color }}>
      <span className="icon-large">{day.icon}</span>
      <h1>{day.name}</h1>
      <SpecificDayContent />
      <button onClick={onBack} className="back-btn">Back to Week</button>
    </div>
  );
}