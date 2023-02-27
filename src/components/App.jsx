import { useState } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from '../components/Statistics/Statistix';
import { Section } from './Section/Section';
import '../App.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const feedback = countTotalFeedback();

  const positivePercentage = () => {
    return good ? Math.round((good / countTotalFeedback()) * 100) : 0;
  };

  const positiveFeedback = positivePercentage();

  const handleFeedback = event => {
    switch (event.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Section title="Feedback">
        <Feedback options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {feedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={feedback}
            percentage={positiveFeedback}
          />
        ) : (
          <div className="Container">
            <p className="feedalert">There is no feedback</p>
          </div>
        )}
      </Section>
    </>
  );
};
