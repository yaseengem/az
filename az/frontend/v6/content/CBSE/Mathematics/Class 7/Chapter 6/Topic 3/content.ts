// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter6\Topic3\content.ts
import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
  id: 'cl7_ch6_t3',
  topicNumber: 3,
  topicName: "Pythagoras Theorem: Verification and Applications",
  duration: 45,
  description: "Understanding the Pythagoras theorem, its verification through various methods, and applying it to solve real-world problems",
  explanation: `# Pythagoras Theorem: Verification and Applications 📐

## Introduction to Pythagoras Theorem 🔍

The Pythagoras Theorem is one of the most famous theorems in mathematics! Named after the ancient Greek mathematician Pythagoras, this theorem establishes a fundamental relationship between the three sides of a right-angled triangle.

A right-angled triangle has one angle that measures exactly 90° (a right angle). In such a triangle, the side opposite to the right angle is called the "hypotenuse," and it's always the longest side. The other two sides are sometimes called the "legs" of the triangle.

The Pythagoras Theorem states:

> **In a right-angled triangle, the square of the length of the hypotenuse is equal to the sum of squares of the lengths of the other two sides.**

If we call the hypotenuse 'c' and the other two sides 'a' and 'b', then:
**a² + b² = c²**

This elegant equation has countless applications in mathematics, science, engineering, and everyday life! Let's explore this fascinating theorem further. 🚀

## Verification of the Pythagoras Theorem 🧐

There are many ways to verify the Pythagoras Theorem. Let's look at a few interesting methods:

### 1. Area-Based Verification 📏

One of the most intuitive ways to understand the theorem is through areas:

- Draw a right-angled triangle with sides 'a', 'b', and hypotenuse 'c'
- Construct squares on each side of the triangle
- The square on side 'a' has area a²
- The square on side 'b' has area b²
- The square on side 'c' has area c²

The theorem states that the sum of the areas of the two smaller squares (a² + b²) equals the area of the largest square (c²).

You can verify this by measuring and calculating these areas for different right-angled triangles!

### 2. Rearrangement Method 🧩

Another way to verify:
- Draw a large square with side length (a + b)
- Inside this square, arrange four identical right-angled triangles (with sides a, b, and c)
- The remaining space in the center forms a square with side length c (the hypotenuse)
- The area of the large square is (a + b)²
- The area of the four triangles is 4 × (½ × a × b) = 2ab
- The area of the inner square is c²

Setting up an equation:
(a + b)² = 4 × (½ × a × b) + c²
a² + 2ab + b² = 2ab + c²
a² + b² = c²

And there we have the Pythagoras Theorem! ✓

## Applying the Pythagoras Theorem to Find Unknown Sides ✏️

The Pythagoras Theorem is incredibly useful for finding unknown sides in right-angled triangles.

### Finding the Hypotenuse

If we know the two legs (a and b) of a right-angled triangle, we can find the hypotenuse (c) using:
c = √(a² + b²)

**Example 1:** A right-angled triangle has sides 3 cm and 4 cm. Find the length of the hypotenuse.
Solution:
c = √(3² + 4²) = √(9 + 16) = √25 = 5 cm

### Finding a Leg

If we know the hypotenuse (c) and one leg (a) of a right-angled triangle, we can find the other leg (b) using:
b = √(c² - a²)

**Example 2:** A right-angled triangle has hypotenuse 13 cm and one side 5 cm. Find the length of the other side.
Solution:
b = √(13² - 5²) = √(169 - 25) = √144 = 12 cm

## Special Right Triangles 🌟

Some right-angled triangles have special properties that make them easy to remember:

### 1. The 3-4-5 Triangle

This is the simplest integer-valued right triangle:
- If a = 3 and b = 4, then c = 5
- Any multiple of these values (like 6-8-10 or 9-12-15) also forms a right triangle

### 2. The 5-12-13 Triangle

Another integer-valued right triangle:
- If a = 5 and b = 12, then c = 13

### 3. The 45-45-90 Triangle (Isosceles Right Triangle)

In this special triangle:
- Two angles are 45° each
- Two sides are equal (let's call them 'a')
- The hypotenuse equals a × √2

### 4. The 30-60-90 Triangle

In this special triangle:
- If the shortest side is of length 'a'
- Then the middle side is a × √3
- And the hypotenuse is 2a

## Real-Life Applications of the Pythagoras Theorem 🌆

The Pythagoras Theorem has countless practical applications:

### 1. Construction and Architecture 🏗️

Builders use the theorem to:
- Ensure corners are perfectly square (by measuring the diagonal)
- Calculate distances across spaces without direct measurement
- Design stable structures with proper support

### 2. Navigation and Travel 🧭

The theorem helps in:
- Calculating the shortest distance between two points
- Finding the straight-line distance across obstacles
- Planning efficient routes

### 3. Sports and Games 🏀

Athletes and game designers use the theorem for:
- Calculating field dimensions
- Planning game strategies involving distances
- Setting up equipment at proper angles

### 4. Everyday Problem Solving 🔧

You might use the Pythagoras Theorem to:
- Find how far a ladder will reach up a wall
- Determine the diagonal size of a TV screen or monitor
- Calculate the straight-line distance between two locations on a map

## Practice Problems to Try 📝

1. A ladder 10 meters long reaches a window 8 meters above the ground. How far is the foot of the ladder from the base of the wall?

2. The diagonal of a rectangle is 25 cm, and its length is 24 cm. Find the width of the rectangle.

3. A boat travels 3 km east and then 4 km north. How far is the boat from its starting point as the crow flies?

4. A baseball diamond is a square with sides of 90 feet. What is the distance from home plate to second base (diagonally across the square)?

## Verifying Whether a Triangle is Right-Angled 📊

You can use the Pythagoras Theorem to check if a triangle is right-angled:

- Measure all three sides of the triangle
- Square the lengths of all sides
- If the sum of the squares of two sides equals the square of the third side, then the triangle is right-angled

**Example:** A triangle has sides 5 cm, 12 cm, and 13 cm. Is it right-angled?
Solution:
5² + 12² = 25 + 144 = 169
13² = 169
Since 5² + 12² = 13², the triangle is right-angled.

## The Converse of the Pythagoras Theorem ↩️

The converse of the Pythagoras Theorem is also true:

> **If the square of one side of a triangle equals the sum of the squares of the other two sides, then the triangle is a right-angled triangle.**

This means that if a² + b² = c² holds true for a triangle with sides a, b, and c, then the angle between sides a and b is a right angle.

## Summary ✨

The Pythagoras Theorem is a powerful mathematical concept that helps us understand the relationship between the sides of a right-angled triangle:

- **The Formula**: In a right-angled triangle, if a and b are the legs and c is the hypotenuse, then a² + b² = c²

- **Key Applications**:
  - Finding unknown sides in right-angled triangles
  - Verifying if a triangle is right-angled
  - Solving real-world problems involving distances and heights
  - Creating accurate measurements in construction and design

- **Special Right Triangles**: Certain right triangles (like 3-4-5, 5-12-13, 45-45-90, and 30-60-90) have easily identifiable patterns

This theorem serves as a cornerstone of geometry and has countless practical applications in our daily lives. It demonstrates how mathematical principles can help us understand and navigate the world around us! 📐✨`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
