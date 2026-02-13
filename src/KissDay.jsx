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
    <div className="kiss-container">
      <style>{`
        .kiss-container {
          display: flex;
          height: 100vh;
          width: 100vw;
          margin: 0;
          padding: 0;
          overflow: hidden;
          position: relative;
          flex-direction: row;
        }
        .kiss-image-wrapper {
          flex: 1;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
        .kiss-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .kiss-card {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          background: rgba(255, 255, 255, 0.9);
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          max-width: 90%;
          width: 450px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          border: 2px solid #f8bbd0;
        }
        .kiss-title {
          color: #c2185b;
          margin-bottom: 15px;
          font-family: 'Segoe UI', sans-serif;
          font-size: 2.5rem;
        }
        .kiss-text {
          font-size: 1.2rem;
          color: #880e4f;
          line-height: 1.6;
          font-family: 'Segoe UI', sans-serif;
        }
        .kiss-footer {
          margin-top: 20px;
          font-weight: bold;
          color: #ad1457;
          font-size: 1.1rem;
        }
        
        @media (max-width: 768px) {
          .kiss-container {
            flex-direction: column;
          }
          .kiss-card {
            padding: 25px;
            width: 85%;
          }
          .kiss-title {
            font-size: 1.8rem;
            margin-bottom: 10px;
          }
          .kiss-text {
            font-size: 1rem;
          }
          .kiss-footer {
            font-size: 0.9rem;
            margin-top: 15px;
          }
        }
      `}</style>

      {/* Left Image */}
      <div className="kiss-image-wrapper">
        <img src="https://media4.giphy.com/media/MFBD6LxEPiEWy6hutl/giphy.gif" className="kiss-img" style={{ transform: 'scaleX(-1)' }} alt="Left" />
      </div>

      {/* Right Image */}
      <div className="kiss-image-wrapper">
        <img src="https://media1.giphy.com/media/bEVuKfZTFn1XvBAQqJ/giphy.gif" className="kiss-img" alt="Right" />
      </div>

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
          color: '#d81b60',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}
      >
        ✕
      </button>

      <div className="kiss-card">
        <h1 className="kiss-title">Happy Kiss Day ra 💋</h1>
        <p className="kiss-text">
          "I wish I could be there to kiss your forehead and tell you how much I love you."
        </p>
        <p className="kiss-footer">
          umaaaaaaaaaaaaaaaaaa💋💋💋😘
        </p>
      </div>
    </div>
  );
}