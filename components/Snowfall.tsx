import React, { useEffect, useState } from 'react';

const Snowfall: React.FC = () => {
  const [flakes, setFlakes] = useState<number[]>([]);

  useEffect(() => {
    // Generate static array for keys
    setFlakes(Array.from({ length: 50 }, (_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {flakes.map((i) => {
        const left = Math.random() * 100;
        const animationDuration = 5 + Math.random() * 10;
        const animationDelay = Math.random() * 5;
        const opacity = 0.3 + Math.random() * 0.5;
        const size = 2 + Math.random() * 4;

        return (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70 animate-fall"
            style={{
              left: `${left}%`,
              top: `-10px`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: opacity,
              animation: `fall ${animationDuration}s linear infinite`,
              animationDelay: `-${animationDelay}s`,
            }}
          />
        );
      })}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-10px) translateX(0px);
          }
          50% {
            transform: translateY(50vh) translateX(20px);
          }
          100% {
            transform: translateY(105vh) translateX(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default Snowfall;