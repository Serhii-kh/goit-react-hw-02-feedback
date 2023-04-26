import css from './Feedback.module.css';

export const Controls = ({
  handleClickOnGood,
  handleClickOnNeutral,
  handleClickOnBad,
}) => (
  <div className={css.feedback}>
    <h1 className={css.feedback__title}>Please leave feedback</h1>
    <div className={css.controls}>
      <button type="button" onClick={handleClickOnGood}>
        Good
      </button>
      <button type="button" onClick={handleClickOnNeutral}>
        Neutral
      </button>
      <button type="button" onClick={handleClickOnBad}>
        Bad
      </button>
    </div>
  </div>
);
