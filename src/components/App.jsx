import React, { Component } from 'react';
import Section from 'components/section/Section';
import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions';
import Statistics from 'components/statistics/Statistics';
import Notification from 'components/notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  //!!
  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  //!!
  countTotalFeedbacks = () => {
    // return this.state.good + this.state.neutral + this.state.bad;
    const total = Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
    
    return total
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedbacks();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedbacks() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedbacks()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
