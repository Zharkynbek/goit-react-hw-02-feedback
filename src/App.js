import React, {Component} from "react"
import Section from "./components/Section/Section"
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChangeFeedback = (name) => {
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };


  getPositivePercentage = () => {
    const { good, neutral, bad } = this.state
    return good ? Math.ceil((good / (neutral + bad + good)) * 100) + '%' : 0 + '%'
  }
  render() {
    return (
      <div>
        <Section
          onChangeFeedback={this.handleChangeFeedback}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.good + this.state.neutral + this.state.bad}
          positivePercentage={this.getPositivePercentage()}
        />
      </div>
    );
  }
}

export default App;


