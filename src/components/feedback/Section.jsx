import css from './Feedback.module.css';

export const Section = ({ title, children }) => (
  <section className={css.section}>
    <h2 className={css.section__title}>{title}</h2>
    {children}
  </section>
);
