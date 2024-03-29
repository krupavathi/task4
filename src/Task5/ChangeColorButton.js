import React from 'react';

class ChangeColorButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.clickHandler();
  }
  render() {
    return (
      <button onClick={this.handleClick} style={{ backgroundColor: this.props.currentColor, borderColor: this.props.currentColor}}>I dont like {this.props.currentColor}</button>
    );
  }
}

export default ChangeColorButton;