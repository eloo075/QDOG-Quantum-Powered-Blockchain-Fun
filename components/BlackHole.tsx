"use client";

import { useEffect, useRef } from 'react';

export function BlackHole() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let particles: Array<{
      x: number;
      y: number;
      radius: number;
      angle: number;
      speed: number;
      distance: number;
    }> = [];

    // Create particles
    const createParticles = () => {
      particles = [];
      const numParticles = 200;
      for (let i = 0; i < numParticles; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * canvas.width * 0.4;
        particles.push({
          x: canvas.width / 2 + Math.cos(angle) * distance,
          y: canvas.height / 2 + Math.sin(angle) * distance,
          radius: Math.random() * 2 + 1,
          angle,
          speed: Math.random() * 0.02 + 0.01,
          distance,
        });
      }
    };
    createParticles();

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update particle position
        particle.distance -= particle.speed;
        if (particle.distance < 0) {
          particle.distance = Math.random() * canvas.width * 0.4;
        }

        particle.x = canvas.width / 2 + Math.cos(particle.angle) * particle.distance;
        particle.y = canvas.height / 2 + Math.sin(particle.angle) * particle.distance;

        // Draw particle
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius
        );
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-50 z-[-1]"
    />
  );
}