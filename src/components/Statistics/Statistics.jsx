import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
	<div className={css.statistics__list}>
		<p className={css.statistics__item}>good: {good}</p>
		<p className={css.statistics__item}>neutral:{neutral}</p>
		<p className={css.statistics__item}>bad: {bad}</p>
		<p className={css.statistics__item}>total: {total}</p>
		<p className={css.statistics__item}>{positivePercentage} %</p>
	</div>
);
