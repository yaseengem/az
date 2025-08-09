import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const content: TopicContent = {
    id: 'cl8_ch5_t2',
    topicNumber: 2,
    topicName: 'Methods: prime factorization, division method',
    duration: 60,
    description: 'Learn two important methods to find square roots: prime factorization and division method. Understand when to use each method and practice with various examples.',
    explanation: `Finding square roots is an essential mathematical skill with many real-world applications. In this topic, we'll explore two powerful methods for finding square roots: prime factorization and division method. Each method has its advantages, and understanding both will help you choose the most efficient approach for different situations. 🎯

## Prime Factorization Method

The prime factorization method uses the fundamental property that the square root of a product equals the product of the square roots: √(a × b) = √a × √b.

### Steps for Prime Factorization Method:
1. Find the prime factorization of the number
2. Group the prime factors with their powers
3. Divide each power by 2
4. Multiply the results

### Example 1:
Find √144 using prime factorization
- 144 = 2 × 2 × 2 × 2 × 3 × 3
- 144 = 2⁴ × 3²
- √144 = 2² × 3¹
- √144 = 4 × 3 = 12

### Example 2:
Find √900 using prime factorization
- 900 = 2 × 2 × 3 × 3 × 5 × 5
- 900 = 2² × 3² × 5²
- √900 = 2¹ × 3¹ × 5¹
- √900 = 2 × 3 × 5 = 30

### Key Points about Prime Factorization:
- Works best when number has small prime factors
- All powers must be even for a perfect square
- If any prime factor has odd power, the number is not a perfect square
- Useful for understanding the structure of square numbers

## Division Method

The division method is a systematic approach that uses place value to find square roots. It's particularly useful for larger numbers.

### Steps for Division Method:
1. Group digits in pairs from right to left
2. Find largest square ≤ first group
3. Subtract and bring down next pair
4. Double the quotient for divisor
5. Find appropriate digit and subtract
6. Repeat until all pairs are used

### Example 1:
Find √1225 using division method
\`\`\`
  35
 ___________
√12 | 25
    - 9
__
325
    - 325
___
0
\`\`\`
Therefore, √1225 = 35

### Example 2:
        Find √2304 using division method
\`\`\`
48
___________
√23 |04
    - 16
__
704
    - 704
___
0
\`\`\`
Therefore, √2304 = 48

### Key Points about Division Method:
- Works systematically from left to right
    - Each pair of digits gives one digit in the answer
        - Number of digit pairs equals number of digits in square root
            - Useful for any perfect square, regardless of size

## Choosing the Right Method

### Use Prime Factorization When:
- Number has obvious small prime factors
    - You need to verify if it's a perfect square
        - Understanding the structure is important
            - Number can be factored easily

### Use Division Method When:
- Number is large with no obvious factors
    - You want a systematic approach
        - Number has many digits
            - Quick calculation is needed

## Common Mistakes to Avoid
1. In Prime Factorization:
- Forgetting to include all prime factors
    - Not checking if powers are even
        - Incorrect division of powers by 2

2. In Division Method:
- Incorrect grouping of digits
    - Wrong choice of first digit
        - Forgetting to double the quotient
            - Not bringing down pairs correctly

## Real - Life Applications
1. Architecture: Calculating dimensions of square rooms
2. Engineering: Finding side lengths from areas
3. Computer Graphics: Scaling images proportionally
4. Science: Analyzing growth patterns
5. Sports: Field measurements and layouts

## Sample Problems
1. Find √441 using both methods:
   - Prime Factorization: 441 = 3² × 7² → √441 = 3 × 7 = 21
    - Division Method: 4 | 41 → √441 = 21

2. Find √3600 using both methods:
   - Prime Factorization: 3600 = 2⁴ × 3² × 5² → √3600 = 2² × 3 × 5 = 60
    - Division Method: 36 |00 → √3600 = 60

## Short Summary
    - Prime factorization method uses prime factors and their powers
        - Division method uses place value and systematic steps
            - Both methods are valid but suit different situations
                - Perfect squares have specific properties in both methods
                    - Practice both methods to become proficient
                        - Choose method based on the number's characteristics

Remember, mastering both methods gives you flexibility in problem - solving.The choice of method often depends on the specific number and context.Practice with various numbers to develop intuition about which method to use. 🎲📐

## Practice Tips
1. Start with smaller perfect squares
2. Practice identifying perfect squares
3. Learn to quickly find prime factors
4. Memorize common square numbers
5. Check answers using both methods

Keep practicing both methods, and you'll develop the ability to choose the most efficient approach for any given number! 🎯`,
    quiz: {
        questions: [...easyQuestions, ...mediumQuestions]
    }
}; 