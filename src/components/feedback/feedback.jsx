import React from 'react';
import css from './Feedback.module.css';
import PropTypes from 'prop-types';

import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

export class Feedback extends React.Component {
  static defaultProps = {};
  static propTypes = {
    stateGood: PropTypes.number,
    stateBad: PropTypes.number,
    stateNeutral: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.feedback__wrapper}>
        <FeedbackOptions
          handleClickOnGood={this.handleClickOnGood}
          handleClickOnNeutral={this.handleClickOnNeutral}
          handleClickOnBad={this.handleClickOnBad}
        />

        <Statistics
          stateGood={this.state.good}
          stateNeutral={this.state.neutral}
          stateBad={this.state.bad}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      </div>
    );
  }
}
