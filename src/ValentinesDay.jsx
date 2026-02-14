import React, { useState } from 'react';

export default function ValentinesDay({ onBack }) {
  const [flippedIndex, setFlippedIndex] = useState(0);
  const [imageLayouts, setImageLayouts] = useState({});

  const [hearts] = useState(() => Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDuration: 15 + Math.random() * 30,
    delay: -(Math.random() * 45),
    color: ['#ff0000', '#ff1493', '#ff69b4', '#ffa500', '#ff4500'][Math.floor(Math.random() * 5)],
    size: 20 + Math.random() * 40,
  })));

  const handleImageLoad = (index, e) => {
    const { naturalWidth, naturalHeight } = e.target;
    const isVertical = naturalHeight > naturalWidth;
    setImageLayouts(prev => ({
      ...prev,
      [index]: isVertical ? 'vertical' : 'horizontal'
    }));
  };

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

  const storyPages = [
    {
      text: <>Our story began in the first grade, where we met as just <b><i>friends</i></b>. We knew of each other, but he was the class <b><i>topper</i></b>—a brilliant mind who, surprisingly, was always up to <b><i>monkey things</i></b>, full of <b><i>kothi eshalu</i></b>...</>,
      image: "/3.jpeg", // Placeholder
    },
    {
      text: <>Years passed, and I left that school, losing touch completely. Destiny, however, had other plans. When I secured a seat at <b><i>Malla Reddy College</i></b> for my <b><i>B.Tech</i></b>, I needed details. My brother, who happened to be <b><i>friends</i></b> with him, called to enquire. He gave the green signal to join. I thought we might meet on campus, but we didn't. One day, I saw him zooming past on a <b><i>scooty</i></b> with friends. He didn't speak, so I thought, 'Maybe he doesn't want to talk,' and I just let it go.</>,
      image: "/5.jpeg", // Placeholder
    },
    {
      text: <>Then came November 3rd, 2020. I was rushing from college to my PG for lunch during mid-exams when my phone buzzed with a simple <b><i>hi</i></b>. Puzzled, I replied with a question mark. 'I am <b><i>Bharath</i></b> from Kerala School,' he texted—our old <b><i>Kerala English Medium School</i></b>. Memories flooded back, and I excitedly typed <b><i>hi hi</i></b>. We caught up, and he asked to meet. I promised to see him after my exams, and finally, that day arrived.</>,
      image: "/6.jpeg", // Placeholder
    },
    {
      text: <>That meeting over <b><i>chips and tea</i></b> marked a new beginning. He started visiting frequently, inventing reasons just to see me. He had finished his B.Tech and was working at <b><i>Accenture</i></b>. Our first real outing was to <b><i>Nexus Mall</i></b>, where we devoured <b><i>KFC</i></b> and laughed for hours. Later, a casual visit turned into an impromptu plan—we decided to go for a <b><i>movie</i></b>.</>,
      image: "/9.jpeg", // Placeholder
    },
    {
      text: <>During the movie, it started <b><i>raining</i></b> heavily. Panic set in—my <b><i>warden</i></b> or <b><i>father_</i></b> would surely call if I wasn't back. I called my warden with a cover story and decided not to return just yet. We went back to the movie, crazy as it sounds. By the time we stepped out, the rain had stopped, but it was midnight. With nowhere else to go, I went to his room. Being the gentleman he is, he gave me his bed and slept in another room.</>,
      image: "/5.jpeg", // Placeholder
    },
    {
      text: <>Sleep evaded me, so I texted him a quiet <b><i>haloo</i></b>. He returned, and we watched a movie together before he fell asleep beside the bed. We woke up at 10 AM for tiffin, but I felt a sudden <b><i>vomiting sensation</i></b> and couldn't eat. Even tea made me queasy. I finally reached my PG at 2 PM and crashed. We started chatting 24/7, inseparable virtually. But then came the shock—he was going for his <b><i>MS</i></b> in the <b><i>USA</i></b> in two months. I thought I'd have to say goodbye forever.</>,
      image: "/6.jpeg", // Placeholder
    },
    {
      text: <>Time flew. As I finished my B.Tech, my friends and I moved to KPHB. Luckily, he stayed nearby, so we met often, going for long <b><i>night rides</i></b>. One memorable day, we went to <b><i>Wonderla</i></b>. He asked me to stay back so we could ride through the night again. We roamed the empty roads until 4 AM, just us and the city lights...</>,
      image: "/10.jpeg", // Placeholder
    },
    {
      text: <>August 12, 2023, was his departure date. On August 9th, he asked to meet one last time. I traveled from Hyderabad, and he came from Karimnagar to <b><i>Siddipet</i></b>. We spent the whole day in a park—our final goodbye. After he reached the USA, distance only brought us closer. Our lives became a series of <b><i>video calls</i></b>. He started sending kiss emojis, which I shyly ignored, until September 24th, when we finally <b><i>accepted each other's love</i></b>.</>,
      image: "/8.jpeg", // Placeholder
    },
    {
      text: <>We became addicted to each other. He celebrated my birthdays from miles away, and I did the same for him. He showered me with <b><i>gifts</i></b>, flowers, and chocolates for every occasion—Valentine's, New Year's. I even sent him a parcel with 24 gifts for his 24th birthday. Our love story continued online—silly fights, blocking and unblocking, virtual hugs, and kisses. There were tears of longing and endless prayers for him to settle so we could reunite. And now, I hope that day is just a few days away. Amen. This is our story.</>,
      image: "/4.jpeg", // Placeholder
    },
    {
      text: <>I LOVE YOU, MY DEAR <b><i>MOGUDA</i></b>... I am counting the seconds until the moment you officially become my <b><i>mogudu</i></b>... HAPPY VALENTINE'S DAY RA <b><i>MOGUDA</i></b> &gt;&gt;&gt;&gt;UMAAAAAAAAAA 💋💋💋</>,
      image: "/7.jpeg", // Placeholder
      isLast: true
    }
  ];

  // Construct sheets for the book
  // Sheet 0 is the Cover
  const sheets = [];

  // Cover Sheet
  sheets.push({
    id: 'cover',
    front: { 
      type: 'cover', 
      image: '/1.jpeg',
      title: "Will you be my Valentine?" 
    },
    back: { 
      type: 'intro', 
      text: "Our Beautiful Journey..." 
    }
  });

  // Story Sheets
  for (let i = 0; i < storyPages.length; i += 2) {
    sheets.push({
      id: `story-${i}`,
      front: { ...storyPages[i], type: 'story', pageIndex: i },
      back: storyPages[i+1] ? { ...storyPages[i+1], type: 'story', pageIndex: i+1 } : { type: 'end', text: "The End", image: "/3.jpeg", pageIndex: i+1 }
    });
  }

  const handleNext = () => {
    if (flippedIndex < sheets.length) {
      setFlippedIndex(flippedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (flippedIndex > 0) {
      setFlippedIndex(flippedIndex - 1);
    }
  };

  // Calculate z-index for proper stacking
  const getZIndex = (index) => {
    if (index < flippedIndex) {
      return index; // Flipped pages stack upwards
    } else {
      return sheets.length - index; // Unflipped pages stack downwards
    }
  };

  return (
    <div className="day-container" style={{ 
      backgroundColor: '#ffe6ea',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div className="floating-hearts" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
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
      <style>{`
        .book-scene {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          perspective: 1500px;
          position: relative;
          z-index: 10;
        }
        .book {
          position: relative;
          width: 450px;
          height: 600px;
          transform-style: preserve-3d;
          transition: transform 0.6s ease-in-out;
        }
        @media (max-width: 768px) {
          .book {
            width: 90vw;
            height: 70vh;
          }
        }
        .sheet {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform-origin: left center;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
          cursor: pointer;
        }
        .sheet.flipped {
          transform: rotateY(-180deg);
        }
        .page {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          padding: 20px;
          box-sizing: border-box;
          box-shadow: inset 0 0 30px rgba(0,0,0,0.1);
          border-radius: 5px;
          overflow: hidden;
        }
        .page.front {
          z-index: 2;
          border-right: 1px solid #eee;
        }
        .page.back {
          transform: rotateY(180deg);
          z-index: 1;
          border-left: 1px solid #eee;
          background-color: #fffcfc;
        }
        .cover-front {
          background-size: cover;
          background-position: center;
          color: white;
          text-align: center;
          justify-content: center;
          align-items: center;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
          border: 2px solid #ffffff;
        }
        .cover-back {
          background: #ff8fa3;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          font-family: 'Dancing Script', cursive;
          font-size: 2rem;
        }
        .page-text {
          font-family: 'Georgia', serif;
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
          flex: 1;
          overflow-y: auto;
        }
        .story-content {
          display: flex;
          flex: 1;
          gap: 15px;
          overflow: hidden;
          width: 100%;
          align-items: center;
        }
        .horizontal-layout {
          flex-direction: column;
          justify-content: flex-start;
        }
        .vertical-layout {
          flex-direction: row;
        }
        .image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
        }
        .horizontal-layout .image-container {
          width: 100%;
          max-height: 55%;
          margin-bottom: 10px;
        }
        .vertical-layout .image-container {
          width: 45%;
          height: 100%;
        }
        .page-image {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 5px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }
        .page-number {
          margin-top: 10px;
          font-size: 0.9rem;
          color: #888;
          text-align: center;
          width: 100%;
        }
        .final-msg {
          font-family: 'Dancing Script', cursive;
          font-size: 1.5rem;
          color: #c2185b;
          text-align: center;
          margin-top: 20px;
        }
        .open-btn {
          background: transparent !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          -webkit-tap-highlight-color: transparent;
          cursor: pointer;
          padding: 0;
          width: 120px;
          height: 120px;
          position: relative;
          margin-top: 30px;
          animation: pulse 1.5s infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }
        .open-btn:hover {
          transform: scale(1.1);
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .nav-hint {
          position: absolute;
          bottom: 10px;
          right: 10px;
          font-size: 0.8rem;
          color: #aaa;
          font-style: italic;
        }
        .btn-text {
          position: absolute;
          z-index: 10;
          color: white;
          font-family: 'Dancing Script', cursive;
          font-size: 2rem;
          font-weight: bold;
          pointer-events: none;
        }
      `}</style>

      <div className="book-scene">
        <div 
          className="book" 
          style={{ 
            transform: `translateX(${flippedIndex === 0 ? '0%' : flippedIndex === sheets.length ? '100%' : '50%'}) rotate(-5deg)` 
          }}
        >
          {sheets.map((sheet, index) => (
            <div 
              key={sheet.id} 
              className={`sheet ${index < flippedIndex ? 'flipped' : ''}`}
              style={{ zIndex: getZIndex(index) }}
              onClick={() => {
                if (index === 0 && flippedIndex === 0) return;
                if (index === flippedIndex) handleNext(); // Click right page to flip forward
                if (index === flippedIndex - 1) handlePrev(); // Click left page to flip back
              }}
            >
              {/* Front of the sheet (Right Page) */}
              <div className={`page front ${sheet.front.type === 'cover' ? 'cover-front' : ''}`}
                   style={{
                     ...(sheet.front.type === 'cover' ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${sheet.front.image})` } : {}),
                     ...(sheet.front.isLast ? { backgroundImage: `url(${sheet.front.image})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: 0 } : {})
                   }}
              >
                {sheet.front.type === 'cover' ? (
                  <>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{sheet.front.title}</h1>
                    <button className="open-btn" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
                      <svg viewBox="0 0 24 24" fill="#ff007f" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }}>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      <span className="btn-text">Yes</span>
                    </button>
                  </>
                ) : sheet.front.isLast ? (
                  <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px', boxSizing: 'border-box' }}>
                    <div className="final-msg" style={{ color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{sheet.front.text}</div>
                  </div>
                ) : (
                  <>
                    <div className={`story-content ${imageLayouts[sheet.front.pageIndex] === 'vertical' ? 'vertical-layout' : 'horizontal-layout'}`}>
                      {sheet.front.image && (
                        <div className="image-container">
                          <img 
                            src={sheet.front.image} 
                            alt="Memory" 
                            className="page-image" 
                            onLoad={(e) => handleImageLoad(sheet.front.pageIndex, e)}
                          />
                        </div>
                      )}
                      <div className="page-text">
                        <p>{sheet.front.text}</p>
                      </div>
                    </div>
                    <div className="page-number">{index * 2 + 1}</div>
                    <div className="nav-hint">Next Page &gt;</div>
                  </>
                )}
              </div>

              {/* Back of the sheet (Left Page) */}
              <div className={`page back ${sheet.back.type === 'intro' ? 'cover-back' : ''}`}
                   style={sheet.back.isLast ? { backgroundImage: `url(${sheet.back.image})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: 0 } : {}}
              >
                {sheet.back.type === 'intro' ? (
                  <img 
                    src="/2.jpeg" 
                    alt="Intro" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} 
                  />
                ) : sheet.back.isLast ? (
                  <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px', boxSizing: 'border-box' }}>
                    <div className="final-msg" style={{ color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{sheet.back.text}</div>
                  </div>
                ) : (
                  <>
                    <div className={`story-content ${imageLayouts[sheet.back.pageIndex] === 'vertical' ? 'vertical-layout' : 'horizontal-layout'}`}>
                      {sheet.back.image && (
                        <div className="image-container">
                          <img 
                            src={sheet.back.image} 
                            alt="Memory" 
                            className="page-image"
                            onLoad={(e) => handleImageLoad(sheet.back.pageIndex, e)}
                          />
                        </div>
                      )}
                      <div className="page-text">
                        <p>{sheet.back.text}</p>
                      </div>
                    </div>
                    <div className="page-number">{index * 2 + 2}</div>
                    <div className="nav-hint" style={{ left: '10px', right: 'auto' }}>&lt; Previous Page</div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
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
          color: '#ff007f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}
      >
        ✕
      </button>
    </div>
  );
}