"use client";
import React, { useId, useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface ParticlesProps {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background = "transparent",
    minSize = 0.6,
    maxSize = 1.8,
    speed = 0.8,
    particleColor = "#e62e39",
    particleDensity = 60,
  } = props;

  const generatedId = useId();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      setContext(ctx);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !context) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
    }> = [];

    const count = Math.floor((width * height) / (10000 / (particleDensity / 10)));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedX: (Math.random() - 0.5) * speed * 0.4,
        speedY: -Math.random() * speed * 0.5 - 0.1,
        opacity: Math.random() * 0.7 + 0.2,
        fadeSpeed: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    const render = () => {
      context.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.fadeSpeed;

        if (p.opacity > 0.85 || p.opacity < 0.15) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        context.beginPath();
        context.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        context.fillStyle = particleColor;
        context.globalAlpha = Math.max(0, Math.min(1, p.opacity));
        context.shadowBlur = 8;
        context.shadowColor = particleColor;
        context.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [context, maxSize, minSize, particleColor, particleDensity, speed]);

  return (
    <canvas
      ref={canvasRef}
      id={id || generatedId}
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      style={{ background }}
    />
  );
};

