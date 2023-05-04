import React, { Component } from 'react';
import { Button, FlexWrap } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
  static defaultProps = {
    title: null,
  };
  static propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
  };

  render() {
    const { onLeaveFeedback, options } = this.props;

    console.log(options);
    // console.log(this.state);
    return (
      <>
        <FlexWrap>
          {options.map((option, i) => {
            return (
              <Button key={i} name={option} onClick={onLeaveFeedback}>
                {option}
              </Button>
            );
          })}
        </FlexWrap>
      </>
    );
  }
}
