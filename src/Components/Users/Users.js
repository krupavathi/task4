import React, { Component } from 'react';

class Users extends Component {
  state = {
    Users: [
      { age: 10 },
    ],
    Users1: [
      { age: 10 },

    ],
    Users2: [
      { age: 10 },

    ],
  }

  add = () => {
    const newState = this.state.Users.map((User) => {
      const tempUser = User;
      tempUser.age += 10;
      return tempUser;
    })
    console.log(newState);
    this.setState({ newState });
  }
  sub = () => {
    if(this.state.Users1.age>0){
        this.setState({
          User1:this.state.User1-5
        })
      }
  }
  //   const newState = this.state.Users1.map((User1) => {
  //     const tempUser1 = User1;

  //     tempUser1.age -= 10;
  //       // else
  //     return tempUser1;

  //   })
  //   // }
  //   console.log(newState);
  //   this.setState({ newState });
  // }
 
  mult = () => {
    const newState = this.state.Users2.map((User2) => {
      const tempUser2 = User2;
      tempUser2.age *= 10;
      return tempUser2;
    })
    console.log(newState);
    this.setState({ newState });
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.add}>add</button>
          <br />
          <br />
          {
            this.state.Users.map((User) => (
              <div>User Age={User.age} </div>
            ))
          }
        </div>




        <div>
          <button onClick={this.sub}>sub</button>
          <br />
          <br />


          {
            this.state.Users1.map((User1) => (
              <div>User1 Age={User1.age}</div>
            ))
          }
        </div>
        <div>
          <button onClick={this.mult}>Multiply</button>
          <br />
          <br />


          {
            this.state.Users2.map((User2) => (
              <div>User2 Age={User2.age}</div>
            ))
          }
        </div>
      </div>
    )
  }
}



export default Users;