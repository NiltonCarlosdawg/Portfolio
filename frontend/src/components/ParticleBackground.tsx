import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // Variáveis que definem o comportamento do padrão
    let zoomX = 0.005;
    let zoomY = 0.005;
    let complexity = 2; // Multiplicador do Math.PI

    const particleCount = 80;
    const colors = ['#06b6d4', '#3b82f6', '#8b5cf6', '#84cc16'];

    class Particle {
      x: number;
      y: number;
      lastX: number;
      lastY: number;
      vx: number;
      vy: number;
      color: string;
      speed: number;

      constructor() {
        this.reset();
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.lastX = this.x;
        this.lastY = this.y;
        this.vx = 0;
        this.vy = 0;
        this.speed = Math.random() * 0.8 + 0.4;
      }

      update() {
        this.lastX = this.x;
        this.lastY = this.y;

        // O padrão agora usa as variáveis dinâmicas zoomX, zoomY e complexity
        const angle = (Math.cos(this.x * zoomX) + Math.sin(this.y * zoomY)) * Math.PI * complexity;
        
        this.vx = Math.cos(angle) * this.speed;
        this.vy = Math.sin(angle) * this.speed;

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.2;
        ctx.moveTo(this.lastX, this.lastY);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
      }
    }

    let particles: Particle[] = [];

    const init = () => {
      particles = Array.from({ length: particleCount }, () => new Particle());
      ctx.fillStyle = '#0b0e14';
      ctx.fillRect(0, 0, w, h);
    };

    // Função que muda o padrão aleatoriamente
    const mutatePattern = () => {
      zoomX = Math.random() * 0.01 + 0.001;
      zoomY = Math.random() * 0.01 + 0.001;
      complexity = Math.random() * 4 + 1;
      
      // Limpa levemente o fundo para a transição do novo padrão não ficar poluída
      ctx.fillStyle = 'rgba(11, 14, 20, 0.4)';
      ctx.fillRect(0, 0, w, h);
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(11, 14, 20, 0.08)';
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = 'lighter';
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      init();
    };

    // Intervalo de 1 minuto (60000ms)
    const mutationInterval = setInterval(mutatePattern, 60000);

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(mutationInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, background: '#0b0e14' }}
    />
  );
};

export default ParticleBackground;