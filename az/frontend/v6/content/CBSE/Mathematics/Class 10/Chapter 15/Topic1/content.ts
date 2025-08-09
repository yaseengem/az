import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl10_ch15_t1',
  topicNumber: 1,
  topicName: "Experimental Probability",
  duration: 45,
  description: "Understanding probability through experiments, empirical probability calculation, and comparison with theoretical probability.",
  explanation: `
# Experimental Probability 🎲

## Introduction to Experimental Probability 🔍

Probability is all about measuring the likelihood of events occurring. While theoretical probability uses mathematical formulas to calculate chances, **experimental probability** (also called empirical probability) is based on actual experiments or observations. It's probability in action! 🧪

Let's dive into this fascinating topic that connects mathematics with real-world experiments and data collection.

## What is Experimental Probability? 📊

**Experimental probability** is the ratio of the number of times an event occurs to the total number of trials or observations.

**Formula:**
P(Event) = Number of times the event occurs / Total number of trials

This is different from theoretical probability, which is calculated based on the possible outcomes without actually conducting experiments.

### Example 1: Coin Toss 🪙
Imagine tossing a coin 50 times and observing heads 28 times.
- Experimental probability of heads = 28/50 = 0.56 or 56%
- Theoretical probability of heads = 1/2 = 0.5 or 50%

The slight difference between the experimental (0.56) and theoretical (0.5) probability is normal and expected in real experiments!

## Conducting Probability Experiments 🔬

To find experimental probability, we follow these steps:

1. Define the experiment clearly.
2. Identify the event of interest.
3. Conduct the experiment many times.
4. Record the number of times the event occurs.
5. Divide this number by the total number of trials.

### Example 2: Rolling a Die 🎯
Rahul rolled a die 120 times and recorded these results:
- Number 1: 18 times
- Number 2: 22 times
- Number 3: 18 times
- Number 4: 21 times
- Number 5: 19 times
- Number 6: 22 times

Let's calculate some experimental probabilities:
- P(getting a 3) = 18/120 = 0.15 or 15%
- P(getting an even number) = (22 + 21 + 22)/120 = 65/120 ≈ 0.542 or 54.2%
- P(getting a number greater than 4) = (19 + 22)/120 = 41/120 ≈ 0.342 or 34.2%

## Comparing Experimental and Theoretical Probability 🧮

Theoretical probability is based on analyzing all possible outcomes mathematically. In contrast, experimental probability reflects what actually happens in experiments.

### Example 3: Card Drawing 🃏
Theoretical probability of drawing a heart from a deck = 13/52 = 1/4 = 0.25
If we draw a card 40 times (with replacement) and get hearts 12 times:
- Experimental probability = 12/40 = 0.3

### Why are they different? 🤔
- **Sample size**: With smaller numbers of trials, experimental results may vary significantly from theoretical expectations.
- **Random variation**: Pure chance can cause deviations.
- **Bias**: Experimental setups might have hidden biases (like slightly uneven dice or imperfect shuffling).

### The Law of Large Numbers 📈
As we increase the number of trials, the experimental probability tends to get closer to the theoretical probability. This mathematical principle is called the "Law of Large Numbers."

If you toss a fair coin:
- 10 times: Might get 7 heads (experimental P = 0.7)
- 100 times: Might get 54 heads (experimental P = 0.54)
- 1,000 times: Might get 502 heads (experimental P = 0.502)
- 10,000 times: Might get 5,013 heads (experimental P = 0.5013)

See how it gets closer to 0.5 as trials increase? That's the Law of Large Numbers in action! 🌟

## Applications of Experimental Probability 🌍

### Weather Forecasting ☂️
Meteorologists use historical weather data to predict the probability of rain. If it rained on 30 days out of the last 100 days with similar conditions, they might say "30% chance of rain."

### Medical Studies 💉
If 85 out of 100 patients recover after taking a new medicine, doctors might say there's an 85% probability of recovery with this treatment.

### Quality Control 🏭
If 8 out of 1,000 manufactured items are defective, the company uses this 0.8% defect rate to improve processes and predict future outcomes.

### Sports Analysis ⚽
A football team that has won 25 of its last 50 home games has an experimental probability of 0.5 (or 50%) for winning its next home game.

### Insurance Calculations 📋
Insurance companies analyze accident data to determine premiums. If 120 out of 10,000 drivers in a certain age group had accidents last year, they estimate a 1.2% probability.

## Experimental Probability in Daily Life 🏠

We use experimental probability in our daily decisions more than we realize:

1. **Route planning**: "This route had less traffic 7 out of 10 times I tried it."
2. **Shopping decisions**: "This brand of milk lasted longer 4 out of 5 times."
3. **Time management**: "It took me more than 30 minutes to reach school 3 out of 5 days last week."

### Example 4: Restaurant Decision 🍽️
Maya tried a new restaurant 6 times and enjoyed her meal 5 times.
- Experimental probability of enjoying a meal there = 5/6 ≈ 0.83 or 83%
- She might use this information to decide whether to go there again or recommend it to friends.

## Finding Expected Values Using Experimental Probability 🧠

We can use experimental probability to predict the expected number of occurrences in future trials.

**Formula:**
Expected number = Probability × Number of trials

### Example 5: Production Planning 📦
A factory finds that 3% of its products have minor defects based on examining 500 units.
- Experimental probability of defect = 15/500 = 0.03
- If they produce 10,000 units, expected number of defective units = 0.03 × 10,000 = 300 units

## Conducting Your Own Probability Experiments 🔍

Here are some simple experiments you can conduct:

1. **Coin experiment**: Toss a coin 100 times and record heads/tails.
2. **Dice experiment**: Roll a die 60 times and record how many times each number appears.
3. **Card experiment**: Draw cards with replacement from a deck and track how many times you draw specific cards or suits.
4. **Spinner experiment**: Create a spinner with uneven sections and observe where it lands.

### Tips for Good Experiments:
- Use a large number of trials for more reliable results.
- Record data carefully and accurately.
- Be consistent with your experimental technique.
- Compare your experimental results with theoretical expectations.

## Common Mistakes to Avoid ⚠️

1. **Small sample size**: Using too few trials can give misleading results.
2. **Confusing experimental and theoretical probability**: Remember they are calculated differently.
3. **Ignoring bias**: Not accounting for experimental setup issues.
4. **Improper recording**: Errors in data collection affect results.
5. **Overgeneralizing**: Applying probability from one experiment to very different situations.

## Sample Questions with Solutions 📝

**Question 1**: A die is rolled 50 times with these results: 1(9 times), 2(8 times), 3(7 times), 4(10 times), 5(8 times), 6(8 times). Find the experimental probability of getting:
a) A number less than 3
b) An even number
c) A prime number

**Solution**:
a) P(number < 3) = (9 + 8)/50 = 17/50 = 0.34 or 34%
b) P(even number) = (8 + 10 + 8)/50 = 26/50 = 0.52 or 52%
c) P(prime number) = (7 + 8 + 8)/50 = 23/50 = 0.46 or 46%
   (Prime numbers on die are 2, 3, 5)

**Question 2**: In a cricket match, a batsman hit a boundary 24 times out of 150 balls faced. What is the experimental probability that he will hit a boundary on the next ball?

**Solution**: 
P(boundary) = 24/150 = 0.16 or 16%

## Summary ✨

- **Experimental probability** is based on actual observations or experiment results.
- Formula: P(Event) = Number of times event occurs / Total number of trials
- As the number of trials increases, experimental probability tends to approach theoretical probability.
- Experimental probability has many real-world applications in weather prediction, quality control, insurance, and more.
- Expected values can be calculated by multiplying probability by the number of trials.

Experimental probability bridges the gap between mathematical theory and real-world observations, making probability a practical tool for decision-making and predictions. It reminds us that while mathematics gives us theoretical frameworks, real-world data and experiments provide the evidence we need to apply these concepts effectively. 🌟

### Additional Practice:
Try conducting your own probability experiments at home with coins, dice, or cards, and compare your results with theoretical expectations. This hands-on experience will deepen your understanding of experimental probability and its relationship to theoretical probability!
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
