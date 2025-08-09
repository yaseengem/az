import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl10_ch15_t2',
  topicNumber: 2,
  topicName: "Simple problems on probability",
  duration: 45,
  description: "Solving basic probability problems involving dice, cards, coins, and balls to calculate the likelihood of specific outcomes and events",
  explanation: `
# Simple Problems on Probability 🎲

Probability helps us understand the likelihood of events happening in our world. It's a powerful mathematical tool that we use in everyday decisions, games, weather forecasts, and many other areas. In this topic, we'll learn how to solve simple probability problems step-by-step! 📊

## Understanding Basic Probability 🔍

Probability measures how likely an event is to occur. It is always expressed as a number between 0 and 1:
- Probability = 0: The event will never happen ❌
- Probability = 1: The event will definitely happen ✓
- Probability = 0.5 (or 1/2): The event has an equal chance of happening or not happening

The fundamental formula for probability is:

P(Event) = Number of favorable outcomes / Total number of possible outcomes

## Key Probability Concepts 📌

### 1. Sample Space (S) 🌐
The sample space is the set of all possible outcomes of an experiment.

**Example**: When rolling a fair six-sided die, the sample space S = {1, 2, 3, 4, 5, 6}.

### 2. Event (E) 🎯
An event is a subset of the sample space, representing a specific outcome or group of outcomes.

**Example**: When rolling a die, the event "getting an even number" is E = {2, 4, 6}.

### 3. Probability Formula ➗
For an event E in a sample space S with equally likely outcomes:

P(E) = n(E) / n(S)

Where n(E) is the number of favorable outcomes and n(S) is the total number of possible outcomes.

## Types of Simple Probability Problems 📝

### 1. Coin Problems 🪙

A fair coin has two equally likely outcomes: Heads (H) or Tails (T).
- P(Heads) = P(Tails) = 1/2

**Example 1**: If we toss three coins, what is the probability of getting exactly two heads?
- Sample space: {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT}
- Favorable outcomes: {HHT, HTH, THH}
- P(exactly two heads) = 3/8

**Example 2**: If four coins are tossed, what is the probability of getting at least one head?
- P(at least one head) = 1 - P(no heads)
- P(no heads) = (1/2)⁴ = 1/16
- P(at least one head) = 1 - 1/16 = 15/16

### 2. Dice Problems 🎲

A fair die has six equally likely outcomes: 1, 2, 3, 4, 5, and 6.
- P(any one number) = 1/6

**Example 1**: When rolling a die once, what is the probability of getting a number greater than 4?
- Favorable outcomes: {5, 6}
- P(number > 4) = 2/6 = 1/3

**Example 2**: When rolling two dice, what is the probability of getting a sum of 7?
- Total outcomes: 6 × 6 = 36
- Favorable outcomes: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)
- P(sum = 7) = 6/36 = 1/6

### 3. Card Problems 🃏

A standard deck has 52 cards:
- 4 suits (hearts ♥, diamonds ♦, clubs ♣, spades ♠)
- Each suit has 13 cards (Ace, 2-10, Jack, Queen, King)

**Example 1**: What is the probability of drawing a king from a well-shuffled deck?
- Favorable outcomes: 4 kings
- P(king) = 4/52 = 1/13

**Example 2**: What is the probability of drawing a heart or an ace from a well-shuffled deck?
- Hearts: 13 cards
- Aces: 4 cards
- Heart ace: 1 card (counted twice)
- P(heart or ace) = (13 + 4 - 1)/52 = 16/52 = 4/13

### 4. Ball Selection Problems 🔴🔵

These involve selecting balls of different colors from bags or urns.

**Example 1**: A bag contains 5 red balls and 7 blue balls. If a ball is drawn at random, what is the probability of getting a red ball?
- P(red ball) = 5/12

**Example 2**: A box has 3 green and 2 yellow balls. If two balls are drawn without replacement, what is the probability of getting both green?
- P(both green) = (3/5) × (2/4) = 6/20 = 3/10

## Probability Rules and Techniques 📚

### 1. Addition Rule 🔢

For two events A and B:
- P(A or B) = P(A) + P(B) - P(A and B)

**Example**: What is the probability of drawing a king or a heart from a deck of cards?
- P(king) = 4/52
- P(heart) = 13/52
- P(king of hearts) = 1/52
- P(king or heart) = 4/52 + 13/52 - 1/52 = 16/52 = 4/13

### 2. Multiplication Rule 🧮

For independent events A and B:
- P(A and B) = P(A) × P(B)

**Example**: When tossing a coin and rolling a die, what is the probability of getting a head and a 6?
- P(head) = 1/2
- P(6) = 1/6
- P(head and 6) = 1/2 × 1/6 = 1/12

### 3. Complementary Events 🔄

For an event A:
- P(not A) = 1 - P(A)

**Example**: If the probability of rain tomorrow is 0.3, what is the probability it will not rain?
- P(not rain) = 1 - 0.3 = 0.7

## Solving Probability Problems: Step-by-Step Approach 📋

1. **Identify the experiment and sample space** 🧪
   Understand what's happening and list all possible outcomes.

2. **Define the event of interest** 🎯
   Clearly state what outcomes count as "success."

3. **Count favorable outcomes and total outcomes** 🔢
   How many ways can the event occur? How many total possibilities exist?

4. **Apply the probability formula** ➗
   P(Event) = Number of favorable outcomes / Total number of possible outcomes

5. **Use probability rules when needed** 📊
   For complex problems, apply addition, multiplication rules, or complementary events.

## Common Applications of Probability 🌍

1. **Games of chance**: Casino games, lotteries, board games 🎮
2. **Weather forecasting**: Predicting rain, storms, temperatures ☔
3. **Insurance**: Calculating risk and setting premiums 📝
4. **Medical testing**: Determining accuracy of diagnostic tests 🩺
5. **Quality control**: Checking product reliability in manufacturing 🏭
6. **Decision making**: Assessing risks in business and everyday life 💼

## Practice Problems 🏋️‍♂️

### Problem 1
A box contains 25 bulbs, of which 5 are defective. If 2 bulbs are selected at random without replacement, what is the probability that both are good?

**Solution**:
- Total bulbs = 25
- Good bulbs = 20
- P(both good) = (20/25) × (19/24) = 0.8 × 0.79 = 0.632

### Problem 2
Three cards are drawn from a well-shuffled deck. What is the probability of drawing 3 aces?

**Solution**:
- P(3 aces) = (⁴C₃)/(⁵²C₃) = 4/(52×51×50/6) = 4/22100 = 1/5525

### Problem 3
If the probability that it will rain tomorrow is 0.4, what is the probability that it will rain exactly once in the next 3 days, assuming the weather conditions for each day are independent?

**Solution**:
- P(rain on 1 day) = ³C₁ × 0.4¹ × 0.6² = 3 × 0.4 × 0.36 = 0.432

## Tips for Solving Probability Problems 💡

1. **Draw diagrams** when appropriate to visualize the problem 📊
2. **Organize outcomes** using tables, lists, or tree diagrams 🌳
3. **Simplify fractions** in your final answer ➗
4. **Check your answer** – probability should always be between 0 and 1 ✓
5. **Use logical reasoning** to verify if your answer makes sense 🤔

## Summary ✨

Probability provides us with a mathematical framework to analyze random phenomena and make predictions about uncertain events. The key to solving simple probability problems is:

1. Understand the basic probability formula: P(Event) = Favorable outcomes / Total outcomes
2. Identify the sample space and the event of interest
3. Count outcomes correctly (sometimes using combinatorial techniques)
4. Apply probability rules for complex scenarios
5. Practice regularly with different types of problems

By mastering these simple probability problems, you're building a foundation for more advanced statistical analysis and developing critical thinking skills that apply across many fields! 🚀

### Bonus Example: A Real-Life Application 🌟

A weather forecast says there's a 20% chance of rain on Saturday and a 30% chance on Sunday. Assuming the days are independent, what is the probability that:

1. It will rain on both days?
   P(rain both days) = 0.2 × 0.3 = 0.06 or 6%

2. It will rain on at least one of these days?
   P(rain at least one day) = 1 - P(no rain either day)
   = 1 - (0.8 × 0.7)
   = 1 - 0.56
   = 0.44 or 44%

3. It will rain exactly one day?
   P(exactly one day) = P(Saturday only) + P(Sunday only)
   = 0.2 × 0.7 + 0.8 × 0.3
   = 0.14 + 0.24
   = 0.38 or 38%
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
