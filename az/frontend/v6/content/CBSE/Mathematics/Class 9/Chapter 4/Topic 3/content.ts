// filepath: content/CBSE/Mathematics/Class 9/Chapter4/Topic3/content.ts
import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl9_ch4_t3',
    topicNumber: 3,
    topicName: "Solution of a Linear Equation",
    duration: 90,
    description: "Understanding solutions of linear equations in two variables, graphical representation, and practical applications",
    explanation: `
# Solution of a Linear Equation 🧩

Linear equations in two variables have infinitely many solutions, each represented as an ordered pair (x, y). In this topic, we'll explore how to find these solutions, represent them graphically, and apply them to real-world problems.

## Understanding Solutions of Linear Equations 📝

A **solution** of a linear equation in two variables is an ordered pair (x, y) that satisfies the equation when the values are substituted.

For example, for the equation 2x + 3y = 12:
- (3, 2) is a solution because 2(3) + 3(2) = 6 + 6 = 12 ✓
- (0, 4) is a solution because 2(0) + 3(4) = 0 + 12 = 12 ✓
- (6, 0) is a solution because 2(6) + 3(0) = 12 + 0 = 12 ✓
- (2, 2) is NOT a solution because 2(2) + 3(2) = 4 + 6 = 10 ≠ 12 ❌

A key insight: A linear equation in two variables has **infinitely many solutions**. These solutions, when plotted on a coordinate plane, form a straight line.

## Methods for Finding Solutions 🔍

There are several ways to find solutions to a linear equation:

### 1. Setting the Value of One Variable

The simplest method is to choose a value for one variable and solve for the other.

**Example**: For the equation 3x + 2y = 12

If we choose x = 0:
3(0) + 2y = 12
2y = 12
y = 6

So (0, 6) is a solution.

If we choose y = 0:
3x + 2(0) = 12
3x = 12
x = 4

So (4, 0) is another solution.

We can choose any value for x or y and find the corresponding value for the other variable. Each choice gives us a different solution.

### 2. Creating a Table of Values

A systematic approach is to create a table of values by choosing several values for one variable and calculating the corresponding values for the other.

**Example**: For the equation y = 2x - 3

| x | y = 2x - 3 |
|---|------------|
| 0 | -3         |
| 1 | -1         |
| 2 | 1          |
| 3 | 3          |
| 4 | 5          |

Each row in this table represents a solution to the equation: (0, -3), (1, -1), (2, 1), (3, 3), and (4, 5).

### 3. Using the Intercepts

The x-intercept (where the line crosses the x-axis) and y-intercept (where the line crosses the y-axis) are often easy to find and represent two important solutions.

**Example**: For the equation 2x + 5y = 10

For the x-intercept, set y = 0:
2x + 5(0) = 10
2x = 10
x = 5

So the x-intercept is (5, 0).

For the y-intercept, set x = 0:
2(0) + 5y = 10
5y = 10
y = 2

So the y-intercept is (0, 2).

## Graphical Representation of Solutions 📈

The graph of a linear equation in two variables is a straight line. Each point on this line represents a solution to the equation.

To graph a linear equation:

### Method 1: Using Two Points

1. Find any two solutions (usually the intercepts)
2. Plot these points on the coordinate plane
3. Draw a straight line through these points

The resulting line represents all solutions to the equation.

**Example**: Graph the equation 3x + 2y = 6

Step 1: Find two solutions.
- When x = 0: y = 3 → (0, 3)
- When y = 0: x = 2 → (2, 0)

Step 2: Plot these points on the coordinate plane.
Step 3: Draw a straight line through these points.

Every point on this line is a solution to 3x + 2y = 6.

### Method 2: Using Slope-Intercept Form

If we rewrite the equation in slope-intercept form (y = mx + b), we can use the slope and y-intercept to graph the line.

**Example**: Graph the equation 2x - 4y = 8

Step 1: Rewrite in slope-intercept form.
2x - 4y = 8
-4y = -2x + 8
y = (1/2)x - 2

Step 2: Plot the y-intercept (0, -2).
Step 3: Use the slope of 1/2 to find another point (move right 2 units and up 1 unit from the y-intercept).
Step 4: Draw a line through these points.

## Verifying Solutions Graphically 🔍

We can verify whether a point is a solution to a linear equation by checking if it lies on the graph of the equation.

**Example**: Is the point (3, 1) a solution to the equation 2x + y = 7?

Step 1: Substitute the point into the equation.
2(3) + 1 = 6 + 1 = 7 ✓

Step 2: Alternatively, graph the equation 2x + y = 7 and check if the point (3, 1) lies on the line.

If the point lies on the line, it is a solution. Otherwise, it is not.

## Applications of Linear Equations 🌐

Linear equations in two variables can model many real-world situations:

### 1. Cost and Revenue Analysis

**Example**: A company sells a product for ₹150 per unit. The cost of production includes a fixed cost of ₹2000 plus ₹100 per unit.

The total cost equation is: C = 2000 + 100x (where x is the number of units)
The revenue equation is: R = 150x

The break-even point occurs when C = R:
2000 + 100x = 150x
2000 = 50x
x = 40 units

### 2. Mixture Problems

**Example**: How many liters of a 20% acid solution should be mixed with 8 liters of a 50% acid solution to get a 30% acid solution?

Let x be the volume of 20% solution needed.
Amount of acid in 20% solution: 0.2x
Amount of acid in 50% solution: 0.5 × 8 = 4
Amount of acid in final mixture: 0.3(x + 8)

Setting up the equation:
0.2x + 4 = 0.3(x + 8)
0.2x + 4 = 0.3x + 2.4
4 - 2.4 = 0.3x - 0.2x
1.6 = 0.1x
x = 16 liters

### 3. Distance, Speed, and Time Problems

**Example**: Two trains leave stations A and B, 300 km apart, traveling toward each other. If one train travels at 60 km/h and the other at 80 km/h, when will they meet?

Let t be the time (in hours) until they meet.
Distance traveled by first train: 60t
Distance traveled by second train: 80t
Total distance: 60t + 80t = 300
140t = 300
t = 300/140 = 15/7 ≈ 2.14 hours (or 2 hours and 8 minutes)

## Special Cases of Solutions 🔍

### 1. Integer Solutions

Sometimes we're interested in finding solutions where both x and y are integers.

**Example**: Find three integer solutions to the equation 2x + 3y = 12.

We can try different integer values of x and check if the resulting y is also an integer:

For x = 0: y = 12/3 = 4, giving (0, 4)
For x = 3: y = (12 - 6)/3 = 2, giving (3, 2)
For x = 6: y = (12 - 12)/3 = 0, giving (6, 0)

### 2. Positive Solutions

In some contexts (like dimensions, quantities, etc.), we need solutions where both x and y are positive.

**Example**: Find the positive solutions to 3x + 2y = 12 where both x and y are whole numbers.

For x = 0: y = 6, giving (0, 6)
For x = 2: y = 3, giving (2, 3)
For x = 4: y = 0, giving (4, 0)

Since we want both x and y to be positive, the solutions are (2, 3) and (0, 6) (if we include 0 as a whole number).

## The Number of Solutions for a Linear Equation 📊

A linear equation in two variables always has infinitely many solutions, which form a straight line on the coordinate plane. This is different from:

1. A linear equation in one variable (e.g., 2x + 3 = 9), which has exactly one solution
2. A system of two linear equations in two variables, which can have one solution, no solution, or infinitely many solutions

## Practical Examples and Solutions 📝

### Example 1: Finding the Equation of a Line

A line passes through the points (1, 3) and (4, 9). Find its equation.

**Solution**:
1. Calculate the slope: m = (9 - 3)/(4 - 1) = 6/3 = 2
2. Use point-slope form: y - y₁ = m(x - x₁)
   y - 3 = 2(x - 1)
   y - 3 = 2x - 2
   y = 2x + 1
3. Therefore, the equation of the line is y = 2x + 1 or 2x - y + 1 = 0

### Example 2: Medical Dosage Calculation

A doctor needs to administer a drug where the dosage (in ml) depends on the patient's weight. For a 50 kg patient, the dosage is 15 ml, and for a 70 kg patient, it's 21 ml. What would be the dosage for a 60 kg patient?

**Solution**:
1. Let's find the linear relationship between weight (w) and dosage (d)
2. We know two points: (50, 15) and (70, 21)
3. Calculate the slope: m = (21 - 15)/(70 - 50) = 6/20 = 0.3
4. Use point-slope form: d - 15 = 0.3(w - 50)
   d - 15 = 0.3w - 15
   d = 0.3w
5. For a 60 kg patient: d = 0.3(60) = 18 ml

### Example 3: Budget Planning

A family wants to budget for groceries and entertainment. They have ₹8000 available for these expenses. If groceries cost ₹x and entertainment costs ₹y, the equation is x + y = 8000.

**Some possible solutions**:
- If they spend ₹5000 on groceries, they can spend ₹3000 on entertainment: (5000, 3000)
- If they spend ₹6000 on groceries, they can spend ₹2000 on entertainment: (6000, 2000)
- If they spend all on groceries: (8000, 0)
- If they spend all on entertainment: (0, 8000)

Each solution represents a different way to allocate their budget.

## Summary ✨

In this topic, we explored:

- The concept of solutions to linear equations in two variables
- Different methods for finding solutions
- Graphical representation of linear equations
- Verification of solutions both algebraically and graphically
- Real-world applications of linear equations
- Special cases of solutions

Understanding solutions to linear equations is essential for tackling more complex mathematical topics like systems of equations, optimization problems, and mathematical modeling. This knowledge also provides a foundation for analyzing relationships between variables in various real-world contexts, from economics to engineering to the natural sciences.

Remember that each point on the line representing a linear equation is a solution, emphasizing the infinite nature of solutions to linear equations in two variables. This infinite set of solutions gives us flexibility when applying these equations to practical problems, allowing us to choose solutions that best fit our specific constraints and requirements. 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 