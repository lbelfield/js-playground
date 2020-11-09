import React from 'react';
import PropTypes from 'prop-types';

const Form = (props) => {
  const { placeholder, handleChange, value } = props;

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
};

Form.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Form.defaultProps = {
  placeholder: 'default',
};

export default Form;
