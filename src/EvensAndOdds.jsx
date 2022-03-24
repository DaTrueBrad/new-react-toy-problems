import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    let str = this.state.userInput;
    str = str.split(",");

    const evens = str.filter((number) => number % 2 === 0).map(Number)
    const odds = str.filter((number) => number % 2 !== 0).map(Number)

    this.setState({
      evenArray: [...this.state.evenArray, ...evens],
      oddArray: [...this.state.oddArray, ...odds],
      userInput: ""
    })
  }

  render() {
    return (
      <div>
        <h4>Evens and Odds</h4>
        <input
          type="text"
          value={this.state.userInput}
          onChange={(e) => this.setState({ userInput: e.target.value })}
        />
        <button onClick={this.clickHandler}>Split</button>
        <span>Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span>Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    );
  }
}

export default EvenAndOdd;
