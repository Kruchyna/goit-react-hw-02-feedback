import React, { Component } from "react";
import { Container, Title, StatisticsTitle } from "./Feedback.styled";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import NotificationMessage from "./NotificationMessage";
class Feedback extends Component {
  totalFeedback = 0;
  positiveFeedbackPercentage = 0;

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (k) => {
    this.setState((state) => ({ [k]: state[k] + 1 }));
  };

  countTotalFeedback() {
    this.totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return this.totalFeedback;
  }

  countPositiveFeedbackPercentage() {
    this.positiveFeedbackPercentage =
      this.totalFeedback === 0
        ? 0
        : Math.round((this.state.good / this.totalFeedback) * 100);
    return this.positiveFeedbackPercentage;
  }

  render() {
    const { handleIncrement } = this;

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Title>Please leave feedback</Title>

        <FeedbackOptions handleIncrement={handleIncrement} />

        <StatisticsTitle>Statistics</StatisticsTitle>

        {this.totalFeedback > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.totalFeedback}
            positivePercentage={this.positiveFeedbackPercentage}
          />
        ) : (
          <NotificationMessage />
        )}
      </Container>
    );
  }
}

export default Feedback;
