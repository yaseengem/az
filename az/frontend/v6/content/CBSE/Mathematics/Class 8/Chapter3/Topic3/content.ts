import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const content: TopicContent = {
    id: 'cl8_ch3_t3',
    topicNumber: 3,
    topicName: 'Angle sum property of polygons',
    duration: 60,
    description: 'Understanding the relationship between the number of sides in a polygon and its angle properties.',
    explanation: `The angle sum property of polygons is a fundamental concept in geometry that helps us understand how angles in polygons behave. Let's explore this fascinating topic in detail.

What is a Polygon?
A polygon is a closed figure made up of straight line segments. The word "polygon" comes from Greek, where "poly" means many and "gon" means angles. Some common examples include triangles (3 sides), quadrilaterals (4 sides), pentagons (5 sides), and hexagons (6 sides).

Interior Angles Sum Property:
The sum of interior angles of a polygon depends on the number of sides (n) it has. The formula is:
Sum of interior angles = (n - 2) × 180°

Let's understand why this formula works:
1. Any polygon can be divided into triangles by drawing diagonals from one vertex
2. A polygon with n sides can be divided into (n-2) triangles
3. Each triangle has an angle sum of 180°
4. Therefore, total angle sum = (n-2) × 180°

Examples:
- Triangle (n=3): (3-2) × 180° = 180°
- Quadrilateral (n=4): (4-2) × 180° = 360°
- Pentagon (n=5): (5-2) × 180° = 540°
- Hexagon (n=6): (6-2) × 180° = 720°

Regular Polygons:
In a regular polygon, all sides are equal and all angles are equal. To find each interior angle:
Measure of each interior angle = [(n-2) × 180°] ÷ n

For example:
- Regular pentagon: 540° ÷ 5 = 108° each
- Regular hexagon: 720° ÷ 6 = 120° each
- Regular octagon: 1080° ÷ 8 = 135° each

Exterior Angles:
An exterior angle is formed by extending a side of the polygon. Important properties:
1. Each exterior angle and its corresponding interior angle are supplementary (sum to 180°)
2. The sum of exterior angles of ANY polygon is always 360°
3. In a regular polygon, each exterior angle = 360° ÷ n

Diagonals in Polygons:
A diagonal is a line segment that connects two non-adjacent vertices.
- From one vertex, you can draw (n-3) diagonals
- Total number of diagonals = [n(n-3)] ÷ 2

Sample Problems:

1. Problem: Find the sum of interior angles of an octagon.
   Solution: n = 8
   Sum = (8-2) × 180° = 6 × 180° = 1080°

2. Problem: Each interior angle of a regular polygon is 144°. How many sides does it have?
   Solution: 
   - Let n be the number of sides
   - [(n-2) × 180°] ÷ n = 144°
   - 180n - 360 = 144n
   - 36n = 360
   - n = 10 (decagon)

3. Problem: In a regular pentagon, find:
   a) Each interior angle: 540° ÷ 5 = 108°
   b) Each exterior angle: 360° ÷ 5 = 72°
   c) Number of diagonals: [5(5-3)] ÷ 2 = 5

Summary:
- Interior angle sum = (n-2) × 180°
- Each interior angle in regular polygon = [(n-2) × 180°] ÷ n
- Sum of exterior angles = 360° (always)
- Each exterior angle in regular polygon = 360° ÷ n
- Number of diagonals = [n(n-3)] ÷ 2
- Number of triangles formed = (n-2)

These properties help us solve various geometric problems and understand the structure of polygons better. They are essential in architecture, engineering, and many real-world applications.`,
    quiz: {
        questions: [...easyQuestions, ...mediumQuestions]
    }
}; 