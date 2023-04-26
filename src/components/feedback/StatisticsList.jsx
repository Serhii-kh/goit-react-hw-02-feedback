import css from './Feedback.module.css';

export const StatisticsList = ({ stateGood, stateBad, stateNeutral }) => (
  <div className={css.statistics}>
    <h2 className={css.statistics__title}>Statistics</h2>
    <ul className={css.statistics__list}>
      <li className={css.statistics__item}>
        {' '}
        <p>
          Good:
          <span className={css.statistics__good}> {stateGood}</span>
        </p>
      </li>
      <li className={css.statistics__item}>
        {' '}
        <p>
          Neutral:
          <span className={css.statistics__neutral}> {stateNeutral}</span>
        </p>
      </li>
      <li className={css.statistics__item}>
        {' '}
        <p>
          Bad:
          <span className={css.statistics__bad}> {stateBad}</span>
        </p>
      </li>
      <li className={css.statistics__item}>
        <p>
          Total:
          <span className={css.statistics__total}> {0}</span>
        </p>
      </li>
      <li className={css.statistics__item}>
        {' '}
        <p>
          Positive feedback:
          <span className={css.statistics__positive}> {0}</span>
        </p>
      </li>
    </ul>
  </div>
);
