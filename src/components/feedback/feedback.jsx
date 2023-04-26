import React from 'react';
import css from './feedback.module.css';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className={css.feedback__wrapper}>
        <div className={css.feedback}>
          <h1 className={css.feedback__title}>Please leave feedback</h1>
          <div className={css.buttons__wrapper}>
            <button type="button">Good</button>
            <button type="button">Neutral</button>
            <button type="button">Bad</button>
          </div>
        </div>
        <div className={css.statistics}>
          <h2 className={css.statistics__title}>Statistics</h2>
          <p>
            Good:
            <span className={css.statistics__good}></span>
          </p>
          <p>
            Neutral:
            <span className={css.statistics__neutral}></span>
          </p>
          <p>
            Bad:
            <span className={css.statistics__bad}></span>
          </p>
          <p>
            Total:
            <span className={css.statistics__total}></span>
          </p>
          <p>
            Positive feedback:
            <span className={css.statistics__positive}></span>
          </p>
        </div>
      </div>
    );
  }
}
