import React from 'react';

export default function HighlightWhite({children, color}) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: '#000',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  );
}