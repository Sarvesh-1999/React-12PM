import { Component } from "react";

export default class LifeCycleInCBC extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    console.log("I am Constructor");
  }

  incre = () => this.setState({ count: this.state.count + 1 });

  componentDidMount() {
    console.log("Mounting Phase");
    this.intervalID = setInterval(() => {
      console.log("API CALL");
    }, 2000);
  }
  componentDidUpdate() {
    console.log("Updating Phase");
  }
  componentWillUnmount() {
    console.log("Unounting Phase");
    clearInterval(this.intervalID);
  }

  render() {
    console.log("I am Render");

    return (
      <div>
        <h1>Learn LifeCycle In CBC</h1>
        <h2>Counter : {this.state.count}</h2>
        <button onClick={this.incre}>Increment</button>
      </div>
    );
  }
}
