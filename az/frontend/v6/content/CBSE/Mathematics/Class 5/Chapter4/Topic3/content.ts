import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
   id: 'cl5_ch4_t3',
   topicNumber: 3,
   topicName: "Comparing Fractions",
   duration: 45,
   description: "Learning different methods to compare fractions and determine which is larger or smaller",
   explanation: `
# Comparing Fractions 📊

Comparing fractions helps us understand which fraction is larger or smaller. This skill is super useful in everyday life! Let's learn different ways to compare fractions. 🧮

## Why Compare Fractions? 🤔

We compare fractions to:
- Find out which is bigger or smaller
- Put fractions in order
- Make better decisions in real life
- Share things fairly

## Methods to Compare Fractions 🔍

### 1. Using Pictures 🎨

Draw the fractions and compare the shaded parts:
- Example: Compare 1/2 and 1/3
- Draw two same-sized circles
- Shade half of first, third of second
- 1/2 > 1/3

### 2. Using Number Line 📏

Plot fractions on a number line to see which comes first:
- Example: Compare 1/4 and 3/4
- Draw number line from 0 to 1
- Mark both fractions
- 1/4 < 3/4

### 3. Using Common Denominator 📐

Find a common denominator and compare numerators:
- Example: Compare 2/3 and 3/4
- Find common denominator: 12
- Convert: 8/12 vs 9/12
- 2/3 < 3/4

### 4. Using Cross Multiplication ✖️

Multiply diagonally and compare products:
- Example: Compare 2/3 and 3/4
- 2×4 = 8 and 3×3 = 9
- 8 < 9, so 2/3 < 3/4

## Special Cases to Remember 🎯

### Same Denominator
- Compare numerators directly
- Larger numerator = larger fraction
- Example: 3/4 > 1/4

### Same Numerator
- Compare denominators
- Smaller denominator = larger fraction
- Example: 1/2 > 1/3

## Real-Life Examples 🌟

1. **Sharing Pizza** 🍕
   - Would you rather have 2/3 or 3/4 of a pizza?
   - 3/4 is larger, so it's the better choice!

2. **Time Management** ⏰
   - You have 1/2 hour or 3/4 hour to complete homework
   - 3/4 hour gives you more time

3. **Money** 💰
   - Would you prefer 1/2 or 2/3 of ₹100?
   - 2/3 gives you more money (₹66.67 vs ₹50)

## Sample Questions and Solutions 📝

1. **Question**: Compare 2/5 and 3/5
   **Solution**: Same denominator, compare numerators: 2/5 < 3/5

2. **Question**: Compare 1/3 and 1/4
   **Solution**: Same numerator, compare denominators: 1/3 > 1/4

3. **Question**: Compare 3/4 and 5/6 using cross multiplication
   **Solution**: 3×6 = 18, 4×5 = 20, so 3/4 < 5/6

## Practice Problems 🏋️‍♀️

1. Compare 2/3 and 3/4 using any method
2. Put these fractions in order: 1/2, 1/3, 1/4
3. Which is larger: 3/5 or 4/7? Show your work

## Common Mistakes to Avoid ❌

1. **Different Wholes**
   - Wrong: Comparing 1/2 of a small pizza with 1/3 of a large pizza
   - Right: Compare fractions of same-sized wholes

2. **Incorrect Conversion**
   - Wrong: Converting 1/2 to 2/3
   - Right: Convert to common denominator properly

3. **Mixing Methods**
   - Wrong: Using part picture, part calculation
   - Right: Stick to one method for comparison

## Tips for Success 🎯

1. **Visualize First**
   - Draw pictures
   - Use number lines
   - Make it clear

2. **Choose the Right Method**
   - Use simplest method for the fractions
   - Be consistent
   - Double-check your work

3. **Practice Regularly**
   - Try different examples
   - Use real-life situations
   - Make it fun!

## Summary ✨

- We can compare fractions using pictures, number lines, common denominators, or cross multiplication
- Same denominator: compare numerators
- Same numerator: compare denominators
- Comparing fractions helps us make better decisions in real life

Remember: Practice comparing fractions with different methods to become a fraction comparison expert! 🎯
`,
   quiz: {
      questions: [
         ...easyQuestions,
         ...mediumQuestions
      ]
   }
}; 