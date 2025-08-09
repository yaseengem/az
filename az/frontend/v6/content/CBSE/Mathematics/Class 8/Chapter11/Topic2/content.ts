import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl8_ch11_t2',
    topicNumber: 2,
    topicName: "Understanding inverse proportion",
    duration: 45,
    description: "Learn about inverse proportion, its properties, and real-life applications with examples and problem-solving techniques.",
    explanation: `
# Understanding Inverse Proportion 📊

Inverse proportion is a mathematical relationship between two quantities where an increase in one quantity leads to a proportional decrease in the other quantity. Let's explore this important concept in detail! 🎯

## What is Inverse Proportion? 🤔

Two quantities are said to be in inverse proportion when:
- As one quantity increases, the other quantity decreases in the same ratio
- As one quantity decreases, the other quantity increases in the same ratio
- If one quantity becomes n times, the other quantity becomes 1/n times
- The product of corresponding values remains constant

## Mathematical Representation 📝

If x and y are in inverse proportion:
- We write it as y ∝ 1/x (read as "y is inversely proportional to x")
- This can be written as xy = k, where k is the constant of proportionality
- The product xy is always constant (= k)
- When plotted on a graph, it gives a hyperbola

## Key Properties of Inverse Proportion ⭐

1. **Constant Product**: 
   - The product of corresponding values is always constant
   - If x₁y₁ = k, then x₂y₂ = k for any corresponding values

2. **Reciprocal Change**:
   - If one quantity becomes n times, the other becomes 1/n times
   - Example: If x doubles, y becomes half

3. **Graphical Representation**:
   - The graph is a hyperbola
   - Never touches the axes (asymptotic)
   - Always in the first and third quadrants for positive values

## Real-Life Examples 🌟

1. **Speed and Time (for fixed distance)** 🚗
   - Speed is inversely proportional to time taken
   - If a car covers 120 km:
     * At 60 km/h, it takes 2 hours
     * At 40 km/h, it takes 3 hours
     * At 30 km/h, it takes 4 hours

2. **Number of Workers and Time** 👷
   - Time taken is inversely proportional to number of workers
   - If 12 workers take 10 days:
     * 6 workers will take 20 days
     * 24 workers will take 5 days
     * 15 workers will take 8 days

3. **Pressure and Volume (Boyle's Law)** 🌡️
   - Pressure is inversely proportional to volume at constant temperature
   - If pressure is 2 atm at 5 L:
     * At 10 L, pressure becomes 1 atm
     * At 2.5 L, pressure becomes 4 atm

4. **Light Intensity and Distance** 💡
   - Light intensity is inversely proportional to square of distance
   - If intensity is I at distance d:
     * At distance 2d, intensity becomes I/4
     * At distance 3d, intensity becomes I/9

## How to Solve Inverse Proportion Problems 🎯

Follow these steps to solve inverse proportion problems:

1. **Identify the Relationship**
   - Check if quantities increase/decrease inversely
   - Verify if their product is constant

2. **Write the Equation**
   - Use x₁y₁ = x₂y₂
   - Or use k = xy to find unknown values

3. **Solve for Unknown**
   - Cross multiply if using ratios
   - Use the constant k to find values

### Example Problem 1: 📝
If 8 workers can complete a task in 12 days, how many days will 24 workers take?
- Let w = workers, d = days
- w₁d₁ = w₂d₂
- 8 × 12 = 24 × x
- x = (8 × 12) ÷ 24 = 4 days

### Example Problem 2: ⚖️
If pressure is 300 kPa when volume is 4 m³, what is the pressure at 6 m³?
- P₁V₁ = P₂V₂
- 300 × 4 = x × 6
- x = (300 × 4) ÷ 6 = 200 kPa

## Common Applications in Daily Life 🌍

1. **Resource Management** 📊
   - Distributing work among people
   - Allocating time for tasks
   - Planning project schedules

2. **Physics Applications** 🔬
   - Gas laws (Boyle's Law)
   - Light intensity calculations
   - Sound intensity variations

3. **Engineering** ⚙️
   - Gear ratios
   - Pulley systems
   - Electrical circuits (voltage/current)

4. **Economics** 💰
   - Supply and demand relationships
   - Production planning
   - Resource allocation

## Tips for Working with Inverse Proportion 💡

1. **Check the Relationship**
   - Verify if it's truly inverse proportion
   - Look for constant product pattern

2. **Use Tables**
   - Organize data in tables
   - Check if products are constant

3. **Draw Graphs**
   - Helps visualize the relationship
   - Confirms inverse pattern

4. **Cross-Check Results**
   - Verify if answer makes logical sense
   - Check if product remains constant

## Common Mistakes to Avoid ⚠️

1. **Confusing with Direct Proportion**
   - In direct proportion, ratios are equal
   - In inverse proportion, products are equal

2. **Forgetting Units**
   - Always use consistent units
   - Convert units before calculations

3. **Incorrect Cross Multiplication**
   - Be careful with equation setup
   - Double-check your calculations

## Practice Tips 📚

1. **Start Simple**
   - Begin with basic problems
   - Gradually increase complexity

2. **Use Real-Life Examples**
   - Connect to daily situations
   - Makes concept more relatable

3. **Regular Practice**
   - Solve varied problems
   - Focus on application-based questions

## Summary ✨

Inverse proportion is when:
- One quantity increases as other decreases proportionally
- Product of corresponding values is constant
- Graph is a hyperbola
- Common in many real-world applications

Key points to remember:
- xy = k (constant)
- If x → nx, then y → y/n
- Check for constant product
- Verify units and calculations

## Practice Problems 📝

1. If 15 workers can build a wall in 10 days, how many workers needed for 6 days?
2. A car travels 300 km at 50 km/h. How long at 75 km/h?
3. If pressure is 400 kPa at 3 m³, what's the volume at 600 kPa?

Remember: In inverse proportion, as one quantity changes, the other changes in the opposite way, keeping their product constant! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 