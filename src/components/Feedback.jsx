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

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
   
  }
countPositiveFeedbackPercentage = () => {
    return  Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
   
    const  total = this.countTotalFeedback();
    const  positive = this.countPositiveFeedbackPercentage();
    
    return (
      <Container>
        <Title>Please leave feedback</Title>

        <FeedbackOptions handleIncrement={this.handleIncrement} />

        <StatisticsTitle>Statistics</StatisticsTitle>

        {total > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positive}
          />
        ) : (
          <NotificationMessage />
        )}
      </Container>
    );
  }
}

export default Feedback;
