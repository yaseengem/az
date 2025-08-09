import { TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl3_ch2_t2',
  topicNumber: 2,
  topicName: "Comparing and ordering numbers",
  duration: 40,
  description: "Learn how to compare and arrange numbers in order using place values and number relationships",
  explanation: `
# Comparing and Ordering Numbers 📊

Have you ever wondered which number is bigger or smaller? Or how to arrange numbers in order? In this topic, we'll learn how to compare numbers and put them in order. This is an important skill that we use every day!

## Comparing Numbers 🔍

When we compare numbers, we decide which number is greater than, less than, or equal to another number. We use special symbols to show the comparison:

- **Greater than (>)**: When the first number is larger than the second number
  - Example: 8 > 5 (8 is greater than 5)

- **Less than (<)**: When the first number is smaller than the second number
  - Example: 3 < 7 (3 is less than 7)

- **Equal to (=)**: When both numbers have the same value
  - Example: 6 = 6 (6 is equal to 6)

Remember: The symbol always opens toward the larger number, just like a hungry mouth that wants to eat the bigger number! 🦈

## How to Compare Numbers 🤔

### Step 1: Compare the Number of Digits
If numbers have different numbers of digits, the one with more digits is larger.
- Example: 265 > 87 (265 has 3 digits, while 87 has only 2 digits)

### Step 2: Compare Digits from Left to Right
If numbers have the same number of digits, compare the leftmost digits first:

1. Compare the hundreds digits first (leftmost digit in 3-digit numbers)
2. If the hundreds digits are the same, compare the tens digits
3. If the tens digits are also the same, compare the ones digits

#### Example 1: Comparing 352 and 487
- Hundreds place: 3 < 4
- Since 3 < 4, we know that 352 < 487
- We don't need to check the other digits

#### Example 2: Comparing 625 and 678
- Hundreds place: 6 = 6
- Tens place: 2 < 7
- Since 2 < 7, we know that 625 < 678
- We don't need to check the ones digits

#### Example 3: Comparing 243 and 247
- Hundreds place: 2 = 2
- Tens place: 4 = 4
- Ones place: 3 < 7
- Since 3 < 7, we know that 243 < 247

## Ordering Numbers 📈

Once we know how to compare numbers, we can arrange them in order:

### Ascending Order
- Arranging numbers from smallest to largest
- Example: 124, 243, 357, 489

### Descending Order
- Arranging numbers from largest to smallest
- Example: 978, 765, 532, 321

## Examples of Comparing and Ordering Numbers ✏️

### Example 1: Compare 356 and 365
- Hundreds place: 3 = 3
- Tens place: 5 < 6
- Since 5 < 6 in the tens place, we know that 356 < 365

### Example 2: Order these numbers from smallest to largest: 752, 275, 527
- Compare 752 and 275: 
  - Hundreds place: 7 > 2
  - Since 7 > 2, we know 752 > 275
- Compare 275 and 527:
  - Hundreds place: 2 < 5
  - Since 2 < 5, we know 275 < 527
- Compare 527 and 752:
  - Hundreds place: 5 < 7
  - Since 5 < 7, we know 527 < 752
- Therefore, in ascending order: 275, 527, 752

### Example 3: Order these numbers from largest to smallest: 408, 840, 480
- Compare 408 and 840:
  - Hundreds place: 4 < 8
  - Since 4 < 8, we know 408 < 840
- Compare 408 and 480:
  - Hundreds place: 4 = 4
  - Tens place: 0 < 8
  - Since 0 < 8, we know 408 < 480
- Compare 480 and 840:
  - Hundreds place: 4 < 8
  - Since 4 < 8, we know 480 < 840
- Therefore, in descending order: 840, 480, 408

## Finding the Smallest and Largest Numbers 🏆

### Smallest 3-Digit Number
The smallest 3-digit number is 100. It has:
- 1 in the hundreds place
- 0 in the tens place
- 0 in the ones place

### Largest 3-Digit Number
The largest 3-digit number is 999. It has:
- 9 in the hundreds place
- 9 in the tens place
- 9 in the ones place

## Making Numbers with Given Digits 🧩

We can make different numbers using the same digits. Let's see how to find the smallest and largest numbers we can make with given digits.

### Example: Using the digits 5, 2, and 8 (without repeating)

#### To make the smallest number:
- Put the smallest digit in the hundreds place
- Put the next smallest digit in the tens place
- Put the largest digit in the ones place
- Result: 258

#### To make the largest number:
- Put the largest digit in the hundreds place
- Put the next largest digit in the tens place
- Put the smallest digit in the ones place
- Result: 852

## Numbers on a Number Line 📏

A number line helps us visualize the order of numbers:
- Numbers increase as we move right
- Numbers decrease as we move left
- The number on the right is always greater than the number on the left

\`\`\`
  100       200       300       400       500
   |---------|---------|---------|---------|
\`\`\`

## Finding Numbers Between Two Given Numbers 🎯

There are many numbers between any two different numbers:

### Example: Find a number between 345 and 356
- We can choose 346, 347, 348, 349, 350, 351, 352, 353, 354, or 355
- Any of these numbers is greater than 345 and less than 356

### Example: Find a number between 560 and 570
- We can choose 561, 562, 563, 564, 565, 566, 567, 568, or 569
- Any of these numbers is greater than 560 and less than 570

## Real-Life Applications 🌍

We use number comparison and ordering in many real-life situations:

1. **Sports**: Comparing scores to determine winners
   - Example: In a race, the person with the least time wins

2. **Shopping**: Comparing prices to find the best deal
   - Example: A toy costing ₹245 is cheaper than one costing ₹254

3. **Measurements**: Comparing heights, weights, or distances
   - Example: A building that is 328 meters tall is shorter than one that is 382 meters tall

4. **Rankings**: Creating lists from first to last
   - Example: Ranking students based on their marks

## Practice Problems to Try 📝

Here are some problems to test your understanding:

1. **Question**: Which is greater: 475 or 457?
   **Answer**: 475 is greater than 457 because when we compare digits from left to right, 7 > 5 in the tens place.

2. **Question**: Arrange these numbers in ascending order: 602, 620, 260
   **Answer**: 260, 602, 620
   **Explanation**: 
   - 260 has 2 in the hundreds place, while 602 and 620 have 6
   - 602 and 620 both have 6 in the hundreds place, but 0 < 2 in the tens place

3. **Question**: What is the smallest number you can make using the digits 3, 9, and 5 exactly once?
   **Answer**: 359
   **Explanation**: 
   - Smallest digit (3) in hundreds place
   - Next smallest digit (5) in tens place
   - Largest digit (9) in ones place

4. **Question**: Which number comes just before 700?
   **Answer**: 699
   **Explanation**: 
   - To find the number just before a number, subtract 1

## Fun Activities to Try at Home 🏠

1. **Number Card Game**: Write numbers on cards and have players arrange them in order.

2. **Number Race**: Roll dice to create numbers, and the player with the larger number moves forward.

3. **Number Hunt**: Find numbers around your home and arrange them from smallest to largest.

4. **Create Your Own Number Line**: Draw a number line on paper and mark different numbers on it.

## Summary 📝

In this topic, we learned:

- How to compare numbers using >, <, and = symbols
- How to compare numbers by looking at their digits from left to right
- How to arrange numbers in ascending (smallest to largest) and descending (largest to smallest) order
- How to find the smallest and largest numbers we can make with given digits
- How to find numbers that come between two given numbers
- Real-life applications of comparing and ordering numbers

Remember, when comparing numbers with the same number of digits:
1. Always start with the leftmost digit (highest place value)
2. Move right until you find digits that are different
3. The number with the larger digit at that position is greater

Being able to compare and order numbers will help you solve many math problems and make decisions in everyday life! 🌟
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};

