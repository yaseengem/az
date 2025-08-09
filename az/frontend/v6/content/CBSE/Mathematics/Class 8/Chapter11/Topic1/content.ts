import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl8_ch11_t1',
    topicNumber: 1,
    topicName: "Understanding direct proportion",
    duration: 45,
    description: "Learn about direct proportion, its properties, and real-life applications with examples and problem-solving techniques.",
    explanation: `
# Understanding Direct Proportion 📈

Direct proportion is a fundamental mathematical concept that describes a relationship between two quantities where one quantity increases (or decreases) in the exact same ratio as the other quantity. Let's explore this concept in detail! 🎯

## What is Direct Proportion? 🤔

Two quantities are said to be in direct proportion when:
- As one quantity increases, the other quantity increases in the same ratio
- As one quantity decreases, the other quantity decreases in the same ratio
- If one quantity becomes n times, the other quantity also becomes n times
- The ratio of corresponding values remains constant

## Mathematical Representation 📝

If x and y are in direct proportion:
- We write it as y ∝ x (read as "y is directly proportional to x")
- This can be written as y = kx, where k is the constant of proportionality
- The ratio y/x is always constant (= k)
- When plotted on a graph, it gives a straight line passing through the origin (0,0)

## Key Properties of Direct Proportion ⭐

1. **Zero Property**: 
   - If one quantity is zero, the other quantity must also be zero
   - This is why the graph passes through the origin

2. **Constant Ratio**:
   - The ratio between corresponding values is always constant
   - For example, if y ∝ x and y = 15 when x = 3, then y/x = 5 for all values

3. **Multiplication Property**:
   - If one quantity is multiplied by a number, the other quantity gets multiplied by the same number
   - Example: If distance ∝ time, and distance doubles, time also doubles

## Real-Life Examples 🌟

1. **Distance and Time (at constant speed)** 🚗
   - Distance covered is directly proportional to time taken
   - If a car travels 60 km in 2 hours, it will travel:
     * 90 km in 3 hours
     * 120 km in 4 hours
     * 30 km in 1 hour

2. **Cost and Quantity (at fixed price)** 💰
   - Cost is directly proportional to quantity purchased
   - If 5 pencils cost ₹25:
     * 10 pencils will cost ₹50
     * 15 pencils will cost ₹75
     * 1 pencil will cost ₹5

3. **Radius and Circumference of a Circle** ⭕
   - Circumference is directly proportional to radius
   - C = 2πr, where k = 2π is the constant of proportionality
   - If radius doubles, circumference doubles

4. **Weight and Volume (of same material)** ⚖️
   - Weight is directly proportional to volume for the same material
   - If 100 cm³ of iron weighs 785 grams:
     * 200 cm³ will weigh 1570 grams
     * 50 cm³ will weigh 392.5 grams

## How to Solve Direct Proportion Problems 🎯

Follow these steps to solve direct proportion problems:

1. **Identify the Relationship**
   - Check if quantities increase or decrease together
   - Verify if zero in one quantity means zero in other

2. **Write the Proportion**
   - Use the symbol ∝ or equation y = kx
   - Find the constant k using given values

3. **Apply the Proportion**
   - Use the constant to find unknown values
   - Cross multiply if using ratios

### Example Problem 1: 📝
If 6 workers can complete a task in 4 days, how many workers are needed to complete it in 3 days?
- Let w = number of workers, d = number of days
- w × d = constant (work done is constant)
- 6 × 4 = w × 3
- w = (6 × 4) ÷ 3 = 8 workers

### Example Problem 2: 🎨
If 2.5 liters of paint covers 10 square meters, how much paint is needed for 16 square meters?
- Let p = paint quantity, a = area
- p ∝ a
- 2.5/10 = x/16
- x = (2.5 × 16) ÷ 10 = 4 liters

## Common Applications in Daily Life 🌍

1. **Shopping and Costs** 🛒
   - Price calculations for bulk purchases
   - Discount calculations
   - Unit price comparisons

2. **Cooking and Recipes** 👩‍🍳
   - Scaling recipes up or down
   - Ingredient proportions
   - Serving size adjustments

3. **Travel Planning** ✈️
   - Distance and time calculations
   - Fuel consumption estimates
   - Speed calculations

4. **Construction and Design** 🏗️
   - Scale drawings and models
   - Material quantity calculations
   - Time and labor estimates

## Tips for Working with Direct Proportion 💡

1. **Always check units**
   - Make sure you're comparing quantities in the same units
   - Convert units if necessary before calculations

2. **Use the unitary method**
   - Find the value for one unit first
   - Then multiply to get the required value

3. **Look for the constant**
   - The ratio between corresponding values should be constant
   - Use this to verify if it's direct proportion

4. **Draw a graph**
   - Direct proportion always gives a straight line through origin
   - Use this to visualize the relationship

## Summary ✨

Direct proportion is a fundamental concept where:
- Two quantities increase or decrease in the same ratio
- Can be written as y ∝ x or y = kx
- The ratio between corresponding values is constant
- Graphs as a straight line through the origin

Understanding direct proportion helps in:
- Problem-solving in mathematics
- Real-world applications
- Making calculations easier
- Understanding relationships between quantities

## Practice Problems 📝

1. If 3 kg of apples cost ₹180, find the cost of 5 kg.
2. A car travels 240 km in 4 hours. How far will it travel in 7 hours?
3. If 8 workers can complete a job in 15 days, how many workers are needed to complete it in 10 days?

Remember: Direct proportion is all about maintaining the same ratio between quantities. When you understand this basic principle, solving problems becomes much easier! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 