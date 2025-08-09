import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl8_ch16_t1',
    topicNumber: 1,
    topicName: "Mental Math Tricks",
    duration: 45,
    description: "Learn powerful mental math tricks and strategies for quick calculations without using a calculator",
    explanation: `
# Mental Math Tricks 🧮

Mental math is a valuable skill that helps you perform calculations quickly in your head without relying on a calculator. Let's explore various mental math tricks that will make calculations faster and easier! 🚀

## Why Learn Mental Math? 🤔

1. **Practical Benefits**:
   - Quick calculations in daily life (shopping, tipping, discounts)
   - Better number sense and mathematical intuition
   - Improved problem-solving skills
   - Enhanced memory and concentration
   - Useful when calculators aren't available or allowed

2. **Brain Development**:
   - Strengthens neural connections
   - Improves working memory
   - Develops logical thinking
   - Boosts confidence in mathematics

## Basic Principles of Mental Math 📝

1. **Breaking Down Numbers**:
   - Split larger numbers into smaller, manageable parts
   - Use friendly numbers (10, 100, 1000)
   - Example: 43 × 5 = (40 × 5) + (3 × 5) = 200 + 15 = 215

2. **Using Number Properties**:
   - Distributive property: a × (b + c) = (a × b) + (a × c)
   - Associative property: (a × b) × c = a × (b × c)
   - Commutative property: a × b = b × a

## Essential Mental Math Tricks 🎯

### 1. Multiplying by Powers of 10 📈
- By 10: Add one zero
  * Example: 45 × 10 = 450
- By 100: Add two zeros
  * Example: 45 × 100 = 4500
- By 1000: Add three zeros
  * Example: 45 × 1000 = 45000

### 2. Multiplying by 5 🖐️
Method 1: Multiply by 10 and divide by 2
- Example: 86 × 5
  * 86 × 10 = 860
  * 860 ÷ 2 = 430

Method 2: Divide by 2 and multiply by 10
- Example: 86 × 5
  * 86 ÷ 2 = 43
  * 43 × 10 = 430

### 3. Multiplying by 9 ➡️
Multiply by 10 and subtract the original number
- Example: 47 × 9
  * 47 × 10 = 470
  * 470 - 47 = 423

### 4. Multiplying by 11 (Single Digits) 1️⃣1️⃣
Duplicate the digit
- Example: 7 × 11 = 77
- Example: 4 × 11 = 44

### 5. Multiplying by 11 (Two Digits) 🎲
Add the digits and place between them
- Example: 45 × 11
  * 4 + 5 = 9
  * Place 9 between 4 and 5
  * Result: 495

If sum > 9, carry the tens digit
- Example: 85 × 11
  * 8 + 5 = 13
  * Place 3 between 8 and 5, carry 1 to first digit
  * Result: 935

### 6. Percentage Calculations 💯

1. **Finding 10%**:
   - Move decimal point one place left
   - Example: 10% of 350 = 35

2. **Finding 1%**:
   - Move decimal point two places left
   - Example: 1% of 350 = 3.5

3. **Finding 5%**:
   - Find 10% and divide by 2
   - Example: 5% of 350 = 35 ÷ 2 = 17.5

4. **Finding 15%**:
   - Find 10% and add half of that
   - Example: 15% of 350
     * 10% = 35
     * 5% = 17.5
     * Total = 52.5

5. **Finding 25%**:
   - Divide by 4
   - Example: 25% of 400 = 100

### 7. Squaring Numbers 🔲

1. **Numbers ending in 5**:
   - Multiply first digit by (first digit + 1)
   - Append 25
   - Example: 85²
     * 8 × 9 = 72
     * Append 25
     * Result: 7225

2. **Close to 100**:
   - Add/subtract difference from 100
   - Multiply difference by itself
   - Example: 98²
     * 98 is 2 less than 100
     * 98 × 98 = (100 - 2)²
     * = 100² - (2 × 100) + 2²
     * = 10000 - 400 + 4
     * = 9604

### 8. Multiplying by 25 ⚡
Method 1: Multiply by 100 and divide by 4
- Example: 48 × 25
  * 48 × 100 = 4800
  * 4800 ÷ 4 = 1200

Method 2: Divide by 4 and multiply by 100
- Example: 48 × 25
  * 48 ÷ 4 = 12
  * 12 × 100 = 1200

### 9. Quick Division Tricks 📊

1. **Dividing by 5**:
   - Multiply by 2 and divide by 10
   - Example: 85 ÷ 5
     * 85 × 2 = 170
     * 170 ÷ 10 = 17

2. **Dividing by 25**:
   - Multiply by 4 and divide by 100
   - Example: 450 ÷ 25
     * 450 × 4 = 1800
     * 1800 ÷ 100 = 18

## Practice Tips 🎯

1. **Start Simple**:
   - Begin with easier calculations
   - Gradually increase difficulty
   - Focus on accuracy before speed

2. **Regular Practice**:
   - Practice daily for 10-15 minutes
   - Use real-life situations
   - Challenge yourself with time limits

3. **Visualization**:
   - Picture numbers and operations
   - Break down complex problems
   - Use number patterns

## Common Mistakes to Avoid ⚠️

1. **Rushing Calculations**:
   - Take time to understand the problem
   - Double-check your mental steps
   - Verify your answer makes sense

2. **Ignoring Patterns**:
   - Look for number patterns
   - Use relationships between numbers
   - Apply appropriate shortcuts

3. **Over-relying on Calculators**:
   - Practice mental math regularly
   - Build confidence in your abilities
   - Use calculators only when necessary

## Summary ✨

Mental math tricks help you:
- Calculate quickly and accurately
- Develop number sense
- Build mathematical confidence
- Solve real-world problems efficiently

Remember:
- Practice regularly
- Start with simple calculations
- Use friendly numbers
- Apply appropriate shortcuts
- Verify your answers

With practice, these mental math tricks will become second nature, making calculations faster and more enjoyable! 🌟
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 