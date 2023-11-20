import React from 'react';

export default function HeaderBox({header, children}) {
  return (
    <div class="headerBox">
        <p><b>{header}</b></p>
        {children}
    </div>
  );
}