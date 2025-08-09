import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl10_ch3_t2',
  topicNumber: 2,
  topicName: "Algebraic methods: substitution, elimination, cross-multiplication",
  duration: 45,
  description: "Understanding algebraic methods for solving pairs of linear equations in two variables: substitution, elimination, and cross-multiplication techniques.",
  explanation: `
# Algebraic Methods for Solving Linear Equations 🧮

Linear equations are the foundation of many mathematical problems and real-world applications. When we need to find values that satisfy two linear equations simultaneously, we use algebraic methods for solving pairs of linear equations in two variables. In this topic, we'll explore three powerful methods: substitution, elimination, and cross-multiplication. Let's dive in! 🚀

## Standard Form of Pair of Linear Equations 📝

Before solving equations, it's helpful to express them in standard form:

a₁x + b₁y + c₁ = 0
a₂x + b₂y + c₂ = 0

Where a₁, b₁, c₁, a₂, b₂, c₂ are real numbers and a₁, b₁, a₂, b₂ are not all zero.

## Method 1: Substitution Method 🔁

The substitution method involves expressing one variable in terms of the other from one equation and then substituting this expression into the second equation.

### Steps for Substitution Method:
1. Choose one equation (preferably the simpler one) and express one variable in terms of the other.
2. Substitute this expression into the other equation.
3. Solve the resulting equation with one variable.
4. Substitute the value back to find the other variable.
5. Check the solution in both original equations.

### Example 1: 🌟

Solve these equations using the substitution method:
2x + 3y = 8
5x - 2y = 1

**Step 1:** Express x in terms of y from the first equation:
2x + 3y = 8
2x = 8 - 3y
x = (8 - 3y)/2 = 4 - 3y/2

**Step 2:** Substitute this into the second equation:
5(4 - 3y/2) - 2y = 1
20 - 15y/2 - 2y = 1
20 - 7.5y - 2y = 1
20 - 9.5y = 1
-9.5y = 1 - 20 = -19
y = 2

**Step 3:** Substitute back to find x:
x = 4 - 3(2)/2 = 4 - 3 = 1

**Step 4:** Check the solution (1, 2) in both equations:
2(1) + 3(2) = 2 + 6 = 8 ✓
5(1) - 2(2) = 5 - 4 = 1 ✓

The solution is x = 1, y = 2.

### Advantages of Substitution Method: ✅
- Works well when one variable has coefficient 1
- Generally straightforward conceptually
- Sometimes involves simpler arithmetic than other methods

### Disadvantages of Substitution Method: ⚠️
- Can lead to fractional expressions that complicate arithmetic
- May be inefficient when both equations have complex coefficients

## Method 2: Elimination Method ➖

The elimination method involves adding or subtracting the equations to eliminate one variable, then solving for the remaining variable.

### Steps for Elimination Method:
1. Multiply one or both equations by appropriate numbers to make the coefficient of one variable the same in both equations (or with opposite signs).
2. Add or subtract the equations to eliminate one variable.
3. Solve for the remaining variable.
4. Substitute back into one of the original equations to find the other variable.
5. Check the solution in both original equations.

### Example 2: 🌟

Solve these equations using the elimination method:
3x + 4y = 10
2x - 5y = 3

**Step 1:** To eliminate x, multiply the second equation by 3/2:
3x + 4y = 10
3x - 7.5y = 4.5

**Step 2:** Subtract the second equation from the first:
3x + 4y = 10
3x - 7.5y = 4.5
---------------
11.5y = 5.5
y = 5.5/11.5 = 0.5 = 1/2

**Step 3:** Substitute y = 1/2 into the first equation:
3x + 4(1/2) = 10
3x + 2 = 10
3x = 8
x = 8/3

**Step 4:** Check the solution (8/3, 1/2) in both equations:
3(8/3) + 4(1/2) = 8 + 2 = 10 ✓
2(8/3) - 5(1/2) = 16/3 - 5/2 = 16/3 - 15/6 = 32/6 - 15/6 = 17/6 = 3 ✓

The solution is x = 8/3, y = 1/2.

### Advantages of Elimination Method: ✅
- Often involves less algebraic manipulation than substitution
- Works well when coefficients are easily made equal or opposite
- Usually more efficient when looking for only one variable's value

### Disadvantages of Elimination Method: ⚠️
- May require multiplication by large numbers to align coefficients
- Can involve more arithmetic operations than other methods

## Method 3: Cross-Multiplication Method 🔄

The cross-multiplication method uses determinants to find the values of variables directly. It's particularly useful when we need the values of both variables.

### Formulas for Cross-Multiplication:
If a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0, then:

x = (b₁c₂ - b₂c₁)/(a₁b₂ - a₂b₁)
y = (c₁a₂ - c₂a₁)/(a₁b₂ - a₂b₁)

These formulas can be visualized using determinants:

x = |c₁ b₁|/|a₁ b₁| and y = |a₁ c₁|/|a₁ b₁|
    |c₂ b₂|  |a₂ b₂|      |a₂ c₂|  |a₂ b₂|

### Example 3: 🌟

Solve these equations using the cross-multiplication method:
4x - 5y - 3 = 0
3x + 2y - 11 = 0

First, identify the coefficients:
a₁ = 4, b₁ = -5, c₁ = -3
a₂ = 3, b₂ = 2, c₂ = -11

Calculate the denominator:
a₁b₂ - a₂b₁ = 4(2) - 3(-5) = 8 + 15 = 23

Calculate x:
x = (b₁c₂ - b₂c₁)/(a₁b₂ - a₂b₁)
  = ((-5)(-11) - 2(-3))/23
  = (55 + 6)/23
  = 61/23

Calculate y:
y = (c₁a₂ - c₂a₁)/(a₁b₂ - a₂b₁)
  = ((-3)(3) - (-11)(4))/23
  = (-9 + 44)/23
  = 35/23

**Check the solution (61/23, 35/23):**
4(61/23) - 5(35/23) - 3 = 244/23 - 175/23 - 69/23 = 0 ✓
3(61/23) + 2(35/23) - 11 = 183/23 + 70/23 - 253/23 = 0 ✓

The solution is x = 61/23, y = 35/23.

### Advantages of Cross-Multiplication Method: ✅
- Provides a direct formula for both variables
- No need for back-substitution
- Works well for complex coefficients
- Less prone to arithmetic errors in some cases

### Disadvantages of Cross-Multiplication Method: ⚠️
- Requires memorizing formulas
- May be cumbersome for simple equations where other methods are quicker
- Can involve more complex calculations

## Types of Solutions for a Pair of Linear Equations 📊

A pair of linear equations can have three types of solutions:

1. **Unique Solution**: When the lines intersect at exactly one point. This happens when a₁/a₂ ≠ b₁/b₂.

2. **No Solution**: When the lines are parallel but not coincident. This happens when a₁/a₂ = b₁/b₂ ≠ c₁/c₂.

3. **Infinitely Many Solutions**: When the lines are coincident (same line). This happens when a₁/a₂ = b₁/b₂ = c₁/c₂.

### Example of No Solution: 🌟

Solve: 2x + 3y = 5 and 4x + 6y = 15

Looking at the coefficients: a₁/a₂ = 2/4 = 1/2 and b₁/b₂ = 3/6 = 1/2, but c₁/c₂ = 5/15 = 1/3

Since a₁/a₂ = b₁/b₂ ≠ c₁/c₂, these lines are parallel and have no solution.

### Example of Infinitely Many Solutions: 🌟

Solve: 3x - 6y + 9 = 0 and 1x - 2y + 3 = 0

Looking at the coefficients: a₁/a₂ = 3/1 = 3, b₁/b₂ = -6/-2 = 3, and c₁/c₂ = 9/3 = 3

Since a₁/a₂ = b₁/b₂ = c₁/c₂, these equations represent the same line and have infinitely many solutions.

## Choosing the Right Method ⚖️

Each method has its strengths, and the choice depends on the specific equations:

- **Substitution** is best when one equation has a variable with coefficient 1, making it easy to isolate
- **Elimination** is preferred when coefficients can be easily matched to eliminate a variable
- **Cross-multiplication** is useful for finding both values directly or when other methods are cumbersome

## Real-Life Applications 🌍

Pairs of linear equations can model many real-world situations:

### Example 4: Mixture Problems 🧪

A chemist has two solutions of acid. The first solution is 50% acid and the second is 75% acid. How many liters of each solution should be mixed to get 10 liters of a 60% acid solution?

Let x = liters of 50% solution and y = liters of 75% solution.
From the total volume: x + y = 10
From the acid content: 0.5x + 0.75y = 0.6(10) = 6

Solving these equations:
x + y = 10
0.5x + 0.75y = 6

Using elimination:
0.5x + 0.5y = 5 (multiply first equation by 0.5)
0.5x + 0.75y = 6 (second equation as is)

Subtracting:
0.25y = 1
y = 4

Substituting back:
x + 4 = 10
x = 6

Therefore, we need 6 liters of 50% solution and 4 liters of 75% solution.

### Example 5: Cost Problems 💰

A person bought 5 pens and 3 pencils for ₹80. Another person bought 2 pens and 4 pencils of the same kind for ₹58. Find the cost of each pen and pencil.

Let x = cost of one pen and y = cost of one pencil.
First purchase: 5x + 3y = 80
Second purchase: 2x + 4y = 58

Using elimination:
10x + 6y = 160 (multiply first equation by 2)
10x + 20y = 290 (multiply second equation by 5)

Subtracting:
-14y = -130
y = 130/14 = 65/7

Substituting back:
5x + 3(65/7) = 80
5x + 195/7 = 80
5x = 80 - 195/7 = 560/7 - 195/7 = 365/7
x = 73/7

Therefore, each pen costs ₹73/7 = ₹10.42 and each pencil costs ₹65/7 = ₹9.28 (approximately).

## Summary ✨

In this topic, we've explored three powerful algebraic methods for solving pairs of linear equations:

1. **Substitution Method**: Isolate one variable and substitute its expression into the other equation.
2. **Elimination Method**: Add or subtract equations to eliminate one variable.
3. **Cross-Multiplication Method**: Use determinants and formulas to find values directly.

We've also learned:
- How to identify when a system has a unique solution, no solution, or infinitely many solutions
- When to choose each method based on the equations at hand
- How to apply these methods to solve real-world problems

These methods form the foundation for solving more complex systems of equations and are essential tools in mathematics, science, economics, and many other fields. Remember to verify your solutions by checking them in the original equations! 📚

### Practice Questions:
1. Solve using substitution: 3x + y = 7 and 2x - 3y = 1
2. Solve using elimination: 5x - 2y = 11 and 3x + 4y = 13
3. Solve using cross-multiplication: 7x + 3y - 5 = 0 and 2x - 4y + 9 = 0
4. Determine whether these equations have a unique solution, no solution, or infinitely many solutions: 4x - 6y + 8 = 0 and 2x - 3y + 5 = 0
5. Two numbers have a sum of 27 and a difference of 9. Find the numbers using any method of your choice.
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
