import React, { useState } from 'react';

export default function TeddyDay({ onBack }) {
  // State for carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselFinished, setCarouselFinished] = useState(false);

  // Teddy data for the carousel
  const checkDate = () => {
    const today = new Date();
    const target = new Date(today.getFullYear(), 1, 10); // Feb 10
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    return today.getTime() >= target.getTime();
  };

  const teddies = [
    {
      image: 'https://media1.tenor.com/m/rgJy4Yi0tOQAAAAC/love-heart.gif',
      message: "For my cutest teddy, LOVE YOU ❤️"
    },
    {
      image: 'https://media1.tenor.com/m/p6fbpOnCi0sAAAAC/sport-running.gif',
      message: "Can't wait to cuddle and you cant escape from me  🌸"
    },
    {
      image: 'https://media.tenor.com/f1xnRxTRxLAAAAAi/bears-with-kisses-bg.gif',
      message: "Sending a thousand kisses your way, my love! 😘"
    },
    {
      image: 'https://media1.tenor.com/m/ypwVVHok8yUAAAAC/white-and-brown-bear.gif',
      message: "sending you lots of love on this special day, my teddy bear! 🧸❤️"
    },
    {
      image: 'https://media1.tenor.com/m/BxibqUT9-I0AAAAC/dudu-flower.gif',
      message: "My heart is all yours, today and forever! Happy Teddy Day! ❤️"
    }
  ];

  const handleNext = () => {
    if (currentIndex < teddies.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCarouselFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
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
    <div className="day-container" style={{ 
      backgroundColor: '#fff0f5',
      backgroundImage: 'radial-gradient(#ffb7b2 1px, transparent 1px)',
      backgroundSize: '30px 30px',
      position: 'relative', 
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      padding: '20px',
      boxSizing: 'border-box',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <style>{`
        .content-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 600px;
          animation: fadeIn 0.8s ease-out;
          z-index: 2;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .teddy-img-carousel {
          width: 280px;
          height: 280px;
          object-fit: contain;
          filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1));
          transition: transform 0.3s ease;
          margin-bottom: 30px;
        }
        .teddy-img-carousel:hover {
          transform: scale(1.05) rotate(2deg);
        }
        .message-text {
          font-size: 1.4rem;
          line-height: 1.6;
          color: #5d4037;
          font-weight: 700;
          text-align: center;
          margin: 0 0 40px 0;
          min-height: 100px;
          padding: 0 20px;
        }
        .nav-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          width: 100%;
        }
        .nav-btn {
          background: #ff8fa3;
          color: white;
          border: none;
          padding: 12px 35px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(255, 143, 163, 0.4);
        }
        .nav-btn:hover {
          background: #ff758f;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(255, 143, 163, 0.6);
        }
        .nav-btn:disabled {
          background: #e0e0e0;
          color: #a0a0a0;
          box-shadow: none;
          transform: none;
          cursor: not-allowed;
        }
        .progress-dots {
          display: flex;
          gap: 12px;
          margin-bottom: 30px;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ffd1dc;
          transition: all 0.3s ease;
        }
        .dot.active {
          background: #ff8fa3;
          transform: scale(1.2);
        }
        .final-view {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          position: relative;
          animation: fadeIn 1s ease-out;
          gap: 20px;
        }
        .teddy-gif {
          width: 300px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1));
        }
        @media (max-width: 768px) {
          .final-view {
            flex-direction: column;
          }
          .teddy-gif {
            width: 250px;
            margin-top: 20px;
          }
        }
        .heart-container {
          position: relative;
          width: 500px;
          height: 500px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ff5c8d'%3E%3Cpath d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 40px 40px 40px;
          text-align: center;
          animation: heartbeat 2s infinite ease-in-out;
        }
        @keyframes heartbeat {
          0% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.05); }
          100% { transform: translateX(-50%) scale(1); }
        }
        .heart-text {
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
        }
        .heart-text h2 {
          font-size: 1.4rem;
          margin: 0 0 8px 0;
          color: #fff;
          font-weight: 800;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
          line-height: 1.2;
        }
        .heart-text p {
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.4;
          font-weight: 600;
          color: #fff;
        }
        .final-card {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(255, 143, 163, 0.25);
          max-width: 450px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 2px solid #fff0f5;
        }
        .final-teddy-img {
          width: 140px;
          height: auto;
          margin-bottom: 20px;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
        }
        .final-text h2 {
          color: #d81b60;
          font-size: 1.8rem;
          margin: 0 0 15px 0;
          font-weight: 800;
        }
        .final-text p {
          color: #555;
          font-size: 1.1rem;
          line-height: 1.6;
          margin: 0;
          font-weight: 500;
        }
      `}</style>

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
          color: '#ff5c8d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        ✕
      </button>

      {carouselFinished ? (
        <div className="final-view">
          <div className="final-card">
            <img 
              src="https://media.tenor.com/nyUAu5IeptoAAAAi/cosytales-couple.gif" 
              className="final-teddy-img" 
              alt="Teddy" 
            />
            <div className="final-text">
              <h2>Happy teddy day ra kothi moguda</h2>
              <p>
                ninnu hug chesukoni alane padukovali ra waiting for that ipudu ante teddy tho adjust ipothuna kani nak 6 months tharvatha asl wait chynu nv elagina ravali na dagariki
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="content-container" key={currentIndex}>
          <h1 style={{ color: '#ff5c8d', fontSize: '2.5rem', marginBottom: '30px', fontWeight: '800' }}>Happy Teddy Day!</h1>
          
          <img 
            src={teddies[currentIndex].image} 
            alt="Teddy Bear" 
            className="teddy-img-carousel"
          />

          <div className="progress-dots">
            {teddies.map((_, idx) => (
                <div key={idx} className={`dot ${idx === currentIndex ? 'active' : ''}`} />
            ))}
          </div>

          <p className="message-text">{teddies[currentIndex].message}</p>
          
          <div className="nav-buttons">
            <button className="nav-btn" onClick={handlePrev} disabled={currentIndex === 0}>
              Prev
            </button>
            <button className="nav-btn" onClick={handleNext}>
              {currentIndex === teddies.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}