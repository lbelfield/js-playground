import React, {Component} from 'react';

import Form from './form';

class Homepage extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  handleClick() {
    this.setState(() => {
      return {
        value: 'Button Clicked',
      };
    });
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value,
      };
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>
        <Form placeholder="hello" handleChange={this.handleChange.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default Homepage;
