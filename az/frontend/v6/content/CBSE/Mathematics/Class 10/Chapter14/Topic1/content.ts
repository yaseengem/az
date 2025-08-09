import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl10_ch14_t1',
  topicNumber: 1,
  topicName: "Mean, median, mode",
  duration: 45,
  description: "Understanding measures of central tendency including mean, median, and mode; their calculation, interpretation, and applications in statistical analysis",
  explanation: `
# Mean, Median, and Mode: Measures of Central Tendency 📊

In statistics, we often need to find a single value that can represent or summarize an entire data set. These representative values are called **measures of central tendency** because they describe the center or middle of a data distribution. The three most common measures of central tendency are the **mean**, **median**, and **mode**. Let's explore each one in detail! 🔍

## Mean: The Average Value 📈

The **mean** (also called the arithmetic mean or average) is the sum of all values in a data set divided by the number of values.

### Formula for Mean:
For a set of n values: x₁, x₂, x₃, ..., xₙ
Mean (x̄) = (x₁ + x₂ + x₃ + ... + xₙ)/n = Σx/n

### Key Properties of Mean:
- ✅ Uses all values in the data set
- ✅ Suitable for further statistical calculations
- ✅ Changes when any value in the data set changes
- ❌ Sensitive to extreme values (outliers)
- ❌ May not be one of the values in the data set

### Example 1: 🧮
Find the mean of 12, 15, 18, 21, and 24.

Solution:
Mean = (12 + 15 + 18 + 21 + 24)/5 = 90/5 = 18

### Example 2: 💰
Raj earns ₹500, ₹550, ₹450, ₹600, and ₹500 over five days. What is his average daily earning?

Solution:
Mean = (500 + 550 + 450 + 600 + 500)/5 = 2600/5 = ₹520

## Median: The Middle Value 📊

The **median** is the middle value when the data is arranged in order (ascending or descending).

### How to Find the Median:
1. Arrange all values in ascending (or descending) order
2. If n is odd, the median is the middle value (the (n+1)/2th value)
3. If n is even, the median is the average of the two middle values (the n/2th and (n/2)+1th values)

### Key Properties of Median:
- ✅ Not affected by extreme values (outliers)
- ✅ Useful for skewed distributions
- ✅ Suitable for ordinal data
- ✅ Always exists as a unique value
- ❌ Doesn't use all information from the data set
- ❌ Less suitable for further mathematical treatment

### Example 3: 📏
Find the median of 15, 21, 9, 18, and 12.

Solution:
First, arrange the data in ascending order: 9, 12, 15, 18, 21
Since n = 5 (odd), the median is the (5+1)/2 = 3rd value = 15

### Example 4: 📚
Find the median of 22, 18, 16, 26, 20, and 24.

Solution:
Arranged in ascending order: 16, 18, 20, 22, 24, 26
Since n = 6 (even), the median is the average of the 3rd and 4th values
Median = (20 + 22)/2 = 21

## Mode: The Most Frequent Value 🔄

The **mode** is the value that occurs most frequently in the data set.

### Key Properties of Mode:
- ✅ Useful for categorical and discrete data
- ✅ Not affected by extreme values
- ✅ Easy to identify visually
- ✅ Always one of the values in the data set
- ❌ May not exist (if all values occur with equal frequency)
- ❌ May not be unique (if multiple values have the same highest frequency)

### Example 5: 👕
Find the mode of the shirt sizes: S, M, L, S, XL, M, S, XXL, M, S.

Solution:
Counting frequencies: S appears 4 times, M appears 3 times, L appears once, XL appears once, and XXL appears once.
The mode is S (size small) as it occurs most frequently.

### Example 6: 📝
Find the mode of 7, 8, 9, 7, 10, 8, 7, 11, 7.

Solution:
Counting frequencies: 7 appears 4 times, 8 appears twice, 9 appears once, 10 appears once, and 11 appears once.
The mode is 7 as it occurs most frequently.

## Multiple Modes 🔢

A data set can have:
- **No mode**: when all values occur with the same frequency
- **One mode** (unimodal): when one value occurs most frequently
- **Two modes** (bimodal): when two values tie for the highest frequency
- **More than two modes** (multimodal): when more than two values tie for the highest frequency

### Example 7: 🎲
Find the mode(s) of 3, 4, 5, 3, 6, 4, 7, 8, 4, 3.

Solution:
Frequencies: 3 appears 3 times, 4 appears 3 times, 5 appears once, 6 appears once, 7 appears once, and 8 appears once.
Both 3 and 4 occur three times each, so the data is bimodal with modes 3 and 4.

## Comparing Mean, Median, and Mode 🔍

| Measure | Advantage | Disadvantage | Best Used For |
|---------|-----------|--------------|---------------|
| Mean    | Uses all values; mathematically tractable | Affected by outliers | Symmetric data; further calculations |
| Median  | Resistant to outliers | Ignores some information | Skewed data; when outliers present |
| Mode    | Represents most common value; works for categorical data | May not exist or not be unique | Categorical data; finding typical value |

## Distribution Shapes and Central Tendency 📉

The relationship between mean, median, and mode can tell us about the shape of a distribution:

### Symmetric Distribution:
- Mean = Median = Mode
- Example: Bell curve/normal distribution
- Common in: heights, IQ scores, errors in measurements

### Right-Skewed (Positively Skewed) Distribution:
- Mean > Median > Mode
- The "tail" extends to the right
- Common in: income distributions, house prices

### Left-Skewed (Negatively Skewed) Distribution:
- Mode > Median > Mean
- The "tail" extends to the left
- Common in: age at death, exam scores in easy tests

### Empirical Relationship:
For moderately skewed distributions, we can approximate: Mode ≈ 3×Median - 2×Mean

## Effect of Adding, Subtracting, Multiplying or Dividing Each Value 🧮

### Effect on Mean:
- If we add (or subtract) a constant k to each value: Mean increases (or decreases) by k
- If we multiply (or divide) each value by a constant k: Mean is multiplied (or divided) by k

### Example 8: 🏋️‍♀️
If the mean weight of 10 students is 50 kg, what happens when each student gains 2 kg?
New mean = 50 + 2 = 52 kg

### Effect on Median:
- If we add (or subtract) a constant k to each value: Median increases (or decreases) by k
- If we multiply (or divide) each value by a positive constant k: Median is multiplied (or divided) by k

### Effect on Mode:
- If we add (or subtract) a constant k to each value: Mode increases (or decreases) by k
- If we multiply (or divide) each value by a constant k: Mode is multiplied (or divided) by k

## Weighted Mean 💹

In some cases, different values in a data set have different importance or frequency. We use **weighted mean** to account for this.

### Formula for Weighted Mean:
Weighted Mean = (w₁x₁ + w₂x₂ + ... + wₙxₙ)/(w₁ + w₂ + ... + wₙ) = Σwx/Σw

where w₁, w₂, ..., wₙ are the weights assigned to values x₁, x₂, ..., xₙ respectively.

### Example 9: 📝
A student scores 85 in a test worth 30% of the total grade and 92 in another test worth 70% of the grade. Calculate the weighted mean score.

Solution:
Weighted Mean = (0.30 × 85 + 0.70 × 92)/(0.30 + 0.70) = (25.5 + 64.4)/1 = 89.9

## Applications in Real Life 🌟

### Mean:
- Average income or expenditure
- Average temperature
- Average exam score
- Economic indicators like GDP per capita

### Median:
- Median income (better than mean for income distributions)
- Median house prices
- Median age of a population

### Mode:
- Most popular product size
- Most frequent blood group
- Most common response in a survey
- Most common shoe size

## Choosing the Right Measure 🔍

- **Use the mean** when the data is reasonably symmetric and doesn't have extreme outliers.
- **Use the median** when the data is skewed or has outliers.
- **Use the mode** when you want to find the most common or typical value, especially for categorical data.

### Example 10: 💰
Consider the monthly incomes (in thousands): 15, 18, 16, 17, 15, 19, and 120.
- Mean = (15+18+16+17+15+19+120)/7 = 31.4 thousand
- Median = 17 thousand
- Mode = 15 thousand

The mean is pulled up dramatically by the outlier 120, making the median a better representation of the typical income in this case.

## Summary ✨

- **Mean**: Sum of all values divided by the number of values; good for symmetric data without outliers
- **Median**: Middle value when data is arranged in order; good for skewed data or when outliers are present
- **Mode**: Most frequent value; good for finding the typical or most common value

Understanding these measures of central tendency allows us to summarize data effectively and choose the most appropriate representative value for our specific data and purpose.

### Practice Questions:
1. The mean of 8, 12, x, 16, and 24 is 15. Find the value of x.
   (Answer: x = 15)

2. If the median of 9, 12, 15, x, 20, 25, 27 is 15, find the possible values of x.
   (Answer: x can be any value between 12 and 20)

3. For the data set 3, 7, 8, 8, 9, 10, 12, which measure of central tendency best represents the data?
   (Answer: The mode (8) as it represents the most frequent value)
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
