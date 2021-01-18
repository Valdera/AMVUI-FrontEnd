import React from 'react';
import background from '../../assets/background.svg';
import './header.styles.scss';

const Header = () => {
  return (
    <div className="header">
      <img src={background} />
      <div className="header_left"></div>
      <div className="header_right"></div>
    </div>
  );
};

export default Header;
