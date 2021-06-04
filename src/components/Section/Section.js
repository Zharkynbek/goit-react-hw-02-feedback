import React from "react"
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions"
import Statistics from "../Statistics/Statistics"

const Section = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  onChangeFeedback,
}) => (
  <>
    <h1>Please leave feedback</h1>
    <FeedbackOptions onChangeFeedback={onChangeFeedback} />
   {!!total && <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      positivePercentage={positivePercentage}
    />}
  </>
);

export default Section