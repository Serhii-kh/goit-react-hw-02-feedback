import React from 'react';
import css from './feedback.module.css';

export class Feedback extends React.Component {
  state = {
    good: 3,
    neutral: 2,
    bad: 2,
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
        <div className={css.feedback}>
          <h1 className={css.feedback__title}>Please leave feedback</h1>
          <div className={css.buttons__wrapper}>
            <button type="button" onClick={this.handleClickOnGood}>
              Good
            </button>
            <button type="button" onClick={this.handleClickOnNeutral}>
              Neutral
            </button>
            <button type="button" onClick={this.handleClickOnBad}>
              Bad
            </button>
          </div>
        </div>
        <div className={css.statistics}>
          <h2 className={css.statistics__title}>Statistics</h2>
          <ul className={css.statistics__list}>
            <li className={css.statistics__item}>
              {' '}
              <p>
                Good:
                <span className={css.statistics__good}> {this.state.good}</span>
              </p>
            </li>
            <li className={css.statistics__item}>
              {' '}
              <p>
                Neutral:
                <span className={css.statistics__neutral}>
                  {' '}
                  {this.state.neutral}
                </span>
              </p>
            </li>
            <li className={css.statistics__item}>
              {' '}
              <p>
                Bad:
                <span className={css.statistics__bad}> {this.state.bad}</span>
              </p>
            </li>
            <li className={css.statistics__item}>
              <p>
                Total:
                <span className={css.statistics__total}> {this.total}</span>
              </p>
            </li>
            <li className={css.statistics__item}>
              {' '}
              <p>
                Positive feedback:
                <span className={css.statistics__positive}>
                  {' '}
                  {this.state.positive}
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
