import { useEffect, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface Star {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 粒子数组
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }> = [];

    // 初始化粒子
    const initParticles = () => {
      particles.length = 0;
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          color: `hsla(${160 + Math.random() * 40}, 70%, 50%,`,
        });
      }
    };

    initParticles();

    // 动画循环
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // 边界检测
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // 绘制粒子
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color} ${particle.opacity})`;
        ctx.fill();

        // 绘制连接线
        particles.forEach((otherParticle, index) => {
          if (index === particles.indexOf(particle)) return;

          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* 动态粒子画布 */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.4 }}
      />

      {/* 渐变光晕 */}
      <div className="bg-gradient-orb bg-gradient-orb-1" />
      <div className="bg-gradient-orb bg-gradient-orb-2" />
      <div className="bg-gradient-orb bg-gradient-orb-3" />

      {/* CSS 粒子 */}
      <div className="bg-particles" aria-hidden="true">
        <div
          className="bg-particle"
          style={{
            width: '80px',
            height: '80px',
            left: '10%',
            top: '20%',
            animationDelay: '0s',
          }}
        />
        <div
          className="bg-particle"
          style={{
            width: '60px',
            height: '60px',
            left: '70%',
            top: '60%',
            animationDelay: '-5s',
          }}
        />
        <div
          className="bg-particle"
          style={{
            width: '100px',
            height: '100px',
            left: '40%',
            top: '80%',
            animationDelay: '-2s',
          }}
        />
        <div
          className="bg-particle"
          style={{
            width: '50px',
            height: '50px',
            left: '85%',
            top: '30%',
            animationDelay: '-4s',
          }}
        />
      </div>

      {/* 星辰背景 */}
      <div className="stars" aria-hidden="true">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
