import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';

export const Topic2Content: TopicContent = {
    id: 'cl5_ch13_t2',
    topicNumber: 2,
    topicName: 'Division Using Repeated Subtraction',
    duration: 45,
    description: 'Learn how to divide numbers using the repeated subtraction method, with clear steps, examples, and practice questions.',
    explanation: `
# Division Using Repeated Subtraction ➗

Division is one of the four basic operations in mathematics. One simple way to understand division is by using repeated subtraction. This method helps you see how many times a number (the divisor) can be subtracted from another number (the dividend) until nothing is left or until you can't subtract anymore. Let's explore this method step by step!

## What is Repeated Subtraction? 🔄
Repeated subtraction means subtracting the same number again and again from a bigger number until you reach zero or a number smaller than what you are subtracting. The number of times you subtract is the answer to your division problem!

## How Does It Work? 📝
Suppose you want to divide 20 by 4. You keep subtracting 4 from 20 until you reach 0:
- 20 - 4 = 16 (1st time)
- 16 - 4 = 12 (2nd time)
- 12 - 4 = 8 (3rd time)
- 8 - 4 = 4 (4th time)
- 4 - 4 = 0 (5th time)

You subtracted 4 a total of 5 times. So, 20 ÷ 4 = 5.

## Step-by-Step Example: 18 ÷ 3
Let's divide 18 by 3 using repeated subtraction:
1. 18 - 3 = 15 (1)
2. 15 - 3 = 12 (2)
3. 12 - 3 = 9 (3)
4. 9 - 3 = 6 (4)
5. 6 - 3 = 3 (5)
6. 3 - 3 = 0 (6)

You subtracted 3 a total of 6 times. So, 18 ÷ 3 = 6.

## Why Use Repeated Subtraction? 🤔
- **Simple**: Easy to understand, especially for small numbers.
- **Visual**: Helps you see what division means.
- **Foundation**: Builds a strong base for understanding division and multiplication.

## More Examples 📚
### Example 1: 15 ÷ 5
- 15 - 5 = 10 (1)
- 10 - 5 = 5 (2)
- 5 - 5 = 0 (3)
So, 15 ÷ 5 = 3

### Example 2: 24 ÷ 6
- 24 - 6 = 18 (1)
- 18 - 6 = 12 (2)
- 12 - 6 = 6 (3)
- 6 - 6 = 0 (4)
So, 24 ÷ 6 = 4

### Example 3: 17 ÷ 4
- 17 - 4 = 13 (1)
- 13 - 4 = 9 (2)
- 9 - 4 = 5 (3)
- 5 - 4 = 1 (4)
Now, 1 is less than 4, so we stop. We subtracted 4 a total of 4 times, and 1 is left over. So, 17 ÷ 4 = 4 remainder 1.

## Practice Questions ❓
1. Divide 21 by 7 using repeated subtraction.
2. Divide 30 by 5 using repeated subtraction.
3. Divide 19 by 3 using repeated subtraction.

## Sample Questions with Answers 📝
1. **Question:** What is 16 ÷ 4 using repeated subtraction?
   **Answer:** 4
2. **Question:** Divide 25 by 6 using repeated subtraction. What is the remainder?
   **Answer:** 4 times, remainder 1
3. **Question:** How many times can you subtract 8 from 40 before reaching zero?
   **Answer:** 5 times

## Summary ✨
Repeated subtraction is a simple and effective way to understand division. It helps you see how division works and prepares you for more advanced methods. Practice with different numbers to become confident in division! 👍
`,
    quiz: {
        questions: [
            {
                id: 'cl5_ch13_t2_qe1',
                type: 'mcq',
                question: 'What does repeated subtraction help you find?',
                options: [
                    'The number of times you can subtract one number from another',
                    'The sum of two numbers',
                    'The product of two numbers',
                    'The largest number'
                ],
                correctAnswer: 'The number of times you can subtract one number from another',
                explanation: 'Repeated subtraction shows how many times you can subtract the divisor from the dividend.',
                difficulty: 'easy',
                marks: 1,
                recommendedTime: 30
            },
            {
                id: 'cl5_ch13_t2_qe2',
                type: 'mcq',
                question: 'If you divide 18 by 3 using repeated subtraction, how many times do you subtract 3?',
                options: [
                    '3',
                    '5',
                    '6',
                    '9'
                ],
                correctAnswer: '6',
                explanation: '18 - 3 = 15 (1), 15 - 3 = 12 (2), 12 - 3 = 9 (3), 9 - 3 = 6 (4), 6 - 3 = 3 (5), 3 - 3 = 0 (6).',
                difficulty: 'easy',
                marks: 1,
                recommendedTime: 30
            },
            {
                id: 'cl5_ch13_t2_qm1',
                type: 'mcq',
                question: 'What is the remainder when you divide 20 by 6 using repeated subtraction?',
                options: [
                    '2',
                    '4',
                    '0',
                    '6'
                ],
                correctAnswer: '2',
                explanation: '20 - 6 = 14 (1), 14 - 6 = 8 (2), 8 - 6 = 2 (3). 2 is less than 6, so the remainder is 2.',
                difficulty: 'medium',
                marks: 2,
                recommendedTime: 45
            }
        ]
    }
}; 