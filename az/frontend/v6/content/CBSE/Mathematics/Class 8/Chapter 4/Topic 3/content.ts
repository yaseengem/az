import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const content: TopicContent = {
    id: 'cl8_ch4_t3',
    topicNumber: 3,
    topicName: 'Basic probability concepts',
    duration: 60,
    description: 'Understand the basic concepts of probability, including calculation of simple probabilities and real-life applications.',
    explanation: `Probability is a branch of mathematics that deals with the likelihood or chance of different outcomes. It helps us predict how likely an event is to happen, using numbers between 0 (impossible) and 1 (certain). Probability is used everywhere—from weather forecasts to games, sports, and even in making everyday decisions! 🎲

## What is Probability?
Probability is a measure of how likely an event is to occur. For example, when you toss a coin, there are two possible outcomes: heads or tails. If the coin is fair, both outcomes are equally likely.

- **Event**: An outcome or a set of outcomes of an experiment (e.g., getting a head when tossing a coin).
- **Experiment**: An action or process that leads to one or more outcomes (e.g., rolling a die).
- **Sample Space**: The set of all possible outcomes (e.g., for a die: {1, 2, 3, 4, 5, 6}).

## Calculating Probability
The probability of an event is calculated as:

    Probability of an event = (Number of favorable outcomes) / (Total number of possible outcomes)

This formula is used when all outcomes are equally likely.

### Example 1: Tossing a Coin
- Sample space: {Head, Tail}
- Probability of getting a head = 1/2
- Probability of getting a tail = 1/2

### Example 2: Rolling a Die
- Sample space: {1, 2, 3, 4, 5, 6}
- Probability of getting a 4 = 1/6
- Probability of getting an even number = 3/6 = 1/2 (even numbers: 2, 4, 6)

## Types of Events
- **Certain Event**: An event that is sure to happen (probability = 1).
- **Impossible Event**: An event that cannot happen (probability = 0).
- **Equally Likely Events**: Events that have the same chance of occurring.
- **Mutually Exclusive Events**: Events that cannot happen at the same time (e.g., getting a 2 and a 5 in a single die roll).

## Real-Life Examples
- Weather forecast: Probability of rain tomorrow is 0.7 (70%).
- Drawing a card: Probability of drawing an ace from a deck = 4/52 = 1/13.
- Sports: Probability of a team winning a match.

## Important Points
- Probability is always between 0 and 1.
- The sum of probabilities of all possible outcomes is 1.
- If an event is certain, its probability is 1.
- If an event is impossible, its probability is 0.

## Sample Questions
1. What is the probability of getting a 7 when rolling a standard die?
   - Answer: 0 (since a die has only 1 to 6)
2. If a bag contains 5 red and 3 blue balls, what is the probability of picking a blue ball?
   - Answer: 3/8
3. What is the probability of getting a vowel when picking a letter from the word "PROBABILITY"?
   - Answer: 4/11

## More Examples
- If you pick a day at random from a week, probability it is a weekend = 2/7.
- Probability of getting a face card from a deck = 12/52 = 3/13.
- Probability of getting an odd number when rolling a die = 3/6 = 1/2.

## Common Mistakes
- Not counting all possible outcomes.
- Forgetting to simplify fractions.
- Assuming outcomes are equally likely when they are not.

## Practice Problems
1. A bag contains 4 red, 5 blue, and 6 green balls. What is the probability of picking a green ball?
2. If two coins are tossed, what is the probability of getting at least one head?
3. What is the probability of drawing a king from a deck of cards?
4. If a number is chosen at random from 1 to 20, what is the probability it is a multiple of 3?

## Short Summary
- Probability helps us measure how likely an event is to happen.
- It is calculated as (favorable outcomes)/(total outcomes).
- Probability values range from 0 (impossible) to 1 (certain).
- Used in games, weather, sports, and daily life.
- Always check that all outcomes are considered and fractions are simplified.

Probability makes math fun and practical! Next time you play a game or hear a weather forecast, think about the probability behind it. 🎲📊
`,
    quiz: {
        questions: [...easyQuestions, ...mediumQuestions]
    }
}; 