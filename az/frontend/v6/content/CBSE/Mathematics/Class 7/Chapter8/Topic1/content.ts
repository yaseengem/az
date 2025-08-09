// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter8\Topic1\content.ts
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl7_ch8_t1',
  topicNumber: 1,
  topicName: "Ratios and Proportions",
  duration: 45,
  description: "Understanding ratios, their simplification, and how to determine if two ratios form a proportion along with real-life applications",
  explanation: `
# Ratios and Proportions 📊

Welcome to the fascinating world of ratios and proportions! 🌟 These important mathematical concepts help us compare quantities and understand relationships between numbers. From cooking recipes to maps and engineering, ratios and proportions are essential tools in our daily lives. Let's explore these concepts in detail! 🚀

## What is a Ratio? 📏

A ratio is a comparison between two or more quantities of the same kind. It shows how many times one quantity contains another.

### Expressing Ratios

Ratios can be expressed in several ways:
- **Using the colon symbol**: 3:4 (read as "three to four")
- **As a fraction**: 3/4
- **In words**: 3 to 4

### Examples of Ratios in Daily Life 🏠
- The ratio of boys to girls in a class might be 15:20
- The ratio of sugar to flour in a cake recipe might be 1:3
- The scale on a map showing 1:1000 means that 1 cm on the map represents 1000 cm in real life

### Key Properties of Ratios 🔑

1. **Ratios compare quantities with the same unit**: When comparing 3 kg to 6 kg, the ratio is 3:6 = 1:2
2. **Ratios have no units**: The ratio of 300 meters to 500 meters is 3:5
3. **Order matters in ratios**: 3:5 is not the same as 5:3
4. **Ratios can be simplified**: 4:6 can be simplified to 2:3 by dividing both terms by their greatest common divisor (GCD)

## Simplifying Ratios ✂️

To simplify a ratio, we divide both terms by their greatest common divisor (GCD).

### Steps to Simplify a Ratio:
1. Find the GCD of the terms
2. Divide both terms by the GCD
3. Express the result in the lowest terms

### Example:
To simplify 24:36
1. GCD of 24 and 36 is 12
2. Divide both terms by 12: 24 ÷ 12 = 2 and 36 ÷ 12 = 3
3. The simplified ratio is 2:3

## What is a Proportion? ⚖️

A proportion is a statement that two ratios are equal. It shows that two ratios represent the same relationship.

### Expressing Proportions

A proportion is written as:
- a:b = c:d
- a/b = c/d
- a:b::c:d (read as "a is to b as c is to d")

### Properties of Proportions 📚

In a proportion a:b = c:d:
1. **Product of means equals product of extremes**: b × c = a × d
2. **Cross multiplication**: If a/b = c/d, then a × d = b × c
3. **Means or extremes**: In a:b::c:d, b and c are means, a and d are extremes

### Example:
In the proportion 3:4 = 6:8
- Product of means: 4 × 6 = 24
- Product of extremes: 3 × 8 = 24
Since the products are equal, 3:4 = 6:8 is a valid proportion.

## Applications of Ratios and Proportions 🌎

### 1. Cooking and Recipes 🍳
- Scaling recipes up or down while maintaining flavor
- Example: If 2 cups of flour need 3 eggs, how many eggs are needed for 6 cups of flour?
  Solution: 2/6 = 3/x, so x = (6 × 3)/2 = 9 eggs

### 2. Maps and Scale Drawings 🗺️
- Understanding distances on maps
- Example: If 1 cm on a map represents 10 km in real life, how far apart are two cities that are 4.5 cm apart on the map?
  Solution: 4.5 cm × 10 km/cm = 45 km

### 3. Financial Applications 💰
- Interest calculations
- Currency conversion
- Example: If $100 is equivalent to €85, how many euros would $350 be worth?
  Solution: 100/350 = 85/x, so x = (350 × 85)/100 = €297.50

### 4. Percentages and Taxes 📝
- Calculating discounts and taxes
- Example: A shirt originally priced at $60 is on sale for $45. What is the discount percentage?
  Solution: Discount ratio = (60-45)/60 = 15/60 = 1/4 = 25%

### 5. Construction and Engineering 🏗️
- Calculating material requirements
- Example: If 5 kg of cement is needed for 20 bricks, how much cement is needed for 50 bricks?
  Solution: 5/20 = x/50, so x = (5 × 50)/20 = 12.5 kg of cement

## Direct and Inverse Proportion 🔄

### Direct Proportion
Two quantities are in direct proportion if an increase (or decrease) in one results in a corresponding proportional increase (or decrease) in the other.

- Formula: y = kx (where k is the constant of proportionality)
- Example: The cost of apples is directly proportional to the weight purchased.
  If 3 kg of apples cost ₹150, then 5 kg would cost: (150/3) × 5 = ₹250

### Inverse Proportion
Two quantities are in inverse proportion if an increase in one results in a proportional decrease in the other.

- Formula: y = k/x (where k is the constant of proportionality)
- Example: The time taken to complete a job is inversely proportional to the number of workers.
  If 5 workers can complete a job in 12 days, then 10 workers would complete it in: (5 × 12)/10 = 6 days

## Solving Problems Using the Unitary Method 🧩

The unitary method involves finding the value of a single unit and then scaling up to find the required value.

### Steps:
1. Find the value of one unit
2. Multiply this value to find the required number of units

### Example:
If 8 pencils cost ₹40, how much would 12 pencils cost?
1. Cost of 1 pencil = ₹40 ÷ 8 = ₹5
2. Cost of 12 pencils = ₹5 × 12 = ₹60

## Sample Questions with Solutions 📚

### Question 1:
Express the ratio 15:25 in its simplest form.

**Solution:**
1. Find the GCD of 15 and 25, which is 5
2. Divide both terms by 5: 15 ÷ 5 = 3 and 25 ÷ 5 = 5
3. The simplified ratio is 3:5

### Question 2:
If 3:5 = x:25, find the value of x.

**Solution:**
Using the property of proportions:
3/5 = x/25
Cross multiply: 3 × 25 = 5 × x
75 = 5x
x = 15

### Question 3:
A map has a scale of 1:10,000. If two landmarks are 6.5 cm apart on the map, what is their actual distance in meters?

**Solution:**
Actual distance = 6.5 cm × 10,000 = 65,000 cm = 650 meters

### Question 4:
If 4 workers can paint a wall in 6 hours, how long would it take 10 workers to paint the same wall?

**Solution:**
This is an inverse proportion problem.
Number of workers × Time taken = constant
4 × 6 = 10 × x
24 = 10x
x = 2.4 hours

## Summary 📝

Ratios and proportions are powerful tools for comparing quantities and solving real-world problems. Here's what we've learned:

- **Ratios** compare quantities of the same kind and can be simplified to their lowest terms
- **Proportions** are equalities of ratios and follow specific properties like the product of means equals the product of extremes
- Both concepts apply to numerous real-life scenarios, from cooking to engineering
- **Direct proportion** means quantities increase or decrease together in the same ratio
- **Inverse proportion** means as one quantity increases, the other decreases in a proportional manner
- The **unitary method** helps solve many proportion problems by finding the value of a single unit

Understanding these concepts allows us to make better comparisons, predictions, and decisions in many aspects of life. They serve as essential tools for more advanced mathematical concepts and practical applications. 🌟

Remember, whenever you need to compare quantities or find unknown values in situations where the relationship between quantities is constant, think ratios and proportions! 💡
`,
  quiz: {
    questions: [...easyQuestions, ...mediumQuestions]
  }
};
