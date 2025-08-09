// Topic 2: Drawing circles with a compass
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl6_ch14_t2',
    topicNumber: 2,
    topicName: "Drawing Circles with a Compass",
    duration: 45,
    description: "Learn how to draw circles using a compass, understand circle properties, and apply these skills in geometric constructions",
    explanation: `
# Drawing Circles with a Compass 🎯

Welcome to the fascinating world of circles! 🌟 In this topic, we'll learn how to draw perfect circles using a compass and understand their important properties. Let's get started! 🚀

## Understanding the Compass 🧭

Before we begin drawing circles, let's understand our essential tool:

1. **Parts of a Compass** 🛠️
   - Pointed end (needle point)
   - Pencil holder
   - Adjustable arm
   - Hinge for opening/closing

2. **Setting Up the Compass** ⚙️
   - Hold the compass correctly
   - Adjust the radius
   - Ensure the pencil is sharp
   - Check the hinge is tight

## Drawing Basic Circles 📐

### Step-by-Step Process
1. **Mark the Center** 📍
   - Place the needle point at the center
   - Hold the compass steady
   - Ensure the needle doesn't move

2. **Set the Radius** 📏
   - Open the compass to desired radius
   - Use a ruler to measure
   - Lock the hinge securely

3. **Draw the Circle** 🎨
   - Rotate the compass smoothly
   - Keep the needle point fixed
   - Complete the full rotation

## Types of Circles 🔄

1. **Concentric Circles** ⭕
   - Circles with same center
   - Different radii
   - Used in patterns and designs

2. **Intersecting Circles** ✖️
   - Circles that cross each other
   - Create interesting patterns
   - Used in geometric constructions

3. **Tangent Circles** 🔄
   - Circles that touch at one point
   - Important in advanced geometry
   - Used in technical drawings

## Practical Applications 🌍

1. **Art and Design** 🎨
   - Creating patterns
   - Drawing mandalas
   - Making geometric art

2. **Technical Drawing** 📐
   - Engineering designs
   - Architectural plans
   - Mechanical drawings

3. **Everyday Uses** 🏠
   - Drawing round objects
   - Creating circular patterns
   - Making decorative designs

## Common Mistakes to Avoid ❌

1. **Slipping Compass** 🚫
   - Hold the compass firmly
   - Keep the needle point steady
   - Don't press too hard

2. **Incorrect Radius** 📏
   - Measure carefully
   - Double-check the setting
   - Use a ruler for accuracy

3. **Uneven Circles** ⭕
   - Rotate smoothly
   - Maintain constant pressure
   - Complete the full rotation

## Practice Problems 🏋️‍♀️

1. **Problem**: Draw a circle with radius 4 cm
   - Solution: Set compass to 4 cm and draw
   - Verification: Measure radius with ruler

2. **Problem**: Draw two concentric circles with radii 3 cm and 5 cm
   - Solution: Draw first circle, then second without moving center
   - Verification: Check both radii

3. **Problem**: Draw two circles that intersect
   - Solution: Draw first circle, then second with overlapping centers
   - Verification: Check intersection points

## Step-by-Step Examples 📝

### Example 1: Drawing a Perfect Circle
1. Mark the center point
2. Set compass to desired radius
3. Place needle at center
4. Rotate compass smoothly
5. Complete the circle

### Example 2: Creating Concentric Circles
1. Mark the center point
2. Draw smallest circle first
3. Increase radius for next circle
4. Continue for all circles
5. Verify all centers align

## Summary ✨

In this topic, we learned:
- How to use a compass effectively
- Steps to draw perfect circles
- Different types of circles
- Practical applications
- Common mistakes to avoid

### Additional Examples and Sample Questions:

1. **Example**: Draw a circle with radius 6 cm and then draw another circle with the same center but radius 8 cm
   - Solution: Draw concentric circles
   - Verification: Check both radii

2. **Example**: Draw two circles that touch at exactly one point
   - Solution: Draw tangent circles
   - Verification: Check single point of contact

3. **Question**: What is the minimum number of points needed to draw a circle?
   - Answer: One point (the center) and the radius

4. **Question**: How can you ensure your circle is perfectly round?
   - Answer: Keep the compass steady, maintain constant radius, and rotate smoothly
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
