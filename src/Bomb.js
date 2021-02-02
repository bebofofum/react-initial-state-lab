import React, { Component } from 'react';

class Bomb extends Component {

  // we use the constructor to set the INITIAL STATE
  constructor(props) {  //props that the component gets from its parent
    super()
    this.state = {  //define initial state with a key of 'someKey' set to the 'someValue' prop
        secondsLeft: props.initialCount
    }
  }


    render() {
        return (
            <div>{this.state.secondsLeft !== 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'}</div>
        )
    }


}

export default Bomb;
