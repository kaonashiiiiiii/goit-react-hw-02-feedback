import { Component } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state)
    return values.reduce((acc, item ) => acc + item, 0)
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
    const totalFeedback = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()
    const options = Object.keys(this.state)
    return (
      <div>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
      </Section>
      <Section title='Statistics'>
        { totalFeedback
          ? 
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={totalFeedback} positivePercentage={positivePercentage}/>
          : 
          <Notification message='There is no feedback'/>}
      </Section>
    </div>
    )
  }
};
