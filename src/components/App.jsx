import React, {Component} from 'react';
import css from './Feedback/Feedback.module.css';
import PropTypes from 'prop-types';

import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Feedback/Statistics';
import { Section } from './Feedback/Section';
import { Notification } from './Feedback/Notification';

export class App extends Component {
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

  handleClickOnGood = (e) => {
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
		const { good } = this.state;
    const positivePercentage = Math.round(
      (good / this.countTotalFeedback()) * 100
    ) ;
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

        {totalFeedback !== 0 ? (
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
