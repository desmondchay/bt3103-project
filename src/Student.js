import React from 'react';
import { render } from 'react-dom';
import AppFrame from './AppFrame'
import store from "./store";

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {

    return (
      <div>
        <AppFrame>
          <form onSubmit={this.handleSubmit} >
            Enter Your CodeCombat User ID: <input type="text" name="username" value={this.state.value} onChange={this.handleChange} placeholder="Your id here" />
            <input type="submit" value="Submit" />
          </form>
        </AppFrame>
      </div>
    )
  }
};

export default Student;