import React, { Component } from 'react';
import ChangeColorButton from './ChangeColorButton.js';

class ColoredBlock extends React.Component {
constructor(props) {
super(props);
this.changeColor = this.changeColor.bind(this);
this.state = {
color: 'red'
};
}
changeColor() {
this.setState((prevState, props) => ({
color: prevState.color === 'red' ? 'blue' : 'red'
}));
}
render() {
return (
<div style={{height: '500px', width: '500px', backgroundColor: this.state.color}}>
<ChangeColorButton clickHandler={this.changeColor} currentColor={this.state.color}></ChangeColorButton>
</div>
)
}
}
export default ColoredBlock;