import React from "react"


const Statistics = ({ good, neutral, bad, positivePercentage, total }) => (
  <>
    <h2>Statistics</h2>
    <div className="Statistics">
      <p className="Good">Good: {good}</p>
      <p className="Neutral">Neutral: {neutral}</p>
      <p className="Bad">Bad: {bad}</p>
      <p className="Total">Total: {total}</p>
      <p className="positiveFeedback">Positive feedback: {positivePercentage}</p>
    </div>
  </>
);

export default Statistics;