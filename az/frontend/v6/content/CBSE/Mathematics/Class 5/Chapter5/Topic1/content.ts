import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
   id: 'cl5_ch5_t1',
   topicNumber: 1,
   topicName: "Symmetry in Shapes and Letters",
   duration: 45,
   description: "Understanding symmetry in shapes and letters, identifying lines of symmetry",
   explanation: `
# Symmetry in Shapes and Letters ✨

Symmetry is all around us! From beautiful butterflies 🦋 to letters in the alphabet, symmetry makes things look balanced and pleasing to the eye. Let's explore this fascinating concept! 🎨

## What is Symmetry? 🤔

Symmetry is when one half of something is a mirror image of the other half. If you can fold something in half and both sides match perfectly, it has symmetry!

### Line of Symmetry 📏
- An imaginary line that divides a shape into two identical halves
- Also called "mirror line" or "axis of symmetry"
- Can be vertical, horizontal, or diagonal

## Symmetry in Shapes 🔷

### 1. Regular Shapes
- **Square**: 4 lines of symmetry
- **Rectangle**: 2 lines of symmetry
- **Equilateral Triangle**: 3 lines of symmetry
- **Circle**: Infinite lines of symmetry

### 2. Irregular Shapes
- Some have one line of symmetry
- Some have no symmetry at all
- Some have multiple lines of symmetry

## Symmetry in Letters 🔤

### 1. Vertical Symmetry
Letters that can be divided vertically:
- A, H, I, M, O, T, U, V, W, X, Y

### 2. Horizontal Symmetry
Letters that can be divided horizontally:
- B, C, D, E, H, I, K, O, X

### 3. No Symmetry
Letters with no lines of symmetry:
- F, G, J, L, N, P, Q, R, S, Z

## Real-Life Examples 🌟

1. **Nature** 🌿
   - Butterfly wings 🦋
   - Leaves 🍃
   - Flowers 🌸
   - Snowflakes ❄️

2. **Architecture** 🏛️
   - Buildings
   - Windows
   - Doors
   - Bridges

3. **Art and Design** 🎨
   - Rangoli patterns
   - Mandalas
   - Logos
   - Patterns

## How to Find Symmetry 🔍

### Step 1: Visual Check
- Look at the shape or letter
- Imagine folding it in half
- See if both sides match

### Step 2: Use a Mirror
- Place a mirror along the line
- Check if the reflection matches
- Try different angles

### Step 3: Draw Lines
- Draw possible lines of symmetry
- Check if both sides match
- Count the number of lines

## Sample Questions and Solutions 📝

1. **Question**: How many lines of symmetry does a square have?
   **Solution**: 4 lines of symmetry (2 diagonals, 1 vertical, 1 horizontal)

2. **Question**: Which letters have both vertical and horizontal symmetry?
   **Solution**: H, I, O, X

3. **Question**: Draw a shape with exactly one line of symmetry.
   **Solution**: An isosceles triangle or the letter "A"

## Practice Problems 🏋️‍♀️

1. Find all lines of symmetry in a regular hexagon
2. List all letters that have vertical symmetry
3. Draw a shape with exactly two lines of symmetry

## Common Mistakes to Avoid ❌

1. **Incorrect Folding**
   - Wrong: Folding at any angle
   - Right: Fold exactly in half

2. **Missing Lines**
   - Wrong: Only checking vertical lines
   - Right: Check all possible angles

3. **Counting Errors**
   - Wrong: Counting the same line twice
   - Right: Count each unique line once

## Tips for Success 🎯

1. **Practice with Real Objects**
   - Use paper cutouts
   - Try with everyday objects
   - Make it hands-on

2. **Use Visual Aids**
   - Draw shapes
   - Use mirrors
   - Make it clear

3. **Start Simple**
   - Begin with basic shapes
   - Move to complex ones
   - Build confidence

## Summary ✨

- Symmetry is when one half matches the other half
- Lines of symmetry can be vertical, horizontal, or diagonal
- Different shapes have different numbers of lines of symmetry
- Letters can have vertical, horizontal, or no symmetry
- Symmetry is all around us in nature and man-made objects

Remember: Practice finding symmetry in everyday objects to become a symmetry expert! 🎯
`,
   quiz: {
      questions: [
         ...easyQuestions,
         ...mediumQuestions
      ]
   }
}; 