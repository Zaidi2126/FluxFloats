import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  label: string;
}

export default function AnimatedCounter({ target, label }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000;

    function animateCounter(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * target);
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(animateCounter);
  }, [target]);

  return (
    <div className="counter-wrapper">
      <h3 className="h2 theme-text">{count}+</h3>
      <p className="text-lg">{label}</p>
    </div>
  );
} 