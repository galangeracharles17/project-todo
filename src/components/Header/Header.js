import React from 'react';
import Logo from '../../Assets/logo.png';
function Header() {
  return (
    <div className='nav-bar'>
      <img src={Logo} alt='Logo' />
    </div>
  );
}

export default Header;
