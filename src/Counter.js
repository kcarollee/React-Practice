import { Component } from "react";

class Counter extends Component {
  // you can use the constructor to set the state or
  /*
  constructor(props) {
    super(props);
    this.state = {
      number: 1000,
      fixedNumber: 1,
    };
  }
  */

  // you can also do this to set the state
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <h1>fixedNumber: {fixedNumber}</h1>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            this.setState(
              (prevState) => ({
                number: prevState.number + 1,
              }),
              () => {
                console.log("second setState function");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
