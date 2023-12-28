import React from 'react';

function Button({ className = '', children, ...delegated }) {
  return (
    <button className={`${className} button`} {...delegated}>
      {children}
    </button>
  );
}

export default Button;
