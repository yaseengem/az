// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter9\Topic2\content.ts
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl7_ch9_t2',
  topicNumber: 2,
  topicName: "Operations: addition, subtraction, multiplication, division",
  duration: 45,
  description: "Understanding how to perform operations on rational numbers, their properties, and applications in solving problems",
  explanation: `
# Operations on Rational Numbers 🧮

Welcome to the world of rational number operations! 🌟 In this topic, we'll learn how to add, subtract, multiply, and divide rational numbers. Understanding these operations is crucial for solving mathematical problems in various contexts. Let's dive in! 🚀

## What are Rational Numbers? 📝

Before we start working with operations, let's quickly review what rational numbers are:

- **Definition**: A rational number is a number that can be expressed in the form p/q, where p and q are integers and q ≠ 0.
- **Examples**: 1/2, -3/4, 5, 0, -7, 2.5 (can be written as 5/2)
- **Representation**: Every rational number corresponds to a point on the number line

## Addition of Rational Numbers ➕

Adding rational numbers involves finding a common denominator and then adding the numerators. Let's explore this process:

### Steps for Addition:
1. **Convert to the same denominator**: Find the Least Common Multiple (LCM) of the denominators
2. **Express each fraction with the common denominator**
3. **Add the numerators** while keeping the common denominator
4. **Simplify** the result if needed

### Example 1:
Let's add 2/3 and 5/6:
- The LCM of 3 and 6 is 6
- Convert 2/3 to an equivalent fraction with denominator 6: (2/3) × (2/2) = 4/6
- Now add: 4/6 + 5/6 = 9/6 = 3/2 (after simplifying)

### Example 2:
Let's add two negative rational numbers, -2/5 and -3/10:
- The LCM of 5 and 10 is 10
- Convert -2/5 to an equivalent fraction: (-2/5) × (2/2) = -4/10
- Add: -4/10 + (-3/10) = -7/10

### Properties of Addition:
1. **Closure Property**: The sum of two rational numbers is always a rational number
2. **Commutative Property**: a + b = b + a
   * Example: 2/3 + 5/7 = 5/7 + 2/3
3. **Associative Property**: (a + b) + c = a + (b + c)
   * Example: (1/2 + 3/4) + 1/5 = 1/2 + (3/4 + 1/5)
4. **Additive Identity**: Zero (0) is the additive identity for rational numbers
   * Example: 5/8 + 0 = 5/8
5. **Additive Inverse**: Every rational number has an additive inverse
   * Example: The additive inverse of 3/7 is -3/7 because 3/7 + (-3/7) = 0

## Subtraction of Rational Numbers ➖

Subtraction of rational numbers is similar to addition, but we add the additive inverse instead:

### Steps for Subtraction:
1. **Convert to same denominator**: Find the LCM of the denominators
2. **Express each fraction with the common denominator**
3. **Subtract the numerators** while keeping the common denominator
4. **Simplify** the result if needed

**Note**: a - b = a + (-b)

### Example 1:
Let's subtract 3/8 from 7/12:
- The LCM of 8 and 12 is 24
- Convert fractions: 7/12 = 14/24 and 3/8 = 9/24
- Subtract: 14/24 - 9/24 = 5/24

### Example 2:
Let's find 2/5 - (-3/10):
- The LCM of 5 and 10 is 10
- Convert fractions: 2/5 = 4/10 and -3/10 remains the same
- Subtract: 4/10 - (-3/10) = 4/10 + 3/10 = 7/10

**Important**: When subtracting a negative number, we add its absolute value!

## Multiplication of Rational Numbers ✖️

Multiplication of rational numbers is more straightforward than addition or subtraction:

### Steps for Multiplication:
1. **Multiply the numerators** together
2. **Multiply the denominators** together
3. **Simplify** the resulting fraction if needed

### Example 1:
Let's multiply 3/4 and 2/5:
- (3/4) × (2/5) = (3×2)/(4×5) = 6/20 = 3/10 (after simplifying)

### Example 2:
Let's multiply three rational numbers: (1/2) × (-3/5) × (4/7)
- (1/2) × (-3/5) × (4/7) = (1×-3×4)/(2×5×7) = -12/70 = -6/35

### Rules for Signs in Multiplication:
- Positive × Positive = Positive
- Negative × Negative = Positive
- Positive × Negative = Negative
- Negative × Positive = Negative

### Properties of Multiplication:
1. **Closure Property**: The product of two rational numbers is always a rational number
2. **Commutative Property**: a × b = b × a
   * Example: (2/3) × (5/7) = (5/7) × (2/3)
3. **Associative Property**: (a × b) × c = a × (b × c)
   * Example: ((1/2) × (3/4)) × (2/5) = (1/2) × ((3/4) × (2/5))
4. **Multiplicative Identity**: 1 is the multiplicative identity for rational numbers
   * Example: (5/8) × 1 = 5/8
5. **Multiplicative Inverse**: Every non-zero rational number has a multiplicative inverse
   * Example: The multiplicative inverse of 3/7 is 7/3 because (3/7) × (7/3) = 1
6. **Distributive Property**: a × (b + c) = a × b + a × c
   * Example: (2/3) × ((1/2) + (3/4)) = (2/3) × (1/2) + (2/3) × (3/4)

## Division of Rational Numbers ➗

Division of rational numbers is essentially multiplication by the reciprocal:

### Steps for Division:
1. **Convert division to multiplication** by the reciprocal (inverse) of the divisor
2. **Follow multiplication steps**
3. **Simplify** if needed

**Note**: a ÷ b = a × (1/b) for b ≠ 0

### Example 1:
Let's divide 2/3 by 4/5:
- (2/3) ÷ (4/5) = (2/3) × (5/4) = (2×5)/(3×4) = 10/12 = 5/6

### Example 2:
Let's find (-3/7) ÷ (-2/5):
- (-3/7) ÷ (-2/5) = (-3/7) × (-5/2) = 15/14 (negative ÷ negative = positive)

### Rules for Signs in Division:
- Positive ÷ Positive = Positive
- Negative ÷ Negative = Positive
- Positive ÷ Negative = Negative
- Negative ÷ Positive = Negative

### Important Note:
- Division by zero is **undefined**
- Any number divided by itself (except 0) is 1
- Zero divided by any non-zero number is 0

## Real-Life Applications 🌍

Rational number operations have numerous applications in our daily lives:

1. **Cooking and Recipes** 🍳
   - Adjusting recipe proportions (e.g., 3/4 cup of flour × 2/3 for a smaller batch)
   - Converting between different units of measurement

2. **Money and Finances** 💰
   - Calculating discounts (e.g., 2/5 off the original price)
   - Interest calculations for loans and savings
   - Budget planning and expense calculations

3. **Construction and Carpentry** 🔨
   - Measuring and cutting materials (e.g., 3/8 inch thickness)
   - Calculating quantities needed for projects

4. **Science and Engineering** 🔬
   - Concentration calculations in chemistry
   - Physics equations involving ratios and proportions
   - Data analysis and statistical calculations

## Sample Problems and Solutions 📚

Let's work through some examples to see how these operations are applied:

### Problem 1:
A baker uses 3/4 cup of sugar for a cake recipe. If she wants to make 1/3 of the recipe, how much sugar will she need?

**Solution**:
Amount of sugar needed = (3/4) × (1/3) = (3×1)/(4×3) = 3/12 = 1/4 cup

### Problem 2:
John completed 2/5 of his homework on Monday and 1/3 of his homework on Tuesday. What fraction of the homework has he completed in total?

**Solution**:
Total homework completed = 2/5 + 1/3 = (6/15) + (5/15) = 11/15

### Problem 3:
A water tank is 3/4 full. If 2/5 of the water is used, what fraction of the tank is still filled with water?

**Solution**:
Water remaining = 3/4 - (3/4 × 2/5) = 3/4 - 6/20 = 15/20 - 6/20 = 9/20

## Tips for Working with Rational Numbers 💡

1. **Always simplify your answers** to the lowest terms
2. **Pay attention to signs** when working with negative rational numbers
3. **Use the LCM method** for addition and subtraction to find a common denominator
4. **Remember** that subtraction is addition of the additive inverse
5. **For division**, multiply by the reciprocal of the divisor
6. **Check your answer** by performing a reverse operation if possible

## Common Mistakes to Avoid ⚠️

1. **Adding/subtracting rational numbers without finding a common denominator**
2. **Forgetting to simplify** the final answer
3. **Incorrectly handling negative signs** in calculations
4. **Dividing by zero** (which is undefined)
5. **Incorrectly finding reciprocals** for multiplication or division

## Summary 📌

In this topic, we've learned how to:
- Add rational numbers by finding common denominators
- Subtract rational numbers using the concept of additive inverse
- Multiply rational numbers by multiplying numerators and denominators
- Divide rational numbers by multiplying by the reciprocal of the divisor
- Apply various properties of operations such as closure, commutative, associative, identity, and inverse
- Solve real-life problems using rational number operations

Understanding operations on rational numbers is essential for advancing to more complex mathematical concepts. Practice regularly with a variety of problems to strengthen your skills! 💪

Remember, when working with rational numbers, always focus on finding common denominators for addition and subtraction, and don't forget to simplify your final answers. With practice, you'll become proficient at performing these operations quickly and accurately! 🎯
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
