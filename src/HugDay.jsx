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
    <div className="day-container" style={{
      backgroundImage: "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTViNWVxam9lZG5xcGI1Zm92ZzJzY2V2ZTN1bGc2dnhjbGMyamlmcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT39CXg70nNS0MFNLy/giphy.gif')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw',
      boxSizing: 'border-box',
      position: 'relative',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)' }}></div>
      
      <button 
        onClick={onBack}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(255, 255, 255, 0.8)',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '1.5rem',
          cursor: 'pointer',
          zIndex: 100,
          color: '#d84315',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}
      >
        ✕
      </button>

      <style>{`
        @keyframes heartbeat {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>

      <div style={{
        position: 'absolute',
        left: '0',
        top: '0',
        zIndex: 10,
        width: '450px',
        height: '450px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        animation: 'heartbeat 3s infinite ease-in-out',
        transformOrigin: 'top left'
      }}>
        {/* Heart Blob Background */}
        <svg viewBox="0 0 24 24" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1, filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }}>
          <path fill="white" stroke="black" strokeWidth="0.2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>

        <div style={{ padding: '60px', color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
          <h1 style={{ color: 'black', marginBottom: '5px', fontFamily: "'Segoe UI', sans-serif", fontSize: '1.8rem' }}>Happy Hug Day RA BANGARAM!</h1>
          <pre style={{ fontSize: '1.0rem', lineHeight: '1.6', fontFamily: "'Segoe UI', sans-serif", fontWeight: '300' }}>
            "Sending you a big warm hug across the miles! <br/>
            I wish I could hold 
            you tight 
            right now."
          </pre>
          <pre style={{ marginTop: '10px', fontWeight: 'bold', color: 'black', fontSize: '0.8rem' }}>
            Virtual Hugs for 
            You! 🤗
          </pre>
        </div>
      </div>
    </div>
  );
}