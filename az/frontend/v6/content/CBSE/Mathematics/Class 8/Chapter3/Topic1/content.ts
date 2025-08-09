import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl8_ch3_t1',
    topicNumber: 1,
    topicName: 'Types of quadrilaterals',
    duration: 45,
    description: 'Learn about different types of quadrilaterals, their properties, and how to identify them with examples and practice questions.',
    explanation: `
# Types of Quadrilaterals 🔷

A quadrilateral is a polygon with four sides, four vertices, and four angles. Quadrilaterals are everywhere: windows, books, tables, and even kites! In this topic, we will explore the different types of quadrilaterals, their properties, and how to identify them. Let's make geometry fun and easy! 😃

## What is a Quadrilateral? 🤔
A quadrilateral is a closed figure with four straight sides. The sum of the interior angles of any quadrilateral is always 360°. This is a key property that helps us identify and classify quadrilaterals.

### Examples of Quadrilaterals in Daily Life:
- A book (rectangle)
- A chessboard square (square)
- A kite (kite)
- A windowpane (parallelogram or rectangle)
- A table top (various quadrilaterals)

## Classification of Quadrilaterals 🏷️
Quadrilaterals can be classified based on their sides, angles, and symmetry. The main types are:

### 1. Parallelogram 🟫
- **Definition:** A quadrilateral with both pairs of opposite sides parallel.
- **Properties:**
  - Opposite sides are equal and parallel.
  - Opposite angles are equal.
  - Diagonals bisect each other.
- **Examples:** A slanted window, a rhombus, a rectangle.

### 2. Rectangle 🟦
- **Definition:** A parallelogram with all angles equal to 90°.
- **Properties:**
  - Opposite sides are equal and parallel.
  - All angles are right angles (90°).
  - Diagonals are equal and bisect each other.
- **Examples:** A book, a door, a mobile phone screen.

### 3. Square ⬜
- **Definition:** A rectangle with all sides equal.
- **Properties:**
  - All sides are equal.
  - All angles are right angles (90°).
  - Diagonals are equal, bisect each other at right angles.
- **Examples:** Chessboard squares, tiles, sticky notes.

### 4. Rhombus 🔷
- **Definition:** A parallelogram with all sides equal.
- **Properties:**
  - All sides are equal.
  - Opposite angles are equal.
  - Diagonals bisect each other at right angles but are not equal.
- **Examples:** A diamond shape, a kite (sometimes), certain road signs.

### 5. Trapezium ➖
- **Definition:** A quadrilateral with only one pair of parallel sides.
- **Properties:**
  - Only one pair of sides is parallel.
  - Non-parallel sides can be of different lengths.
  - Angles can be different.
- **Examples:** A bridge support, some tables, a trapezoidal window.

### 6. Kite 🪁
- **Definition:** A quadrilateral with two pairs of adjacent sides equal.
- **Properties:**
  - Two pairs of adjacent sides are equal.
  - One pair of opposite angles is equal.
  - Diagonals are perpendicular; one diagonal bisects the other.
- **Examples:** A flying kite, some decorative tiles.

## Properties of Quadrilaterals 📚
- The sum of the interior angles is always 360°.
- The sum of the exterior angles is always 360°.
- Quadrilaterals can be regular (all sides and angles equal, like a square) or irregular.

## How to Identify Quadrilaterals? 🔍
- **Check the number of parallel sides:**
  - Two pairs: Parallelogram, rectangle, square, rhombus
  - One pair: Trapezium
  - None: Kite (but has equal adjacent sides)
- **Check the angles:**
  - All right angles: Rectangle, square
  - Not all right angles: Parallelogram, rhombus, kite, trapezium
- **Check the sides:**
  - All sides equal: Square, rhombus
  - Opposite sides equal: Parallelogram, rectangle
  - Adjacent sides equal: Kite

## Real-Life Applications 🌍
- **Architecture:** Windows, doors, tiles, and bridges use quadrilaterals for strength and design.
- **Art:** Patterns and designs often use different quadrilaterals.
- **Sports:** Fields and courts (like football and tennis) are rectangles.
- **Kites:** The classic flying toy is a real-life example of a kite quadrilateral!

## Sample Questions & Practice 📝
1. What is the sum of the interior angles of a quadrilateral? (Answer: 360°)
2. Which quadrilateral has only one pair of parallel sides? (Answer: Trapezium)
3. Name a quadrilateral with all sides equal and all angles right angles. (Answer: Square)
4. Which quadrilateral has diagonals that bisect each other at right angles but are not equal? (Answer: Rhombus)
5. Give an example of a quadrilateral from daily life. (Answer: Book, window, chessboard, etc.)

## Examples with Solutions ✏️
- **Example 1:** A window is 1 m wide and 2 m tall. What type of quadrilateral is it? 
  - *Solution:* It has opposite sides equal and all angles 90°, so it is a rectangle.
- **Example 2:** A diamond-shaped sign has all sides equal and diagonals that cross at right angles. What is it? 
  - *Solution:* It is a rhombus.
- **Example 3:** A kite has two pairs of adjacent sides equal and one pair of equal angles. What is it? 
  - *Solution:* It is a kite quadrilateral.

## Summary ✨
- Quadrilaterals have four sides and the sum of their angles is 360°.
- Types include parallelogram, rectangle, square, rhombus, trapezium, and kite.
- Each type has unique properties based on sides, angles, and diagonals.
- Recognizing quadrilaterals helps in geometry, real life, and problem-solving.

Keep practicing to master the types of quadrilaterals! 💪
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 