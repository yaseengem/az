import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl7_ch17_t2',
    topicNumber: 2,
    topicName: 'Mental math tricks',
    duration: 45,
    description: 'Learn quick mental math tricks and shortcuts for faster calculations without using a calculator.',
    explanation: `
# Mental Math Tricks and Shortcuts 🧮

Mental math tricks are powerful tools that help us perform calculations quickly and efficiently in our heads. These tricks not only save time but also enhance our number sense and mathematical confidence. Let's explore some amazing mental math tricks that will make calculations fun and easy! 🚀

## Why Learn Mental Math? 🤔
- **Speed**: Faster than using calculators for simple calculations
- **Confidence**: Builds mathematical self-reliance
- **Understanding**: Deepens number sense and relationships
- **Practical**: Useful in daily life situations
- **Brain Exercise**: Keeps our mind sharp and active

## Multiplication Tricks 🎯

### 1. Multiplying by 5
- Method: Multiply by 10 and divide by 2
- Example: 24 × 5 = (24 × 10) ÷ 2 = 240 ÷ 2 = 120
- Why it works: 5 = 10 ÷ 2

### 2. Multiplying by 9
- Method: Multiply by 10 and subtract the original number
- Example: 7 × 9 = (7 × 10) - 7 = 70 - 7 = 63
- Why it works: 9 = 10 - 1

### 3. Multiplying by 11 (Single Digits)
- Method: Write the digit twice
- Example: 4 × 11 = 44, 7 × 11 = 77
- Special case for two digits: Add digits and put sum between them
- Example: 45 × 11 = 495 (4 + 5 = 9 goes between 4 and 5)

### 4. Multiplying by 25
- Method: Divide by 4 and multiply by 100
- Example: 48 × 25 = (48 ÷ 4) × 100 = 12 × 100 = 1,200
- Why it works: 25 = 100 ÷ 4

## Percentage Tricks 📊

### 1. Finding 10%
- Method: Move decimal point one place left
- Example: 10% of 350 = 35
- Why it works: Dividing by 10

### 2. Finding 1%
- Method: Move decimal point two places left
- Example: 1% of 350 = 3.5
- Alternative: Divide by 100

### 3. Finding 5%
- Method: Find 10% and halve it
- Example: 5% of 350 = 35 ÷ 2 = 17.5

### 4. Finding 15%
- Method: 10% + 5%
- Example: 15% of 80 = 8 + 4 = 12

## Squaring Tricks 🎲

### 1. Numbers Ending in 5
- Method: Multiply first digit by its next number, append 25
- Example: 35² = 3 × 4 = 12, append 25 = 1,225
- Why it works: (10a + 5)² = 100a² + 100a + 25

### 2. Numbers Ending in 0
- Method: Square first digit and add two zeros
- Example: 30² = 3² = 9, add 00 = 900
- Why it works: (a × 10)² = a² × 100

## Division Shortcuts ➗

### 1. Dividing by 5
- Method: Multiply by 2 and divide by 10
- Example: 85 ÷ 5 = (85 × 2) ÷ 10 = 170 ÷ 10 = 17

### 2. Dividing by 8
- Method: Divide by 2 three times
- Example: 624 ÷ 8 = 312 ÷ 2 = 156 ÷ 2 = 78

## Rounding and Estimation 🎯

### 1. Rounding to Nearest 10
- Method: Look at ones digit
- If ≥ 5, round up; if < 5, round down
- Example: 47 → 50, 43 → 40

### 2. Quick Estimation
- Round numbers to make calculation easier
- Example: 98 + 103 ≈ 100 + 100 = 200

## Tips for Success 🌟

1. **Practice Regularly**: The more you practice, the faster you'll become
2. **Start Simple**: Begin with easier tricks and gradually move to complex ones
3. **Understand the Logic**: Don't just memorize; understand why tricks work
4. **Use Real-Life Situations**: Apply these tricks in daily calculations
5. **Break Down Complex Problems**: Use multiple tricks for harder calculations

## Common Applications 🛍️

1. **Shopping**: Quick discounts and total calculations
2. **Time Management**: Adding/subtracting minutes and hours
3. **Money**: Fast budget calculations
4. **Measurements**: Quick conversions and estimates
5. **School/Work**: Efficient problem-solving

## Summary ✨

Mental math tricks are valuable tools that help us:
- Perform calculations quickly and accurately
- Build confidence in mathematics
- Develop better number sense
- Save time in daily calculations
- Keep our minds sharp and active

Remember, the key to mastering these tricks is regular practice and understanding the underlying principles. Start with simpler tricks and gradually build up to more complex ones. With time and practice, these mental math tricks will become second nature! 🎓

### Practice Tips
- Start with one trick at a time
- Use these tricks in daily situations
- Challenge yourself with harder numbers
- Teach others to reinforce your learning
- Make it fun with math games and puzzles

Keep practicing, and you'll be amazed at how quickly you can perform calculations mentally! 🌟`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 