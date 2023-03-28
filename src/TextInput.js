import React from 'react';

const TextInput = ({ handleChange, handleClick }) => {
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Speak</button>
    </div>
  );
};

export default TextInput;
