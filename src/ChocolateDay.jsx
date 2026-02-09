import React, { useState } from 'react';

export default function ChocolateDay({ onBack }) {
  const [eatenBites, setEatenBites] = useState([]);
  const [currentMessage, setCurrentMessage] = useState(null);

  const checkDate = () => {
    const today = new Date();
    const target = new Date(today.getFullYear(), 1, 9); // Feb 9
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    return today.getTime() >= target.getTime();
  };

  const messages = [
    "You are sweeter than any chocolate! 🍫",
    "You melt my heart  ❤️",
    "Life is delicious with you! 😋",
    "My favorite flavor is YOU! 😍",
    "Sending you virtual sweetness! 🍬",
    "Love you loads my sweetie! 💖",
    "You're the nut in my chocolate! 🥜",
    "Sweetest person ever! 🥰",
    "Forever yours! 💑",
    "You are my sweet craving! 🤤",
    "Better than any dessert! 🍮",
    "My chocolatey love! 🤎"
  ];

  const handleBiteClick = (index) => {
    if (!eatenBites.includes(index)) {
      setEatenBites([...eatenBites, index]);
      setCurrentMessage(messages[index]);
    }
  };

  const closeMessage = () => {
    setCurrentMessage(null);
  };

  const allEaten = eatenBites.length === messages.length;

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
    <div className="day-container" style={{ 
      backgroundColor: '#cb9378',
      color: '#3e2723', 
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      <style>{`
        .wave-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }
        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 100%;
          background-repeat: repeat-x;
          background-position: bottom;
          transform: translate3d(0, 0, 0);
        }
        .wave:nth-child(1) {
          z-index: 1;
          opacity: 0.7;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 200' preserveAspectRatio='none'%3E%3Cpath d='M0 100 Q 200 200 400 100 T 800 100 V 200 H 0 Z' fill='%234e342e'/%3E%3C/svg%3E");
          background-size: 50% 50%;
          animation: wave 10s linear infinite;
        }
        .wave:nth-child(2) {
          z-index: 2;
          opacity: 0.5;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 200' preserveAspectRatio='none'%3E%3Cpath d='M0 100 Q 200 200 400 100 T 800 100 V 200 H 0 Z' fill='%235d4037'/%3E%3C/svg%3E");
          background-size: 50% 60%;
          animation: wave 15s linear infinite reverse;
        }
        .wave:nth-child(3) {
          z-index: 3;
          opacity: 0.3;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 200' preserveAspectRatio='none'%3E%3Cpath d='M0 100 Q 200 200 400 100 T 800 100 V 200 H 0 Z' fill='%236d4c41'/%3E%3C/svg%3E");
          background-size: 50% 70%;
          animation: wave 7s linear infinite;
        }
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .content-wrapper {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        @keyframes popIn {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .chocolate-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px;
          background-color: #3E2723;
          padding: 10px;
          border-radius: 4px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.4);
          margin: 20px;
          border: 1px solid #4E342E;
        }
        .choco-bite {
          width: 90px;
          height: 70px;
          background: linear-gradient(135deg, #795548 0%, #5D4037 100%);
          border: none;
          border-radius: 2px;
          cursor: pointer;
          box-shadow: inset 2px 2px 5px rgba(255,255,255,0.1), inset -2px -2px 5px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Arial', sans-serif;
          font-weight: bold;
          color: rgba(255,255,255,0.2);
          font-size: 12px;
          transition: transform 0.1s;
          position: relative;
        }
        .choco-bite::after {
            content: '';
            position: absolute;
            top: 5px; left: 5px; right: 5px; bottom: 5px;
            border: 1px solid rgba(0,0,0,0.2);
            border-radius: 2px;
        }
        .choco-bite:active {
          transform: scale(0.95);
        }
        .choco-bite.eaten {
          visibility: hidden;
          pointer-events: none;
        }
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          backdrop-filter: blur(3px);
        }
        .popup-content {
          background: #fff;
          color: #3E2723;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          max-width: 80%;
          animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
          border: 4px solid #8D6E63;
        }
        .popup-btn {
          background: #8D6E63;
          color: white;
          border: none;
          padding: 10px 25px;
          border-radius: 20px;
          font-size: 1.1rem;
          cursor: pointer;
          margin-top: 15px;
          transition: background 0.2s;
        }
        .popup-btn:hover {
          background: #6D4C41;
        }
      `}</style>

      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <div className="content-wrapper">
      <button 
        onClick={onBack}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(62, 39, 35, 0.1)',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '1.5rem',
          cursor: 'pointer',
          color: '#3e2723',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          backdropFilter: 'blur(5px)'
        }}
      >
        ✕
      </button>

      {allEaten ? (
        <div className="content-card" style={{ animation: 'popIn 0.5s', backgroundColor: 'rgba(255,255,255,0.9)', color: '#3E2723' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#D81B60', marginBottom: '10px' }}>
            🎉 Happy Chocolate Day! Bangaram🎉
          </h1>
          <p style={{ fontSize: '1.2rem' }}>You've eaten all the chocolate! ra pandi 🤩 </p>
          <p style={{ fontSize: '0.2rem', fontWeight: 'bold', marginTop: '10px' }}>ninnu thidaniki ne cheppalu korakadani i wating 🫣</p>
        </div>
      ) : (
        <>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>Tap a piece to take a bite!</p>
          
          <div className="chocolate-grid">
            {messages.map((_, index) => (
              <button
                key={index}
                className={`choco-bite ${eatenBites.includes(index) ? 'eaten' : ''}`}
                onClick={() => handleBiteClick(index)}
              >
                A🤎B
              </button>
            ))}
          </div>
        </>
      )}
      </div>

      {currentMessage && (
        <div className="popup-overlay" onClick={closeMessage}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ margin: '0 0 15px 0', color: '#D81B60' }}>Sweet Message 💌</h2>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.5' }}>{currentMessage}</p>
            <button className="popup-btn" onClick={closeMessage}>Yum! 😋</button>
          </div>
        </div>
      )}
    </div>
  );
}