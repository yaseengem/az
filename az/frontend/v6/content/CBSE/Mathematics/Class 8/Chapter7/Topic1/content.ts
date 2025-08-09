import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

const content: TopicContent = {
  id: 'cl8_ch7_t1',
  topicNumber: 1,
  topicName: 'Ratios and percentages',
  duration: 60,
  description: 'Understanding ratios, proportions, percentages, and their applications in solving real-life problems.',
  explanation: `# Ratios and Percentages

## Introduction
Ratios and percentages are fundamental mathematical concepts that help us compare quantities and express parts of a whole. They're not just abstract mathematical ideas but practical tools we use every day - from cooking recipes to financial planning. In this topic, we'll explore how ratios and percentages work and how they help us solve real-world problems.

## Ratios

### What is a Ratio?
A ratio is a comparison of two or more numbers that indicates their relative sizes. It shows how many times one quantity contains another. Ratios are typically written with a colon (:), such as 3:2, or as a fraction, like 3/2.

### Examples of Ratios
- If there are 15 boys and 10 girls in a class, the ratio of boys to girls is 15:10 or 3:2 (in simplified form).
- In a recipe that calls for 2 cups of flour and 3 cups of sugar, the ratio of flour to sugar is 2:3.

### Simplifying Ratios
To simplify a ratio, divide all parts by their greatest common divisor (GCD).
Example: Simplify 24:36
1. Find the GCD of 24 and 36, which is 12.
2. Divide both numbers by 12: 24 ÷ 12 = 2, 36 ÷ 12 = 3
3. The simplified ratio is 2:3.

### Equivalent Ratios
Ratios that represent the same comparison are called equivalent ratios. You can create equivalent ratios by multiplying or dividing all parts by the same number.
Example: Equivalent ratios to 3:4 include 6:8, 9:12, and 15:20.

### Comparing Ratios
To compare two ratios, convert them to the same form, typically fractions or decimals.
Example: Compare 3:5 and 7:10
- Convert to fractions: 3/5 = 0.6 and 7/10 = 0.7
- Since 0.7 > 0.6, the ratio 7:10 is larger.

### Part-to-Part and Part-to-Whole Ratios
- Part-to-part ratio: Compares different parts of a whole.
  Example: In a mixture with 3 parts water and 2 parts syrup, the part-to-part ratio of water to syrup is 3:2.
  
- Part-to-whole ratio: Compares one part to the entire quantity.
  Example: In the same mixture, the part-to-whole ratio of water is 3:5 (3 parts water out of 5 total parts).

## Percentages

### What is a Percentage?
A percentage is a way of expressing a number as a fraction of 100. It's denoted by the symbol "%". For example, 25% means 25 out of 100, or 25/100 = 1/4.

### Converting Between Different Forms

#### Fractions to Percentages:
1. Multiply the fraction by 100%.
   Example: 3/4 = 3/4 × 100% = 75%

#### Percentages to Fractions:
1. Divide the percentage by 100 and simplify.
   Example: 20% = 20/100 = 1/5

#### Decimals to Percentages:
1. Multiply the decimal by 100%.
   Example: 0.65 = 0.65 × 100% = 65%

#### Percentages to Decimals:
1. Divide the percentage by 100.
   Example: 45% = 45/100 = 0.45

### Finding Percentage of a Quantity
To find a percentage of a quantity, multiply the quantity by the percentage (converted to a decimal).
Example: Find 15% of 80
- 15% of 80 = 0.15 × 80 = 12

### Finding What Percentage One Quantity is of Another
To find what percentage one quantity is of another, divide the first quantity by the second, then multiply by 100%.
Example: What percentage of 50 is 15?
- 15 is what percentage of 50? = (15/50) × 100% = 30%

### Percentage Increase and Decrease

#### Percentage Increase:
The formula for percentage increase is:
Percentage increase = (Increase ÷ Original value) × 100%

Example: A shirt that cost ₹400 now costs ₹500. What is the percentage increase?
- Increase = ₹500 - ₹400 = ₹100
- Percentage increase = (100/400) × 100% = 25%

#### Percentage Decrease:
The formula for percentage decrease is:
Percentage decrease = (Decrease ÷ Original value) × 100%

Example: A smartphone that originally cost ₹15,000 is on sale for ₹12,750. What is the percentage decrease?
- Decrease = ₹15,000 - ₹12,750 = ₹2,250
- Percentage decrease = (2,250/15,000) × 100% = 15%

### Successive Percentages
When multiple percentage changes are applied one after another, the final result is not simply the sum of the percentages.

Example: A shirt's price is increased by 10% and then decreased by 10%. What is the net percentage change?
- Original price = ₹100
- After 10% increase = ₹100 + ₹10 = ₹110
- After 10% decrease on ₹110 = ₹110 - ₹11 = ₹99
- Net percentage change = (99 - 100)/100 × 100% = -1%

## Applications of Ratios and Percentages

### Proportions
A proportion is an equation stating that two ratios are equal. It's written as a:b = c:d or a/b = c/d.

Example: If 3 pencils cost ₹15, how much will 7 pencils cost?
- Set up the proportion: 3/15 = 7/x
- Cross multiply: 3x = 15 × 7
- Solve for x: x = (15 × 7)/3 = 35
- Therefore, 7 pencils will cost ₹35.

### Unitary Method
The unitary method involves finding the value of a single unit and then finding the value of the required number of units.

Example: If 5 books cost ₹300, what is the cost of 8 books?
- Cost of 1 book = ₹300 ÷ 5 = ₹60
- Cost of 8 books = 8 × ₹60 = ₹480

### Mixtures and Alligation
Alligation is a method used to solve problems involving mixtures of different values.

Example: How should a shopkeeper mix rice costing ₹50 per kg and rice costing ₹70 per kg to get a mixture worth ₹64 per kg?
- Using the rule of alligation, the ratio of cheaper to costlier is (70-64):(64-50) = 6:14 = 3:7

### Real-world Applications
1. **Business and Finance**: Calculating profits, losses, discounts, taxes, and interest rates.
2. **Cooking and Recipes**: Adjusting ingredient quantities while maintaining proportions.
3. **Health and Medicine**: Calculating dosages based on body weight.
4. **Statistics and Data Analysis**: Expressing data as percentages for easier comparison.

## Sample Problems

### Problem 1:
The ratio of boys to girls in a class is 5:4. If there are 20 boys, how many girls are there?
Solution:
- If boys:girls = 5:4, and boys = 20, then:
- 5 parts correspond to 20, so 1 part = 20 ÷ 5 = 4
- Girls = 4 parts = 4 × 4 = 16
- Therefore, there are 16 girls in the class.

### Problem 2:
A shopkeeper buys a shirt for ₹800 and marks it up by 25%. During a sale, he offers a 10% discount. What is the final selling price?
Solution:
- Marked price = ₹800 + 25% of ₹800 = ₹800 + ₹200 = ₹1000
- Discount = 10% of ₹1000 = ₹100
- Final selling price = ₹1000 - ₹100 = ₹900

### Problem 3:
In a mixture, the ratio of milk to water is 3:2. If 10 more liters of water is added, the ratio becomes 3:4. Find the initial quantities of milk and water.
Solution:
- Let the initial quantity of milk be 3x liters and water be 2x liters.
- After adding 10 liters of water: 3x/(2x + 10) = 3/4
- Cross multiply: 12x = 6x + 30
- 6x = 30
- x = 5
- So, initial milk = 3x = 15 liters and initial water = 2x = 10 liters.

## Summary
Ratios and percentages are powerful mathematical tools that help us make comparisons, analyze data, and solve practical problems. Understanding these concepts enables us to:

- Compare quantities using ratios and determine equivalent relationships
- Express parts as percentages of a whole
- Calculate percentage changes in values
- Solve problems involving mixtures, proportions, and distributions
- Apply these concepts to real-world situations in finance, cooking, data analysis, and more

Mastering ratios and percentages builds a strong foundation for more advanced mathematics and develops critical thinking skills for everyday problem-solving.`,
  quiz: {
    questions: [...easyQuestions, ...mediumQuestions],
  },
};

export default content;
