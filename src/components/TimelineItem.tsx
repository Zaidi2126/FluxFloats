import { useEffect, useRef } from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: string;
  index: number;
}

export default function TimelineItem({ year, title, description, icon, index }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    // Reset initial state
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';

    // Trigger animation after a delay based on index
    const timer = setTimeout(() => {
      item.style.transition = 'all 0.5s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    }, index * 200);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      ref={itemRef} 
      className="timeline-item bg-white dark:bg-darkmode-body shadow-lg rounded-lg p-6 border-l-4 border-primary dark:border-darkmode-primary mb-12 transition-all duration-300 ease-in-out hover:translate-x-4 hover:scale-105 hover:shadow-xl"
    >
      <span className="timeline-icon dark:theme-icon">{icon}</span>
      <div className="timeline-content">
        <h3 className="text-xl font-semibold text-primary dark:text-darkmode-primary mb-2">{year} - {title}</h3>
        <p className="text-text-light dark:text-darkmode-text-light" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
} 