import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from '../components/Statistics/Statistix';
import { Section } from './Section/Section';
import '../App.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateIncrement = event => {
    this.setState(prevState => {
      switch (event.target.innerText) {
        case 'Good':
          return { good: prevState.good + 1 };
        case 'Neutral':
          return { neutral: prevState.neutral + 1 };
        case 'Bad':
          return { bad: prevState.bad + 1 };
        default:
          return;
      }
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <Section title="Feedback">
          <Feedback feedback={this.state} onIncrement={this.stateIncrement} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percentage={
                !isNaN(this.countPositiveFeedbackPercentage())
                  ? this.countPositiveFeedbackPercentage()
                  : 0
              }
            />
          ) : (
            <div className="Container">
              <p className="feedalert">There is no feedback</p>
            </div>
          )}
        </Section>
      </>
    );
  }
}
