import css from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({
  options, onLeaveFeedback
}) => (
  <div className={css.controls}>
		{
			options.map((option) =>
			
 <button type="button" name={option} onClick={onLeaveFeedback}>
      {}
              </button>
			)
	 }
    
  </div>
);
