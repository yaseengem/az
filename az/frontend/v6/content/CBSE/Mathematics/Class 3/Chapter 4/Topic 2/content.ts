// filepath: content/CBSE/Mathematics/Class 3/Chapter4/Topic2/content.ts
import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl3_ch4_t2',
  topicNumber: 2,
  topicName: "Comparing lengths",
  duration: 35,
  description: "Understanding how to compare and order lengths using standard units (cm, m), and solving comparison problems",
  explanation: `
# Comparing Lengths

After learning about standard units of length measurement, the next important skill is to compare different lengths. When we compare lengths, we determine which object is longer or shorter, or if they have the same length.

## Why Do We Need to Compare Lengths?

Comparing lengths helps us:
- Arrange objects in order of size
- Decide if something will fit in a given space
- Choose the right size of an object for a specific purpose
- Solve everyday problems involving lengths

## Rules for Comparing Lengths

To compare lengths correctly, we need to follow these important rules:

### Rule 1: Use the Same Unit
The most important rule is that we must always compare lengths using the same unit of measurement. We cannot directly compare a length in centimeters with a length in meters.

For example, we cannot directly compare 150 cm with 2 m. We need to convert one of them:
- 150 cm or 1.5 m
- 2 m or 200 cm

Now we can compare: 150 cm < 200 cm or 1.5 m < 2 m

### Rule 2: Line Up the Starting Points
When comparing the lengths of objects directly (without measuring), make sure to line up the starting points of both objects.

## Converting Units for Comparison

When comparing lengths with different units, we need to convert them to the same unit first. Let's review how to convert between meters and centimeters:

- To convert from meters to centimeters: Multiply by 100
  - Example: 2 m = 2 × 100 = 200 cm
  
- To convert from centimeters to meters: Divide by 100
  - Example: 350 cm = 350 ÷ 100 = 3.5 m

### Example 1:
Compare 2 m and 180 cm.

Step 1: Convert to the same unit.
2 m = 200 cm

Step 2: Compare the numbers.
200 cm > 180 cm

Therefore, 2 m > 180 cm

### Example 2:
Compare 250 cm and 2.6 m.

Step 1: Convert to the same unit.
2.6 m = 260 cm

Step 2: Compare the numbers.
250 cm < 260 cm

Therefore, 250 cm < 2.6 m

## Using Symbols for Comparison

When comparing lengths, we use these symbols:
- ">" means "greater than" (longer than)
- "<" means "less than" (shorter than)
- "=" means "equal to" (same length as)

For example:
- 5 m > 450 cm (because 5 m = 500 cm)
- 70 cm < 1 m (because 1 m = 100 cm)
- 200 cm = 2 m

## Comparing More Than Two Lengths

When we have more than two lengths to compare, we can:

1. Convert all lengths to the same unit
2. Compare the numbers
3. Arrange them in ascending order (smallest to largest) or descending order (largest to smallest)

### Example:
Arrange these lengths in ascending order: 1 m 50 cm, 90 cm, 2 m, 125 cm

Step 1: Convert all to centimeters.
- 1 m 50 cm = 150 cm
- 90 cm = 90 cm
- 2 m = 200 cm
- 125 cm = 125 cm

Step 2: Compare and arrange.
90 cm < 125 cm < 150 cm < 200 cm

So the ascending order is: 90 cm, 125 cm, 1 m 50 cm, 2 m

## Working with Mixed Units

Sometimes, lengths are given as mixed units (e.g., 2 m 35 cm). When comparing mixed units:

1. You can convert everything to the smaller unit (usually centimeters)
2. Or you can compare the larger unit first, and only compare the smaller unit if the larger units are equal

### Example:
Compare 2 m 15 cm and 2 m 50 cm.

Method 1: Convert to centimeters.
- 2 m 15 cm = 215 cm
- 2 m 50 cm = 250 cm
So 2 m 15 cm < 2 m 50 cm

Method 2: Compare meters, then centimeters.
- Both have 2 meters
- 15 cm < 50 cm
So 2 m 15 cm < 2 m 50 cm

## Finding the Difference in Lengths

Sometimes we need to find how much longer or shorter one object is compared to another. To do this:

1. Convert both lengths to the same unit
2. Subtract the smaller length from the larger length

### Example 1:
Ravi is 1 m 45 cm tall. Seema is 1 m 35 cm tall. How much taller is Ravi than Seema?

Step 1: Convert to centimeters.
- Ravi: 1 m 45 cm = 145 cm
- Seema: 1 m 35 cm = 135 cm

Step 2: Find the difference.
145 cm - 135 cm = 10 cm

So Ravi is 10 cm taller than Seema.

### Example 2:
A pencil is 15 cm long. An eraser is 5 cm long. How much longer is the pencil than the eraser?

Step 1: Both measurements are already in the same unit (cm).

Step 2: Find the difference.
15 cm - 5 cm = 10 cm

So the pencil is 10 cm longer than the eraser.

## Real-Life Problems Involving Comparing Lengths

### Problem 1: Will it fit?
Meera wants to put a 75 cm long bookshelf on a wall that is 1 m wide. Will it fit?

Solution:
Wall width = 1 m = 100 cm
Bookshelf length = 75 cm
Since 75 cm < 100 cm, the bookshelf will fit on the wall.

### Problem 2: How much more rope is needed?
Raj has a rope that is 3 m 25 cm long. He needs a rope that is 4 m long. How much more rope does he need?

Solution:
Raj's rope = 3 m 25 cm = 325 cm
Required rope = 4 m = 400 cm
Extra rope needed = 400 cm - 325 cm = 75 cm

So Raj needs 75 cm more rope.

### Problem 3: Who jumped farther?
In a long jump competition, Arun jumped 2 m 45 cm, Bala jumped 2 m 50 cm, and Chitra jumped 2 m 35 cm. Who jumped the farthest? Who jumped the least distance?

Solution:
Converting to centimeters:
- Arun: 2 m 45 cm = 245 cm
- Bala: 2 m 50 cm = 250 cm
- Chitra: 2 m 35 cm = 235 cm

Comparing: 235 cm < 245 cm < 250 cm

So Bala jumped the farthest (250 cm), and Chitra jumped the least distance (235 cm).

## Ordering Objects by Length

When we arrange objects in order of their lengths, we can use these terms:

- **Ascending order**: Arranging from shortest to longest
- **Descending order**: Arranging from longest to shortest

### Example:
Arrange these lengths in descending order: 1 m, 150 cm, 65 cm, 2 m

Step 1: Convert to the same unit (cm).
- 1 m = 100 cm
- 150 cm = 150 cm
- 65 cm = 65 cm
- 2 m = 200 cm

Step 2: Arrange from largest to smallest.
200 cm > 150 cm > 100 cm > 65 cm

So the descending order is: 2 m, 150 cm, 1 m, 65 cm

## Tips for Comparing Lengths

1. **Always convert to the same unit** before comparing.
2. **Be careful with decimal points** when converting (e.g., 1.5 m = 150 cm, not 15 cm).
3. **Check your work** by converting back to the original unit.
4. **Use visual aids** when possible to help with understanding.
5. **Estimate first** to check if your answer makes sense.

## Common Mistakes to Avoid

- Forgetting to convert to the same unit before comparing
- Converting incorrectly (e.g., multiplying by 10 instead of 100 when converting from meters to centimeters)
- Mixing up the comparison symbols (> and <)
- Not lining up starting points when comparing objects directly

## Practice Problems

1. Which is longer: 3 m or 250 cm?
   Solution: 3 m = 300 cm, and 300 cm > 250 cm, so 3 m is longer.

2. Arrange in ascending order: 1 m 25 cm, 95 cm, 150 cm
   Solution: Convert to cm: 125 cm, 95 cm, 150 cm. Ascending order: 95 cm, 125 cm, 150 cm.

3. A ribbon is 2 m 50 cm long. Another ribbon is 230 cm long. Which ribbon is longer and by how much?
   Solution: First ribbon = 250 cm, Second ribbon = 230 cm. The first ribbon is longer by 250 cm - 230 cm = 20 cm.

## Summary

In this lesson, we learned:
- The importance of comparing lengths using the same unit
- How to convert between meters and centimeters for comparison
- How to use comparison symbols: >, <, =
- How to find the difference between two lengths
- How to arrange multiple lengths in ascending or descending order
- How to solve real-life problems involving length comparisons

Remember, comparing lengths accurately is an important skill that helps us solve many everyday problems. Always make sure to convert to the same unit before making comparisons!
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};

