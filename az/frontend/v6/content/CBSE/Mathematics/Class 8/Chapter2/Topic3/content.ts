import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl8_ch2_t3',
    topicNumber: 3,
    topicName: "Reducing equations to simpler forms",
    duration: 45,
    description: "Learn how to simplify linear equations by combining like terms, removing parentheses, and eliminating fractions and decimals to solve them efficiently.",
    explanation: `
# Reducing Equations to Simpler Forms 🔄

Welcome to an essential topic in algebra - reducing equations to simpler forms! This skill is crucial for solving equations efficiently and accurately. Let's explore the various techniques and strategies used to simplify equations. 📚

## Why Simplify Equations? 🤔

Before diving into the methods, let's understand why we need to simplify equations:
1. Makes solving easier and faster
2. Reduces chances of calculation errors
3. Helps identify patterns and relationships
4. Makes checking solutions simpler

## Key Techniques for Simplifying Equations 🛠️

### 1. Combining Like Terms ➕

Like terms are terms with the same variables raised to the same powers. For example:
- 2x and 5x are like terms
- 3 and 7 are like terms (constant terms)
- 2x² and 5x² are like terms

Example:
\`4x + 3 + 2x - 5\`
- Combine like terms with x: 4x + 2x = 6x
- Combine constant terms: 3 - 5 = -2
- Final result: 6x - 2

### 2. Removing Parentheses 📦

Use the distributive property to remove parentheses:
- For addition: 3(x + 2) = 3x + 6
- For subtraction: 3(x - 2) = 3x - 6
- With negative signs: -(x + 3) = -x - 3

Example:
\`2(3x - 4) + 5\`
1. Distribute 2: (6x - 8) + 5
2. Remove parentheses: 6x - 8 + 5
3. Combine constants: 6x - 3

### 3. Eliminating Fractions 🔢

To eliminate fractions:
1. Find the Least Common Denominator (LCD)
2. Multiply all terms by the LCD

Example:
\`x/2 + x/3 = 6\`
1. LCD = 6
2. Multiply all terms by 6:
   - 6(x/2) + 6(x/3) = 6(6)
   - 3x + 2x = 36
   - 5x = 36

### 4. Removing Decimals 🔍

To remove decimals:
1. Multiply all terms by an appropriate power of 10
2. Choose the power based on the most decimal places

Example:
\`0.2x + 0.05 = 1.5\`
1. Multiply by 100 (two decimal places):
   - 20x + 5 = 150

### 5. Organizing Terms 📋

General strategy for organizing terms:
1. Group variable terms on one side (usually left)
2. Group constant terms on the other side
3. Combine like terms on each side

Example:
\`3x + 2 = 5x - 8\`
1. Subtract 5x from both sides:
   - 3x - 5x + 2 = -8
   - -2x + 2 = -8
2. Subtract 2 from both sides:
   - -2x = -10
3. Divide by -2:
   - x = 5

## Special Cases to Watch For ⚠️

### 1. Equations with No Solution 🚫

Sometimes after simplifying, you get a false statement like:
\`3 = 5\`
This means the original equation has no solution.

Example:
\`x + 2 = x + 5\`
- Subtract x from both sides: 2 = 5
- This is false, so no solution exists

### 2. Equations with Infinite Solutions ∞

If you get a true statement like:
\`4 = 4\`
This means the equation is true for all values of x (infinite solutions).

Example:
\`2(x + 1) = 2x + 2\`
- Distribute: 2x + 2 = 2x + 2
- Subtract 2x: 2 = 2 (true for all x)

## Common Mistakes to Avoid ❌

1. Forgetting to distribute to all terms in parentheses
   - Wrong: 2(x + 3) = 2x + 3
   - Right: 2(x + 3) = 2x + 6

2. Incorrect signs when removing parentheses
   - Wrong: -(x + 2) = -x + 2
   - Right: -(x + 2) = -x - 2

3. Not multiplying all terms when eliminating fractions
   - Wrong: (x/2 + 3) × 2 = x + 3
   - Right: (x/2 + 3) × 2 = x + 6

4. Combining non-like terms
   - Wrong: 2x + 3 = 5x
   - Right: Keep them separate

## Step-by-Step Problem-Solving Strategy 📝

1. Remove parentheses first (if any)
2. Combine like terms on each side
3. Move variable terms to one side
4. Move constant terms to the other side
5. Combine like terms again
6. Solve for the variable

Example Problem:
\`2(3x - 1) - 4 = 3(x + 2)\`

Step 1: Remove parentheses
- 6x - 2 - 4 = 3x + 6

Step 2: Combine like terms on left
- 6x - 6 = 3x + 6

Step 3: Move variable terms to left
- 6x - 3x = 6 + 6
- 3x = 12

Step 4: Solve for x
- x = 4

## Practice Tips 💡

1. Always check your work by substituting the solution back
2. Write each step clearly
3. Keep track of signs when distributing
4. Be systematic in your approach
5. Look for patterns in similar problems

## Summary ✨

Reducing equations to simpler forms is a fundamental skill in algebra that involves:
- Combining like terms
- Removing parentheses
- Eliminating fractions and decimals
- Organizing terms systematically
- Recognizing special cases

Remember:
- Always work systematically
- Check your work
- Practice regularly
- Pay attention to signs
- Watch for special cases

With practice, you'll become more confident in simplifying equations and solving them efficiently! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 