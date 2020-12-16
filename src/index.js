import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Calculator from './main/Calculator.jsx'
import './main/Calculator.css'

ReactDOM.render(
  <div>
    <h1 className="title">Calculator</h1>
    <Calculator></Calculator>
  </div>,
  document.getElementById('root')
);

reportWebVitals();
