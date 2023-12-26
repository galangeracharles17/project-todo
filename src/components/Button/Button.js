import React from 'react';

function Button({ children, ...delegated }) {
  return (
    <button
      style={{ backgroundColor: 'transparent', border: 'none' }}
      {...delegated}
      className='button'
    >
      {children}
    </button>
  );
}

export default Button;
