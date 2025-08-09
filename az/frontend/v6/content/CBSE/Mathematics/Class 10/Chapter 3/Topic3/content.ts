import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
  id: 'cl10_ch3_t3',
  topicNumber: 3,
  topicName: "Applications in real-life problems",
  duration: 45,
  description: "Practical applications of pair of linear equations in solving various real-life problems involving age, money, distance, speed, time, mixtures, and work.",
  explanation: `
# Applications in Real-Life Problems 🌟

Linear equations are powerful mathematical tools that help us solve a wide variety of real-world problems. When we have two unknown quantities and can form two distinct relationships between them, pair of linear equations becomes the perfect approach to find solutions! 📊

## Why Are Linear Equations Useful? 🤔

In our daily lives, we frequently encounter situations involving unknown quantities that are related to each other. For example:
- Finding ages when only their sum or ratio is known
- Calculating time and distance in journey problems
- Determining quantities in mixture problems
- Solving problems related to money and investment

Let's explore how to tackle different types of real-life problems using linear equations! 🚀

## Step-by-Step Problem-Solving Approach 📝

To successfully solve real-life problems using linear equations:

1. **Read carefully** and identify the unknown quantities
2. **Assign variables** (like x and y) to these unknowns
3. **Form equations** based on the given information
4. **Solve the equations** using appropriate methods
5. **Verify the solution** in the original problem context

## Common Types of Real-Life Problems 🌍

### 1. Age Problems 👵👦

Age problems involve relationships between the ages of different people. These typically include:
- Current ages
- Past or future ages
- Ratios of ages

**Example:** The sum of the ages of a father and his son is 50 years. Five years ago, the father was seven times as old as his son. Find their present ages.

**Solution:**
Let's say the father's present age = x years
Son's present age = y years

From the first condition: x + y = 50 ... (1)
From the second condition: (x - 5) = 7(y - 5) ... (2)

Expanding (2): x - 5 = 7y - 35
x = 7y - 30 ... (3)

Substituting (3) in (1):
7y - 30 + y = 50
8y = 80
y = 10

Therefore, x = 40

So, the father's present age is 40 years and the son's present age is 10 years.

**Verification:** 5 years ago, father was 35 and son was 5, giving the ratio 7:1 ✓

### 2. Money and Investment Problems 💰💼

These involve calculations related to:
- Simple and compound interest
- Profit and loss
- Investment with different returns

**Example:** A sum of ₹10,000 is invested partly at 8% and partly at 12% per annum. If the total annual income is ₹1000, how much is invested at each rate?

**Solution:**
Let the amount invested at 8% be x rupees.
Then, the amount invested at 12% is (10000 - x) rupees.

Annual income from 8% investment = 8% of x = 0.08x
Annual income from 12% investment = 12% of (10000 - x) = 0.12(10000 - x)

According to the given condition:
0.08x + 0.12(10000 - x) = 1000
0.08x + 1200 - 0.12x = 1000
-0.04x + 1200 = 1000
-0.04x = -200
x = 5000

Therefore, ₹5000 is invested at 8% and ₹5000 is invested at 12%.

**Verification:** Income = 0.08(5000) + 0.12(5000) = 400 + 600 = ₹1000 ✓

### 3. Distance, Speed, and Time Problems 🚗⏱️

These involve relationships between:
- Distance covered
- Speed of travel
- Time taken
- Relative motion

**Example:** A boat goes 12 km upstream and 40 km downstream in 8 hours. It can go 16 km upstream and 32 km downstream in 10 hours. Find the speed of the boat in still water and the speed of the current.

**Solution:**
Let the speed of the boat in still water be x km/h.
Let the speed of the current be y km/h.

Upstream speed = (x - y) km/h
Downstream speed = (x + y) km/h

From the first condition:
12/(x-y) + 40/(x+y) = 8 ... (1)

From the second condition:
16/(x-y) + 32/(x+y) = 10 ... (2)

These equations can be simplified and solved to get x = 6 km/h and y = 2 km/h.

Therefore, the speed of the boat in still water is 6 km/h, and the speed of the current is 2 km/h.

**Verification:** 
- Upstream: 12/(6-2) = 3 hours, Downstream: 40/(6+2) = 5 hours, Total = 8 hours ✓
- Upstream: 16/(6-2) = 4 hours, Downstream: 32/(6+2) = 4 hours, Total = 10 hours ✓

### 4. Mixture and Alloying Problems 🧪🔄

These involve combining substances of different:
- Concentrations
- Costs
- Quantities

**Example:** A mixture contains milk and water in the ratio 4:1. If 10 liters of water is added to the mixture, the ratio becomes 4:3. Find the quantity of milk in the original mixture.

**Solution:**
Let the amount of milk in the original mixture be x liters.
Then, the amount of water in the original mixture is x/4 liters (since milk:water = 4:1).

After adding 10 liters of water, the new ratio is 4:3, which means:
x : (x/4 + 10) = 4 : 3

Cross-multiply:
3x = 4(x/4 + 10)
3x = x + 40
2x = 40
x = 20

Therefore, the original mixture contained 20 liters of milk.

**Verification:** Original water = 20/4 = 5 liters. After adding 10 liters, total water = 15 liters.
Milk:water = 20:15 = 4:3 ✓

### 5. Work and Time Problems 👷⏲️

These involve relationships between:
- Work done
- Time taken
- Rate of work
- Multiple workers

**Example:** A can complete a work in 12 days and B can complete the same work in 15 days. If they work together, in how many days will they complete the work?

**Solution:**
A's one day work = 1/12
B's one day work = 1/15

Combined one day work = 1/12 + 1/15 = (5+4)/60 = 9/60 = 3/20

Time to complete the work together = 20/3 days = 6⅔ days

**Verification:** In 6⅔ days, A completes 6⅔/12 = 5/9 of the work, and B completes 6⅔/15 = 4/9 of the work.
Total work done = 5/9 + 4/9 = 9/9 = 1 (complete) ✓

## Special Techniques for Complex Problems 🧩

### 1. Ratio and Proportion Method

In problems involving ratios, we can use the property that if a:b = c:d, then (a+b):(c+d) = a:c = b:d.

**Example:** The ratio of boys to girls in a class is 5:3. If there are 16 more boys than girls, find the number of students in the class.

**Solution:**
Let the number of boys be 5x and the number of girls be 3x.

According to the given condition:
5x - 3x = 16
2x = 16
x = 8

Therefore, the number of boys = 5 × 8 = 40
The number of girls = 3 × 8 = 24
Total number of students = 40 + 24 = 64

**Verification:** Boys:Girls = 40:24 = 5:3, and 40 - 24 = 16 ✓

### 2. Substitution with Smart Variables

Sometimes, choosing variables related to the problem context makes solving easier.

**Example:** Two numbers are in the ratio 3:5. If they are increased by 10 each, they will be in the ratio 5:7. Find the numbers.

**Solution:**
Let the numbers be 3x and 5x.

According to the condition:
(3x + 10) : (5x + 10) = 5 : 7

Cross-multiply:
7(3x + 10) = 5(5x + 10)
21x + 70 = 25x + 50
70 - 50 = 25x - 21x
20 = 4x
x = 5

Therefore, the numbers are 3 × 5 = 15 and 5 × 5 = 25.

**Verification:** 15:25 = 3:5, and (15+10):(25+10) = 25:35 = 5:7 ✓

## Common Errors and How to Avoid Them ⚠️

1. **Misinterpreting the problem**: Always read twice and identify what's asked.
2. **Setting up incorrect equations**: Check if your equations truly represent the problem.
3. **Calculation errors**: Double-check your arithmetic.
4. **Not verifying solutions**: Always test your answer in the original problem context.

## Practice Problems for Better Understanding 🏋️‍♀️

1. The sum of two numbers is 25, and their difference is 13. Find the numbers.
   
   **Solution:** Let the numbers be x and y.
   x + y = 25 and x - y = 13
   Solving gives x = 19 and y = 6.

2. In a two-digit number, the digit in the tens place is twice the digit in the units place. If the digits are interchanged, the new number is 27 less than the original number. Find the number.
   
   **Solution:** If x is the units digit, then the number is 10(2x) + x = 21x.
   When interchanged, it becomes 10x + 2x = 12x.
   By the given condition: 21x - 12x = 27
   9x = 27
   x = 3
   Therefore, the number is 21 × 3 = 63.

## Summary ✨

Linear equations help us solve numerous real-life problems by modeling relationships between unknown quantities. We've explored:

- **Age problems**: Relating current, past, and future ages
- **Money problems**: Dealing with investments, interest, profit, and loss
- **Distance-time problems**: Solving for speed, time, and distance
- **Mixture problems**: Finding quantities, concentrations, and ratios
- **Work-time problems**: Calculating efficiency, time taken, and combined work

The key to success is carefully reading the problem, identifying the unknowns, forming correct equations, and verifying your solution. With practice, you'll develop the ability to tackle even complex real-world challenges using linear equations!

### Additional Examples and Quick Tips:

1. **Example**: A man's age is three times his son's age. After 5 years, his age will be twice his son's age. Find their present ages.
   
   **Quick Tip**: In age problems, write equations for both present and future/past scenarios.

2. **Example**: A 120-liter mixture of milk and water contains 20% water. How much water should be added to make water 25% of the new mixture?
   
   **Quick Tip**: In mixture problems, focus on quantities of one component (like water) before and after mixing.

3. **Example**: Two trains, 200 km apart, are traveling towards each other. One is moving twice as fast as the other. They meet after 4 hours. Find their speeds.
   
   **Quick Tip**: In distance-time problems involving meeting points, the sum of distances traveled equals the total distance.

Remember, the power of linear equations lies in their ability to express real-world relationships mathematically. Master this technique, and you'll have a valuable tool for solving problems throughout your life! 🌈
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
