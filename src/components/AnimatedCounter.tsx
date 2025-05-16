import React, { useEffect, useState } from 'react';

interface CounterProps {
  target: number;
  label: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentCount = Math.min(Math.floor((progress / duration) * target), target);

      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [target]);

  return (
    <div className="md:col-4">
      <h3 className="h2 counter theme-text">{count}+</h3>
      <p className="text-lg">{label}</p>
    </div>
  );
};

export default AnimatedCounter; 