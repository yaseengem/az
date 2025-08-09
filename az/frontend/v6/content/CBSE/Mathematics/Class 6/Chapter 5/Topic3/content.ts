// Topic 3: Measuring angles with a protractor
// content.ts will be created here for the topic.

import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl6_ch5_t3',
    topicNumber: 3,
    topicName: "Understanding Elementary Shapes",
    duration: 45,
    description: "Learning about basic geometric shapes, their properties, and how to measure them",
    explanation: `
# Understanding Elementary Shapes 📐

Shapes are the building blocks of geometry! From the lines we draw to the angles we measure, understanding elementary shapes helps us make sense of the world around us. Let's explore these fundamental concepts! 🚀

## Lines and Line Segments 📏

### What are Lines?
- **Definition**: A line is a straight path that extends infinitely in both directions
- **Properties**:
  * No endpoints
  * No thickness
  * Can be named using any two points on it
- **Examples**: The edge of a ruler, a straight road
- **Sample Question**: Can you draw a line that has endpoints? (Answer: No, a line extends infinitely)

### Line Segments
- **Definition**: A part of a line with two endpoints
- **Properties**:
  * Has two endpoints
  * Has a definite length
  * Can be measured
- **Examples**: The side of a book, a piece of string
- **Sample Question**: If a line segment is 5 cm long, what is its length? (Answer: 5 cm)

## Angles and Their Types 📐

### What is an Angle?
- **Definition**: The space between two lines that meet at a point
- **Properties**:
  * Formed by two rays
  * Has a vertex (point of intersection)
  * Measured in degrees
- **Examples**: The corner of a book, the hands of a clock
- **Sample Question**: What is the angle between the hands of a clock at 3:00? (Answer: 90°)

### Types of Angles
1. **Acute Angle**: Less than 90°
2. **Right Angle**: Exactly 90°
3. **Obtuse Angle**: More than 90° but less than 180°
4. **Straight Angle**: Exactly 180°
5. **Reflex Angle**: More than 180° but less than 360°

## Triangles and Their Properties 🔺

### What is a Triangle?
- **Definition**: A three-sided polygon
- **Properties**:
  * 3 sides
  * 3 angles
  * Sum of angles = 180°
- **Examples**: Pizza slice, traffic sign
- **Sample Question**: If two angles of a triangle are 60° and 70°, what is the third angle? (Answer: 50°)

### Types of Triangles
1. **By Sides**:
   - Equilateral: All sides equal
   - Isosceles: Two sides equal
   - Scalene: All sides different
2. **By Angles**:
   - Acute: All angles < 90°
   - Right: One angle = 90°
   - Obtuse: One angle > 90°

## Quadrilaterals and Their Properties 📦

### What is a Quadrilateral?
- **Definition**: A four-sided polygon
- **Properties**:
  * 4 sides
  * 4 angles
  * Sum of angles = 360°
- **Examples**: Book, door, window
- **Sample Question**: If three angles of a quadrilateral are 90°, 90°, and 70°, what is the fourth angle? (Answer: 110°)

### Types of Quadrilaterals
1. **Square**: All sides equal, all angles 90°
2. **Rectangle**: Opposite sides equal, all angles 90°
3. **Rhombus**: All sides equal, opposite angles equal
4. **Parallelogram**: Opposite sides equal and parallel
5. **Trapezium**: One pair of parallel sides

## Circles and Their Properties ⭕

### What is a Circle?
- **Definition**: A round shape where all points are equidistant from the center
- **Properties**:
  * No sides or angles
  * Has a center point
  * Has a radius (distance from center to edge)
  * Has a diameter (twice the radius)
- **Examples**: Wheel, clock face, pizza
- **Sample Question**: If the radius of a circle is 5 cm, what is its diameter? (Answer: 10 cm)

## Measuring Shapes 📏

### How to Measure Length
1. Use a ruler or measuring tape
2. Place the zero mark at the starting point
3. Read the measurement at the ending point
4. Record the length with appropriate units (cm, m, etc.)

### How to Measure Angles
1. Use a protractor
2. Place the center point on the vertex
3. Align the base line with one arm
4. Read the measurement where the other arm crosses the scale

## Real-World Applications 🌍

Understanding shapes helps us in:
- **Construction**: Building houses and bridges
- **Design**: Creating art and patterns
- **Navigation**: Reading maps and directions
- **Sports**: Understanding playing fields and courts

## Practice Questions 📝

1. What is the sum of angles in a triangle?
2. How many sides does a quadrilateral have?
3. What type of angle is 45°?
4. If a rectangle has length 6 cm and width 4 cm, what is its perimeter?
5. What is the diameter of a circle with radius 7 cm?

## Summary ✨

In this topic, we've learned about:
- Lines and line segments
- Different types of angles
- Properties of triangles and quadrilaterals
- Circles and their measurements
- How to measure shapes accurately

Understanding these basic shapes is essential for learning more advanced geometry and for practical applications in daily life.

### Additional Examples and Sample Questions:
1. **Example**: A square has all sides equal and all angles 90°.
2. **Example**: An equilateral triangle has all sides equal and all angles 60°.
3. **Question**: What shape has four sides, all equal, and all angles 90°? (Answer: Square)
4. **Question**: If two angles of a triangle are 45° each, what is the third angle? (Answer: 90°)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
