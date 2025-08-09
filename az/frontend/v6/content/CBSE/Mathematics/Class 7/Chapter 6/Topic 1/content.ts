import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl7_ch6_t1',
    topicNumber: 1,
    topicName: "Types of Triangles: Scalene, Isosceles, Equilateral",
    duration: 45,
    description: "Understanding different types of triangles based on their sides and angles, with focus on scalene, isosceles, and equilateral triangles",
    explanation: `
# Types of Triangles: Scalene, Isosceles, Equilateral 📐

Triangles are one of the most fundamental shapes in geometry! They are everywhere around us - in buildings, bridges, and even in nature. In this topic, we'll explore the different types of triangles based on their sides. Let's dive in! 🚀

## What is a Triangle? 🔺

A triangle is a three-sided polygon with three angles. The sum of all interior angles in any triangle is always 180 degrees. But did you know that triangles can be classified in different ways? Today, we'll focus on classifying triangles based on their sides.

## Types of Triangles Based on Sides 📏

### 1. Scalene Triangle 🟡
- **Definition**: A triangle where all three sides have different lengths.
- **Key Properties** 🔍:
  * All sides are unequal
  * All angles are unequal
  * No lines of symmetry
- **Examples** 📌: 
  * A triangle with sides 5cm, 6cm, and 7cm
  * A triangle with sides 3cm, 4cm, and 5cm (right-angled triangle)
- **Real-life Examples** 🌍:
  * Rooftops of many houses
  * Sails of sailboats
  * Road signs

### 2. Isosceles Triangle 🟢
- **Definition**: A triangle with two sides of equal length.
- **Key Properties** 🔍:
  * Two sides are equal
  * Two angles opposite the equal sides are equal
  * One line of symmetry
- **Examples** 📌:
  * A triangle with sides 5cm, 5cm, and 6cm
  * A triangle with sides 4cm, 4cm, and 3cm
- **Real-life Examples** 🌍:
  * The Great Pyramid of Giza (viewed from the side)
  * Pizza slices
  * Traffic cones

### 3. Equilateral Triangle 🔵
- **Definition**: A triangle where all three sides are equal.
- **Key Properties** 🔍:
  * All sides are equal
  * All angles are equal (each 60°)
  * Three lines of symmetry
- **Examples** 📌:
  * A triangle with all sides 5cm
  * A triangle with all sides 7cm
- **Real-life Examples** 🌍:
  * Yield signs
  * Some musical instruments (like triangles)
  * Certain architectural elements

## Understanding Through Examples 🧩

Let's look at some examples to better understand these types:

1. **Example 1**: A triangle has sides measuring 4cm, 4cm, and 4cm. What type of triangle is it?
   - **Answer**: Equilateral triangle because all sides are equal.

2. **Example 2**: A triangle has sides measuring 5cm, 5cm, and 6cm. What type of triangle is it?
   - **Answer**: Isosceles triangle because two sides are equal.

3. **Example 3**: A triangle has sides measuring 3cm, 4cm, and 5cm. What type of triangle is it?
   - **Answer**: Scalene triangle because all sides are different.

## Properties and Relationships 🔄

1. **Angle Properties**:
   - In an equilateral triangle, all angles are 60°.
   - In an isosceles triangle, the angles opposite the equal sides are equal.
   - In a scalene triangle, all angles are different.

2. **Symmetry**:
   - Equilateral triangles have three lines of symmetry.
   - Isosceles triangles have one line of symmetry.
   - Scalene triangles have no lines of symmetry.

3. **Perimeter**:
   - For equilateral triangles: Perimeter = 3 × side
   - For isosceles triangles: Perimeter = 2 × equal side + unequal side
   - For scalene triangles: Perimeter = sum of all three sides

## Practice Problems 📝

1. **Problem**: A triangle has sides measuring 6cm, 6cm, and 8cm. What type of triangle is it?
   - **Solution**: Isosceles triangle because two sides are equal (6cm).

2. **Problem**: If a triangle has all angles equal to 60°, what type of triangle is it?
   - **Solution**: Equilateral triangle because all angles are equal to 60°.

3. **Problem**: A triangle has sides measuring 7cm, 8cm, and 9cm. What type of triangle is it?
   - **Solution**: Scalene triangle because all sides are different.

## Summary ✨

In this topic, we've learned about three types of triangles based on their sides:

1. **Scalene Triangle**: All sides are different.
2. **Isosceles Triangle**: Two sides are equal.
3. **Equilateral Triangle**: All sides are equal.

Each type has unique properties and characteristics that make them special. Understanding these differences helps us identify and work with triangles in various mathematical and real-world applications.

### Additional Examples and Sample Questions:

1. **Example**: A triangle has sides measuring 5cm, 5cm, and 5cm. What type of triangle is it?
   - **Answer**: Equilateral triangle because all sides are equal.

2. **Example**: A triangle has sides measuring 4cm, 5cm, and 6cm. What type of triangle is it?
   - **Answer**: Scalene triangle because all sides are different.

3. **Question**: Can an equilateral triangle also be an isosceles triangle?
   - **Answer**: Yes, because an equilateral triangle has all sides equal, which means it also has two sides equal, satisfying the definition of an isosceles triangle.

4. **Question**: If a triangle has two angles equal to 45° each, what type of triangle is it?
   - **Answer**: Isosceles triangle because equal angles are opposite equal sides.
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 