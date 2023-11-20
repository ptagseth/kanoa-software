import React from 'react';

export default function PurpleBox({children}) {
  return (
    <span
      style={{
        backgroundColor: '#cbbff5',
        borderRadius: '2px',
        color: '#000',
        padding: '0.6rem',
        border: '1px solid black'
      }}>
      {children}
    </span>
  );
}