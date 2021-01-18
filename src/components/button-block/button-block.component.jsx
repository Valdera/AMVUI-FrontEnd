import React from 'react';
import './button-block.styles.scss';

const ButtonBlock = ({ children }) => {
  return <button className="button-block">{children}</button>;
};

export default ButtonBlock;
