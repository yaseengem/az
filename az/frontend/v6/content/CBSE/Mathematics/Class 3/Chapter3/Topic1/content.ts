import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl3_ch3_t1',
  topicNumber: 1,
  topicName: "Addition of 3-digit numbers",
  duration: 45,
  description: "Learning to add 3-digit numbers with and without carrying, and solving related word problems",
  explanation: `
# Addition of 3-digit Numbers 🔢

Addition is one of the basic operations in mathematics that we use every day. When we add numbers, we combine quantities to find the total. In this topic, we'll learn how to add 3-digit numbers, which will help us solve many real-life problems! 📝

## Understanding Place Value 🧮

Before we start adding 3-digit numbers, let's remember what each digit in a 3-digit number represents:

- The rightmost digit is in the **ones place** (units)
- The middle digit is in the **tens place**
- The leftmost digit is in the **hundreds place**

For example, in the number 352:
- 2 is in the ones place (represents 2 ones)
- 5 is in the tens place (represents 5 tens or 50)
- 3 is in the hundreds place (represents 3 hundreds or 300)

Understanding place value helps us add numbers correctly!

## Adding 3-digit Numbers Without Carrying 🔍

Let's start with the simplest case - adding two 3-digit numbers without needing to carry.

**Example 1**: Find 234 + 345

Step 1: Write the numbers in columns, lining up the place values.
\`\`\`
  2 3 4
+ 3 4 5
\`\`\`

Step 2: Add the digits in each place value, starting from the right (ones place).
- Ones: 4 + 5 = 9
- Tens: 3 + 4 = 7
- Hundreds: 2 + 3 = 5

\`\`\`
  2 3 4
+ 3 4 5
  5 7 9
\`\`\`

So, 234 + 345 = 579

This was easy because none of the place values added up to more than 9. But what happens when they do?

## Adding with Carrying (Regrouping) 📋

When the sum of digits in any place value is 10 or more, we need to "carry" or "regroup" the extra tens to the next higher place value.

**Example 2**: Find 368 + 257

Step 1: Write the numbers in columns.
\`\`\`
  3 6 8
+ 2 5 7
\`\`\`

Step 2: Add the digits in the ones place.
- Ones: 8 + 7 = 15
- Since 15 is more than 9, we write 5 in the ones place and carry 1 to the tens place.

\`\`\`
    1
  3 6 8
+ 2 5 7
      5
\`\`\`

Step A3: Add the digits in the tens place, including the carried 1.
- Tens: 6 + 5 + 1 = 12
- Since 12 is more than 9, we write 2 in the tens place and carry 1 to the hundreds place.

\`\`\`
  1 1
  3 6 8
+ 2 5 7
    2 5
\`\`\`

Step 4: Add the digits in the hundreds place, including the carried 1.
- Hundreds: 3 + 2 + 1 = 6

\`\`\`
  1 1
  3 6 8
+ 2 5 7
  6 2 5
\`\`\`

So, 368 + 257 = 625

## Adding with Multiple Carries 🎯

Sometimes we need to carry in multiple place values. Let's see how to handle that.

**Example 3**: Find 758 + 367

Step 1: Write the numbers in columns.
\`\`\`
  7 5 8
+ 3 6 7
\`\`\`

Step 2: Add the digits in the ones place.
- Ones: 8 + 7 = 15
- Write 5 in the ones place and carry 1 to the tens place.

\`\`\`
    1
  7 5 8
+ 3 6 7
      5
\`\`\`

Step 3: Add the digits in the tens place, including the carried 1.
- Tens: 5 + 6 + 1 = 12
- Write 2 in the tens place and carry 1 to the hundreds place.

\`\`\`
  1 1
  7 5 8
+ 3 6 7
    2 5
\`\`\`

Step 4: Add the digits in the hundreds place, including the carried 1.
- Hundreds: 7 + 3 + 1 = 11
- Since this is the last place value, we write the entire 11.

\`\`\`
  1 1
  7 5 8
+ 3 6 7
1 1 2 5
\`\`\`

So, 758 + 367 = 1,125

Notice that our answer has 4 digits! When we add two 3-digit numbers, the sum can sometimes be a 4-digit number.

## Special Cases in Addition 🌟

### Adding When One Number Has Fewer Digits

Sometimes, you may need to add a 3-digit number to a smaller number. Just line up the place values and add as usual, treating missing places as zeros.

**Example 4**: Find 456 + 37

Step 1: Write the numbers in columns, lining up place values.
\`\`\`
  4 5 6
+   3 7
\`\`\`

Step 2: Add digit by digit (treating the missing hundreds place as 0).
- Ones: 6 + 7 = 13 (write 3, carry 1)
- Tens: 5 + 3 + 1 = 9
- Hundreds: 4 + 0 = 4

\`\`\`
    1
  4 5 6
+   3 7
  4 9 3
\`\`\`

So, 456 + 37 = 493

### Adding Three or More Numbers

We can add more than two numbers using the same method. Just line them up and work column by column.

**Example 5**: Find 234 + 152 + 321

\`\`\`
  2 3 4
  1 5 2
+ 3 2 1
\`\`\`

Adding column by column:
- Ones: 4 + 2 + 1 = 7
- Tens: 3 + 5 + 2 = 10 (write 0, carry 1)
- Hundreds: 2 + 1 + 3 + 1 = 7

\`\`\`
    1
  2 3 4
  1 5 2
+ 3 2 1
  7 0 7
\`\`\`

So, 234 + 152 + 321 = 707

## Real-Life Word Problems 📚

Addition of 3-digit numbers can help us solve many real-life problems. Let's look at some examples:

**Problem 1**: A school library has 275 storybooks and 348 textbooks. How many books are there in the library in total?

Solution:
- Total books = Storybooks + Textbooks
- Total books = 275 + 348

Setting up the addition:
\`\`\`
    1 1
  2 7 5
+ 3 4 8
  6 2 3
\`\`\`

So, there are 623 books in the library.

**Problem 2**: Rahul's father deposited ₹425 in his bank account in January and ₹389 in February. How much money did he deposit in total in these two months?

Solution:
- Total money deposited = January deposit + February deposit
- Total money deposited = ₹425 + ₹389

Setting up the addition:
\`\`\`
    1 1
  4 2 5
+ 3 8 9
  8 1 4
\`\`\`

So, Rahul's father deposited ₹814 in total.

**Problem 3**: In a school competition, Class 3A scored 387 points, Class 3B scored 294 points, and Class 3C scored 156 points. What was the total score of all three classes?

Solution:
- Total score = Class 3A score + Class 3B score + Class 3C score
- Total score = 387 + 294 + 156

Setting up the addition:
\`\`\`
    1 1
  3 8 7
  2 9 4
+ 1 5 6
  8 3 7
\`\`\`

So, the total score of all three classes was 837 points.

## Mental Math Strategies for Addition 🧠

For some additions, you can use mental math strategies instead of the standard algorithm:

1. **Breaking Apart by Place Value**: Add the hundreds, then the tens, then the ones.
   - Example: 325 + 241
   - Hundreds: 300 + 200 = 500
   - Tens: 20 + 40 = 60
   - Ones: 5 + 1 = 6
   - Total: 500 + 60 + 6 = 566

2. **Friendly Numbers**: Adjust one number to make it a "friendly" number (like a multiple of 10 or 100), then compensate.
   - Example: 396 + 157
   - Adjust: 396 + 4 = 400 (add 4 to make it friendly)
   - Add: 400 + 157 = 557
   - Compensate: 557 - 4 = 553 (subtract the 4 we added earlier)
   - So, 396 + 157 = 553

## Checking Your Answers ✓

It's always a good idea to check your addition. Here are some ways to do that:

1. **Add in reverse order**: If 265 + 378 = 643, then 378 + 265 should also equal 643.

2. **Estimation**: Round the numbers and see if your answer is reasonable.
   - Example: 438 + 295 ≈ 400 + 300 = 700, so your answer should be close to 700.

3. **Use subtraction**: Subtract one of the numbers from the sum. If 438 + 295 = 733, then 733 - 295 should equal 438.

## Practice Problems 🏋️‍♀️

Let's practice adding 3-digit numbers:

1. 234 + 123 = 357
2. 456 + 327 = 783
3. 708 + 191 = 899
4. 625 + 238 = 863
5. 347 + 285 = 632

## Summary ✨

In this topic, we learned how to add 3-digit numbers:

- Line up the place values (ones, tens, hundreds)
- Add column by column, starting from the ones place
- Carry (regroup) when the sum in a column is 10 or more
- Apply addition to solve real-life word problems

Addition of 3-digit numbers is an important skill that you'll use often, both in mathematics and in everyday life. Keep practicing, and you'll become an addition expert in no time! 🌟
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
