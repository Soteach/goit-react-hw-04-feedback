import React from 'react';
import PropTypes from 'prop-types';
import './Feedback.css';

export const Feedback = ({ options, onLeaveFeedback }) => (
  <>
    <div className="Controls">
      <ul className="FeedList">
        {options.map(option => (
          <li key={option}>
            <button onClick={onLeaveFeedback} name={option} type="button">
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </>
);

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
