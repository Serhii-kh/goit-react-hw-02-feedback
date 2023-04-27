import React from 'react';
import css from './Feedback.module.css';
import PropTypes from 'prop-types';

import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static defaultProps = {};
  static propTypes = {
    stateGood: PropTypes.number,
    stateBad: PropTypes.number,
    stateNeutral: PropTypes.number,
  };

  handleClickOnGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleClickOnNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleClickOnBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback() {
    const totalFeedback = this.state.good + this.state.bad + this.state.neutral;
    return totalFeedback;
  }

  countPositiveFeedbackPercentage() {
    const positivePercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return positivePercentage;
  }

  render() {
    const { good, neutral, bad } = this.state;

    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.feedback__wrapper}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            handleClickOnGood={this.handleClickOnGood}
            handleClickOnNeutral={this.handleClickOnNeutral}
            handleClickOnBad={this.handleClickOnBad}
          />
        </Section>

        {good > 0 ? (
          <Statistics>
            <Section title={'Good: '}>
              <p>{good}</p>
            </Section>
            <Section title={'Neutral: '}>
              <p>{neutral}</p>
            </Section>
            <Section title={'Bad: '}>
              <p>{bad}</p>
            </Section>
            <Section title={'Total: '}>
              <p>{totalFeedback}</p>{' '}
            </Section>
            <Section title={'Positive feedback: '}>
              <p>{positivePercentage}</p>
            </Section>
          </Statistics>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </div>
    );
  }
}
