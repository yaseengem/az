import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl5_ch2_t2',
    topicNumber: 2,
    topicName: "Measuring Angles Using Protractors",
    duration: 45,
    description: "Learning how to measure angles accurately using a protractor",
    explanation: `
# Measuring Angles Using Protractors 📐

Welcome to the world of angles! 🎯 In this topic, we'll learn how to measure angles accurately using a protractor. This is an important skill that helps us understand shapes and solve geometry problems. Let's get started! 🚀

## What is an Angle? 🤔

An angle is formed when two lines meet at a point. The point where they meet is called the vertex, and the lines are called arms.

### Parts of an Angle
- **Vertex**: The point where two lines meet
- **Arms**: The two lines that form the angle
- **Measure**: How much the angle is "open" (in degrees)

## The Protractor 📏

A protractor is a special tool used to measure angles. It's usually a semi-circular or circular tool with degree markings.

### Parts of a Protractor
- **Base Line**: The straight edge
- **Center Point**: The middle of the protractor
- **Degree Scale**: Numbers from 0° to 180° (or 360°)
- **Inner and Outer Scales**: Two sets of numbers

## How to Use a Protractor 📝

### Step 1: Place the Protractor
1. Place the center point of the protractor on the vertex
2. Align the base line with one arm of the angle
3. Make sure the angle is facing the correct direction

### Step 2: Read the Measurement
1. Look at where the other arm crosses the protractor
2. Read the number on the degree scale
3. Choose the correct scale (inner or outer)

### Step 3: Record the Measurement
1. Write down the number of degrees
2. Use the degree symbol (°)
3. Example: 45°

## Types of Angles 🔍

### Common Angle Types
1. **Acute Angle**: Less than 90°
   - Example: 45°, 30°, 60°

2. **Right Angle**: Exactly 90°
   - Example: Corner of a book
   - Symbol: ∟

3. **Obtuse Angle**: More than 90° but less than 180°
   - Example: 120°, 150°

4. **Straight Angle**: Exactly 180°
   - Example: A straight line

## Practice Examples 💡

### Example 1: Measuring a Right Angle
1. Place protractor on vertex
2. Align with one arm
3. Read measurement: 90°

### Example 2: Measuring an Acute Angle
1. Place protractor on vertex
2. Align with one arm
3. Read measurement: 45°

### Example 3: Measuring an Obtuse Angle
1. Place protractor on vertex
2. Align with one arm
3. Read measurement: 120°

## Common Mistakes to Avoid ❌

1. **Wrong Scale**
   - Always check which scale to use
   - Look at the direction of the angle

2. **Misalignment**
   - Make sure the center point is on the vertex
   - Ensure the base line is aligned properly

3. **Reading Errors**
   - Read the scale carefully
   - Check if you're using the correct numbers

## Tips for Accurate Measurement 🎯

1. **Proper Placement**
   - Center the protractor correctly
   - Align the base line properly

2. **Clear View**
   - Make sure you can see the lines clearly
   - Use a sharp pencil for drawing

3. **Double-Check**
   - Measure twice to be sure
   - Verify your reading

## Real-Life Applications 🌍

### Where We Use Angle Measurement
- Building construction 🏗️
- Art and design 🎨
- Sports (like billiards) 🎱
- Navigation and maps 🗺️

## Sample Questions and Solutions 💡

1. **Question**: How do you measure a 45° angle?
   **Solution**: 
   1. Place protractor on vertex
   2. Align with one arm
   3. Find 45° on the scale
   4. Mark the point
   5. Draw the second arm

2. **Question**: What is the measure of a right angle?
   **Solution**: A right angle measures exactly 90°.

3. **Question**: How do you know if an angle is obtuse?
   **Solution**: An angle is obtuse if it measures more than 90° but less than 180°.

## Summary ✨

In this topic, we learned:
- What angles are
- How to use a protractor
- Different types of angles
- How to measure angles accurately
- Common mistakes to avoid
- Real-life applications

Remember, practice makes perfect! The more you measure angles, the better you'll get at it.

### Additional Practice Questions 🏋️‍♀️

1. Measure the angles in your classroom using a protractor.
2. Draw angles of 30°, 90°, and 120°.
3. Identify the type of angle (acute, right, or obtuse) for angles measuring 45°, 90°, and 150°.
4. Find three objects in your home that have right angles.
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 