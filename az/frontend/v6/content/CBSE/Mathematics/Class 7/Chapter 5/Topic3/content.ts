import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl7_ch5_t3',
    topicNumber: 3,
    topicName: "Angle relationships: vertically opposite, linear pairs",
    duration: 45,
    description: "Study of special angle relationships formed by intersecting lines and their properties",
    explanation: `
# Angle Relationships: Vertically Opposite and Linear Pairs

In geometry, when two lines intersect, they form various angles with special relationships. Understanding these relationships is crucial for solving geometric problems and proving theorems. Let's explore two important types of angle relationships: vertically opposite angles and linear pairs.

## Vertically Opposite Angles

When two lines intersect, they form four angles. The angles that are opposite to each other are called vertically opposite angles. These angles are always equal in measure.

**Properties of Vertically Opposite Angles:**
- They are formed by two intersecting lines
- They are opposite to each other
- They are always equal in measure
- They share a common vertex
- They are congruent (equal in size)

**Example:**
Consider two lines AB and CD intersecting at point O:
\`\`\`
    A
    |
    |
    C-- - O-- - D
    |
    |
    B
\`\`\`
In this figure:
- ∠AOC and ∠BOD are vertically opposite angles
- ∠AOD and ∠BOC are vertically opposite angles
- ∠AOC = ∠BOD
- ∠AOD = ∠BOC

## Linear Pair of Angles

When two angles are formed on a straight line and share a common vertex and arm, they are called a linear pair of angles. The sum of the angles in a linear pair is always 180°.

**Properties of Linear Pair:**
- They are adjacent angles
- They share a common vertex
- They share a common arm
- Their non-common arms form a straight line
- The sum of their measures is 180°

**Example:**
In the same figure above:
- ∠AOC and ∠AOD form a linear pair
- ∠AOD and ∠BOD form a linear pair
- ∠BOD and ∠BOC form a linear pair
- ∠BOC and ∠AOC form a linear pair
- ∠AOC + ∠AOD = 180°
- ∠AOD + ∠BOD = 180°
- ∠BOD + ∠BOC = 180°
- ∠BOC + ∠AOC = 180°

## Applications and Problem Solving

These angle relationships are fundamental in solving various geometric problems:

1. **Finding Unknown Angles:**
   - If one angle in a linear pair is known, the other can be found by subtracting from 180°
   - If one vertically opposite angle is known, the other is equal to it

2. **Geometric Proofs:**
   - These relationships are often used in proving other geometric theorems
   - They help establish the equality of angles in various configurations

3. **Real-world Applications:**
   - Architecture and engineering designs
   - Navigation and surveying
   - Art and design patterns

## Sample Problems

1. If two vertically opposite angles measure 45° each, what are the measures of the other two angles?
   - Solution: The other two angles will also be 45° each because vertically opposite angles are equal.

2. If one angle of a linear pair is 70°, what is the measure of the other angle?
   - Solution: The other angle will be 180° - 70° = 110° because the sum of angles in a linear pair is 180°.

## Summary

- Vertically opposite angles are equal in measure
- The sum of angles in a linear pair is 180°
- These relationships are fundamental in geometry
- They help in solving various geometric problems
- They are used in proving other geometric theorems

Understanding these angle relationships is essential for building a strong foundation in geometry and solving more complex problems in higher classes. 🧮
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 