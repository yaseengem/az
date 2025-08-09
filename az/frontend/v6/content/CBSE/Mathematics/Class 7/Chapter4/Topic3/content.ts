import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl7_ch4_t3',
    topicNumber: 3,
    topicName: "Basic probability concepts",
    duration: 45,
    description: "Learn about probability concepts, their applications in real-life situations, and how to calculate simple probabilities.",
    explanation: `# Basic Probability Concepts 🎲

Probability is all about measuring how likely something is to happen! It's like predicting the future, but with numbers. Let's explore this fascinating concept that helps us make better decisions in life. 🎯

## What is Probability? 🤔

Probability is a measure of how likely an event is to occur. It's expressed as a number between 0 and 1:
- 0 means impossible (0%)
- 1 means certain (100%)
- Values in between show different levels of likelihood

## Key Terms in Probability 📚

1. **Experiment**: An activity with different possible outcomes
   - Example: Rolling a die 🎲
   - Example: Flipping a coin 🪙
   - Example: Drawing a card from a deck 🃏

2. **Outcome**: A possible result of an experiment
   - Example: Getting heads when flipping a coin
   - Example: Rolling a 6 on a die

3. **Event**: A collection of outcomes we're interested in
   - Example: Rolling an even number
   - Example: Drawing a red card

## Calculating Simple Probability 🧮

The formula for probability is:
Probability = Number of favorable outcomes ÷ Total number of possible outcomes

### Example 1: Rolling a Die 🎲
What's the probability of rolling an even number on a fair die?
- Favorable outcomes: 2, 4, 6 (three numbers)
- Total possible outcomes: 1, 2, 3, 4, 5, 6 (six numbers)
- Probability = 3/6 = ½ = 0.5 or 50%

### Example 2: Drawing a Card 🃏
What's the probability of drawing a heart from a deck of cards?
- Favorable outcomes: 13 hearts
- Total possible outcomes: 52 cards
- Probability = 13/52 = ¼ = 0.25 or 25%

## Real-Life Applications 🌍

1. **Weather Forecasting** ☔
   - Meteorologists use probability to predict rain chances
   - Example: "60% chance of rain" means it's more likely to rain than not

2. **Games and Sports** 🏏
   - Probability helps predict game outcomes
   - Example: What's the chance of winning if you need 6 runs off the last ball?

3. **Medical Tests** 🏥
   - Doctors use probability to assess risk factors
   - Example: Success rate of treatments

4. **Daily Life Decisions** 🚶
   - Should I carry an umbrella?
   - Which route is less likely to have traffic?

## Types of Events 🎯

1. **Certain Events** (Probability = 1)
   - Example: Getting a number less than 7 when rolling a die
   - Example: Drawing a card from a standard deck and getting a card with a number or face

2. **Impossible Events** (Probability = 0)
   - Example: Rolling a 7 on a regular die
   - Example: Drawing a blue card from a standard deck

3. **Equally Likely Events**
   - Example: Getting heads or tails on a fair coin
   - Example: Drawing any particular card from a well-shuffled deck

## Sample Problems and Solutions 📝

1. **Problem**: In a bag with 5 red marbles and 3 blue marbles, what's the probability of drawing a red marble?
   - Solution:
     * Favorable outcomes = 5 (red marbles)
     * Total outcomes = 8 (all marbles)
     * Probability = 5/8 = 0.625 or 62.5%

2. **Problem**: When rolling two dice, what's the probability of getting a sum of 7?
   - Solution:
     * Favorable outcomes = 6 (1+6, 2+5, 3+4, 4+3, 5+2, 6+1)
     * Total outcomes = 36 (6 × 6 possibilities)
     * Probability = 6/36 = 1/6 ≈ 0.167 or about 16.7%

## Common Misconceptions ⚠️

1. **The Gambler's Fallacy**
   - Thinking past events affect future probability
   - Example: If a coin shows heads 5 times, thinking tails is "due"
   - Truth: Each flip is independent!

2. **Confusing Probability with Certainty**
   - High probability doesn't guarantee occurrence
   - Low probability doesn't mean impossible

## Practice Tips 💡

1. **Start Simple**
   - Begin with coins and dice
   - Move to cards and marbles
   - Then tackle complex problems

2. **Use Visual Aids**
   - Draw diagrams
   - Make lists of outcomes
   - Create tables

3. **Real-World Connection**
   - Look for probability in daily life
   - Discuss weather forecasts
   - Analyze game situations

## Summary ✨

Probability helps us:
- Make informed decisions
- Predict likely outcomes
- Understand chance events
- Apply mathematics to real life

Remember:
- Probability ranges from 0 to 1
- Can be expressed as fraction, decimal, or percentage
- Based on number of favorable outcomes divided by total possible outcomes
- Helps in many real-life situations

## Quick Practice Questions 📚

1. What's the probability of rolling an odd number on a fair die?
   Answer: 3/6 = ½ = 0.5 = 50%

2. If you have a bag with 4 green and 6 yellow balls, what's the probability of drawing a green ball?
   Answer: 4/10 = 0.4 = 40%

3. When flipping two coins, what's the probability of getting at least one head?
   Answer: ¾ = 0.75 = 75%

Keep practicing with different scenarios to build your probability skills! Remember, probability is all around us, helping us make better decisions every day. 🎯✨`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 