import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl5_ch1_t2',
  topicNumber: 2,
  topicName: "Estimation and Rounding",
  duration: 45,
  description: "Learning to estimate and round numbers in practical situations like fish catch and boat capacity",
  explanation: `
# Estimation and Rounding 🔄

Welcome to the world of estimation and rounding! 🎯 In this topic, we'll learn how to make quick and smart calculations by estimating and rounding numbers. This is a super useful skill in real life, especially when dealing with large numbers! Let's dive in! 🚀

## What is Estimation? 🤔

Estimation is making a good guess about a number when we don't need the exact answer. It's like taking a quick look at something and saying "about this much" instead of counting every single thing.

### Why Do We Estimate? 💡
- To make quick calculations
- To check if our answers make sense
- When exact numbers aren't necessary
- To make mental math easier

## Rounding Numbers 🔢

Rounding is a special kind of estimation where we make numbers simpler by changing them to the nearest ten, hundred, or thousand.

### Rounding Rules 📝
1. Look at the digit to the right of where you want to round
2. If it's 5 or more, round up
3. If it's less than 5, round down

### Examples of Rounding 🎯
1. **Rounding to the nearest 10**:
   - 47 → 50 (because 7 is more than 5)
   - 42 → 40 (because 2 is less than 5)

2. **Rounding to the nearest 100**:
   - 378 → 400 (because 78 is more than 50)
   - 342 → 300 (because 42 is less than 50)

3. **Rounding to the nearest 1000**:
   - 2,678 → 3,000 (because 678 is more than 500)
   - 2,345 → 2,000 (because 345 is less than 500)

## Real-Life Examples 🎣

### Fish Catch Estimation
- A boat catches about 2,500 fish per trip
- Makes about 4 trips per day
- Estimated daily catch: 2,500 × 4 ≈ 10,000 fish

### Boat Capacity Estimation
- A boat can carry about 5,000 kg
- Each box weighs about 50 kg
- Estimated number of boxes: 5,000 ÷ 50 ≈ 100 boxes

## Estimation Strategies 🧠

### 1. Front-End Estimation
- Look at the first digit
- Example: 378 + 245 ≈ 300 + 200 = 500

### 2. Compatible Numbers
- Find numbers that are easy to work with
- Example: 48 × 5 ≈ 50 × 5 = 250

### 3. Rounding First
- Round numbers before calculating
- Example: 378 + 245 ≈ 400 + 200 = 600

## Sample Questions and Solutions 💡

1. **Question**: A fishing boat catches 2,378 fish. Round this to the nearest 100.
   **Solution**: 2,378 → 2,400 (because 78 is more than 50)

2. **Question**: Estimate the total weight if 48 boxes each weigh about 52 kg.
   **Solution**: 48 × 52 ≈ 50 × 50 = 2,500 kg

3. **Question**: A boat uses 378 liters of fuel per trip. Estimate the fuel needed for 5 trips.
   **Solution**: 378 × 5 ≈ 400 × 5 = 2,000 liters

## Practical Applications 🌟

### 1. Shopping and Money 💰
- Estimating total cost
- Checking if you have enough money
- Making quick price comparisons

### 2. Time Management ⏰
- Estimating how long tasks will take
- Planning schedules
- Meeting deadlines

### 3. Measurements 📏
- Estimating distances
- Guessing weights
- Approximating quantities

## Tips for Better Estimation 🎯

1. Practice mental math regularly
2. Use compatible numbers
3. Round to make calculations easier
4. Check if your estimate makes sense

## Summary ✨

In this topic, we learned:
- What estimation and rounding are
- Different strategies for estimation
- How to round numbers to different places
- Real-life applications of estimation

Remember, estimation is not about being exact - it's about being quick and reasonable! With practice, you'll get better at making good estimates.

### Additional Practice Questions 🏋️‍♀️

1. Round 5,678 to the nearest 100
2. Estimate 48 × 52 using compatible numbers
3. A boat catches about 2,300 fish per trip. Estimate the catch for 7 trips
4. If each fish weighs about 1.5 kg, estimate the total weight of 98 fish
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
}; 