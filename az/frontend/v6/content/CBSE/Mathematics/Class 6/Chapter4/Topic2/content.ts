// Topic 2: Types of angles (acute, obtuse, right)
// content.ts will be created here for the topic.

import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl6_ch4_t2',
    topicNumber: 2,
    topicName: "Types of Angles (Acute, Obtuse, Right)",
    duration: 45,
    description: "Understanding different types of angles and their properties in geometry",
    explanation: `
# Types of Angles (Acute, Obtuse, Right) 📐

Angles are everywhere around us! From the corners of your notebook to the hands of a clock, angles help us understand shapes and their properties. In this topic, we'll explore the different types of angles and learn how to identify them. Let's dive in! 🚀

## What is an Angle? 🤔

An angle is formed when two lines or rays meet at a common point called the vertex. The amount of turn between the two lines is measured in degrees (°). Think of it like opening a door - the wider you open it, the larger the angle becomes! 🚪

## Measuring Angles 📏

We use a protractor to measure angles. The unit of measurement is degrees (°). A full circle is 360°, a straight line is 180°, and a right angle is 90°.

### Example:
- A clock showing 3:00 forms a right angle (90°)
- A clock showing 6:00 forms a straight angle (180°)
- A clock showing 12:00 forms a complete angle (360°)

## Types of Angles 🔍

### 1. Acute Angle (< 90°) 📐
- An angle that is less than 90°
- Examples in real life:
  * The angle between the hour and minute hands at 2:00 ⏰
  * The angle between the legs of a pair of scissors ✂️
  * The angle between the pages of an open book 📚

### 2. Right Angle (= 90°) 📐
- An angle that is exactly 90°
- Often marked with a small square □
- Examples in real life:
  * The corners of a square or rectangle 📦
  * The angle between the floor and wall of a room 🏠
  * The angle between the hands of a clock at 3:00 ⏰

### 3. Obtuse Angle (> 90° but < 180°) 📐
- An angle that is greater than 90° but less than 180°
- Examples in real life:
  * The angle between the hour and minute hands at 4:00 ⏰
  * The angle between the legs of a person doing a split 🤸‍♀️
  * The angle between the pages of a book opened wide 📖

### 4. Straight Angle (= 180°) 📐
- An angle that is exactly 180°
- Forms a straight line
- Examples in real life:
  * A straight road 🛣️
  * The angle between the hands of a clock at 6:00 ⏰
  * A ruler laid flat on a table 📏

### 5. Reflex Angle (> 180° but < 360°) 📐
- An angle that is greater than 180° but less than 360°
- Examples in real life:
  * The angle between the hour and minute hands at 8:00 ⏰
  * The angle between the wings of a bird in flight 🦅
  * The angle between the hands of a clock at 9:00 ⏰

## Comparing Angles 🔄

Let's compare different types of angles:

| Angle Type | Degree Measure | Symbol | Example |
|------------|----------------|--------|---------|
| Acute | < 90° | ∠ | 45° |
| Right | = 90° | ∟ | Corner of a square |
| Obtuse | > 90° and < 180° | ∠ | 120° |
| Straight | = 180° | — | Straight line |
| Reflex | > 180° and < 360° | ∠ | 270° |

## Identifying Angles in Real Life 🌍

### In Nature:
- The angle between tree branches 🌳
- The angle between the sun's rays and the ground ☀️
- The angle between a bird's wings in flight 🦅

### In Sports:
- The angle between a soccer player's legs when kicking a ball ⚽
- The angle between a gymnast's arms during a routine 🤸‍♀️
- The angle between a basketball player's arms when shooting 🏀

### In Everyday Objects:
- The angle between the hands of a clock ⏰
- The angle between the pages of a book 📚
- The angle between the legs of a chair 🪑

## Sample Questions ❓

1. What type of angle is formed when the clock shows 2:00?
   (Answer: Acute angle, as it's less than 90°)

2. If you open a book halfway, what type of angle is formed between its pages?
   (Answer: Right angle, as it's 90°)

3. What type of angle is formed when you do a full turn?
   (Answer: Complete angle, as it's 360°)

## Summary ✨

In this topic, we've learned about different types of angles:
- **Acute Angles**: Less than 90°
- **Right Angles**: Exactly 90°
- **Obtuse Angles**: Between 90° and 180°
- **Straight Angles**: Exactly 180°
- **Reflex Angles**: Between 180° and 360°

Understanding these angles helps us describe and measure the world around us. From the corners of buildings to the hands of a clock, angles are an essential part of our daily lives!

### Additional Examples and Sample Questions:

1. **Example**: The angle between the hour and minute hands at 1:00 is an acute angle (30°).

2. **Example**: The angle between the hour and minute hands at 5:00 is an obtuse angle (150°).

3. **Question**: What type of angle is formed when you open a door halfway?
   (Answer: Right angle, as it's 90°)

4. **Question**: If you turn around completely, what type of angle have you turned through?
   (Answer: Complete angle, as it's 360°)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
