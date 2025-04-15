"use client";

import { useEffect, useState } from 'react';

interface FallingElement {
  id: number;
  x: number;
  duration: number;
  size: number;
  rotation: number;
}

export function FallingElements() {
  const [elements, setElements] = useState<FallingElement[]>([]);

  useEffect(() => {
    const createElement = (): FallingElement => ({
      id: Math.random(),
      x: Math.random() * 100,
      duration: 5 + Math.random() * 10,
      size: 20 + Math.random() * 30,
      rotation: Math.random() * 360,
    });

    const addElement = () => {
      setElements(prev => [...prev, createElement()]);
    };

    // Initial elements - reduced to 5
    for (let i = 0; i < 5; i++) {
      addElement();
    }

    // Add new elements less frequently - increased interval to 3000ms
    const interval = setInterval(addElement, 3000);

    // Cleanup old elements - reduced max elements to 10
    const cleanup = setInterval(() => {
      setElements(prev => {
        if (prev.length > 10) {
          return prev.slice(1);
        }
        return prev;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(cleanup);
    };
  }, []);

  return (
    <div className="falling-elements">
      {elements.map((element) => (
        <div
          key={element.id}
          className="falling-element"
          style={{
            left: `${element.x}%`,
            animation: `fall ${element.duration}s linear infinite`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            transform: `rotate(${element.rotation}deg)`,
            fontSize: `${element.size}px`,
          }}
        >
          🦴
        </div>
      ))}
    </div>
  );
}