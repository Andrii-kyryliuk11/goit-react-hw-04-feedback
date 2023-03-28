import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <span className={css.stat}>Good:{good}</span>
      <span className={css.stat}>Neutral:{neutral}</span>
      <span className={css.stat}>Bad:{bad}</span>
      <span className={css.stat}>Total:{countTotalFeedback}</span>
      <span className={css.stat}>
        Positive feedback:{countPositiveFeedbackPercentage}%
      </span>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
