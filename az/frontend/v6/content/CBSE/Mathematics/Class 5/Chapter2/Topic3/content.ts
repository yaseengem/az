import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl5_ch2_t3',
    topicNumber: 3,
    topicName: "Types of Angles",
    duration: 45,
    description: "Understanding different types of angles: acute, obtuse, and right angles",
    explanation: `
# Types of Angles 📐

Welcome to the fascinating world of angles! 🎯 In this topic, we'll explore different types of angles and learn how to identify them. Understanding angles helps us in many real-life situations, from building houses to playing sports. Let's dive in! 🚀

## Basic Types of Angles 🔍

### 1. Acute Angle
- **Definition**: An angle less than 90°
- **Examples**: 30°, 45°, 60°
- **Real-life examples**: 
  - Scissors when slightly open ✂️
  - Clock hands at 2:00 🕑
  - Pizza slice 🍕

### 2. Right Angle
- **Definition**: An angle exactly 90°
- **Symbol**: ∟
- **Real-life examples**:
  - Corner of a book 📚
  - Window frame 🪟
  - Table corner 🪑

### 3. Obtuse Angle
- **Definition**: An angle more than 90° but less than 180°
- **Examples**: 120°, 150°, 170°
- **Real-life examples**:
  - Clock hands at 4:00 🕓
  - Open book 📖
  - Fan blades when open 🪭

### 4. Straight Angle
- **Definition**: An angle exactly 180°
- **Real-life examples**:
  - Straight line 📏
  - Flat surface 🏗️
  - Open book lying flat 📘

## Comparing Angles 🔄

### How to Compare Angles
1. Use a protractor to measure
2. Compare the degree measurements
3. Identify which is larger or smaller

### Examples:
- 45° (acute) < 90° (right)
- 90° (right) < 120° (obtuse)
- 120° (obtuse) < 180° (straight)

## Angle Relationships 🤝

### Complementary Angles
- Two angles that add up to 90°
- Example: 30° + 60° = 90°

### Supplementary Angles
- Two angles that add up to 180°
- Example: 120° + 60° = 180°

## Real-Life Applications 🌍

### In Architecture 🏗️
- Right angles in buildings
- Acute angles in roofs
- Obtuse angles in bridges

### In Sports 🏀
- Angles in basketball shots
- Soccer goal angles
- Cricket bat angles

### In Art and Design 🎨
- Angles in drawings
- Perspective in paintings
- Design layouts

## Sample Questions and Solutions 💡

1. **Question**: What type of angle is 45°?
   **Solution**: 45° is an acute angle because it's less than 90°.

2. **Question**: If one angle is 60°, what angle would make it complementary?
   **Solution**: 30° would make it complementary because 60° + 30° = 90°.

3. **Question**: What type of angle is formed by the hands of a clock at 3:00?
   **Solution**: A right angle (90°) is formed at 3:00.

## Common Mistakes to Avoid ❌

1. **Confusing Angle Types**
   - Remember the key measurements:
     - Acute: < 90°
     - Right: = 90°
     - Obtuse: > 90° but < 180°
     - Straight: = 180°

2. **Measurement Errors**
   - Use a protractor carefully
   - Read the correct scale
   - Check your measurements

3. **Visual Estimation**
   - Don't rely only on looks
   - Always measure to be sure
   - Practice identifying angles

## Tips for Success 🎯

1. **Practice Measuring**
   - Use a protractor regularly
   - Measure different angles
   - Check your accuracy

2. **Look for Angles**
   - Find angles in your environment
   - Identify their types
   - Estimate their measures

3. **Draw Angles**
   - Practice drawing different angles
   - Label them correctly
   - Verify with a protractor

## Summary ✨

In this topic, we learned:
- Different types of angles
- How to identify angles
- Angle relationships
- Real-life applications
- Common mistakes to avoid
- Tips for success

Remember, angles are everywhere! Practice identifying them in your daily life.

### Additional Practice Questions 🏋️‍♀️

1. Find three acute angles in your classroom.
2. Draw and label examples of all four types of angles.
3. What type of angle is formed by the hands of a clock at:
   - 9:00
   - 1:00
   - 6:00
4. If one angle is 45°, what angle would make it supplementary?
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 