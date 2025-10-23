'use client';
import { useState, useEffect } from 'react';

export default function Videoo() {
  const texts = [
    "Visuals into Pure Magic.",
    "Designs that Inspire.",
    "Ideas that Breathe Life.",
    "Turning Vision into Reality."
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000); // change text every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
      {/* Concentric circles with breathing effect */}
      <div className="absolute w-[600px] h-[600px] flex items-center justify-center animate-breath-bg">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-gray-100/30"
            style={{
              width: `${100 + i * 60}px`,
              height: `${100 + i * 60}px`,
            }}
          />
        ))}
      </div>

      {/* Animated text */}
      <h1
        key={index}
        className="text-white text-2xl md:text-4xl font-semibold tracking-wide animate-breath-text transition-opacity duration-1000 ease-in-out"
      >
        {texts[index]}
      </h1>

      <style jsx>{`
        /* Text breathing */
        @keyframes breathText {
          0%, 100% {
            opacity: 0.9;
            transform: scale(1);
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.95);
          }
          50% {
            opacity: 1;
            transform: scale(1.08);
            text-shadow: 0 0 40px rgba(255, 255, 255, 1);
          }
        }

        /* Background breathing */
        @keyframes breathBg {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
            filter: blur(0px);
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
            filter: blur(1px);
          }
        }

        .animate-breath-text {
          animation: breathText 3s ease-in-out infinite;
        }

        .animate-breath-bg {
          animation: breathBg 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
