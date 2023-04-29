import css from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({
  handleClickOnGood,
  handleClickOnNeutral,
  handleClickOnBad,
}) => (
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
);
