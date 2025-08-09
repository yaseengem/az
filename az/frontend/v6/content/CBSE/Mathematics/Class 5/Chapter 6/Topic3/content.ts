import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
   id: 'cl5_ch6_t3',
   topicNumber: 3,
   topicName: "Prime and Composite Numbers",
   duration: 45,
   description: "Understanding prime and composite numbers, and how to identify them",
   explanation: `
# Prime and Composite Numbers 🔢

Numbers can be special! Some numbers are like building blocks (prime numbers) while others can be broken down into smaller pieces (composite numbers). Let's explore these fascinating number types! 🧮

## What are Prime Numbers? 🤔

Prime numbers are numbers that have exactly two factors: 1 and themselves.

### Properties of Prime Numbers 📏
- Have exactly two factors
- Cannot be divided evenly by any other number
- Start from 2 (smallest prime number)
- Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, ...

## What are Composite Numbers? 🔍

Composite numbers are numbers that have more than two factors.

### Properties of Composite Numbers 📊
- Have more than two factors
- Can be divided evenly by other numbers
- Start from 4 (smallest composite number)
- Examples: 4, 6, 8, 9, 10, 12, 14, 15, 16, ...

## Special Cases 📌

### 1. The Number 1
- Not prime (needs two factors)
- Not composite (needs more than two factors)
- Called a "unit"

### 2. The Number 2
- Only even prime number
- All other even numbers are composite
- Special because it's the first prime

## Finding Prime Numbers 🔍

### Step 1: Check Factors
- Start with a number
- Find all its factors
- Count the factors

### Step 2: Apply Rules
- If exactly two factors = prime
- If more than two factors = composite
- If only one factor = neither

### Step 3: Use Divisibility Rules
- Check divisibility by 2, 3, 5
- If divisible by any = composite
- If not divisible = might be prime

## Real-Life Examples 🌟

1. **Security** 🔒
   - Prime numbers used in codes
   - Help keep information safe
   - Used in computer security

2. **Nature** 🌿
   - Cicadas emerge in prime number years
   - Helps avoid predators
   - Natural patterns

3. **Art and Design** 🎨
   - Prime number patterns
   - Symmetrical designs
   - Mathematical art

## Sample Questions and Solutions 📝

1. **Question**: Is 7 a prime number?
   **Solution**: Yes, because its only factors are 1 and 7

2. **Question**: Is 9 a composite number?
   **Solution**: Yes, because its factors are 1, 3, and 9

3. **Question**: Is 1 a prime number?
   **Solution**: No, because it has only one factor (itself)

## Practice Problems 🏋️‍♀️

1. List all prime numbers between 1 and 20
2. Find all composite numbers between 10 and 20
3. Is 21 a prime or composite number? Why?

## Common Mistakes to Avoid ❌

1. **Counting 1 as Prime**
   - Wrong: Saying 1 is prime
   - Right: 1 is neither prime nor composite

2. **Missing Factors**
   - Wrong: Not checking all factors
   - Right: Check all possible factors

3. **Confusing Terms**
   - Wrong: Mixing up prime and composite
   - Right: Remember prime = 2 factors, composite = more than 2

## Tips for Success 🎯

1. **Start Small**
   - Begin with numbers under 20
   - Build confidence
   - Move to larger numbers

2. **Use Factor Trees**
   - Break down numbers
   - Show all factors
   - Make it visual

3. **Practice Regularly**
   - Try different numbers
   - Check your work
   - Build speed

## Summary ✨

- Prime numbers have exactly two factors
- Composite numbers have more than two factors
- 1 is neither prime nor composite
- 2 is the only even prime number
- Prime numbers are building blocks of mathematics

Remember: Practice identifying prime and composite numbers to become a number expert! 🎯
`,
   quiz: {
      questions: [
         ...easyQuestions,
         ...mediumQuestions
      ]
   }
}; 