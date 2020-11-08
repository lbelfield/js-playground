import React from "react";

import Form from './form';

const handleClick = () => {
  console.log('The link was clicked.');
}

const Homepage = () => {
  return (
    <div>
      <h2>hi</h2>
      <Form placeholder="hello" />
      <button onClick={() => handleClick()}>Submit</button>
    </div>
  );
}

export default Homepage;
