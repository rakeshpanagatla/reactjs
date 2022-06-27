import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor called");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedFromProps called");
    console.log("props =>", props);
    console.log("state =>", state);
    // this function needs to return an object
    return { props };
  }

  componentDidMount() {
    console.log("componentDidMount called");
    // Initial API calls
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate called");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
    // API calls
  }

  componentWillUnmount() {
    console.log("componentWilUnmount called");
    // Initial API calls
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("getSnapshotBeforeUpdate called");
    console.log(prevState.count, this.state.count);
  }
  render() {
    console.log("render called");
    return (
      <>
        <p>Count : {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </>
    );
  }
}

export default Counter;
