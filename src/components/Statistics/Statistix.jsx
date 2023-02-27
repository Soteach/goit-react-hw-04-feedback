import PropTypes from 'prop-types';
import './Statistics.css';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <div className="Container">
        <span className="">Good: {good}</span>
        <span className="">Neutral: {neutral}</span>
        <span className="">Bad: {bad}</span>
        <span className="">Total: {total}</span>
        <span className="">Positive feedback: {percentage}%</span>
      </div>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
