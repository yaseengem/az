import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl8_ch1_t3',
    topicNumber: 3,
    topicName: "Representation on the number line",
    duration: 45,
    description: "Learn how to represent rational numbers on a number line and understand their properties through visual representation.",
    explanation: `
# Representation of Numbers on a Number Line 📏

A number line is a powerful visual tool that helps us understand numbers and their relationships. It's like a straight line that extends infinitely in both directions, with numbers marked at regular intervals. Let's explore how different types of numbers are represented on a number line! 🎯

## Basic Concepts of a Number Line 📊

### What is a Number Line?
- A straight line with equally spaced points
- Has an arrow on both ends showing it extends infinitely
- Has a special point marked as zero (0), called the origin
- Numbers increase as we move right and decrease as we move left
- Each point on the line represents a unique number

### Key Features 🔑
1. **Direction**:
   - Moving right means adding (positive direction)
   - Moving left means subtracting (negative direction)
   
2. **Unit Distance**:
   - The distance between any two consecutive whole numbers is 1 unit
   - This unit distance is used as a reference for measuring other distances

3. **Symmetry**:
   - Numbers are symmetrically placed around zero
   - For every number n, its opposite (-n) is the same distance from zero but on the opposite side

## Representing Different Types of Numbers 🔢

### 1. Natural Numbers (ℕ)
- Marked at positive whole number points: 1, 2, 3, ...
- Each point is one unit apart
- Example: To mark 5, count 5 units right from 0

### 2. Whole Numbers (𝕎)
- Includes zero and natural numbers: 0, 1, 2, 3, ...
- Zero is the origin point
- All points are equally spaced

### 3. Integers (ℤ)
- Includes negative numbers, zero, and positive numbers: ..., -3, -2, -1, 0, 1, 2, 3, ...
- Negative numbers are to the left of zero
- Equal spacing between consecutive integers
- Example: -4 is 4 units left of 0

### 4. Fractions and Decimals 🎯
- Can be marked by dividing unit intervals
- For example:
  * ½ is halfway between 0 and 1
  * ¾ is three-fourths of the way from 0 to 1
  * -1½ is halfway between -1 and -2
- Decimals can be marked similarly:
  * 0.5 is the same as ½
  * 2.75 is the same as 2¾

## Methods for Marking Points 📌

### 1. Using Unit Fractions
1. Identify the unit interval
2. Divide it into equal parts based on the denominator
3. Count the required number of parts (numerator)

Example: To mark ⅔
- Divide the interval between 0 and 1 into 3 equal parts
- Count 2 parts from 0

### 2. Using Mixed Numbers
1. First mark the whole number part
2. Then mark the fractional part in the next unit interval

Example: To mark 2¾
- Start at 2
- In the next unit interval (2 to 3), mark ¾ of the way

### 3. Using Decimals
1. Identify the whole number part
2. Use the decimal part to find the position between whole numbers

Example: To mark 3.6
- Start at 3
- Move 0.6 units (or ⅗ of a unit) towards 4

## Properties and Applications 🧮

### 1. Distance Between Points
- Distance = |Point 2 - Point 1|
- Always positive
- Example: Distance between -3 and 2 is |2 - (-3)| = |2 + 3| = 5 units

### 2. Midpoint
- Halfway between two points
- Midpoint = (a + b) ÷ 2
- Example: Midpoint of -2 and 4 is (-2 + 4) ÷ 2 = 1

### 3. Division of Line Segments
- Internal division: Point lies between endpoints
- External division: Point lies outside endpoints
- Ratio formula: P = (a × n + b × m) ÷ (m + n) for m:n ratio

## Practical Tips for Drawing Number Lines ✏️

1. **Start with Zero**:
   - Mark 0 clearly
   - This is your reference point

2. **Choose Appropriate Scale**:
   - Make unit intervals equal
   - Choose a scale that fits your numbers
   - Example: If dealing with large numbers, 1 unit could represent 10 or 100

3. **Label Clearly**:
   - Mark important points
   - Include negative signs where needed
   - Use arrows to show the line continues

4. **Check Symmetry**:
   - Verify opposite numbers are equidistant from zero
   - Use this to check your work

## Common Applications 🌟

1. **Temperature Scale**:
   - Negative and positive temperatures
   - Zero as freezing point
   - Example: -5°C is 5 units left of 0°C

2. **Money and Banking**:
   - Positive balances and debits (negative)
   - Zero as neutral point
   - Example: -₹500 represents a debt

3. **Elevation and Depth**:
   - Sea level as zero
   - Heights above (positive)
   - Depths below (negative)

## Summary ✨

The number line is a fundamental tool in mathematics that helps us:
- Visualize numbers and their relationships
- Compare numbers easily
- Understand distance and direction
- Represent all types of real numbers
- Solve problems involving measurements and calculations

Remember:
- Every point represents a unique number
- Distance between points is always positive
- Moving right means increasing
- Moving left means decreasing
- Equal intervals represent equal differences

Practice regularly with different types of numbers to become comfortable with this essential mathematical tool! 🎯

### Sample Questions to Try:
1. Mark the points -2.5, 0, and 3.75 on a number line
2. Find the distance between -3 and 4
3. Locate the midpoint of -1 and 5
4. Divide the segment between 2 and 8 in the ratio 2:3

Keep exploring and practicing with number lines - they're a powerful way to understand numbers and their relationships! 🚀
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 