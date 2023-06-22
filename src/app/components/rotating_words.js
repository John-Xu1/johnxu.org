"use client";
import React from "react";

const phrases = [
  "Phrase 1",
  "Phrase 2",
  "Phrase 3",
  "Phrase 4",
  "Phrase 5",
  "Phrase 6",
  "Phrase 7",
];

export default function RotatingWords() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-24 relative overflow-hidden">
      {phrases.map((phrase, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full font-body font-light text-5xl transition-all duration-1000 transform ${
            index === currentIndex
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-full"
          }`}
        >
          {phrase}
        </div>
      ))}
    </div>
  );
}
