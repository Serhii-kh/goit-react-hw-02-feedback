import css from './Feedback.module.css'

export const Notification = ({ message }) => (
  <div className={css.notification}>
    <p>{message}</p>
  </div>
);
