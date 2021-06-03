import React from "react"


const Statistics = ({ good, neutral, bad }) => (
  <>
    <h2>Statistics</h2>
    <div className="Statistics">
      <p className="Good">Good: {good}</p>
      <p className="Neutral">Neutral: {neutral}</p>
      <p className="Bad">Bad: {bad}</p>
      <p className="Total">Total: {good + neutral + bad}</p>
      <p className="positiveFeedback">Positive feedback: {good}</p>
    </div>
  </>
);

export default Statistics;