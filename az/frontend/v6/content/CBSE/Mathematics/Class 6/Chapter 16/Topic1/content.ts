// Topic 1: Number games (palindromic numbers)
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl6_ch16_t1',
    topicNumber: 1,
    topicName: "Number Games (Palindromic Numbers)",
    duration: 45,
    description: "Understanding palindromic numbers, their properties, and fun mathematical patterns",
    explanation: `
# Palindromic Numbers 🔄

Welcome to the fascinating world of palindromic numbers! 🌟 In this topic, we'll explore numbers that read the same forwards and backwards, just like words like "madam" or "racecar". Let's dive into this exciting mathematical concept! 🚀

## What are Palindromic Numbers? 🤔

A palindromic number is a number that remains the same when its digits are reversed. For example:
- 121 (reads the same forwards and backwards)
- 1331 (reads the same forwards and backwards)
- 12321 (reads the same forwards and backwards)

## Types of Palindromic Numbers 📊

### 1. Single-Digit Palindromes
- All single-digit numbers (0-9) are palindromic
- Examples: 1, 2, 3, 4, 5, 6, 7, 8, 9

### 2. Two-Digit Palindromes
- Numbers where both digits are the same
- Examples: 11, 22, 33, 44, 55, 66, 77, 88, 99

### 3. Three-Digit Palindromes
- Numbers where the first and last digits are the same
- Examples: 101, 111, 121, 131, 141, 151, 161, 171, 181, 191

## Creating Palindromic Numbers 🎨

### Method 1: Mirror Method
1. Take any number
2. Write its digits in reverse order
3. Add the original and reversed numbers
4. Repeat until you get a palindrome

Example:
- Start with 57
- Reverse: 75
- Add: 57 + 75 = 132
- Reverse: 231
- Add: 132 + 231 = 363 (palindrome!)

### Method 2: Pattern Method
For three-digit palindromes:
1. Choose any digit (1-9) for the first and last position
2. Choose any digit (0-9) for the middle position
3. Example: 1_1 → 101, 111, 121, ..., 191

## Interesting Properties 🔍

1. **Even and Odd Length**
   - Palindromes can have even or odd number of digits
   - Examples: 11 (even), 121 (odd), 1221 (even)

2. **Square Palindromes**
   - Some palindromic numbers are perfect squares
   - Examples: 121 (11²), 484 (22²), 676 (26²)

3. **Prime Palindromes**
   - Some palindromic numbers are prime
   - Examples: 2, 3, 5, 7, 11, 101, 131

## Real-Life Applications 🌍

1. **Calendar Dates** 📅
   - Some dates are palindromic
   - Example: 02/02/2020 (reads the same forwards and backwards)

2. **License Plates** 🚗
   - Some license plates use palindromic numbers
   - Example: "12321" or "ABBA"

3. **Digital Clocks** ⏰
   - Some times are palindromic
   - Example: 12:21, 13:31

## Fun Activities with Palindromic Numbers 🎮

1. **Palindrome Hunt**
   - Find all palindromic numbers between 100 and 200
   - Answer: 101, 111, 121, 131, 141, 151, 161, 171, 181, 191

2. **Palindrome Creation**
   - Start with any number and try to create a palindrome using the mirror method
   - Example: Start with 89
     - 89 + 98 = 187
     - 187 + 781 = 968
     - 968 + 869 = 1837
     - 1837 + 7381 = 9218
     - 9218 + 8129 = 17347
     - 17347 + 74371 = 91718
     - 91718 + 81719 = 173437
     - 173437 + 734371 = 907808
     - 907808 + 808709 = 1716517
     - 1716517 + 7156171 = 8872688 (palindrome!)

## Common Mistakes to Avoid ❌

1. **Confusing Digits**
   - Remember that palindromic numbers read the same forwards and backwards
   - Example: 123 is NOT a palindrome, but 121 is

2. **Zero Placement**
   - Leading zeros don't count in palindromic numbers
   - Example: 010 is considered 10, which is not a palindrome

3. **Single vs. Multiple Digits**
   - All single-digit numbers are palindromic
   - For two or more digits, check both ends

## Summary ✨

In this topic, we learned:
- What palindromic numbers are
- Different types of palindromic numbers
- Methods to create palindromic numbers
- Interesting properties and patterns
- Real-life applications
- Fun activities with palindromic numbers

### Additional Examples and Sample Questions:

1. **Example**: Find all two-digit palindromic numbers.
   - Answer: 11, 22, 33, 44, 55, 66, 77, 88, 99

2. **Example**: Is 12321 a palindromic number? Why?
   - Answer: Yes, because it reads the same forwards and backwards.

3. **Question**: Create a three-digit palindromic number using the digits 1, 2, and 3.
   - Answer: 121 or 131 or 232 or 323

4. **Question**: What is the next palindromic number after 999?
   - Answer: 1001
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
