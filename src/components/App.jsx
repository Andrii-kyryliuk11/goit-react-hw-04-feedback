import { useState } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Feedback/Statistics';
import Section from './Feedback/Section';
import Notification from './Feedback/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const handleFeedbackIncrement = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        break;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() !== 0) {
      return Math.round((100 * good) / countTotalFeedback());
    }
    return 0;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={handleFeedbackIncrement}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            countTotalFeedback={countTotalFeedback()}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
