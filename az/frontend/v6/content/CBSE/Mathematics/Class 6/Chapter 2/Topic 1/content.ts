import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl6_ch2_t1',
  topicNumber: 1,
  topicName: "Properties of whole numbers",
  duration: 40,
  description: "Learn about the different properties of whole numbers, including closure, commutative, associative, distributive, and identity properties with examples.",
  explanation: `
# Properties of Whole Numbers 🔢

## Introduction to Whole Numbers

Whole numbers are the numbers starting from 0 and going up: 0, 1, 2, 3, 4, ... 🚀
Unlike natural numbers (which start from 1), whole numbers include zero, which represents "nothing" or "empty quantity." These numbers are fundamental building blocks of mathematics that we use daily in counting, calculations, and problem solving.

## What are Whole Numbers?

Whole numbers include:
- Zero (0)
- All positive integers (1, 2, 3, ...)

On a number line, whole numbers are represented as equally spaced points starting from 0 and extending indefinitely to the right:

0—1—2—3—4—5—6—7—8—9→

What's important about whole numbers is that they don't include:
- Fractions (like 1/2, 3/4)
- Decimals (like 0.5, 2.3)
- Negative numbers (like -1, -5)

## Key Properties of Whole Numbers

Whole numbers follow several important mathematical properties. Let's explore each property with easy-to-understand examples! 📝

### 1. Closure Property

The **closure property** states that when you perform certain operations on whole numbers, the result is always a whole number.

**Closure under Addition**: If a and b are whole numbers, then a + b is also a whole number.
- Example: 5 + 3 = 8 (8 is a whole number)
- Example: 0 + 7 = 7 (7 is a whole number)

**Closure under Multiplication**: If a and b are whole numbers, then a × b is also a whole number.
- Example: 4 × 6 = 24 (24 is a whole number)
- Example: 0 × 9 = 0 (0 is a whole number)

⚠️ But whole numbers are **NOT closed** under subtraction or division:
- 3 - 5 = -2 (not a whole number as it's negative)
- 7 ÷ 2 = 3.5 (not a whole number as it's a decimal)

### 2. Commutative Property

The **commutative property** states that changing the order of numbers doesn't affect the result.

**Commutative Property of Addition**: a + b = b + a
- Example: 4 + 7 = 7 + 4 = 11

**Commutative Property of Multiplication**: a × b = b × a
- Example: 3 × 8 = 8 × 3 = 24

Think about adding or multiplying in any order: the result is the same! 🔄

### 3. Associative Property

The **associative property** states that the grouping of numbers doesn't affect the result.

**Associative Property of Addition**: (a + b) + c = a + (b + c)
- Example: (2 + 3) + 4 = 2 + (3 + 4)
- Both equal 9: 5 + 4 = 9 and 2 + 7 = 9

**Associative Property of Multiplication**: (a × b) × c = a × (b × c)
- Example: (2 × 3) × 4 = 2 × (3 × 4)
- Both equal 24: 6 × 4 = 24 and 2 × 12 = 24

This property lets us regroup numbers when solving problems! 🧩

### 4. Distributive Property

The **distributive property** states that multiplication distributes over addition.

**a × (b + c) = (a × b) + (a × c)**
- Example: 3 × (4 + 2) = (3 × 4) + (3 × 2)
- Both equal 18: 3 × 6 = 18 and 12 + 6 = 18

This property is super useful in algebra and when working with expressions! 📊

### 5. Identity Property

The **identity property** states that there exists a number that, when used in an operation with any other number, gives that number as the result.

**Additive Identity**: a + 0 = a = 0 + a
- Example: 7 + 0 = 7 = 0 + 7
- Zero is the additive identity

**Multiplicative Identity**: a × 1 = a = 1 × a
- Example: 9 × 1 = 9 = 1 × 9
- One is the multiplicative identity

Zero and one are special numbers with these unique properties! ⭐

### 6. The Role of Zero in Multiplication

Zero has a special property in multiplication:
- a × 0 = 0 = 0 × a (for any whole number a)
- Example: 5 × 0 = 0 and 0 × 12 = 0

This is often called the **zero property** of multiplication! 0️⃣

## Real-Life Applications of Whole Number Properties

Understanding these properties helps us in many day-to-day scenarios:

1. **Shopping** 🛒: When adding multiple item prices, we can add them in any order (commutative property) or group them differently (associative property) to get the same total.

2. **Cooking** 👨‍🍳: When doubling a recipe that calls for 2 cups of flour and 1 cup of sugar, we can use the distributive property:
   2 × (2 cups flour + 1 cup sugar) = (2 × 2 cups flour) + (2 × 1 cup sugar) = 4 cups flour + 2 cups sugar

3. **Money Counting** 💰: When counting currency (which uses whole numbers), we can count in any order and still get the correct total (commutative property).

## Sample Problems and Solutions

### Problem 1:
If you have 5 red marbles and 7 blue marbles, does it matter which color you count first?
- Solution: No, because of the commutative property of addition.
- 5 + 7 = 7 + 5 = 12 marbles in total

### Problem 2:
Three friends each brought 4 cookies to a picnic. How many cookies do they have in total?
- Solution: We can use the multiplication property: 3 × 4 = 12 cookies

### Problem 3:
A teacher needs to distribute 6 pencils to each of 5 students. Show two ways to calculate the total pencils needed.
- Solution 1: 5 × 6 = 30 pencils (using commutative property)
- Solution 2: 6 × 5 = 30 pencils

### Problem 4:
Prove that whole numbers are closed under addition by using two examples.
- Example 1: 4 + 9 = 13 (13 is a whole number)
- Example 2: 0 + 16 = 16 (16 is a whole number)

## Interesting Facts About Whole Numbers

- The smallest whole number is 0.
- There is no largest whole number—they go on forever!
- The word "integer" comes from the Latin word "integer" meaning "whole" or "intact."
- Ancient civilizations like Egypt and Babylon developed number systems using whole numbers thousands of years ago.
- Zero was not always considered a number—it was developed as a concept around 3rd century BC in Babylon, later refined in India around 5th century.

## Common Mistakes to Avoid

1. ❌ Thinking that subtraction always gives a whole number  
   ✅ Remember: 5 - 8 = -3, which is not a whole number

2. ❌ Assuming division always gives a whole number  
   ✅ Remember: 7 ÷ 2 = 3.5, which is not a whole number

3. ❌ Confusing natural numbers and whole numbers  
   ✅ Remember: 0 is a whole number but not a natural number

## Practice Questions

1. If 8 + 12 = 20, what is 12 + 8?
2. If (3 × 4) × 5 = 60, what is 3 × (4 × 5)?
3. Use the distributive property to find 7 × (10 + 3).
4. What is the result of 42 + 0?
5. What is the result of 17 × 1?

## Summary

In this topic, we've explored the fundamental properties of whole numbers:

✅ **Closure Property**: Addition and multiplication of whole numbers always give whole numbers.
✅ **Commutative Property**: The order of numbers doesn't affect the result in addition and multiplication.
✅ **Associative Property**: The grouping of numbers doesn't affect the result in addition and multiplication.
✅ **Distributive Property**: Multiplication distributes over addition.
✅ **Identity Property**: Zero is the additive identity, and one is the multiplicative identity.

Understanding these properties helps build a strong foundation for more advanced mathematics and helps us solve problems more efficiently in our daily lives. The beauty of these properties lies in their simplicity and how they consistently work for all whole numbers! 🌟
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
