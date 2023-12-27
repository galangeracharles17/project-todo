import React from 'react';

function Button({ className = '', children, ...delegated }) {
  return (
    <button className={`button ${className}`} {...delegated}>
      {children}
    </button>
  );
}

export default Button;
