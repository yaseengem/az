import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
  id: 'cl10_ch17_t3',
  topicNumber: 3,
  topicName: "Fun with Numbers",
  duration: 45,
  description: "Exploring mathematical shortcuts, patterns, and mental math strategies for quick calculations and number tricks",
  explanation: `
# Fun with Numbers 🔢

Numbers are fascinating! 🤩 Behind their simple appearance lies a world of patterns, tricks, and shortcuts that can make calculations faster and more enjoyable. In this topic, we'll explore various mathematical shortcuts and mental math strategies that will not only improve your calculation speed but also deepen your understanding of number properties. Let's make mathematics fun! 🎮

## Quick Calculation Techniques 🚀

### Multiplication Shortcuts ✖️

#### Multiplying by 5
- **Method**: Multiply by 10 and divide by 2
- **Example**: 68 × 5 = 68 × 10 ÷ 2 = 680 ÷ 2 = 340
- **Why it works**: Since 5 = 10 ÷ 2, multiplying by 5 is equivalent to multiplying by 10 and then dividing by 2

#### Multiplying by 9
- **Method**: Multiply by 10 and subtract the original number
- **Example**: 74 × 9 = 74 × 10 - 74 = 740 - 74 = 666
- **Why it works**: Since 9 = 10 - 1, multiplying by 9 is equivalent to multiplying by 10 and then subtracting the original number once

#### Multiplying by 11
- **For single-digit numbers**: Simply repeat the digit (e.g., 7 × 11 = 77)
- **For two-digit numbers**: Write down the sum of the digits between the original digits
  - **Example**: 53 × 11 = 5(5+3)3 = 583
  - If the sum exceeds 9, carry over the tens digit
  - **Example**: 87 × 11 = 8(8+7)7 = 8(15)7 = 8+1,5,7 = 957
- **Why it works**: 11 = 10 + 1, so 53 × 11 = 53 × (10 + 1) = 530 + 53

#### Multiplying numbers close to 100
- **Method** (using Nikhilam sutra):
  1. Determine how far each number is from 100 (the deficiency)
  2. Subtract the deficiency of one number from the other number (this gives the first part of the answer)
  3. Multiply the deficiencies (this gives the second part)
- **Example**: 98 × 97
  - Deficiencies: 98→2, 97→3
  - First part: 98-3 = 95 (or 97-2 = 95)
  - Second part: 2×3 = 6 (write as 06 since it's a two-digit result)
  - Answer: 9,506
- **Why it works**: (100-a)(100-b) = 10,000 - 100a - 100b + ab = 100(100-a-b) + ab

### Squaring Techniques 🔄

#### Squaring numbers ending in 5
- **Method**: 
  1. Multiply the tens digit by the next higher number
  2. Append 25 to the result
- **Example**: 35²
  - 3 × 4 = 12
  - Append 25: 1,225
- **Why it works**: (10a+5)² = 100a² + 100a + 25 = 100a(a+1) + 25

#### Squaring numbers close to powers of 10
- **Method** (using Yavadunam sutra):
  1. Determine the deficiency or excess from the nearest power of 10
  2. Add/subtract twice the product of the base and the difference, then add the square of the difference
- **Example**: 98²
  - Base: 100, Deficiency: 2
  - 98² = 100² - 2(100)(2) + 2² = 10,000 - 400 + 4 = 9,604
- **Why it works**: (a-b)² = a² - 2ab + b²

### Addition and Subtraction Tricks ➕➖

#### Adding numbers with complements
- **Method**: Look for pairs that sum to 10, 100, etc.
- **Example**: 37 + 85 + 63 + 15
  - Pair 37+63=100 and 85+15=100
  - 100 + 100 = 200
- **Why it works**: Grouping complementary numbers simplifies the calculation

#### Subtraction using complements
- **Method**: Add the complement and adjust
- **Example**: 1000 - 387
  - Complement of 387 with respect to 999: 999-387=612
  - Add 1: 612+1=613
- **Why it works**: 1000-387 = 999-387+1 = (999-387)+1

## Number Properties and Patterns 🧩

### Divisibility Rules 📏

- **Divisibility by 2**: Last digit is even (0, 2, 4, 6, 8)
- **Divisibility by 3**: Sum of all digits is divisible by 3
  - **Example**: Is 4,563 divisible by 3?
  - 4+5+6+3 = 18
  - 18 is divisible by 3, so 4,563 is divisible by 3
- **Divisibility by 4**: Last two digits form a number divisible by 4
- **Divisibility by 5**: Last digit is 0 or 5
- **Divisibility by 6**: Divisible by both 2 and 3
- **Divisibility by 8**: Last three digits form a number divisible by 8
- **Divisibility by 9**: Sum of all digits is divisible by 9
- **Divisibility by 10**: Last digit is 0
- **Divisibility by 11**: Alternating sum of digits is divisible by 11
  - **Example**: Is 5,643 divisible by 11?
  - Alternating sum: 5-6+4-3 = 0
  - 0 is divisible by 11, so 5,643 is divisible by 11

### Digital Root 🌱
- **Definition**: Repeatedly sum the digits of a number until a single digit is obtained
- **Method**: 
  1. Add all digits
  2. If result has multiple digits, repeat
- **Example**: Digital root of 7,584
  - 7+5+8+4 = 24
  - 2+4 = 6
  - Digital root is 6
- **Applications**:
  - Quick check for divisibility by 9 (if digital root is 9)
  - Error detection in number transmission

### Casting Out Nines ✅
- **Method**: Replace each number with its digital root, perform the operation, and check if results match
- **Example**: Verify 467 × 12 = 5,604
  - Digital root of 467: 4+6+7 = 17, 1+7 = 8
  - Digital root of 12: 1+2 = 3
  - 8 × 3 = 24, digital root: 2+4 = 6
  - Digital root of 5,604: 5+6+0+4 = 15, 1+5 = 6
  - Since both equal 6, the calculation seems correct

## Vedic Mathematics Techniques 🧠

Vedic Mathematics is an ancient Indian system of mental calculation methods. Here are some key techniques:

### Nikhilam (All from Nine and Last from Ten) 🔍
- Used for multiplication of numbers close to powers of 10
- **Example**: We saw this earlier with 98 × 97

### Urdhva Tiryagbhyam (Vertically and Crosswise) ↕️↘️
- A general multiplication method that works by aligning partial products
- **Example**: 43 × 28
  - Step 1: 3×8 = 24 (write 4, carry 2)
  - Step 2: 3×2 + 4×8 + 2(carried) = 6 + 32 + 2 = 40 (write 0, carry 4)
  - Step 3: 4×2 + 4(carried) = 8 + 4 = 12 (write 12)
  - Result: 1,204

### Vinculum (Working with Complements) 🔄
- Makes calculations easier by substituting a number with its complement to the nearest power of 10
- **Example**: 996 + 999
  - Rewrite as 1000-4 + 1000-1
  - = 2000 - 5 = 1,995

### Practical Applications 🛒

These techniques have numerous applications in daily life:

#### Shopping and Bills 🛍️
- Quickly calculate:
  - Discounts (10% of 450 = 45, so 20% is 90)
  - Tips (15% of 200 = 10% of 200 + 5% of 200 = 20 + 10 = 30)
  - Sales tax

#### Time Management ⏰
- Calculate elapsed time or remaining time mentally
- **Example**: If it's 3:45 PM now, and an appointment is at 5:30 PM, the time difference is 1 hour and 45 minutes

#### Financial Calculations 💰
- Simple interest (Principal × Rate × Time ÷ 100)
- Compound interest approximations
- Loan payments

## Sample Questions 📝

1. **Question**: Using the divisibility test for 11, determine if 8,954 is divisible by 11.
   - **Solution**: Alternating sum: 8-9+5-4 = 0. Since 0 is divisible by 11, 8,954 is divisible by 11.

2. **Question**: Calculate 997 × 1,003 using the difference of squares formula.
   - **Solution**: 997 × 1,003 = (1000-3)(1000+3) = 1000² - 3² = 1,000,000 - 9 = 999,991

3. **Question**: Using mental math, find the product of 25 × 48.
   - **Solution**: 25 × 48 = 25 × 4 × 12 = 100 × 12 = 1,200

4. **Question**: What is 45² using the squaring formula for numbers ending in 5?
   - **Solution**: 4 × 5 = 20, append 25. Result: 2,025

5. **Question**: Using the digital root method, check if 4,563 is divisible by 9.
   - **Solution**: 4+5+6+3 = 18, 1+8 = 9. The digital root is 9, so 4,563 is divisible by 9.

## Number Tricks to Impress 🎭

### Calendar Calculation 📅
- **Method**: Use patterns in the calendar to quickly determine the day of the week
- **Example**: January 1, 2000 was a Saturday, so January 1, 2028 will be a Saturday (28 years is exactly 4 weeks in terms of the day of the week)

### Calculating Day of Week 🗓️
- **Method**: Use a formula like Zeller's Congruence or mental shortcuts
- **Example**: March 15, 2022
  - 2022 years since 0 means approximately 2022÷4 = 505.5 leap years
  - 2022 + 505 = 2527 days offset from week pattern
  - 2527 ÷ 7 = 361 remainder 0
  - March has offset of 3 days in a non-leap year
  - 15 + 3 = 18
  - 18 ÷ 7 = 2 remainder 4
  - 4 days from Sunday (day 0) is Thursday

### The Magical Number 9 ✨
- **Method**: Various tricks using the properties of 9
- **Example**: Think of a two-digit number, find its digit sum, then subtract from the original number. The result's digit sum will always be 9.
  - Choose 73
  - Digit sum: 7+3 = 10
  - 73 - 10 = 63
  - Digit sum of 63: 6+3 = 9

## Summary ✨

In this topic, we explored various mathematical shortcuts, patterns, and mental math strategies:

- **Quick calculation techniques** for multiplication, squaring, addition, and subtraction
- **Number properties and patterns** including divisibility rules, digital roots, and casting out nines
- **Vedic Mathematics techniques** such as Nikhilam, Urdhva Tiryagbhyam, and Vinculum
- **Practical applications** in shopping, time management, and financial calculations
- **Number tricks** for calendar calculation and day-of-week calculation

By practicing these techniques, you can become more efficient in calculations, develop a deeper understanding of numbers, and even impress others with your mathematical abilities! Remember, the key to mastering these techniques is practice and understanding the underlying principles, not just memorizing the steps. 🧮

### Additional Resources 📚
- Explore Vedic Mathematics texts for more techniques
- Practice mental math regularly to build speed and confidence
- Apply these techniques to real-life situations to reinforce learning
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
