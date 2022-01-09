import React, { Component } from "react";
import { ListButton, ListButtonItem, Button } from "./Feedback.styled";

class FeedbackOptions extends Component {
  controlBtn = [
    { key: "id-1", name: "good" },
    { key: "id-2", name: "neutral" },
    { key: "id-3", name: "bad" },
  ];
  render() {
    return (
      <ListButton>
        {this.controlBtn.map(({ key, name }) => (
          <ListButtonItem key={key}>
            <Button
              type="button"
              onClick={() => this.props.handleIncrement(name)}
            >
              {name}
            </Button>
          </ListButtonItem>
        ))}
      </ListButton>
    );
  }
}

export default FeedbackOptions;
