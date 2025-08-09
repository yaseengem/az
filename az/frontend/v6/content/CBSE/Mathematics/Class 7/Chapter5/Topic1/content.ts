import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl7_ch5_t1',
    topicNumber: 1,
    topicName: "Types of Angles: Complementary, Supplementary, Adjacent",
    duration: 45,
    description: "Understanding different types of angles and their relationships in geometry",
    explanation: `
# Types of Angles: Complementary, Supplementary, Adjacent 📐

Angles are fundamental building blocks in geometry! Understanding different types of angles helps us solve geometric problems and understand the world around us. Let's explore the fascinating world of angles! 🌟

## What is an Angle? 🔍

An angle is formed when two rays meet at a common point called the vertex. The two rays are called the arms of the angle. Angles are measured in degrees (°), with a full circle being 360°.

## Types of Angles Based on Measurement 📏

1. **Acute Angle**: Less than 90° (e.g., 30°, 45°, 60°)
2. **Right Angle**: Exactly 90° (like the corner of a book 📚)
3. **Obtuse Angle**: Between 90° and 180° (e.g., 120°, 150°)
4. **Straight Angle**: Exactly 180° (forms a straight line 📏)
5. **Reflex Angle**: Between 180° and 360° (e.g., 200°, 270°)
6. **Complete Angle**: Exactly 360° (full circle ⭕)

## Special Angle Relationships 🤝

### Complementary Angles
- **Definition**: Two angles whose sum is 90°
- **Example**: If one angle is 30°, its complement is 60° (30° + 60° = 90°)
- **Real-life example**: The two acute angles in a right-angled triangle are complementary

### Supplementary Angles
- **Definition**: Two angles whose sum is 180°
- **Example**: If one angle is 120°, its supplement is 60° (120° + 60° = 180°)
- **Real-life example**: The angles on a straight line are supplementary

### Adjacent Angles
- **Definition**: Two angles that share a common vertex and a common arm
- **Example**: In a clock at 3:00, the hour and minute hands form adjacent angles
- **Properties**:
  * Share a common vertex
  * Share a common arm
  * Do not overlap
  * Can be complementary, supplementary, or neither

## Angle Relationships in Real Life 🌍

1. **Architecture**: Buildings use right angles for stability and aesthetics 🏛️
2. **Sports**: Angles determine the trajectory of balls in games like cricket and football ⚽
3. **Navigation**: Compasses use angles to determine direction 🧭
4. **Art**: Artists use angles to create perspective and depth in drawings 🎨

## Solving Angle Problems 🧮

### Example 1: Finding Complementary Angles
If one angle is 35°, what is its complement?
Solution: 90° - 35° = 55°

### Example 2: Finding Supplementary Angles
If one angle is 120°, what is its supplement?
Solution: 180° - 120° = 60°

### Example 3: Identifying Adjacent Angles
In the figure below, which angles are adjacent?
[Insert diagram showing angles AOB and BOC sharing vertex O and arm OB]

## Common Mistakes to Avoid ❌

1. **Mixing up complementary and supplementary**: Remember that complementary angles add up to 90°, while supplementary angles add up to 180°
2. **Confusing adjacent angles with vertical angles**: Adjacent angles share a common arm, while vertical angles are opposite each other
3. **Forgetting the units**: Always include the degree symbol (°) when writing angle measures

## Practice Problems 📝

1. If two angles are complementary and one is 25°, what is the other angle?
2. Two supplementary angles are in the ratio 2:3. Find the measure of each angle.
3. In the figure below, identify all pairs of adjacent angles.
[Insert diagram with multiple angles]

## Summary ✨

- **Complementary Angles**: Sum to 90°
- **Supplementary Angles**: Sum to 180°
- **Adjacent Angles**: Share a common vertex and arm
- **Angle Types**: Acute (<90°), Right (90°), Obtuse (>90°), Straight (180°), Reflex (>180°), Complete (360°)

Understanding these angle relationships is crucial for solving more complex geometric problems and understanding the world around us. Practice identifying and working with different types of angles to strengthen your geometric skills! 🎯

### Additional Examples and Sample Questions:

1. **Example**: A ladder leaning against a wall forms a 60° angle with the ground. What angle does it make with the wall? (Answer: 30°, as the angles are complementary)
2. **Example**: In a triangle, one angle is 45° and another is 60°. What is the third angle? (Answer: 75°, as angles in a triangle sum to 180°)
3. **Question**: If two adjacent angles form a straight line, what is their relationship? (Answer: They are supplementary angles)
4. **Question**: Can two acute angles be supplementary? (Answer: No, because the sum of two acute angles is always less than 180°)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 