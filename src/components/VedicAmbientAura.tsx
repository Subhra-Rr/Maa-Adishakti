import React from 'react';

export const VedicAmbientAura: React.FC = () => {
  // Pre-calculated deterministic coordinates for 12 subtle golden prana motes
  const motes = [
    { id: 1, left: '8%', top: '15%', size: '3px', delay: '0s', duration: '18s' },
    { id: 2, left: '22%', top: '45%', size: '2px', delay: '3s', duration: '22s' },
    { id: 3, left: '38%', top: '75%', size: '4px', delay: '1.5s', duration: '20s' },
    { id: 4, left: '55%', top: '20%', size: '2.5px', delay: '5s', duration: '24s' },
    { id: 5, left: '72%', top: '60%', size: '3px', delay: '2s', duration: '19s' },
    { id: 6, left: '88%', top: '30%', size: '3.5px', delay: '4.5s', duration: '21s' },
    { id: 7, left: '15%', top: '85%', size: '2px', delay: '6s', duration: '25s' },
    { id: 8, left: '82%', top: '80%', size: '2.5px', delay: '7s', duration: '23s' },
    { id: 9, left: '48%', top: '90%', size: '3px', delay: '3.5s', duration: '20s' },
    { id: 10, left: '62%', top: '10%', size: '2px', delay: '8s', duration: '26s' },
  ];

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Subtle Vedic golden dust prana motes */}
      {motes.map((m) => (
        <div
          key={m.id}
          className="absolute rounded-full bg-sacred-goldLight/30 animate-vedic-float"
          style={{
            left: m.left,
            top: m.top,
            width: m.size,
            height: m.size,
            animationDelay: m.delay,
            animationDuration: m.duration,
            boxShadow: '0 0 8px rgba(240, 211, 118, 0.4), 0 0 16px rgba(212, 175, 55, 0.2)',
          }}
        />
      ))}
    </div>
  );
};
