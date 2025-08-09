import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

const content: TopicContent = {
  id: 'cl10_ch16_t2',
  topicNumber: 2,
  topicName: 'Probability and Statistics',
  duration: 60,
  description: 'Learn about probability, its applications, and how to calculate various probability scenarios using different methods and formulas.',
  explanation: `
# Probability and Statistics

Probability is a measure of the likelihood of an event occurring. It is expressed as a number between 0 and 1, where 0 indicates impossibility and 1 indicates certainty.

## Basic Probability Concepts

### Sample Space
The set of all possible outcomes of a random experiment is called the sample space, denoted by S.

### Event
Any subset of the sample space is called an event.

### Calculating Probability
The probability of an event E is defined as:
P(E) = Number of favorable outcomes / Total number of possible outcomes

### Probability Properties
- 0 ≤ P(E) ≤ 1 for any event E
- P(S) = 1 (The probability of the sample space is always 1)
- P(∅) = 0 (The probability of an impossible event is 0)
- P(E') = 1 - P(E) (The probability of the complement of E)

## Compound Events

### Union of Events
For any two events A and B:
P(A ∪ B) = P(A) + P(B) - P(A ∩ B)

### Conditional Probability
The conditional probability of event A given that event B has occurred is:
P(A|B) = P(A ∩ B) / P(B), where P(B) ≠ 0

### Independent Events
Two events A and B are independent if:
P(A ∩ B) = P(A) × P(B)

## Probability Distributions

### Binomial Distribution
Deals with situations where there are exactly two mutually exclusive outcomes ('success' and 'failure').
For n trials with probability of success p:
P(X = r) = nCr × p^r × (1-p)^(n-r)

## Statistical Representation

### Measures of Central Tendency
- Mean: The average of all values
- Median: The middle value when data is arranged in order
- Mode: The most frequently occurring value

### Measures of Dispersion
- Range: Difference between the highest and lowest values
- Variance: The average of squared differences from the mean
- Standard Deviation: The square root of variance

## Practical Applications
Probability theory is widely used in:
- Weather forecasting
- Insurance calculations
- Quality control in manufacturing
- Medical diagnosis
- Gambling and games of chance
- Risk assessment in financial markets
  `,
  quiz: {
    questions: [...easyQuestions, ...mediumQuestions]
  }
};

export default content;
