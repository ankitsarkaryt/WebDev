// src/Calculator.js

import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {['7', '8', '9', '/'].map((value) => (
          <button onClick={() => handleClick(value)} key={value}>{value}</button>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <button onClick={() => handleClick(value)} key={value}>{value}</button>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <button onClick={() => handleClick(value)} key={value}>{value}</button>
        ))}
        {['0', '.', '=', '+'].map((value) => (
          <button onClick={() => handleClick(value)} key={value}>{value}</button>
        ))}
        <button onClick={() => handleClick('C')} key="C">C</button>
      </div>
    </div>
  );
};

export default Calculator;
