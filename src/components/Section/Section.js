import React from "react"

const Section = () => (
  <>
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
  </>
);

export default Section