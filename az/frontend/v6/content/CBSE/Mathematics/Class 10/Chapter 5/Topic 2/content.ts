import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl10_ch5_t2',
  topicNumber: 2,
  topicName: "Sum of first n terms",
  duration: 45,
  description: "Understanding and calculating the sum of first n terms of an arithmetic progression with applications in sequences and series",
  explanation: `
# Sum of first n terms of an Arithmetic Progression 🔢

In the previous topic, we learned about the definition and general term of an Arithmetic Progression (AP). Now, we'll explore one of the most practical applications of APs: calculating the sum of their terms! 🧮

## Why Calculate Sums? 🤔

Calculating the sum of a sequence is incredibly useful in real life. Whether you're:
- Calculating total savings with regular deposits 💰
- Finding the total distance traveled with changing speeds 🏃‍♀️
- Determining the total number of objects in a pattern that grows arithmetically 📊

Let's discover the formulas and techniques that make these calculations simple and elegant!

## Deriving the Sum Formula 📝

Imagine we have an AP with first term 'a' and common difference 'd':
a, a+d, a+2d, a+3d, ..., a+(n-1)d

We want to find the sum of the first n terms, which we denote as Sₙ:
Sₙ = a + (a+d) + (a+2d) + ... + [a+(n-1)d]

Let's use a clever trick! We'll write the sum in two different orders:

**Forward order:**
Sₙ = a + (a+d) + (a+2d) + ... + [a+(n-2)d] + [a+(n-1)d]

**Reverse order:**
Sₙ = [a+(n-1)d] + [a+(n-2)d] + ... + (a+d) + a

If we add these equations term by term:
2Sₙ = [2a+(n-1)d] + [2a+(n-1)d] + ... + [2a+(n-1)d] + [2a+(n-1)d]

There are n terms in this sum, each equal to [2a+(n-1)d], so:
2Sₙ = n[2a+(n-1)d]

Therefore:
Sₙ = n/2[2a+(n-1)d]

## Alternative Formula with First and Last Terms ✨

If we denote the last term (nth term) as 'l', we know that:
l = a+(n-1)d

Substituting into our sum formula:
Sₙ = n/2[a+l]

This gives us a simpler way to find the sum when we know the first and last terms!

## Examples of Sum Calculations 📊

### Example 1: Basic Sum Calculation 🧩
Find the sum of the first 10 terms of the AP: 5, 10, 15, 20, ...

**Solution:**
Here, a = 5, d = 5, n = 10
Using Sₙ = n/2[2a+(n-1)d]:
S₁₀ = 10/2[2(5)+(10-1)(5)]
    = 5[10+45]
    = 5(55)
    = 275

So the sum of the first 10 terms is 275.

### Example 2: Using First and Last Terms 🔄
Find the sum of the first 15 terms of an AP where the first term is 7 and the last term is 77.

**Solution:**
Here, a = 7, l = 77, n = 15
Using Sₙ = n/2[a+l]:
S₁₅ = 15/2[7+77]
    = 7.5(84)
    = 630

So the sum of the first 15 terms is 630.

### Example 3: Finding the Number of Terms 🔍
The sum of an AP is 210, with first term 10 and last term 40. How many terms are there?

**Solution:**
Here, Sₙ = 210, a = 10, l = 40
Using Sₙ = n/2[a+l]:
210 = n/2[10+40]
210 = n/2(50)
210 = 25n
n = 210/25 = 8.4

Since n must be a whole number and our formula gives a non-integer value, there's an error in the given information. Let's double-check by finding d:
If l = a+(n-1)d, then 40 = 10+(n-1)d
So (n-1)d = 30

For n = 8: 7d = 30, so d = 30/7 ≈ 4.29
For n = 9: 8d = 30, so d = 30/8 = 3.75

Neither gives us a whole number value for d, which is usually expected in typical AP problems.

### Example 4: Finding the Common Difference 🔄
If the sum of the first 15 terms of an AP is 75 and the sum of the first 25 terms is 175, find the first term and common difference.

**Solution:**
S₁₅ = 75, S₂₅ = 175

Using Sₙ = n/2[2a+(n-1)d]:
75 = 15/2[2a+(15-1)d] = 7.5[2a+14d] = 15a+105d ... (1)
175 = 25/2[2a+(25-1)d] = 12.5[2a+24d] = 25a+300d ... (2)

From equation (1): 15a+105d = 75, so a = (75-105d)/15 = 5-7d

Substituting into equation (2):
25(5-7d)+300d = 175
125-175d+300d = 175
125+125d = 175
125d = 50
d = 0.4

Now finding a:
a = 5-7d = 5-7(0.4) = 5-2.8 = 2.2

So, first term a = 2.2 and common difference d = 0.4.

## Special Cases and Formulas 🌟

### Sum of First n Natural Numbers 🔢
For the AP: 1, 2, 3, 4, ..., n
Sum = n(n+1)/2

For example, the sum of first 100 natural numbers is:
S₁₀₀ = 100(100+1)/2 = 100(101)/2 = 5050

### Sum of First n Even Natural Numbers 🔢
For the AP: 2, 4, 6, 8, ..., 2n
Sum = n(n+1)

For example, the sum of first 50 even natural numbers is:
S₅₀ = 50(50+1) = 50(51) = 2550

### Sum of First n Odd Natural Numbers 🔢
For the AP: 1, 3, 5, 7, ..., (2n-1)
Sum = n²

For example, the sum of first 30 odd natural numbers is:
S₃₀ = 30² = 900

## Real-Life Applications 🌍

### Progressive Savings 💰
Raj saves ₹1000 in January and increases his savings by ₹200 every month. How much will he save in total in one year?

**Solution:**
This forms an AP with a = 1000, d = 200, n = 12
Using Sₙ = n/2[2a+(n-1)d]:
S₁₂ = 12/2[2(1000)+(12-1)(200)]
    = 6[2000+2200]
    = 6(4200)
    = 25,200

So Raj will save ₹25,200 in one year.

### Stadium Seating 🏟️
In a stadium, the first row has 20 seats, the second has 24 seats, and so on with each row having 4 more seats than the previous. How many seats are there in the first 15 rows?

**Solution:**
This forms an AP with a = 20, d = 4, n = 15
Using Sₙ = n/2[2a+(n-1)d]:
S₁₅ = 15/2[2(20)+(15-1)(4)]
    = 7.5[40+56]
    = 7.5(96)
    = 720

So there are 720 seats in the first 15 rows.

## Arithmetic Mean 📊

When three terms a, A, b are in AP, A is called the arithmetic mean of a and b. In this case:
A = (a+b)/2

Similarly, if we need to insert n arithmetic means between two numbers a and b, then:
- The common difference d = (b-a)/(n+1)
- The arithmetic means are: a+d, a+2d, a+3d, ..., a+nd

### Example 5: Inserting Arithmetic Means 📏
Insert 4 arithmetic means between 8 and 28.

**Solution:**
Here, a = 8, b = 28, n = 4
Common difference d = (28-8)/(4+1) = 20/5 = 4

So the 4 arithmetic means are:
8+4 = 12, 8+2(4) = 16, 8+3(4) = 20, 8+4(4) = 24

The complete AP is: 8, 12, 16, 20, 24, 28

## Practice Problems 🏋️‍♂️

1. Find the sum of the first 20 multiples of 7.
2. How many terms of the AP: 9, 17, 25, ... must be taken to get a sum of 636?
3. Find the sum of all two-digit numbers divisible by 7.
4. If the sum of the first n terms of an AP is 4n² + n, find the nth term.
5. Find the sum of all natural numbers between 100 and 1000 which are divisible by 9.

## Summary ✨

In this topic, we learned:
- How to derive the formula for the sum of n terms of an AP
- Two equivalent formulas for the sum:
  * Sₙ = n/2[2a+(n-1)d]
  * Sₙ = n/2[a+l]
- Special cases for the sum of natural numbers, even numbers, and odd numbers
- Real-life applications of arithmetic progression sums
- How to use the formulas to solve various problems involving sums

Understanding how to calculate the sum of terms in an arithmetic progression gives us a powerful tool for solving many real-world problems efficiently. Instead of adding up terms one by one, we can use these elegant formulas to find the answer directly! 🚀

## Quick Reference Guide 📋

| Formula | Purpose |
|---------|---------|
| Sₙ = n/2[2a+(n-1)d] | Sum using first term and common difference |
| Sₙ = n/2[a+l] | Sum using first and last terms |
| Sum of first n natural numbers = n(n+1)/2 | Special case |
| Sum of first n even natural numbers = n(n+1) | Special case |
| Sum of first n odd natural numbers = n² | Special case |

Remember, practice makes perfect! Try solving different types of problems to strengthen your understanding of these concepts. Good luck! 🍀
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
