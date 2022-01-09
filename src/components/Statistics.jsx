import React, { Component } from "react";
import { ListFeedback, FeedbackItem, Value } from "./Feedback.styled";

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    const feedbackValue = [
      { key: "id-1", value: good, name: "Good" },
      { key: "id-2", value: neutral, name: "Neutral" },
      { key: "id-3", value: bad, name: "Bad" },
      { key: "id-4", value: total, name: "Total" },
      { key: "id-5", value: positivePercentage, name: "Positive feedback" },
    ];
    return (
      <ListFeedback>
        {feedbackValue.map(({ key, value, name }) => (
          <FeedbackItem key={key}>
            {name}:{" "}
            <Value>
              {value}
              {name === "Positive feedback" && "%"}
            </Value>
          </FeedbackItem>
        ))}
      </ListFeedback>
    );
  }
}

export default Statistics;
