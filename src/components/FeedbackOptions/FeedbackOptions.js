import React from "react"
import "./FeedbackOptions.css"
import { Button } from "@material-ui/core";


const FeedbackOptions = ({ onChangeFeedback }) => (
  <div className="Counter">
    <span className="goodBtn">
      <Button
        name="good"
        variant="contained"
        color="primary"
        onClick={(e) => onChangeFeedback(e.currentTarget.name)}
      >
        :)
      </Button>
    </span>

    <span className="neutralBtn">
      <Button
        name="neutral"
        variant="contained"
        onClick={(e) => onChangeFeedback(e.currentTarget.name)}
      >
        :|
      </Button>
    </span>

    <Button
      name="bad"
      variant="contained"
      color="secondary"
      onClick={(e) => onChangeFeedback(e.currentTarget.name)}
    >
      :(
    </Button>
  </div>
);

export default FeedbackOptions;