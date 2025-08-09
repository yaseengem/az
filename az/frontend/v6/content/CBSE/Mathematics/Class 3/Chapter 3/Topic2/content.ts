import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl3_ch3_t2',
  topicNumber: 2,
  topicName: "Subtraction of 3-digit numbers",
  duration: 45,
  description: "Learning to subtract 3-digit numbers with and without regrouping (borrowing), and solving related word problems",
  explanation: `
# Subtraction of 3-digit Numbers 🔢

Subtraction is one of the four basic arithmetic operations, along with addition, multiplication, and division. In this topic, we'll learn how to subtract 3-digit numbers, which is an important skill you'll use throughout your life! Let's explore how to subtract larger numbers step by step. 📝

## What is Subtraction? ➖

Subtraction is the process of finding the difference between two numbers. When we subtract, we take away one number from another to find out how many are left.

For example, if you have 5 chocolates 🍫 and eat 2 of them, how many do you have left? To find out, we subtract: 5 - 2 = 3. So, you have 3 chocolates left.

In subtraction, we use these terms:
- **Minuend**: The number from which we subtract (the larger number)
- **Subtrahend**: The number being subtracted (the smaller number)
- **Difference**: The result of subtraction

For example, in 8 - 3 = 5:
- 8 is the minuend
- 3 is the subtrahend
- 5 is the difference

## Subtracting 3-digit Numbers 🧮

When we work with 3-digit numbers, we follow the same basic principles as with smaller numbers, but we need to be careful with place values: hundreds, tens, and ones.

### Method 1: Subtraction Without Regrouping (Borrowing)

Let's start with an example where we don't need to borrow:

**Example 1**: Find 584 - 261

Step 1: Arrange the numbers in columns, lining up the place values.
\`\`\`
  5 8 4
- 2 6 1
\`\`\`

Step 2: Subtract the digits in each place value, starting from the right (ones place).
- Ones: 4 - 1 = 3
- Tens: 8 - 6 = 2
- Hundreds: 5 - 2 = 3

\`\`\`
  5 8 4
- 2 6 1
  3 2 3
\`\`\`

So, 584 - 261 = 323

This was easy because each digit in the minuend (584) was larger than the corresponding digit in the subtrahend (261). But what happens when that's not the case?

### Method 2: Subtraction With Regrouping (Borrowing)

When a digit in the minuend is smaller than the corresponding digit in the subtrahend, we need to "borrow" or "regroup" from the next higher place value.

**Example 2**: Find 732 - 458

Step 1: Arrange the numbers in columns.
\`\`\`
  7 3 2
- 4 5 8
\`\`\`

Step 2: Start with the ones place. Since 2 is smaller than 8, we need to borrow.
- Borrow 1 ten from the tens place (3), which becomes 2.
- Add 10 ones to the ones place (2), which becomes 12.
- Now subtract: 12 - 8 = 4

\`\`\`
  7 2 12
- 4 5  8
      4
\`\`\`

Step 3: Move to the tens place. Since 2 is smaller than 5, we need to borrow again.
- Borrow 1 hundred from the hundreds place (7), which becomes 6.
- Add 10 tens to the tens place (2), which becomes 12.
- Now subtract: 12 - 5 = 7

\`\`\`
  6 12 12
- 4  5  8
    7  4
\`\`\`

Step 4: Finish with the hundreds place.
- Subtract: 6 - 4 = 2

\`\`\`
  6 12 12
- 4  5  8
  2  7  4
\`\`\`

So, 732 - 458 = 274

### Example 3: Subtraction with Multiple Borrowings

Let's try a more challenging example where we need to borrow multiple times.

**Example 3**: Find 500 - 273

Step 1: Arrange the numbers.
\`\`\`
  5 0 0
- 2 7 3
\`\`\`

Step 2: Start with the ones place. Since 0 is smaller than 3, we need to borrow.
- We need to borrow from the tens place, but it's also 0. So we need to borrow from the hundreds place.
- Borrow 1 hundred from 5, which becomes 4.
- The tens place gets 10 tens, but we need to borrow 1 ten for the ones place, so the tens place becomes 9.
- The ones place gets 10 ones, and we subtract: 10 - 3 = 7

Step 3: Move to the tens place and subtract: 9 - 7 = 2

Step 4: Finish with the hundreds place: 4 - 2 = 2

\`\`\`
  4 9 10
- 2 7  3
  2 2  7
\`\`\`

So, 500 - 273 = 227

## Checking Your Answer ✓

A great way to check your subtraction is to use addition! Since subtraction is the opposite of addition, you can add your answer to the subtrahend, and you should get the minuend.

For example, to check 732 - 458 = 274:
- Add 274 + 458 = 732 ✓

If you get the original minuend, your answer is correct!

## Word Problems with 3-digit Subtraction 📚

Subtraction is used to solve many real-life problems. Here are some examples:

**Problem 1**: A school library has 625 books. If 347 books are borrowed by students, how many books are still in the library?

Solution:
- Total books - Borrowed books = Remaining books
- 625 - 347 = 278
- So, 278 books are still in the library.

**Problem 2**: Rita has ₹950 in her piggy bank. She spends ₹375 on a new dress. How much money does she have left?

Solution:
- Total money - Money spent = Money left
- ₹950 - ₹375 = ₹575
- So, Rita has ₹575 left in her piggy bank.

**Problem 3**: A fruit seller had 836 apples. He sold 249 apples on Monday and 372 apples on Tuesday. How many apples does he have left?

Solution:
- Step 1: Find the total number of apples sold.
  - 249 + 372 = 621 apples sold
- Step 2: Subtract the total sold from the initial amount.
  - 836 - 621 = 215 apples left
- So, the fruit seller has 215 apples left.

## Special Cases in Subtraction 🎯

### Subtracting from 1000

When subtracting from 1000, we often need to borrow multiple times. For example:

1000 - 463 = ?

Since 1000 has zeros in the ones, tens, and hundreds places, we need to borrow carefully:
- Borrow 1 thousand, which gives 10 hundreds
- Borrow 1 hundred, which gives 10 tens
- Borrow 1 ten, which gives 10 ones

\`\`\`
   9 9 10
  1 0 0 0
-   4 6 3
    5 3 7
\`\`\`

So, 1000 - 463 = 537

### Subtracting from a Number with Zeros

When subtracting from a number with zeros in some place values, we need to borrow from the next non-zero digit to the left.

For example, 607 - 358 = ?

\`\`\`
  5 9 17
  6 0 7
- 3 5 8
  2 4 9
\`\`\`

So, 607 - 358 = 249

## Tips and Tricks for 3-digit Subtraction 💡

1. **Align the place values**: Always make sure the ones, tens, and hundreds places are lined up correctly.

2. **Start from the right**: Always begin subtracting from the ones place and move left.

3. **Check your borrowing**: When you borrow, don't forget to reduce the value of the place you borrowed from by 1.

4. **Verify your answer**: Use addition to check your result.

5. **Mental Math Shortcut**: For subtracting numbers close to 100, 200, etc., you can subtract from the next hundred and then add the difference.
   For example: 825 - 793 = ?
   - 800 - 793 = 7
   - 825 - 800 = 25
   - So 825 - 793 = 7 + 25 = 32

## Practice Problems 🏋️‍♀️

Let's try a few more problems to practice:

1. 754 - 231 = 523
2. 800 - 549 = 251
3. 675 - 428 = 247
4. 900 - 647 = 253
5. 321 - 198 = 123

## Summary ✨

In this topic, we learned how to subtract 3-digit numbers with and without regrouping (borrowing). Remember these key points:

- Align the place values correctly (ones, tens, hundreds)
- Start from the ones place and move left
- Borrow from the left when needed
- Check your answer using addition

Subtraction of 3-digit numbers is an important skill that you'll use in many different situations, from calculating change at a store to solving more complex math problems in the future. Keep practicing, and you'll become a subtraction expert in no time! 🌟
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
