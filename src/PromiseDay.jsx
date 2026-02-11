import React, { useEffect, useRef, useState } from "react";

export default function PromiseDay({ onBack }) {
  const canvasRef = useRef(null);
  const [messageVisible, setMessageVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    let animationFrameId;

    class Particle {
      constructor(x, y) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.tx = x;
        this.ty = y;
        this.size = 2;
      }

      update() {
        this.x += (this.tx - this.x) * 0.07;
        this.y += (this.ty - this.y) * 0.07;
      }

      draw() {
        ctx.fillStyle = "#ff4da6";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const img = new Image();
    img.src = "/couple.png";

    img.onload = () => {
      // Scale image nicely
      const scale = Math.min(
        (canvas.width * 0.6) / img.width,
        (canvas.height * 0.8) / img.height
      );

      const w = img.width * scale;
      const h = img.height * scale;

      const x = (canvas.width - w) / 2;
      const y = (canvas.height - h) / 2;

      ctx.drawImage(img, x, y, w, h);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const step = 4;

      for (let iy = 0; iy < canvas.height; iy += step) {
        for (let ix = 0; ix < canvas.width; ix += step) {
          const index = (iy * canvas.width + ix) * 4;

          const r = imageData.data[index];
          const g = imageData.data[index + 1];
          const b = imageData.data[index + 2];

          // Detect black area (silhouette)
          if (r < 50 && g < 50 && b < 50) {
            particles.push(new Particle(ix, iy));
          }
        }
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p) => {
          p.update();
          p.draw();
        });

        animationFrameId = requestAnimationFrame(animate);
      };

      animate();
      setTimeout(() => setMessageVisible(true), 2000);
    };

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <button
        onClick={onBack}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "rgba(0, 0, 0, 0.1)",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          fontSize: "1.5rem",
          cursor: "pointer",
          color: "#333",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ✕
      </button>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      {messageVisible && (
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            background: "rgba(255,255,255,0.85)",
            padding: "20px 40px",
            borderRadius: "15px",
            backdropFilter: "blur(5px)",
          }}
        >
          <h1 style={{ color: "#ff4da6", fontSize: "2.5rem" }}>
            I Promise...
          </h1>
          <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            "you will be my forever mogudu and iam your wifee for the life"
          </p>
          <h4 style={{ color: "#ff4da6" }}>
            HAPPY PROMISE DAY RA BANGARAM 😘❤️
          </h4>
        </div>
      )}
    </div>
  );
}
