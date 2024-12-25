import React from 'react';

const Button = ({
  onClick, title, type, filled,
}) => (
  <button
    onClick={onClick}
    type={type === 'button' ? 'button' : 'submit'}
    className={filled ? 'bg-custom-blue p-2 text-white' : 'font-light'}
  >
    {title}
  </button>
);

export default Button;
