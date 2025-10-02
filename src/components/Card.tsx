import React, { useState } from "react";

interface CardProps {
  title: string;
  color: string;
  delay?: number;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ title, color, delay = 0, onClick }) => {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (!flipped) {
      setFlipped(true);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className="w-48 h-64 cursor-pointer"
      style={{ perspective: 1000 }}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped
            ? "rotateY(180deg)"
            : hovered
            ? "rotateY(10deg) translateY(-5px) scale(1.05)"
            : "rotateY(0deg)",
          transitionDelay: `${delay}s`,
        }}
      >
        {/* Frente */}
        <div
          className={`absolute inset-0 rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-xl ${color}`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {title}
        </div>

        {/* Verso */}
        <div
          className="absolute inset-0 rounded-xl shadow-lg flex items-center justify-center bg-gray-800 text-white text-sm"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          Clique para entrar
        </div>
      </div>
    </div>
  );
};
