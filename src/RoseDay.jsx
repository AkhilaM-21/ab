import React from 'react';
import roseImg from './assets/rose.png';

export default function RoseDay({ onBack }) {

  const checkDate = () => {
    const today = new Date();
    const target = new Date(today.getFullYear(), 1, 7); // Feb 7
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    return today.getTime() >= target.getTime();
  };

  if (!checkDate()) {
    return (
      <div className="day-container locked">
        <div className="content-card">
          <h1>⏳ Locked</h1>
          <p>Wait for Rose Day (02-07)!</p>
          <button onClick={onBack}>Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #fff0f5 0%, #ffc1cc 100%)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <style>
        {`
          @keyframes particleText {
            0% {
              opacity: 0;
              letter-spacing: 30px;
              filter: blur(15px);
              transform: translateY(-50px) scale(1.5);
              text-shadow: 0 0 30px rgba(255, 0, 127, 0.8);
            }
            100% {
              opacity: 1;
              letter-spacing: 2px;
              filter: blur(0);
              transform: translateY(0) scale(1);
              text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
            }
          }
          @keyframes contentFadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes imageEnter {
            from { opacity: 0; transform: translateX(50px) scale(0.9); }
            to { opacity: 1; transform: translateX(0) scale(1); }
            }

          .rose-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0;
            animation: imageEnter 1.2s ease-out 0.5s forwards;
          }

          /* Responsive Styles */
          .rose-card {
            display: flex;
            flex-direction: row;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.6);
            border-radius: 30px;
            box-shadow: 0 20px 60px rgba(255, 0, 127, 0.15);
            max-width: 1100px;
            width: 100%;
            max-height: 85vh;
            overflow: hidden;
          }

          .rose-content-wrapper {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
            box-sizing: border-box;
            overflow-y: auto;
          }

          .rose-image-wrapper {
            flex: 1;
            position: relative;
            height: auto;
          }

          @media (max-width: 900px) {
            .rose-card {
              display: grid;
              grid-template-columns: 1fr auto;
              grid-template-rows: auto 1fr;
              width: 95%;
              max-height: 90vh;
              overflow-y: auto;
            }
            
            .rose-content-wrapper, .rose-inner-content {
              display: contents;
            }

            .rose-inner-content > h2 {
              grid-column: 1 / 2;
              grid-row: 1 / 2;
              font-size: 1.5rem !important;
              margin: 0 !important;
              padding: 20px;
              text-align: center;
              align-self: center;
            }

            .rose-image-wrapper {
              grid-column: 2 / 3;
              grid-row: 1 / 2;
              width: 100px;
              height: 100px;
              padding: 10px;
            }

            .rose-image {
              object-fit: contain;
              width: 100%;
              height: 100%;
            }

            .rose-inner-content > div {
              grid-column: 1 / -1;
              grid-row: 2 / 3;
              padding: 0 20px 20px 20px;
              text-align: center;
            }
          }
        `}
      </style>
      {/* Fixed Close Button */}
      <button 
        onClick={onBack}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '1.5rem',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          zIndex: 1002,
          color: '#ff007f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        ✕
      </button>

      {/* Card Container */}
      <div className="rose-card">
      {/* Left Side: Content */}
      <div className="rose-content-wrapper">
        <div className="rose-inner-content" style={{
          maxWidth: '600px',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            color: '#ff007f', 
            marginBottom: '20px',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            animation: 'particleText 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards'
          }}>Happy Rose Day!</h2>
          <div style={{ opacity: 0, animation: 'contentFadeIn 1s ease-out 1s forwards' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.5)',
              padding: '25px',
              borderRadius: '20px',
              border: '1px dashed #ff69b4',
              marginBottom: '25px',
              boxShadow: 'inset 0 0 20px rgba(255, 192, 203, 0.2)'
            }}>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#444', fontStyle: 'italic', margin: 0, fontFamily: 'Georgia, serif' }}>
              "nv marina antha easy nen marnu raa ,naku prathi roju prathi year special a ra , nen okate feel ithuna manam love chesukoni atleast 4 years kuda kaled apude e chinna chinna things vadhu anukutunv nka tharvtha asl m undav ga ra andru ante chesthunvga ra kotha lo untayi tharvatha undav ani ma hostel valu ekkiristhunde ade ithundi apudu feel ayina valu ala antunr ani ipudu feel ithuna ade nijama ani "
            </p>
            </div>
            <h3 style={{ color: '#ff007f' }}>edi ithe em  ly HAPPY ROSE DAY RA BANGARAM</h3>
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="rose-image-wrapper">
         <img 
          src={roseImg} 
          alt="Rose Tree"
          className="rose-image"
        />
      </div>
      </div>
    </div>
  );
}