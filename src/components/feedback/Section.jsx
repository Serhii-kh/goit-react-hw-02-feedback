import css from './Feedback.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.feedback}>
      <h2 className={css.feedback__title}>{title}</h2>
      {children}
    </section>
  );
};
