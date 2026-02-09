import React, { useState } from 'react';

const ProposalPage = ({ onBack }) => {
  const [isYes, setIsYes] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '58%', left: '55%' });

  const handleYesClick = () => {
    setIsYes(true);
  };

  const handleNoHover = () => {
    const newTop = Math.random() * 85 + 5; // Random top between 5% and 90%
    const newLeft = Math.random() * 85 + 5; // Random left between 5% and 90%
    setNoButtonPosition({ top: `${newTop}%`, left: `${newLeft}%` });
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#fce4ec', // A soft pink background
    fontFamily: 'cursive, Arial, sans-serif',
    textAlign: 'center',
    overflow: 'hidden',
    position: 'relative'
  };

  const buttonStyle = {
    padding: '15px 30px',
    fontSize: '1.5em',
    margin: '20px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '12px',
    color: 'white',
    fontWeight: 'bold',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  };

  const yesButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4CAF50', // Green
  };

  const noButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f44336', // Red
    position: 'absolute',
    top: noButtonPosition.top,
    left: noButtonPosition.left,
    transition: 'top 0.2s ease-out, left 0.2s ease-out',
  };

  const flyingEmojiStyle = {
    position: 'absolute',
    top: 0,
    fontSize: '2.5rem',
    animation: 'fly 6s linear infinite',
    userSelect: 'none'
  };

  const keyframes = `
    @keyframes fly {
      0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(-100px) rotate(720deg);
        opacity: 0;
      }
    }
  `;

  const emojis = ['❤️', '😘', '💖', '😍', '💕', '💞', '🥰'];

  return (
    <div style={containerStyle}>
      <style>{keyframes}</style>
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
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          zIndex: 100,
          color: '#d81b60',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        ✕
      </button>
      {isYes ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Kissing Bears" />
          <h1 style={{ color: '#d81b60', fontSize: '2.5em', marginTop: '20px' }}>Love you ra muddhula moguda!!</h1>
           <h1 style={{ color: '##d81b60', fontSize: '2.5em', marginTop: '20px' }}>HAPPY PROPOSE DAY RA MOUDA</h1>
          {Array.from({ length: 20 }).map((_, index) => (
            <span
              key={index}
              style={{
                ...flyingEmojiStyle,
                left: `${Math.random() * 100}vw`,
                // animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 4}s`
              }}
            >
              {emojis[Math.floor(Math.random() * emojis.length)]}
            </span>
          ))}
        </>
      ) : (
        <>
          <img src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" alt="Proposal" style={{ width: '300px', height: '300px', borderRadius: '20px' }} />
          <h2 style={{ color: '#333', fontSize: '2.2em', marginTop: '20px' }}>Will you be my modhula mogudu ?</h2>
          <div>
            <button style={yesButtonStyle} onClick={handleYesClick}>Yes</button>
            <button style={noButtonStyle} onMouseOver={handleNoHover} onClick={handleNoHover}>No</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProposalPage;