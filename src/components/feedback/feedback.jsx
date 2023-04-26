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
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <div className={css.feedback__statistics}>
          <h2 className={css.feedback}>Statistics</h2>
          <p>
            Good:
            <span className={css.feedback__quantity}></span>
          </p>
          <p>
            Neutral:
            <span className={css.feedback__quantity}></span>
          </p>
          <p>
            Bad:
            <span className={css.feedback__quantity}></span>
          </p>
          <p>
            Total:
            <span className={css.feedback__quantity}></span>
          </p>
          <p>
            Positive feedback:
            <span className={css.feedback__quantity}></span>
          </p>
        </div>
      </div>
    );
  }
}
