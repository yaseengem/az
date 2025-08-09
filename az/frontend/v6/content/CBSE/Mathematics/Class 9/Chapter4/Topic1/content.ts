import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl9_ch4_t1',
    topicNumber: 1,
    topicName: "Introduction to Linear Equations in Two Variables",
    duration: 60,
    description: "Introduction to the concept of linear equations in two variables, their standard form, and basic properties",
    explanation: `
# Introduction to Linear Equations in Two Variables 🌟

Linear equations are the foundation of algebra and one of the most widely used mathematical tools in real-world applications! 🚀 In this topic, we'll explore linear equations that involve two variables and understand their fundamental concepts.

## What is a Linear Equation in Two Variables? 📝

A linear equation in two variables is an equation that can be written in the form:

**ax + by + c = 0**

Where:
- x and y are variables
- a, b are coefficients (non-zero real numbers)
- c is a constant term
- The highest power of any variable is 1 (no variables are squared, cubed, etc.)

Some examples of linear equations in two variables include:
- 2x + 3y = 6
- x - y = 4
- 5x + 2y - 10 = 0
- y = 2x + 3

## Standard Forms of Linear Equations 📊

Linear equations can be written in different forms:

1. **Standard Form**: ax + by + c = 0
   Example: 3x + 4y - 12 = 0

2. **Slope-Intercept Form**: y = mx + b
   Where m is the slope and b is the y-intercept
   Example: y = 2x + 3 (equivalent to 2x - y + 3 = 0)

3. **Intercept Form**: (x/a) + (y/b) = 1
   Where a is the x-intercept and b is the y-intercept
   Example: (x/4) + (y/6) = 1

Converting between these forms is an important skill. For instance, to convert 3x + 4y - 12 = 0 to slope-intercept form:
- Solve for y: 4y = -3x + 12
- Divide by 4: y = (-3/4)x + 3

## How Linear Equations Differ from Linear Equations in One Variable 🔍

Let's compare:

**Linear Equation in One Variable**:
- Form: ax + b = 0
- Has exactly one solution (a single value for x)
- Represented by a point on the number line
- Example: 2x + 5 = 0 has the solution x = -2.5

**Linear Equation in Two Variables**:
- Form: ax + by + c = 0
- Has infinitely many solutions (pairs of values for x and y)
- Represented by a line in the coordinate plane
- Example: 2x + 3y = 6 has solutions like (3, 0), (0, 2), (1.5, 1), etc.

## Solutions of Linear Equations in Two Variables 🧩

A solution of a linear equation in two variables is an ordered pair (x, y) that satisfies the equation.

For example, for the equation 2x + 3y = 6:
- (3, 0) is a solution because 2(3) + 3(0) = 6 ✓
- (0, 2) is a solution because 2(0) + 3(2) = 6 ✓
- (1.5, 1) is a solution because 2(1.5) + 3(1) = 6 ✓
- (1, 1) is NOT a solution because 2(1) + 3(1) = 5 ≠ 6 ❌

In fact, a linear equation in two variables has infinitely many solutions! These solutions form a straight line when plotted on the coordinate plane.

## Finding Solutions to Linear Equations 🔢

There are several ways to find solutions:

1. **Choose a value for one variable and solve for the other**
   For 2x + 3y = 6:
   - If x = 0, then 3y = 6, so y = 2
   - If y = 0, then 2x = 6, so x = 3

2. **Create a table of values**
   For 2x + 3y = 6:
   | x | y |
   |---|---|
   | 0 | 2 |
   | 3 | 0 |
   | 1.5 | 1 |
   | -3 | 4 |

3. **Using the slope-intercept form (y = mx + b)**
   For 2x + 3y = 6, rewrite as y = (-2/3)x + 2
   - When x = 0, y = 2 (y-intercept)
   - When x = 3, y = (-2/3)(3) + 2 = 0
   - When x = -3, y = (-2/3)(-3) + 2 = 4

## Application Examples 🌐

1. **Cost Equations**:
   If a concert charges $10 for adults and $5 for children, and the total revenue is $500, we can write:
   10a + 5c = 500
   Where a is the number of adults and c is the number of children.
   
   Possible solutions include (50, 0), (0, 100), (25, 50), etc.

2. **Distance and Speed**:
   If a car travels at 60 km/h and a motorcycle at 80 km/h in the same direction, and the motorcycle is 40 km ahead, when will the car catch up?
   
   If t represents the time (in hours), we get:
   60t = 80t - 40
   -20t = -40
   t = 2
   
   So, the car will catch up in 2 hours.

## Properties of Linear Equations in Two Variables 📐

1. **Graphical Representation**: A linear equation in two variables always represents a straight line in the coordinate plane.

2. **Infinite Solutions**: A linear equation in two variables has infinitely many solutions, forming a continuous line.

3. **Intercepts**: A linear equation typically has an x-intercept (where y = 0) and a y-intercept (where x = 0), except for vertical or horizontal lines.

4. **Parallel Lines**: Two lines with the same slope but different y-intercepts are parallel and have no common solution.

5. **Intersecting Lines**: Two lines with different slopes intersect at exactly one point, which is the common solution to both equations.

## Understanding the Significance of Coefficients 🧮

In the standard form ax + by + c = 0:

1. **If a = 0**: The equation becomes by + c = 0, which is a horizontal line.
   Example: 0x + 3y + 6 = 0 simplifies to y = -2

2. **If b = 0**: The equation becomes ax + c = 0, which is a vertical line.
   Example: 4x + 0y - 8 = 0 simplifies to x = 2

3. **If c = 0**: The equation becomes ax + by = 0, which is a line passing through the origin (0, 0).
   Example: 2x + 3y = 0

4. **If both a and b are non-zero**: The line has a non-vertical and non-horizontal slope.
   Example: 2x + 3y - 6 = 0

## Real-Life Connections 🏙️

Linear equations are used in many real-life scenarios:

1. **Economics**: Price-demand relationships, cost-revenue analysis
2. **Physics**: Motion equations, force relationships
3. **Engineering**: Structural analysis, electrical circuits
4. **Finance**: Interest calculations, budget planning
5. **Computer Graphics**: Line drawing algorithms

## Sample Questions with Solutions 📝

**Question 1**: Determine if (2, 1) is a solution to the equation 3x - 2y = 4.
**Solution**: Substitute x = 2 and y = 1 into 3x - 2y = 4
3(2) - 2(1) = 6 - 2 = 4 ✓
Yes, (2, 1) is a solution.

**Question 2**: Find three solutions to the equation 2x + y = 7.
**Solution**:
- If x = 0, then y = 7. So (0, 7) is a solution.
- If x = 2, then y = 7 - 2(2) = 3. So (2, 3) is a solution.
- If x = 3.5, then y = 7 - 2(3.5) = 0. So (3.5, 0) is a solution.

**Question 3**: A movie theater charges $8 for adults and $5 for children. If 120 tickets were sold for a total of $810, how many adults and how many children attended?
**Solution**:
Let a = number of adults and c = number of children
We have the equations:
- a + c = 120 (total people)
- 8a + 5c = 810 (total revenue)

From the first equation: a = 120 - c
Substitute into the second equation:
8(120 - c) + 5c = 810
960 - 8c + 5c = 810
960 - 3c = 810
-3c = -150
c = 50

Therefore, a = 120 - 50 = 70

So, 70 adults and 50 children attended the movie.

## Summary ✨

In this introduction to linear equations in two variables, we've covered:

- The standard form of a linear equation: ax + by + c = 0
- Different forms of linear equations (standard, slope-intercept, intercept)
- How to find solutions to linear equations in two variables
- The meaning of solutions as ordered pairs (x, y)
- That linear equations in two variables have infinitely many solutions
- How to verify if an ordered pair is a solution
- Applications of linear equations in real-life scenarios

In the next topics, we'll explore how to graph these equations, understand the relationship between different linear equations, and solve systems of linear equations using various methods.

Remember, linear equations are foundational concepts that will be used throughout your mathematical journey, especially in coordinate geometry, calculus, and many real-world applications! 🌟
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 