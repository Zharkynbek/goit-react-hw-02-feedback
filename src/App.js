import React, {Component} from "react"
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions"
import Statistics from "./components/Statistics/Statistics"

// import Section from "./components/Section/Section"
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


  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          goodFeedback={this.goodFeedback}
          neutralFeedback={this.neutralFeedback}
          badFeedback={this.badFeedback}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.good + this.state.neutral + this.state.bad}
          positivePercentage={this.state.good}
        />
      </div>
    );
  }
}

export default App;







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