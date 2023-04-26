import css from './feedback.module.css';

export const Controls = (
{  handleClickOnGood,
  handleClickOnNeutral,
  handleClickOnBad}
) => {
  return (
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
};
