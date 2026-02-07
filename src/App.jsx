import { useState } from 'react'
import { valentineDays } from './valentineData'
import RoseDay from './RoseDay'
import ProposeDay from './ProposeDay'
import ChocolateDay from './ChocolateDay'
import TeddyDay from './TeddyDay'
import PromiseDay from './PromiseDay'
import HugDay from './HugDay'
import KissDay from './KissDay'
import ValentinesDay from './ValentinesDay'
import './Valentine.css'

function App() {
  const [selectedDay, setSelectedDay] = useState(null)
  const [hearts] = useState(() => Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDuration: 15 + Math.random() * 30,
    delay: -(Math.random() * 45),
    color: Math.random() > 0.5 ? '#ffffff' : '#87ceeb', // White and Sky Blue
    size: 30 + Math.random() * 100,
  })))

  if (selectedDay) {
    const DayComponents = {
      1: RoseDay,
      2: ProposeDay,
      3: ChocolateDay,
      4: TeddyDay,
      5: PromiseDay,
      6: HugDay,
      7: KissDay,
      8: ValentinesDay
    };
    const CurrentDayPage = DayComponents[selectedDay.id];
    return <CurrentDayPage onBack={() => setSelectedDay(null)} />;
  }

  return (
    <div className="app-container">
      <div className="floating-hearts">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="heart"
            style={{
              left: `${heart.left}%`,
              animationDuration: `${heart.animationDuration}s`,
              animationDelay: `${heart.delay}s`,
              color: heart.color,
              fontSize: `${heart.size}px`,
            }}
          >
            <span className="heart-beat">♥</span>
          </div>
        ))}
      </div>
      <div className="text-content">
        <h1>💖 Valentine's Week 💖</h1>
        
      </div>
      
      <div className="days-grid">
        {valentineDays.map((day) => (
          <div key={day.id} className="day-card" onClick={() => setSelectedDay(day)}>
            <span className="day-icon">{day.icon}</span>
            <h3>{day.name}</h3>
            <small>{day.date}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
