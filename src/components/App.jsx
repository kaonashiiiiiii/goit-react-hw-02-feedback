import { Component } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

export class App extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback()
    const result = (this.state.good / total) * 100
    return result || 0
  }

  onLeaveFeedback = (feedback) => {
    this.setState({
      [feedback]: this.state[feedback] + 1,
    })
  }

  render () {
    return (
      <div>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback}/>
      </Section>
      <Section title='Statistics'>
        { this.countTotalFeedback()
          ? 
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
          : 
          <Notification message='There is no feedback'/>}
      </Section>
    </div>
    )
  }
};
