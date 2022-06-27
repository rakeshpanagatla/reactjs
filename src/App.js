import React, { Component } from "react";

import Counter from "./counter";

import JobApp from "./jobapp";

import PostsApp from "./PostsApp";

// // *************props(read-only cannot be modified)

// class App extends Component {
//   render() {
//     console.log(this.props);
//     return <p>Hello app!</p>;
//   }
// }

// // ************Event Handling using react and FRAGMENTS(<> </>)

// class App extends Component {
//   clickMe = (msg) => {
//     alert(msg);
//   };

//   render() {
//     return (
//       <>
//         <button onClick={() => this.clickMe("Asgard")}>Click Me</button>
//       </>
//     );
//   }
// }

// // // ************state and SETSTATE
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "Mano", age: 12 };
//   }

//   clickMe = () => {
// this.setState({ name: "rakesh", age: 25 });
//   };
//   render() {
//     console.log("rendered");
//     return (
//       <>
//         <p>
//           Hello {this.state.name} {this.state.age} !
//         </p>
//         <button onClick={this.clickMe}>Click Me</button>
//       </>
//     );
//   }
// }

// //************ Counter task
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  showHide = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <>
        {/* <button onClick={this.showHide}>Show/Hide</button>
        {this.state.show ? <Counter name="guvi" /> : <></>} */}
        {/* <JobApp /> */}
        <PostsApp />
      </>
    );
  }
}

export default App;
