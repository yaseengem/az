import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl8_ch3_t2',
    topicNumber: 2,
    topicName: 'Properties of parallelograms, rectangles, rhombus, square',
    duration: 45,
    description: 'Explore the properties of parallelograms, rectangles, rhombus, and squares with clear explanations, examples, and practice questions.',
    explanation: `
# Properties of Parallelograms, Rectangles, Rhombus, and Square 🟫⬛⬜

Understanding the properties of different quadrilaterals is essential in geometry. In this topic, we will focus on four important types: parallelogram, rectangle, rhombus, and square. Each has unique properties that help us solve problems and recognize shapes in real life.

## Parallelogram 🟫
A parallelogram is a quadrilateral with both pairs of opposite sides parallel.

### Key Properties:
- Opposite sides are equal and parallel.
- Opposite angles are equal.
- Adjacent angles are supplementary (sum to 180°).
- Diagonals bisect each other.

### Example:
A slanted window frame or a diamond-shaped road sign is often a parallelogram.

### Sample Question:
If one angle of a parallelogram is 70°, what is the measure of its adjacent angle? (Answer: 110°, since adjacent angles are supplementary.)

## Rectangle ⬛
A rectangle is a parallelogram with all angles equal to 90°.

### Key Properties:
- Opposite sides are equal and parallel.
- All angles are right angles (90°).
- Diagonals are equal in length and bisect each other.
- Each diagonal divides the rectangle into two congruent triangles.

### Example:
A book, a door, or a mobile phone screen is usually rectangular.

### Sample Question:
A rectangle has a length of 8 cm and a width of 5 cm. What is the length of its diagonal? (Answer: 9.43 cm, using the Pythagorean theorem: √(8² + 5²) = √89 ≈ 9.43)

## Rhombus 🔷
A rhombus is a parallelogram with all sides equal in length.

### Key Properties:
- All sides are equal.
- Opposite angles are equal.
- Diagonals bisect each other at right angles (90°).
- Diagonals are not equal but cut each other into two equal halves.

### Example:
A diamond shape on playing cards or certain decorative tiles is a rhombus.

### Sample Question:
If the diagonals of a rhombus are 10 cm and 24 cm, what is its area? (Answer: 120 cm², since area = (d1 × d2) / 2 = (10 × 24) / 2 = 120)

## Square ⬜
A square is a rectangle with all sides equal, or a rhombus with all angles equal to 90°.

### Key Properties:
- All sides are equal.
- All angles are right angles (90°).
- Diagonals are equal, bisect each other at right angles, and are perpendicular.
- Each diagonal divides the square into two congruent isosceles right triangles.

### Example:
A chessboard square or a sticky note is a square.

### Sample Question:
What is the perimeter of a square with side 7 cm? (Answer: 28 cm, since perimeter = 4 × side = 4 × 7 = 28)

## Comparing the Four Quadrilaterals 🔍
| Property         | Parallelogram | Rectangle | Rhombus | Square |
|------------------|--------------|-----------|---------|--------|
| Opposite sides   | Equal        | Equal     | Equal   | Equal  |
| Opposite angles  | Equal        | Equal     | Equal   | Equal  |
| All angles 90°   | No           | Yes       | No      | Yes    |
| All sides equal  | No           | No        | Yes     | Yes    |
| Diagonals equal  | No           | Yes       | No      | Yes    |
| Diagonals bisect | Yes          | Yes       | Yes     | Yes    |
| Diagonals ⟂     | No           | No        | Yes     | Yes    |

## Real-Life Applications 🌍
- **Architecture:** Windows, tiles, and floor plans use these shapes for strength and design.
- **Art:** Patterns and designs often use squares, rectangles, and rhombuses.
- **Sports:** Fields and courts (like football and tennis) are rectangles.

## Practice Questions 📝
1. Which quadrilateral has all sides equal and all angles right angles? (Answer: Square)
2. In a parallelogram, if one side is 6 cm, what is the length of the opposite side? (Answer: 6 cm)
3. What is the sum of the angles in any quadrilateral? (Answer: 360°)
4. Which quadrilateral has diagonals that bisect each other at right angles but are not equal? (Answer: Rhombus)
5. Give an example of a rectangle from daily life. (Answer: Book, door, mobile screen, etc.)

## Summary ✨
- Parallelogram: Opposite sides and angles equal, diagonals bisect each other.
- Rectangle: Parallelogram with all angles 90°, diagonals equal.
- Rhombus: Parallelogram with all sides equal, diagonals perpendicular.
- Square: All sides and angles equal, diagonals equal and perpendicular.

Recognizing these properties helps in geometry, real life, and problem-solving. Keep practicing to master these quadrilaterals! 💪
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 