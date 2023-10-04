import { useState } from 'react';
import React from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

export const Feedback = () => {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     };
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onLeaveFeedback = key => {
        if (key === 'good') { setGood(prevState => prevState + 1) }
        if (key === 'neutral') { setNeutral(prevState => prevState + 1) }
        if (key === 'bad') { setBad(prevState => prevState + 1) }
   
  };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    // return Object.values(this.state).reduce((acc, state) => acc + state, 0);
  };

   const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good * 100) / totalFeedback);
  };

  
    const feedbackOptions = ['good', 'neutral', 'bad'];
    // const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        {total > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }


export default Feedback;
