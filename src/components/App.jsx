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


 
handleFeedback = (param) => {
this.setState(prevState => ({
          value:prevState.value + 1,
}))
};

countTotalFeedback = () => {
 return this.state.good + this.state.neutral + this.state.bad
};

countPositiveFeedbackPercentage = () => {
  const positivePercentageResult = (this.state.good/this.countTotalFeedback())*100;
  return positivePercentageResult;
};
 
render(){
return(
  <div>
<Section title='Please leave your feedback'>
<FeedbackOptions options={[ 'good',  'neutral', 'bad', ]} onLeaveFeedback={this.handleFeedback}/></Section>
<Section title='Statistics'> {this.countTotalFeedback() > 0?(<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} 
positivePercentage={this.countPositiveFeedbackPercentage()}/>):(<Notification message="There is no feedback"></Notification>)}/</Section>

</div>
)
};
}

export default App;
