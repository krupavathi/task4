import React, { Component } from 'react';
class Operation extends Component {
  state = {
    s1: 10,
    a1: 10,
    m1: 10
  }

  subtraction = () => {
    if (this.state.s1 > 0) {
      this.setState({
        s1: this.state.s1 - 5
      })
    }
  }
  addition = () => {
    this.setState({
      a1: this.state.a1 + 10
    })
  }
  multiplication = () => {
    this.setState({
      m1: this.state.m1 * 10
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.subtraction}>sub</button>
        <div>{this.state.s1}</div>
        <button onClick={this.addition}>add</button>
        <div>{this.state.a1}</div>
        <button onClick={this.multiplication}>mul</button>
        <div>{this.state.m1}</div>
      </div>
    );
  }
}
export default Operation