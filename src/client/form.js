import React, { Component } from "react";
import PropTypes from 'prop-types';

const Form = ({ placeholder, handleChange, value }) => {
  return (
    <form>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </form>
  );
}

Form.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

Form.defaultProps = {
  placeholder: 'default',
}

export default Form;
