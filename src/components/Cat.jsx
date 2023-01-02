import React from "react";

class Cat extends React.Component {
    constructor(props) {
      super(props);
      this.state = { sleeping: true };
      this.state = { eating: true };
    }
    render() {
      return (
        <div>
          <p>{`The cat is ${this.state.sleeping ? 'sleeping' : 'eating'}`}</p>
          <button onClick={() => this.setState({ sleeping: false })}>
            Wake up!
          </button>
          <button onClick={() => this.setState({ sleeping: true })}>
           Sleep!
          </button>

        </div>
      );
    }
  }
  
export default Cat;