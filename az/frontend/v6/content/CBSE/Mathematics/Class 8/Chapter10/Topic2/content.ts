import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl8_ch10_t2',
    topicNumber: 2,
    topicName: "Scientific Notation",
    duration: 45,
    description: "Learn how to express very large and very small numbers in scientific notation, and perform calculations with numbers in scientific notation.",
    explanation: `
# Scientific Notation 🔬

Scientific notation is a way of expressing numbers that are very large or very small in a more convenient and standardized form. It's widely used in science, engineering, and mathematics to make calculations easier and to represent numbers clearly. Let's dive into this fascinating topic! 🚀

## What is Scientific Notation? 📝

Scientific notation expresses a number as a product of:
1. A number between 1 and 10 (called the coefficient or mantissa)
2. A power of 10 (called the exponent)

The general form is: a × 10ⁿ
where:
- a is a number between 1 and 10
- n is an integer (positive or negative)

## Converting Numbers to Scientific Notation 🔄

### For Large Numbers (> 10):
1. Move the decimal point left until you get a number between 1 and 10
2. Count how many places you moved
3. Use that count as a positive exponent

Example 1: 45,000 → 4.5 × 10⁴
- Move decimal point 4 places left: 45,000. → 4.5000
- Count moves: 4
- Write as: 4.5 × 10⁴

Example 2: 1,300,000 → 1.3 × 10⁶
- Move decimal point 6 places left: 1,300,000. → 1.300000
- Count moves: 6
- Write as: 1.3 × 10⁶

### For Small Numbers (< 1):
1. Move the decimal point right until you get a number between 1 and 10
2. Count how many places you moved
3. Use that count as a negative exponent

Example 1: 0.0025 → 2.5 × 10⁻³
- Move decimal point 3 places right: 0.0025 → 2.5000
- Count moves: 3
- Write as: 2.5 × 10⁻³

Example 2: 0.00000789 → 7.89 × 10⁻⁶
- Move decimal point 6 places right: 0.00000789 → 7.89000
- Count moves: 6
- Write as: 7.89 × 10⁻⁶

## Operations with Scientific Notation 🧮

### Multiplication
When multiplying numbers in scientific notation:
1. Multiply the coefficients
2. Add the exponents
3. Adjust the result if needed to keep coefficient between 1 and 10

Example: (2.0 × 10⁴) × (3.0 × 10³)
- Multiply coefficients: 2.0 × 3.0 = 6.0
- Add exponents: 4 + 3 = 7
- Result: 6.0 × 10⁷

### Division
When dividing numbers in scientific notation:
1. Divide the coefficients
2. Subtract the exponents
3. Adjust the result if needed

Example: (8.0 × 10⁵) ÷ (2.0 × 10²)
- Divide coefficients: 8.0 ÷ 2.0 = 4.0
- Subtract exponents: 5 - 2 = 3
- Result: 4.0 × 10³

## Real-World Applications 🌍

Scientific notation is used in many real-world situations:

1. Astronomy 🌟
   - Distance to nearest star (after Sun): 4.0 × 10¹⁶ meters
   - Mass of the Sun: 2.0 × 10³⁰ kilograms

2. Microbiology 🦠
   - Size of a bacterium: 1.0 × 10⁻⁶ meters
   - Mass of a virus: 1.0 × 10⁻²² kilograms

3. Computer Storage 💾
   - 1 gigabyte = 1.0 × 10⁹ bytes
   - Processing speed: 3.0 × 10⁹ operations per second

4. Earth Science 🌎
   - Earth's mass: 5.97 × 10²⁴ kilograms
   - Depth of ocean: 3.7 × 10³ meters

## Common Mistakes to Avoid ⚠️

1. Coefficient Range
   - INCORRECT: 45.6 × 10⁴
   - CORRECT: 4.56 × 10⁵ (coefficient must be between 1 and 10)

2. Decimal Point Movement
   - INCORRECT: 0.00056 → 5.6 × 10⁻⁴
   - CORRECT: 0.00056 → 5.6 × 10⁻⁴ (count moves carefully)

3. Sign of Exponent
   - For numbers > 1: positive exponent
   - For numbers < 1: negative exponent

## Practice Tips 💡

1. Start with Simple Numbers
   - Practice with whole numbers first
   - Then move to decimals
   - Finally, try very large and very small numbers

2. Use Real-World Examples
   - Find scientific measurements in news articles
   - Look up astronomical distances
   - Study microscopic measurements

3. Check Your Work
   - Convert back to standard notation
   - Ensure coefficient is between 1 and 10
   - Verify exponent sign

## Sample Problems and Solutions 📚

1. Problem: Convert 47,000,000 to scientific notation
   Solution: 4.7 × 10⁷
   - Move decimal point 7 places left
   - Count moves: 7
   - Result: 4.7 × 10⁷

2. Problem: Convert 0.000000456 to scientific notation
   Solution: 4.56 × 10⁻⁷
   - Move decimal point 7 places right
   - Count moves: 7
   - Result: 4.56 × 10⁻⁷

3. Problem: Multiply (2.0 × 10³) × (3.0 × 10⁴)
   Solution: 6.0 × 10⁷
   - Multiply coefficients: 2.0 × 3.0 = 6.0
   - Add exponents: 3 + 4 = 7
   - Result: 6.0 × 10⁷

## Summary ✨

Scientific notation is a powerful tool that helps us:
- Express very large and very small numbers simply
- Perform calculations with extreme values easily
- Communicate scientific measurements clearly
- Compare vastly different quantities effectively

Remember:
- Always keep coefficient between 1 and 10
- Count decimal moves carefully
- Pay attention to exponent signs
- Practice with real-world examples

## Additional Practice Questions 📝

1. Convert 345,000,000 to scientific notation
   Answer: 3.45 × 10⁸

2. Write 0.0000789 in scientific notation
   Answer: 7.89 × 10⁻⁵

3. Multiply (5.0 × 10⁴) × (2.0 × 10³)
   Answer: 1.0 × 10⁸

4. Divide (6.0 × 10⁵) ÷ (2.0 × 10²)
   Answer: 3.0 × 10³

Keep practicing with different numbers and operations to become proficient in using scientific notation! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 