import React from 'react';

const Button = ({ name, onClick }) => {
  return (
    <div className="submit">
      <button onClick={onClick}>{name}</button>
    </div>
  );
};

export default Button;
