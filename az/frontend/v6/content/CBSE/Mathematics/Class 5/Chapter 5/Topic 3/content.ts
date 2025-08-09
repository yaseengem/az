import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl5_ch5_t3',
    topicNumber: 3,
    topicName: "Rotational Symmetry Basics",
    duration: 45,
    description: "Understanding rotational symmetry and how to identify the order of rotation in shapes",
    explanation: `
# Rotational Symmetry Basics 🔄

Have you ever spun a shape and noticed it looks the same at certain points? That's rotational symmetry! Let's explore this fascinating concept that makes shapes look the same when rotated. 🎡

## What is Rotational Symmetry? 🤔

Rotational symmetry is when a shape looks exactly the same after being rotated by a certain angle. The shape matches its original position after rotation!

### Key Terms 📏
- **Center of Rotation**: The point around which the shape rotates
- **Angle of Rotation**: How much the shape turns (in degrees)
- **Order of Rotation**: How many times the shape matches itself in one full turn

## Understanding Rotation 🔄

### 1. Full Rotation
- A complete turn is 360 degrees
- Like spinning a shape all the way around
- Example: A circle looks the same at every point

### 2. Partial Rotation
- Less than 360 degrees
- Shape matches itself at certain angles
- Example: A square matches at 90 degrees

## Order of Rotation 📊

The order of rotation tells us how many times a shape matches itself in one full turn:

### Common Shapes and Their Orders
1. **Square**: Order 4 (matches at 90°, 180°, 270°, 360°)
2. **Equilateral Triangle**: Order 3 (matches at 120°, 240°, 360°)
3. **Regular Pentagon**: Order 5 (matches at 72°, 144°, 216°, 288°, 360°)
4. **Circle**: Infinite order (matches at every angle)

## Real-Life Examples 🌟

1. **Nature** 🌿
   - Flowers (like daisies)
   - Snowflakes ❄️
   - Starfish

2. **Everyday Objects** 🏠
   - Wheels
   - Windmills
   - Ceiling fans

3. **Art and Design** 🎨
   - Mandalas
   - Rangoli patterns
   - Kaleidoscope designs

## Finding Order of Rotation 🔍

### Step 1: Identify the Center
- Find the center point of the shape
- This is where the shape rotates around

### Step 2: Test Different Angles
- Try rotating the shape
- Note when it matches itself
- Count the number of matches

### Step 3: Calculate Order
- Count how many times it matches in 360°
- This is the order of rotation
- Example: Square matches 4 times = order 4

## Sample Questions and Solutions 📝

1. **Question**: What is the order of rotation for an equilateral triangle?
   **Solution**: Order 3 (matches at 120°, 240°, 360°)

2. **Question**: How many degrees is each rotation for a regular hexagon?
   **Solution**: 60 degrees (360° ÷ 6 = 60°)

3. **Question**: Does a rectangle have rotational symmetry? If yes, what is its order?
   **Solution**: Yes, order 2 (matches at 180° and 360°)

## Practice Problems 🏋️‍♀️

1. Find the order of rotation for a regular octagon
2. Draw a shape with order 4 rotational symmetry
3. How many degrees is each rotation for a regular pentagon?

## Common Mistakes to Avoid ❌

1. **Wrong Center**
   - Wrong: Using any point as center
   - Right: Use the exact center point

2. **Incorrect Counting**
   - Wrong: Not counting full rotation
   - Right: Count matches in 360°

3. **Angle Errors**
   - Wrong: Using wrong angle measurements
   - Right: Calculate angles correctly

## Tips for Success 🎯

1. **Use Physical Objects**
   - Cut out shapes
   - Try rotating them
   - See the symmetry

2. **Start Simple**
   - Begin with basic shapes
   - Move to complex ones
   - Build understanding

3. **Practice Drawing**
   - Draw shapes
   - Mark rotation points
   - Test different angles

## Summary ✨

- Rotational symmetry means a shape looks the same after rotation
- Order of rotation tells how many times it matches in 360°
- Different shapes have different orders of rotation
- The center of rotation is crucial
- Rotational symmetry is all around us in nature and man-made objects

Remember: Practice finding rotational symmetry in everyday objects to become a symmetry expert! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 