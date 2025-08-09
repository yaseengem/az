import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl6_ch12_t2',
    topicNumber: 2,
    topicName: "Unitary Method",
    duration: 45,
    description: "Understanding and applying the unitary method to solve problems involving direct and inverse proportion",
    explanation: `
# Unitary Method: Solving Problems with Proportions 📊

Welcome to the world of the unitary method! 🌟 This powerful mathematical tool helps us solve real-life problems by finding the value of a single unit first. Let's explore how this method works and how we can use it in our daily lives! 🚀

## What is the Unitary Method? 🤔

The unitary method is a mathematical technique where we:
1. Find the value of one unit (single item)
2. Use this value to find the value of multiple units

It's like building a bridge from what we know to what we want to find out! 🌉

## Types of Problems We Can Solve 🎯

### 1. Direct Proportion Problems 📈
When quantities increase or decrease together:
- If 5 pens cost ₹50, what is the cost of 8 pens?
- If a car travels 120 km in 2 hours, how far will it travel in 5 hours?

### 2. Inverse Proportion Problems 📉
When one quantity increases while the other decreases:
- If 6 workers can build a wall in 8 days, how many days will 4 workers take?
- If a car travels 60 km/h to cover 120 km in 2 hours, how fast should it go to cover the same distance in 1.5 hours?

## Step-by-Step Approach 📝

### Step 1: Identify What We Know
- Write down the given information
- Identify what we need to find

### Step 2: Find the Value of One Unit
- Divide the given quantity by the number of units
- This gives us the value of one unit

### Step 3: Find the Required Value
- Multiply the value of one unit by the required number of units

## Examples with Solutions 📚

### Example 1: Direct Proportion
**Problem**: If 4 notebooks cost ₹80, what is the cost of 7 notebooks?

**Solution**:
1. Cost of 4 notebooks = ₹80
2. Cost of 1 notebook = ₹80 ÷ 4 = ₹20
3. Cost of 7 notebooks = ₹20 × 7 = ₹140

### Example 2: Inverse Proportion
**Problem**: If 8 workers can complete a job in 6 days, how many days will 12 workers take?

**Solution**:
1. 8 workers take 6 days
2. 1 worker would take 6 × 8 = 48 days
3. 12 workers would take 48 ÷ 12 = 4 days

## Real-Life Applications 🌍

1. **Shopping and Budgeting** 🛍️
   - Calculating cost of multiple items
   - Comparing prices of different quantities

2. **Time and Work** ⏱️
   - Estimating completion time with different number of workers
   - Planning project timelines

3. **Speed and Distance** 🚗
   - Calculating travel time
   - Determining speed requirements

4. **Recipes and Cooking** 🍳
   - Adjusting ingredient quantities
   - Scaling up or down recipes

## Common Mistakes to Avoid ❌

1. **Mixing Direct and Inverse Proportion** 🔄
   - Always identify if the problem is direct or inverse proportion
   - Use the correct method accordingly

2. **Unit Confusion** 📏
   - Ensure all quantities are in the same units
   - Convert units if necessary before calculations

3. **Order of Operations** 🧮
   - Follow the correct sequence: find one unit first, then multiply
   - Don't skip steps or do operations in wrong order

## Practice Problems 🏋️‍♀️

1. **Problem**: If 5 kg of rice costs ₹250, what is the cost of 8 kg?
   - **Solution**: ₹400 (₹50 per kg × 8 kg)

2. **Problem**: If a car travels 180 km in 3 hours, how far will it travel in 5 hours?
   - **Solution**: 300 km (60 km/h × 5 hours)

3. **Problem**: If 6 workers can build a wall in 10 days, how many days will 4 workers take?
   - **Solution**: 15 days (60 worker-days ÷ 4 workers)

## Summary ✨

The unitary method is a powerful tool that helps us:
- Solve real-life problems efficiently
- Understand relationships between quantities
- Make better decisions in daily life
- Calculate costs, time, and quantities accurately

Remember:
1. Find the value of one unit first
2. Use this value to find the required quantity
3. Pay attention to whether the problem involves direct or inverse proportion
4. Always check your units and calculations

### Additional Examples and Sample Questions:

1. **Example**: If 3 pens cost ₹45, what is the cost of 7 pens? (Answer: ₹105)

2. **Example**: If a train travels 240 km in 4 hours, how far will it travel in 6 hours? (Answer: 360 km)

3. **Question**: If 5 workers can complete a job in 8 days, how many days will 10 workers take? (Answer: 4 days)

4. **Question**: If 4 kg of sugar costs ₹160, what is the cost of 9 kg? (Answer: ₹360)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
