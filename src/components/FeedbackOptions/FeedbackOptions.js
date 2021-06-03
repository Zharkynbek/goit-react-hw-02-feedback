import React from "react"
import "./FeedbackOptions.css"

import { Button } from "@material-ui/core";
const FeedbackOptions = ({ goodFeedback, neutralFeedback, badFeedback }) => (
  <div className="Counter">
    <span className="goodBtn">
      <Button variant="contained" color="primary" onClick={goodFeedback}>
        :)
      </Button>
    </span>

    <span className="neutralBtn">
      <Button variant="contained" onClick={neutralFeedback}>
        :|
      </Button>
    </span>

    <Button variant="contained" color="secondary" onClick={badFeedback}>
      :(
    </Button>
  </div>
);

export default FeedbackOptions;