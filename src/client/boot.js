import React from "react";
import ReactDOM from "react-dom";

import Form from './form';

const boot = () => {
  if (typeof window !== 'undefined') {
    const wrapper = document.getElementById("container");
    wrapper ? ReactDOM.render(<Form />, wrapper) : false;
  }
}

export default boot;
