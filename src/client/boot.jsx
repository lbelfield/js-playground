import React from 'react';
import ReactDOM from 'react-dom';

import Homepage from './homepage';

const boot = () => {
  if (typeof window !== 'undefined') {
    const wrapper = document.getElementById('container');
    wrapper ? ReactDOM.render(<Homepage />, wrapper) : false;
  }
};

export default boot;
