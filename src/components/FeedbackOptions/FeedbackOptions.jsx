import React, { Component } from 'react';
import { Button, FlexWrap } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <FlexWrap>
      {options.map((option, i) => {
        return (
          <Button key={i} name={option} onClick={onLeaveFeedback}>
            {option}
          </Button>
        );
      })}
    </FlexWrap>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
