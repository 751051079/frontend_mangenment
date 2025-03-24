import React, { useEffect, useRef } from 'react';

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const stars:any = [];
    const numStars = 1000;

    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * 2;
      const speed = Math.random() * 0.5;

      stars.push({ x, y, radius, speed });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
        
        star.x -= star.speed;
        
        if (star.x < 0) {
          star.x = width;
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(draw as any);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 0,pointerEvents: 'none'}} />;
};

export default StarBackground;