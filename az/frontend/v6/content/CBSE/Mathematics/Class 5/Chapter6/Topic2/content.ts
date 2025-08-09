import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
   id: 'cl5_ch6_t2',
   topicNumber: 2,
   topicName: "Divisibility Rules",
   duration: 45,
   description: "Understanding and applying divisibility rules for numbers 2, 3, 5, and 10",
   explanation: `
# Divisibility Rules 🔢

Divisibility rules help us quickly determine if one number can be divided by another without actually performing the division. Let's learn the rules for numbers 2, 3, 5, and 10! 🎯

## Rule for 2 📝
A number is divisible by 2 if its last digit is even (0, 2, 4, 6, or 8).

### Examples:
- 24 is divisible by 2 because its last digit is 4 (even)
- 37 is not divisible by 2 because its last digit is 7 (odd)
- 100 is divisible by 2 because its last digit is 0 (even)

## Rule for 3 📝
A number is divisible by 3 if the sum of its digits is divisible by 3.

### Examples:
- 123 is divisible by 3 because 1 + 2 + 3 = 6, and 6 is divisible by 3
- 124 is not divisible by 3 because 1 + 2 + 4 = 7, and 7 is not divisible by 3
- 999 is divisible by 3 because 9 + 9 + 9 = 27, and 27 is divisible by 3

## Rule for 5 📝
A number is divisible by 5 if its last digit is 0 or 5.

### Examples:
- 25 is divisible by 5 because its last digit is 5
- 30 is divisible by 5 because its last digit is 0
- 42 is not divisible by 5 because its last digit is 2

## Rule for 10 📝
A number is divisible by 10 if its last digit is 0.

### Examples:
- 100 is divisible by 10 because its last digit is 0
- 25 is not divisible by 10 because its last digit is 5
- 30 is divisible by 10 because its last digit is 0

## Special Relationships 🔄

1. **Numbers divisible by 10 are also divisible by 2 and 5**
   - Example: 100 is divisible by 10, 2, and 5

2. **Numbers divisible by both 2 and 3 are divisible by 6**
   - Example: 12 is divisible by 2 and 3, so it's also divisible by 6

3. **Numbers divisible by both 2 and 5 are divisible by 10**
   - Example: 20 is divisible by 2 and 5, so it's also divisible by 10

## Real-Life Applications 🌍

1. **Money Counting**
   - Using divisibility by 2 to count pairs of coins
   - Using divisibility by 5 to count nickels
   - Using divisibility by 10 to count dimes

2. **Time Management**
   - Using divisibility by 5 to count minutes
   - Using divisibility by 10 to count hours

3. **Grouping Items**
   - Using divisibility by 2 to form pairs
   - Using divisibility by 3 to form triplets
   - Using divisibility by 5 to form groups of five

## Common Mistakes to Avoid ❌

1. **Forgetting to check all digits for divisibility by 3**
   - Remember to add ALL digits, not just some

2. **Confusing divisibility by 5 and 10**
   - Numbers ending in 5 are divisible by 5 but not by 10
   - Only numbers ending in 0 are divisible by 10

3. **Not checking the last digit for divisibility by 2**
   - Only the last digit matters for divisibility by 2

## Tips for Success 💡

1. **Practice with different numbers**
   - Try both small and large numbers
   - Mix even and odd numbers
   - Include numbers ending in 0 and 5

2. **Use the rules in combination**
   - Check multiple rules at once
   - Look for numbers divisible by more than one number

3. **Create your own examples**
   - Make up numbers and test them
   - Challenge yourself with tricky cases

## Summary ✨

- Divisibility by 2: Check last digit (must be even)
- Divisibility by 3: Add all digits (sum must be divisible by 3)
- Divisibility by 5: Check last digit (must be 0 or 5)
- Divisibility by 10: Check last digit (must be 0)
- Remember special relationships between rules
- Practice with real-life examples

Remember: These rules help us quickly determine if numbers can be divided evenly! 🎯
`,
   quiz: {
      questions: [
         ...easyQuestions,
         ...mediumQuestions
      ]
   }
}; 