import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl10_ch3_t1',
  topicNumber: 1,
  topicName: "Graphical method of solution",
  duration: 45,
  description: "Understanding how to solve a pair of linear equations in two variables using graphical representation and interpreting different types of solutions.",
  explanation: `
# Graphical Method of Solution 📊

The graphical method is a visual approach to solve a pair of linear equations in two variables. It provides a clear picture of how equations interact and gives us insight into the nature of their solutions. Let's dive into this intuitive method! 🚀

## What is a Linear Equation in Two Variables? 🤔

A linear equation in two variables is an equation that can be written in the form:
ax + by + c = 0

Where:
- x and y are variables
- a, b, and c are constants
- a and b are not both zero

Examples of linear equations include:
- 2x + 3y = 6
- x - y = 4
- 5x = 2y + 10

## Understanding the Graphical Method 📈

The graphical method involves the following steps:
1. Express each equation in the form ax + by + c = 0 or y = mx + k
2. Draw the graph of each equation by plotting at least two points
3. Find the point(s) of intersection, if any
4. The coordinates of the point(s) of intersection represent the solution(s) to the system of equations

## How to Plot a Linear Equation 📝

To plot a linear equation:
1. Rearrange the equation to isolate y (if possible): y = mx + k
2. Choose at least two values for x and calculate the corresponding y-values
3. Plot these points on the coordinate plane
4. Draw a straight line through the points

**Example 1**: Plot the line 2x + y = 5
- Rearranging: y = -2x + 5
- When x = 0: y = 5
- When x = 2: y = -2(2) + 5 = 1
- When x = 1: y = -2(1) + 5 = 3
- Plot the points (0, 5), (1, 3), and (2, 1)
- Draw a line through these points

## Interpreting Solutions Graphically 🔍

When graphing two linear equations, three scenarios are possible:

### 1. Intersecting Lines - Unique Solution ✅

If the two lines intersect at exactly one point, the system has exactly one solution. This is the most common case.

**Example 2**: Solve the system of equations:
x + y = 5
x - y = 3

Plotting both lines:
- For x + y = 5: Plot (0, 5) and (5, 0)
- For x - y = 3: Plot (3, 0) and (0, -3)

The lines intersect at the point (4, 1), which is the solution. We can verify:
- 4 + 1 = 5 ✓
- 4 - 1 = 3 ✓

### 2. Parallel Lines - No Solution ❌

If the lines are parallel (same slope but different y-intercepts), they never intersect. The system has no solution and is called inconsistent.

**Example 3**: Consider the system:
2x + 3y = 6
4x + 6y = 8

Rewriting:
- y = (-2/3)x + 2
- y = (-2/3)x + 4/3

These lines have the same slope (-2/3) but different y-intercepts (2 and 4/3). They are parallel and never intersect, so there is no solution.

### 3. Coincident Lines - Infinitely Many Solutions ♾️

If the two lines coincide (are identical), the system has infinitely many solutions. Any point on the line is a solution.

**Example 4**: Look at the system:
2x + 3y = 12
4x + 6y = 24

Simplifying the second equation by dividing by 2:
- 2x + 3y = 12
- 2x + 3y = 12

These are the same line! Every point on this line satisfies both equations, so there are infinitely many solutions.

## Algebraic Interpretation of Graphical Scenarios 🧮

The three graphical scenarios correspond to algebraic conditions:

1. **Unique Solution**: a₁/a₂ ≠ b₁/b₂ (coefficients not proportional)

2. **No Solution**: a₁/a₂ = b₁/b₂ ≠ c₁/c₂ (coefficients of variables are proportional, but constants are not)

3. **Infinitely Many Solutions**: a₁/a₂ = b₁/b₂ = c₁/c₂ (coefficients and constants are proportional)

Where a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 are the two equations.

## Advantages of the Graphical Method 👍

- Provides a visual representation of the solution
- Helps understand the nature of the system (unique, no solution, or infinitely many solutions)
- Can verify solutions obtained by algebraic methods
- Shows the relationship between the equations

## Limitations of the Graphical Method 👎

- May not give exact solutions (especially with irrational numbers)
- Requires accurate drawing and measurement
- Can be time-consuming for complex systems
- Becomes impractical for systems with more than two variables

## Applications in Real-Life Problems 🌍

The graphical method has many practical applications:

**Example 5**: A shuttle service charges ₹50 per person plus a fixed fee of ₹30. A taxi charges ₹70 per person with no fixed fee. For how many people do both options cost the same?

Let x = number of people and y = total cost
- Shuttle: y = 50x + 30
- Taxi: y = 70x

Plotting and finding the intersection:
The lines intersect when x = 1.5, meaning both services cost the same when there are 1.5 people. Since people must be whole numbers, for 1 person the shuttle is cheaper, and for 2 or more people the taxi is cheaper.

## Practice with Graphical Method 🏋️‍♀️

Let's solve a problem step-by-step:

**Example 6**: Solve the system graphically:
3x - y = 5
x + y = 3

Step 1: Rearrange to isolate y:
- y = 3x - 5
- y = 3 - x

Step 2: Create a table of values for each equation:

For y = 3x - 5:
| x | y |
|---|---|
| 0 | -5 |
| 2 | 1 |
| 3 | 4 |

For y = 3 - x:
| x | y |
|---|---|
| 0 | 3 |
| 1 | 2 |
| 3 | 0 |

Step 3: Plot the lines and find the intersection:
The lines intersect at the point (2, 1).

Step 4: Verify the solution:
- 3(2) - 1 = 6 - 1 = 5 ✓
- 2 + 1 = 3 ✓

Therefore, (2, 1) is the solution to the system.

## Special Cases in Graphical Solutions 🔎

### Case 1: When one equation has only one variable
Example: y = 4 and x + y = 7

The first equation is a horizontal line, and the second is a sloped line. They intersect at (3, 4).

### Case 2: When both equations have the same variable isolated
Example: y = 2x + 3 and y = -x + 6

Since y is already isolated in both, we can set them equal:
2x + 3 = -x + 6
3x = 3
x = 1

Substituting back: y = 2(1) + 3 = 5

The solution is (1, 5).

## Summary ✨

The graphical method for solving a pair of linear equations involves:
1. Plotting each equation as a straight line on the coordinate plane
2. Finding the point(s) of intersection (if any)
3. Interpreting the result based on how the lines interact:
   - One intersection point → Unique solution
   - Parallel lines → No solution
   - Coincident lines → Infinitely many solutions

This method provides a visual approach to understand the relationship between two equations and their solutions. While it may not always give precise values for complex problems, it offers valuable insight into the nature of the system.

### Additional Examples and Sample Questions:

1. **Sample Question**: Determine graphically the vertices of the triangle formed by the lines y = 0, x = 4, and x + 2y = 8.
   **Answer**: The vertices are at (0, 4), (4, 0), and (8, 0).

2. **Sample Question**: Use the graphical method to find the values of x and y that satisfy both equations: x + 2y = 8 and 3x - 2y = 0.
   **Answer**: The solution is (2, 3).

3. **Sample Question**: Determine whether the system 2x - 3y = 6 and 4x - 6y = 15 has a unique solution, no solution, or infinitely many solutions without graphing.
   **Answer**: No solution. The coefficients are proportional (2:3 = 4:6) but the constants are not (6/15 ≠ 2/4).
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
