import React from 'react';
import css from './Feedback.module.css';

import { Controls } from './Controls';
import { StatisticsList } from './StatisticsList';

export class Feedback extends React.Component {
  static defaultProps = {};
  static propTypes = {};

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
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  }

  countPositiveFeedbackPercentage() {}

  render() {
    return (
      <div className={css.feedback__wrapper}>
        <Controls
          handleClickOnGood={this.handleClickOnGood}
          handleClickOnNeutral={this.handleClickOnNeutral}
          handleClickOnBad={this.handleClickOnBad}
        />

        <StatisticsList
          stateGood={this.state.good}
          stateNeutral={this.state.neutral}
          stateBad={this.state.bad}
        />
      </div>
    );
  }
}
