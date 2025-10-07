import { Component } from "react";

class StatesInCBC extends Component {
  state = { count: 0 }; //! initializing state

  incre = () => {
   this.setState({count:this.state.count+1})
  }
  decre = () => {
   if (this.state.count>0) {
    this.setState({count:this.state.count-1})
   }
  }
  reset = () =>  this.setState({count:0})

  render() {
    console.log(this); //! points current class object

    return (
      <>
        <h1>Learn States in Class Based Component</h1>
        <h2>Count : {this.state.count}</h2>
        <button onClick={this.incre}>Increment</button>
        <button onClick={this.decre}>decrement</button>
        <button onClick={this.reset}>Reset</button>
      </>
    );
  }
}

export default StatesInCBC;



