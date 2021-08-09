import React, { useState } from "react";
import Section from "./components/Section/Section";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChangeFeedback = (name) => {
    switch (name) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };

  const getPositivePercentage = () => {
    return good
      ? Math.ceil((good / (neutral + bad + good)) * 100) + "%"
      : 0 + "%";
  };
  return (
    <div>
      <Section
        onChangeFeedback={handleChangeFeedback}
        good={good}
        neutral={neutral}
        bad={bad}
        total={good + neutral + bad}
        positivePercentage={getPositivePercentage()}
      />
    </div>
  );
}
