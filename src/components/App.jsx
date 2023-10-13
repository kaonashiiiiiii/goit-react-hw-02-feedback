import { useMemo, useState } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const countTotalFeedback = useMemo(function () {
    return feedback.good + feedback.neutral + feedback.bad
  }, [feedback.good, feedback.neutral, feedback.bad])

  const countPositiveFeedbackPercentage = useMemo(function () {
    const total = countTotalFeedback
    const result = (feedback.good / total) * 100
    return result || 0
  }, [feedback.good, feedback.neutral, feedback.bad])

  function onLeaveFeedback (feedback) {
    setFeedback(currentFeedback => ({
      ...currentFeedback,
      [feedback]: currentFeedback[feedback] + 1,
    }))
  }
  return (
    <div>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={feedback} onLeaveFeedback={onLeaveFeedback}/>
      </Section>
      <Section title='Statistics'>
        { countTotalFeedback 
          ? 
          <Statistics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage}/>
          : 
          <Notification message='There is no feedback'/>}
      </Section>
    </div>
  );
};
