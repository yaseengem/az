import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl8_ch11_t3',
    topicNumber: 3,
    topicName: "Solving related problems",
    duration: 45,
    description: "Learn to solve real-world problems involving direct and inverse proportions using various methods and strategies",
    explanation: `
# Solving Problems with Direct and Inverse Proportion 🧮

Welcome to an exciting journey of problem-solving using direct and inverse proportions! In this topic, we'll learn how to apply these concepts to solve real-world problems. Let's dive in! 🚀

## Understanding the Problem-Solving Approach 📝

When solving problems involving proportion, follow these steps:
1. Identify whether it's a direct or inverse proportion
2. Write the relationship using variables
3. Set up the equation
4. Solve for the unknown value

## Direct Proportion Problems 📈

### Identifying Direct Proportion
Two quantities are in direct proportion if:
- As one quantity increases, the other also increases in the same ratio
- As one quantity decreases, the other also decreases in the same ratio
- Their ratio remains constant

### Method to Solve Direct Proportion Problems
If x ∝ y, then x/y = k (constant)
- Write x₁/y₁ = x₂/y₂
- Cross multiply: x₁y₂ = x₂y₁
- Solve for the unknown value

### Example 1: Cost and Quantity 💰
If 5 kg of rice costs ₹200, what is the cost of 8 kg?
- Let's solve step by step:
1. This is direct proportion (more quantity = more cost)
2. 5/200 = 8/x
3. 5x = 200 × 8
4. x = (200 × 8) ÷ 5 = ₹320

### Example 2: Distance and Time 🚗
A car travels 240 km in 4 hours. How far will it travel in 6 hours at the same speed?
1. Distance ∝ Time (at constant speed)
2. 240/4 = x/6
3. 240 × 6 = 4x
4. x = (240 × 6) ÷ 4 = 360 km

## Inverse Proportion Problems 📉

### Identifying Inverse Proportion
Two quantities are in inverse proportion if:
- As one quantity increases, the other decreases in the same ratio
- Their product remains constant

### Method to Solve Inverse Proportion Problems
If x ∝ 1/y, then xy = k (constant)
- Write x₁y₁ = x₂y₂
- Solve for the unknown value

### Example 3: Workers and Time 👷
If 12 workers can complete a task in 15 days, how many days will 20 workers take?
1. This is inverse proportion (more workers = less time)
2. 12 × 15 = 20 × x
3. x = (12 × 15) ÷ 20 = 9 days

### Example 4: Speed and Time ⏱️
A journey takes 6 hours at 40 km/h. How long will it take at 60 km/h?
1. Speed and time are inversely proportional
2. 40 × 6 = 60 × x
3. x = (40 × 6) ÷ 60 = 4 hours

## Complex Problems with Multiple Variables 🎯

Sometimes problems involve more than two variables. Here's how to handle them:

### Example 5: Workers, Hours, and Days 👥
If 15 workers working 8 hours a day can complete a task in 10 days, how many days will 20 workers take working 6 hours a day?
1. Set up the equation: 15 × 8 × 10 = 20 × 6 × x
2. Solve for x: x = (15 × 8 × 10) ÷ (20 × 6) = 10 days

### Tips for Complex Problems:
1. List all variables involved
2. Identify how each variable affects the result
3. Write the equation considering all relationships
4. Solve step by step

## Special Cases and Variations 🌟

### 1. Problems with Rates
When dealing with rates (like speed = distance/time):
- Distance ∝ Speed × Time
- Time ∝ Distance ÷ Speed

### Example 6: Rate Problems 🚶
A tap fills a tank in 12 hours. How long will it take for 3 similar taps?
1. Rate of filling ∝ Number of taps
2. Time ∝ 1/Number of taps
3. 12 × 1 = x × 3
4. x = 4 hours

### 2. Problems with Efficiency
When dealing with efficiency:
- Output ∝ Efficiency
- Time ∝ 1/Efficiency

### Example 7: Efficiency Problems ⚙️
If a machine working at 80% efficiency takes 10 hours for a job, how long will it take at 100% efficiency?
1. 80 × 10 = 100 × x
2. x = 8 hours

## Common Mistakes to Avoid ⚠️

1. **Wrong Identification**: Always check whether it's direct or inverse proportion
2. **Missing Units**: Keep track of units throughout the calculation
3. **Incomplete Information**: Make sure you have all necessary data
4. **Calculation Errors**: Double-check your arithmetic

## Real-World Applications 🌍

1. **Business**: 
   - Cost calculations
   - Production planning
   - Resource allocation

2. **Science**: 
   - Speed and time
   - Force and area
   - Pressure and volume

3. **Construction**: 
   - Labor planning
   - Material requirements
   - Time estimation

## Problem-Solving Strategies 🎯

1. **Draw a Diagram**: Visual representation helps understand relationships
2. **Make a Table**: Organize given information systematically
3. **Check Units**: Ensure consistency in units
4. **Verify Answer**: Check if your answer makes sense

## Practice Problems 📝

1. If 8 workers can build a wall in 15 days, how many workers are needed to build it in 5 days?
   - Solution: 8 × 15 = x × 5, so x = 24 workers

2. A car travels 300 km using 25 liters of petrol. How many liters are needed for 420 km?
   - Solution: 300/25 = 420/x, so x = 35 liters

## Summary ✨

1. **Direct Proportion**:
   - Ratio remains constant
   - Use x₁/y₁ = x₂/y₂

2. **Inverse Proportion**:
   - Product remains constant
   - Use x₁y₁ = x₂y₂

3. **Complex Problems**:
   - Consider all variables
   - Set up equations carefully
   - Solve step by step

4. **Key Points to Remember**:
   - Identify the type of proportion
   - Write the equation
   - Solve systematically
   - Verify the answer

Remember, practice is key to mastering these problems. Start with simple problems and gradually move to more complex ones. Good luck! 🌟
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 