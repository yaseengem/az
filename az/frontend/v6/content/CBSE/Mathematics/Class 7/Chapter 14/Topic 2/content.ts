// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter14\Topic2\content.ts
import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const content: TopicContent = {
    id: "cl7_ch14_t2",
    title: "Rotational Symmetry: Order of Rotation",
    summary: "This topic covers rotational symmetry and the order of rotation for different shapes and objects.",
    requirements: [
        "Basic understanding of 2D shapes",
        "Knowledge of angles and degrees",
        "Understanding of line symmetry"
    ],
    intro: "Rotational symmetry is a fascinating property where a shape looks the same even after rotating it by a certain angle around a central point. In this topic, we'll learn how to identify rotational symmetry and calculate its order.",
    examples: [
        {
            problem: "Identify the order of rotational symmetry for a square.",
            solution: "A square has rotational symmetry of order 4. When we rotate it by 90°, 180°, 270°, and 360°, the square looks identical to its original position in all four positions."
        },
        {
            problem: "What is the smallest angle of rotation for an equilateral triangle?",
            solution: "An equilateral triangle has rotational symmetry of order 3. The smallest angle of rotation is 360° ÷ 3 = 120°."
        }
    ],
    explanation: `# Rotational Symmetry: Order of Rotation

## What is Rotational Symmetry?

Rotational symmetry is a fascinating property of shapes where they appear exactly the same after being rotated by certain angles around a fixed point. This fixed point is called the center of rotation. A shape has rotational symmetry if it can be rotated less than 360° and still look the same as before.

Unlike line symmetry, which involves folding or reflecting across a line, rotational symmetry involves spinning or rotating the shape around a central point.

## Order of Rotational Symmetry

The order of rotational symmetry tells us how many times a shape looks exactly the same during one complete 360° rotation. More specifically:

- A shape has rotational symmetry of order n if it looks exactly the same n times during one complete rotation.
- The angle of rotation is calculated as: 360° ÷ n

Every shape has at least rotational symmetry of order 1, which means it only looks the same after a complete 360° rotation.

## Examples of Rotational Symmetry

Let's explore rotational symmetry in various shapes:

### Equilateral Triangle

An equilateral triangle has rotational symmetry of order 3.
- It looks identical after rotations of 120°, 240°, and 360°.
- Angle of rotation: 360° ÷ 3 = 120°

### Square

A square has rotational symmetry of order 4.
- It looks identical after rotations of 90°, 180°, 270°, and 360°.
- Angle of rotation: 360° ÷ 4 = 90°

### Regular Pentagon

A regular pentagon has rotational symmetry of order 5.
- It looks identical after rotations of 72°, 144°, 216°, 288°, and 360°.
- Angle of rotation: 360° ÷ 5 = 72°

### Circle

A circle has infinite rotational symmetry (order ∞).
- It looks the same after rotation by any angle.
- Angle of rotation: Any angle

## Rotational Symmetry in Letters and Numbers

Certain letters and numbers also exhibit rotational symmetry:

- The letter H has rotational symmetry of order 2 (it looks the same after a 180° rotation).
- The letter Z also has rotational symmetry of order 2.
- The letter S has rotational symmetry of order 1 (in typical fonts) or 2 (in some fonts).
- The number 8 has rotational symmetry of order 2.
- The symbol ⋆ (star) typically has rotational symmetry matching the number of points it has.

## Finding the Order of Rotational Symmetry

To find the order of rotational symmetry:

1. Identify the center of rotation (usually the center of the shape for regular figures).
2. Determine how many times the shape coincides with itself during one complete 360° rotation.
3. The number of times it coincides is the order of rotational symmetry.

Alternatively, you can find the smallest angle by which you can rotate the shape so that it looks the same. Then:
- Order of rotational symmetry = 360° ÷ (smallest angle of rotation)

## Regular Polygons

For regular polygons, the order of rotational symmetry equals the number of sides:
- A regular n-sided polygon has rotational symmetry of order n.
- The angle of rotation for a regular n-sided polygon is 360° ÷ n.

## Relationship Between Line and Rotational Symmetry

Interesting connections exist between line symmetry and rotational symmetry:
- A shape with n lines of symmetry may not necessarily have rotational symmetry of order n.
- However, a regular polygon with n sides has both n lines of symmetry and rotational symmetry of order n.

## Practical Applications

Rotational symmetry has numerous practical applications:
- In art and design for creating balanced and aesthetically pleasing compositions
- In architecture for designing structures with specific symmetrical properties
- In engineering for designing parts that function the same way regardless of orientation
- In nature, many flowers, snowflakes, and other natural objects exhibit rotational symmetry

## Testing for Rotational Symmetry

To test if a shape has rotational symmetry:
1. Trace the shape onto a piece of paper.
2. Place a pin through the center of the shape.
3. Rotate the tracing and see if it matches the original shape before completing a full 360° rotation.
4. Count how many times it matches in a complete 360° rotation to find the order.

## Sample Problems

### Problem 1
A regular hexagon has rotational symmetry of what order?

**Solution:** A regular hexagon has 6 sides. For regular polygons, the order of rotational symmetry equals the number of sides. Therefore, a regular hexagon has rotational symmetry of order 6.

### Problem 2
What is the angle of rotation for a shape with rotational symmetry of order 12?

**Solution:** Angle of rotation = 360° ÷ Order = 360° ÷ 12 = 30°

### Problem 3
A shape has rotational symmetry of order 4. How many times will it look the same during a 720° rotation?

**Solution:** In a 360° rotation, it looks the same 4 times. In a 720° rotation (2 complete rotations), it will look the same 2 × 4 = 8 times.

## Summary

Rotational symmetry is a property where a shape looks identical after certain rotations around a central point. The order of rotational symmetry tells us how many times a shape coincides with itself during one complete 360° rotation.

Key points to remember:
- The order of rotational symmetry is the number of times a shape coincides with itself during a complete 360° rotation.
- The angle of rotation is calculated as 360° divided by the order.
- Every shape has at least rotational symmetry of order 1.
- Regular polygons with n sides have rotational symmetry of order n.
- Circles have infinite rotational symmetry.

Understanding rotational symmetry helps us appreciate the mathematical patterns in the world around us, from the petals of a flower to the design of modern architecture.`,

    quiz: {
        questions: [...easyQuestions, ...mediumQuestions]
    }
};
