// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter3\Topic3\content.ts
import { TopicContent } from '../../../../../types';

export const content: TopicContent = {
    id: 'cl6_ch3_t3',
    title: 'Divisibility Rules',
    category: 'Mathematics',
    standard: 'Class 6',
    chapter: 'Chapter 3: Playing With Numbers',
    topic: 'Topic 3: Divisibility Rules (2, 3, 4, 5, 6, 9, 10)',
    explanation: `
# Divisibility Rules

Have you ever wondered if there's a quick way to tell whether a number is divisible by another number without actually dividing? That's exactly what divisibility rules help us do! 🔢

## What are Divisibility Rules?

Divisibility rules are shortcuts or tricks that help us determine if a number is divisible by another number without having to perform the actual division. When we say a number is "divisible" by another number, we mean that when we divide the first number by the second, the remainder is zero.

For example, 15 is divisible by 3 because 15 ÷ 3 = 5 with no remainder.

Let's explore the divisibility rules for different numbers:

## Divisibility Rule for 2

**Rule**: A number is divisible by 2 if its last digit (ones place) is 0, 2, 4, 6, or 8.

**Examples**:
- 24 ends in 4, so it's divisible by 2.
- 137 ends in 7, so it's not divisible by 2.

**Why it works**: Any number can be split into tens and ones. The tens part is always divisible by 2, so only the ones digit determines if the whole number is divisible by 2.

## Divisibility Rule for 3

**Rule**: A number is divisible by 3 if the sum of all its digits is divisible by 3.

**Examples**:
- For 123: 1 + 2 + 3 = 6, and 6 is divisible by 3, so 123 is divisible by 3.
- For 158: 1 + 5 + 8 = 14, and 14 is not divisible by 3, so 158 is not divisible by 3.

## Divisibility Rule for 4

**Rule**: A number is divisible by 4 if the last two digits form a number that is divisible by 4.

**Examples**:
- 1624: The last two digits form 24, and 24 is divisible by 4, so 1624 is divisible by 4.
- 1622: The last two digits form 22, and 22 is not divisible by 4, so 1622 is not divisible by 4.

## Divisibility Rule for 5

**Rule**: A number is divisible by 5 if its last digit is either 0 or 5.

**Examples**:
- 125 ends in 5, so it's divisible by 5.
- 123 doesn't end in 0 or 5, so it's not divisible by 5.

## Divisibility Rule for 6

**Rule**: A number is divisible by 6 if it is divisible by both 2 and 3.

**Examples**:
- 126: It's divisible by 2 (ends in 6) and by 3 (1+2+6=9, which is divisible by 3), so 126 is divisible by 6.
- 125: It's not divisible by 2 (doesn't end in 0, 2, 4, 6, or 8), so it's not divisible by 6.

## Divisibility Rule for 9

**Rule**: A number is divisible by 9 if the sum of all its digits is divisible by 9.

**Examples**:
- 234: 2+3+4=9, and 9 is divisible by 9, so 234 is divisible by 9.
- 123: 1+2+3=6, and 6 is not divisible by 9, so 123 is not divisible by 9.

## Divisibility Rule for 10

**Rule**: A number is divisible by 10 if its last digit is 0.

**Examples**:
- 150 ends in 0, so it's divisible by 10.
- 155 doesn't end in 0, so it's not divisible by 10.

## Combined Applications of Divisibility Rules

Sometimes, we need to check if a number is divisible by numbers like 8, 12, or 15. We can use a combination of the basic divisibility rules:

**For 8**: A number is divisible by 8 if the last three digits form a number that is divisible by 8.
- 9624: The last three digits form 624, and 624 is divisible by 8, so 9624 is divisible by 8.

**For 12**: A number is divisible by 12 if it is divisible by both 3 and 4.
- 324: It's divisible by 3 (3+2+4=9, which is divisible by 3) and by 4 (last two digits 24 are divisible by 4), so 324 is divisible by 12.

**For 15**: A number is divisible by 15 if it is divisible by both 3 and 5.
- 375: It's divisible by 3 (3+7+5=15, which is divisible by 3) and by 5 (ends in 5), so 375 is divisible by 15.

## Real-Life Applications

Divisibility rules have many practical applications:

1. **Grouping objects**: If you have 156 candies and want to share them equally among 3 children, you can use the divisibility rule for 3 to quickly check if it's possible (1+5+6=12, which is divisible by 3, so each child gets 52 candies).

2. **Checking calculations**: If your multiplication result is 2468, you can verify it using divisibility rules if you know the factors should be divisible by certain numbers.

3. **Finding patterns**: Divisibility rules help identify patterns in number sequences.

## Sample Questions

1. Is 3456 divisible by 4?
   - Solution: The last two digits are 56. Since 56 is divisible by 4 (56 ÷ 4 = 14), 3456 is divisible by 4.

2. Is 7218 divisible by 6?
   - Solution: 
     - Check divisibility by 2: 7218 ends in 8, so it's divisible by 2.
     - Check divisibility by 3: 7+2+1+8=18, and 18 is divisible by 3.
     - Since 7218 is divisible by both 2 and 3, it's divisible by 6.

3. Is 9801 divisible by 9?
   - Solution: 9+8+0+1=18, and 18 is divisible by 9, so 9801 is divisible by 9.

## Summary

Divisibility rules are powerful shortcuts that help us determine whether a number is divisible by another number without performing the actual division. Here's a quick recap:

- **Divisible by 2**: Last digit is 0, 2, 4, 6, or 8.
- **Divisible by 3**: Sum of all digits is divisible by 3.
- **Divisible by 4**: Last two digits form a number divisible by 4.
- **Divisible by 5**: Last digit is 0 or 5.
- **Divisible by 6**: Divisible by both 2 and 3.
- **Divisible by 9**: Sum of all digits is divisible by 9.
- **Divisible by 10**: Last digit is 0.

These rules make calculations faster and help us understand number patterns better. By mastering these divisibility rules, you'll be able to solve many mathematical problems more efficiently! 🧩✨
`,
    examples: [
        {
            id: 'cl6_ch3_t3_ex1',
            title: 'Checking divisibility by 2',
            problem: 'Is 3578 divisible by 2?',
            solution: `To check divisibility by 2, we look at the last digit (ones place).
- 3578 ends in 8
- Since 8 is even (0, 2, 4, 6, or 8), 3578 is divisible by 2.
- We can verify: 3578 ÷ 2 = 1789`
        },
        {
            id: 'cl6_ch3_t3_ex2',
            title: 'Checking divisibility by 3',
            problem: 'Is 4362 divisible by 3?',
            solution: `To check divisibility by 3, we find the sum of all digits.
- 4 + 3 + 6 + 2 = 15
- Since 15 is divisible by 3, 4362 is divisible by 3.
- We can verify: 4362 ÷ 3 = 1454`
        },
        {
            id: 'cl6_ch3_t3_ex3',
            title: 'Checking divisibility by 4',
            problem: 'Is 5728 divisible by 4?',
            solution: `To check divisibility by 4, we look at the last two digits.
- The last two digits of 5728 are 28
- Since 28 is divisible by 4 (28 ÷ 4 = 7), 5728 is divisible by 4.
- We can verify: 5728 ÷ 4 = 1432`
        },
        {
            id: 'cl6_ch3_t3_ex4',
            title: 'Checking divisibility by 5',
            problem: 'Is 7235 divisible by 5?',
            solution: `To check divisibility by 5, we look at the last digit.
- 7235 ends in 5
- Since the last digit is either 0 or 5, 7235 is divisible by 5.
- We can verify: 7235 ÷ 5 = 1447`
        },
        {
            id: 'cl6_ch3_t3_ex5',
            title: 'Checking divisibility by 6',
            problem: 'Is 9126 divisible by 6?',
            solution: `To check divisibility by 6, we check if the number is divisible by both 2 and 3.
- Divisibility by 2: 9126 ends in 6, so it's divisible by 2.
- Divisibility by 3: 9 + 1 + 2 + 6 = 18, which is divisible by 3.
- Since 9126 is divisible by both 2 and 3, it's divisible by 6.
- We can verify: 9126 ÷ 6 = 1521`
        },
        {
            id: 'cl6_ch3_t3_ex6',
            title: 'Checking divisibility by 9',
            problem: 'Is 8172 divisible by 9?',
            solution: `To check divisibility by 9, we find the sum of all digits.
- 8 + 1 + 7 + 2 = 18
- Since 18 is divisible by 9, 8172 is divisible by 9.
- We can verify: 8172 ÷ 9 = 908`
        },
        {
            id: 'cl6_ch3_t3_ex7',
            title: 'Checking divisibility by 10',
            problem: 'Is 6740 divisible by 10?',
            solution: `To check divisibility by 10, we look at the last digit.
- 6740 ends in 0
- Since the last digit is 0, 6740 is divisible by 10.
- We can verify: 6740 ÷ 10 = 674`
        }
    ],
    questions: [
        {
            id: 'cl6_ch3_t3_q1',
            question: 'Is 2468 divisible by 4?',
            options: ['Yes', 'No', 'Cannot be determined', 'Need more information'],
            correctAnswer: 'Yes',
            explanation: 'The last two digits are 68, and 68 is divisible by 4 (68 ÷ 4 = 17), so 2468 is divisible by 4.'
        },
        {
            id: 'cl6_ch3_t3_q2',
            question: 'What is the divisibility rule for 3?',
            options: [
                'The last digit must be 3',
                'The sum of digits must be divisible by 3',
                'The number must be odd',
                'The number must be even'
            ],
            correctAnswer: 'The sum of digits must be divisible by 3',
            explanation: 'A number is divisible by 3 if the sum of all its digits is divisible by 3.'
        },
        {
            id: 'cl6_ch3_t3_q3',
            question: 'Is 12345 divisible by 5?',
            options: ['Yes', 'No', 'Cannot be determined', 'Need more information'],
            correctAnswer: 'Yes',
            explanation: 'The last digit is 5, and according to the divisibility rule for 5, any number ending in 0 or 5 is divisible by 5.'
        },
        {
            id: 'cl6_ch3_t3_q4',
            question: 'Which of the following is divisible by 9?',
            options: ['2345', '4567', '7218', '9876'],
            correctAnswer: '7218',
            explanation: 'The sum of the digits of 7218 is 7+2+1+8=18, which is divisible by 9. Therefore, 7218 is divisible by 9.'
        },
        {
            id: 'cl6_ch3_t3_q5',
            question: 'A number is divisible by 6 if it is divisible by:',
            options: [
                '2 and 3',
                '2 and 4',
                '3 and 5',
                '3 and 9'
            ],
            correctAnswer: '2 and 3',
            explanation: 'A number is divisible by 6 if it is divisible by both 2 (even number) and 3 (sum of digits divisible by 3).'
        }
    ]
};
