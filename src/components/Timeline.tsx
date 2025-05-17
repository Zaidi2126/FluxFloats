import React from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <span className="timeline-icon dark:theme-icon">{item.icon}</span>
          <div className="timeline-content">
            <h3 className="mb-2">{item.year} - {item.title}</h3>
            <p className="text-text-light dark:text-darkmode-text-light" dangerouslySetInnerHTML={{ __html: item.description }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline; 