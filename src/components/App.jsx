import React from 'react';
import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Feedback/Notification';
import Section from './Feedback/Section';
import Statistics from './Feedback/Statistics';

export class App extends Component {
  state = {
    // buttoState: ButtonsList.state
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //Метод додавання фідбеку
  addFeedback = evt => {
    // ButtonsList.addFeedback();
    this.setState(prevState => {
      return { [evt.target.name]: prevState[evt.target.name] + 1 };
    });
  };

  //Метод підрахунку Total
  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  //Метод підрахунку Positive
  countPositiveFeedbackPercentage() {
    const positivePercentage =
      (this.state.good / this.countTotalFeedback()) * 100;

    return Math.round(positivePercentage);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    let total = this.countTotalFeedback();
    console.log(total);

    // if (total === 0) {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
    // }
  }
}
