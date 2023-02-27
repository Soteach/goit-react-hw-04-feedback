import React from 'react';
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
