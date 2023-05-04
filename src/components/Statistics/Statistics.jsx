import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import FeedbackOptions from './FeedbackOptions';

export default class Statistics extends Component {
  static defaultProps = {
    title: null,
  };

  static propTypes = {
    title: PropTypes.string,
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };

  render() {
    const { title, good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <div>
          <h2>{title}</h2>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>
              Positive feedback:{' '}
              {isNaN(positivePercentage) ? 0 : `${positivePercentage}`}%
            </li>
          </ul>
        </div>
      </>
    );
  }
}
