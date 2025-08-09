import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
   id: 'cl5_ch16_t1',
   topicNumber: 1,
   topicName: "Number Games - Palindromic Numbers",
   duration: 45,
   description: "Understanding and exploring palindromic numbers and their patterns",
   explanation: `# Palindromic Numbers 🔄

Palindromic numbers are like magic mirrors in mathematics! 🪞 They read the same forwards and backwards, just like the word "MADAM". Let's explore these fascinating numbers and discover their patterns! 🎯

## What are Palindromic Numbers? 🤔

A palindromic number is:
- A number that remains the same when its digits are reversed
- Like a mirror image of itself
- Can be any length (1-digit, 2-digit, 3-digit, etc.)

## Examples of Palindromic Numbers 📝

### 1-Digit Palindromes
- 1, 2, 3, 4, 5, 6, 7, 8, 9
- All single-digit numbers are palindromic!

### 2-Digit Palindromes
- 11, 22, 33, 44, 55, 66, 77, 88, 99
- Pattern: Both digits are the same

### 3-Digit Palindromes
- 101, 111, 121, 131, 141, 151, 161, 171, 181, 191
- 202, 212, 222, 232, 242, 252, 262, 272, 282, 292
- Pattern: First and last digits are the same

## Creating Palindromic Numbers ✏️

### Method 1: Mirror Method
1. Choose any number
2. Write it backwards
3. Add the original and reversed numbers
4. Repeat until you get a palindrome

Example:
\`\`\`
Start with 57
57 + 75 = 132
132 + 231 = 363 (Palindrome!)
\`\`\`

### Method 2: Building from Center
For odd-length palindromes:
1. Choose a center digit
2. Mirror the digits around it

Example:
\`\`\`
Center digit: 5
Mirror around it: 1 2 3 5 3 2 1
Result: 1235321
\`\`\`

## Fun Facts about Palindromic Numbers 🎉

1. The smallest palindromic prime number is 2
2. The largest known palindromic prime has over 300,000 digits!
3. Some numbers take many steps to become palindromic
4. The number 196 is famous for not forming a palindrome (yet!)

## Real-Life Applications 🌍

Palindromic numbers are used in:
- License plates 🚗
- House numbers 🏠
- Calendar dates 📅
- Digital clocks ⏰
- Computer science algorithms 💻

## Sample Questions ❓

1. Is 12321 a palindromic number?
   - Answer: Yes! It reads the same forwards and backwards.

2. What is the next palindromic number after 99?
   - Answer: 101

3. How many 3-digit palindromic numbers are there?
   - Answer: 90 (9 choices for first digit × 10 choices for middle digit)

## Practice Problems 📝

1. Find all palindromic numbers between 100 and 200
   - Answer: 101, 111, 121, 131, 141, 151, 161, 171, 181, 191

2. Create a 4-digit palindromic number
   - Example: 1221, 1331, 1441, etc.

3. What is the sum of the first five 3-digit palindromic numbers?
   - Answer: 101 + 111 + 121 + 131 + 141 = 605

## Tips for Working with Palindromic Numbers 💡

1. Always check both ends of the number
2. Remember that single-digit numbers are palindromic
3. For even-length palindromes, the first half mirrors the second half
4. For odd-length palindromes, the center digit stays the same

## Summary ✨

- Palindromic numbers read the same forwards and backwards
- They can be any length (1-digit, 2-digit, 3-digit, etc.)
- There are patterns in how they're formed
- They have interesting mathematical properties
- They appear in many real-life situations

Remember: Practice creating and identifying palindromic numbers to become a number pattern expert! 🎯`,
   quiz: {
      questions: [
         ...easyQuestions,
         ...mediumQuestions
      ]
   }
}; 