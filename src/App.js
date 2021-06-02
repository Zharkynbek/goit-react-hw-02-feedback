import React, {Component} from "react"

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFeedback = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  neutralFeedback = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  badFeedback = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  // =======================================

  // countTotalFeedback() {
  //   return this.state.good + this.state.neutral + this.state.bad;
  // }

  // =======================================

  // countTotalFeedback() {
  //   this.setState((prevState) => {
  //     return {
  //       good: prevState.bad + 1,
  //       neutral: prevState.bad + 1,
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // }

  // ======================================
  // countTotalFeedback = () => {
  //   this.setState((prevState) => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });

  //   this.setState((prevState) => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });

  //   this.setState((prevState) => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };

  render() {
    // const {feedback}  = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>

        <div className="Counter">
          <button type="button" onClick={this.goodFeedback}>
            Good
          </button>

          <button type="button" onClick={this.neutralFeedback}>
            Neutral
          </button>

          <button type="button" onClick={this.badFeedback}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.state.good + this.state.neutral + this.state.bad}</p>
        <span>
          <p>Positive feedback:</p>{" "}
        </span>
      </div>
    );
  }
}

export default App;