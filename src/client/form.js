import React, { Component } from "react";
import PropTypes from 'prop-types';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    const { placeholder } = this.props;

    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          placeholder={placeholder}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

Form.propTypes = {
  placeholder: PropTypes.string.isRequired,
}

Form.defaultProps = {
  placeholder: 'default',
}

export default Form;
