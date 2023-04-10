import PropTypes from 'prop-types';

// import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="Statistics">
      <span>Good:</span>
      {good}
      <span>Neutral:</span>
      {neutral}
      <span>Bad:</span>
      {bad}
      <span>Total:</span>
      {total}
      <span>Positive Feedback:</span>
      {positivePercentage}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
