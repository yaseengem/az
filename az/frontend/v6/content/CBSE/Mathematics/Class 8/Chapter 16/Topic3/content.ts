import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl8_ch16_t3',
    topicNumber: 3,
    topicName: "Fun with numbers",
    duration: 45,
    description: "Learn interesting number tricks, patterns, and shortcuts for quick calculations, along with divisibility rules and their applications.",
    explanation: `
# Fun with Numbers 🔢

Let's explore some fascinating tricks and patterns with numbers that will make mathematics more enjoyable and help you calculate faster! 🎯

## Quick Calculation Tricks 📱

### 1. Squaring Numbers Ending in 5 ✨

To square a number ending in 5:
1. Take the tens digit and multiply it by (tens digit + 1)
2. Append 25 to the result

**Example:**
- 85² = 7,225 (8 × 9 = 72, append 25)
- 35² = 1,225 (3 × 4 = 12, append 25)
- 75² = 5,625 (7 × 8 = 56, append 25)

### 2. Difference of Squares Pattern 🎭

For numbers equidistant from a multiple of 10 or 100:
(a + b)(a - b) = a² - b²

**Examples:**
- 98 × 102 = (100 - 2)(100 + 2) = 100² - 2² = 10,000 - 4 = 9,996
- 95 × 105 = (100 - 5)(100 + 5) = 100² - 5² = 10,000 - 25 = 9,975

### 3. Multiplying by 11 🎪

For 2-digit numbers:
1. Add the digits
2. Place the sum between the digits

**Example:**
- 45 × 11 = 495 (4 + 5 = 9, place between 4 and 5)
- 72 × 11 = 792 (7 + 2 = 9, place between 7 and 2)

## Divisibility Rules 📋

### 1. Divisibility by 2 ➗
- A number is divisible by 2 if its last digit is divisible by 2
- Last digit must be 0, 2, 4, 6, or 8
**Example:** 3,456 is divisible by 2 (ends in 6)

### 2. Divisibility by 3 🎲
- Sum all digits
- If sum is divisible by 3, the number is divisible by 3
**Example:** 4,563 (4+5+6+3 = 18, divisible by 3)

### 3. Divisibility by 4 🎯
- Look at last two digits
- If number formed by last two digits is divisible by 4
**Example:** 2,348 (48 is divisible by 4)

### 4. Divisibility by 5 🎨
- Last digit must be 0 or 5
**Example:** 3,455 is divisible by 5 (ends in 5)

### 5. Divisibility by 6 🎭
- Number must be even AND
- Sum of digits must be divisible by 3
**Example:** 4,326 (even and 4+3+2+6 = 15 divisible by 3)

### 6. Divisibility by 8 🎪
- Look at last three digits
- If number formed by last three digits is divisible by 8
**Example:** 4,256 (256 is divisible by 8)

### 7. Divisibility by 9 🎲
- Sum all digits
- If sum is divisible by 9, the number is divisible by 9
**Example:** 7,299 (7+2+9+9 = 27, divisible by 9)

### 8. Divisibility by 10 🎯
- Last digit must be 0
**Example:** 3,450 is divisible by 10

### 9. Divisibility by 11 🎨
- Take alternating sum of digits
- If result is 0 or divisible by 11, number is divisible by 11
**Example:** 7,194 (4-9+1-7 = -11, divisible by 11)

## Number Patterns 🌟

### 1. Square Numbers Pattern

Square numbers follow a pattern in their differences:
1, 4, 9, 16, 25, 36, 49, 64, 81, 100
Differences: 3, 5, 7, 9, 11, 13, 15, 17, 19

### 2. Triangular Numbers Pattern

Numbers that can form triangles:
1, 3, 6, 10, 15, 21, 28, 36, 45
Each number is sum of consecutive integers from 1

## Applications in Daily Life 🌍

### 1. Quick Shopping Calculations 🛒
- Calculating discounts
- Finding total bill amounts
- Checking if amount can be divided equally

### 2. Time Management ⏰
- Converting between hours and minutes
- Calculating time intervals
- Planning schedules

### 3. Money Management 💰
- Calculating interest
- Dividing expenses
- Budget planning

## Tips for Practice 📝

1. **Start Simple**
   - Begin with basic patterns
   - Practice one trick at a time
   - Gradually increase complexity

2. **Regular Practice**
   - Solve daily number puzzles
   - Create your own examples
   - Challenge friends with problems

3. **Real-life Applications**
   - Use tricks while shopping
   - Apply in time calculations
   - Practice with money problems

## Common Mistakes to Avoid ⚠️

1. **Rushing Calculations**
   - Take time to understand patterns
   - Double-check your work
   - Practice accuracy before speed

2. **Skipping Steps**
   - Follow all steps in sequence
   - Don't take shortcuts initially
   - Build strong foundations

3. **Not Verifying**
   - Always check your answers
   - Use different methods to verify
   - Learn from mistakes

## Summary ✨

Fun with numbers involves:
- Quick calculation tricks
- Divisibility rules
- Number patterns
- Real-life applications

Remember:
- Practice regularly
- Start with basics
- Apply in daily life
- Verify your work

With these tricks and patterns, mathematics becomes more enjoyable and calculations become faster! Keep practicing and exploring new patterns! 🌟
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 