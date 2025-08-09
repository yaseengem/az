import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl6_ch1_t1',
    topicNumber: 1,
    topicName: "Comparing and Ordering 4-digit Numbers",
    duration: 45,
    description: "Understanding how to compare and order 4-digit numbers using place value and comparison rules",
    explanation: `
# Comparing and Ordering 4-digit Numbers 🔢

Welcome to the exciting world of numbers! 🌟 In this topic, we'll learn how to compare and order 4-digit numbers. This skill is essential for understanding larger numbers and solving real-world problems. Let's dive in! 🚀

## Understanding Place Value 📊

Before we compare numbers, let's understand their structure:
- A 4-digit number has four places: Thousands (T), Hundreds (H), Tens (T), and Ones (O)
- For example, in 3,456:
  * 3 is in the thousands place (3,000)
  * 4 is in the hundreds place (400)
  * 5 is in the tens place (50)
  * 6 is in the ones place (6)

## Rules for Comparing Numbers 📝

### Rule 1: Compare from Left to Right
Start comparing from the leftmost digit (thousands place) and move right:
- If the thousands digits are different, the number with the larger thousands digit is greater
- If thousands are equal, compare hundreds
- If hundreds are equal, compare tens
- If tens are equal, compare ones

### Rule 2: Using Symbols
We use three symbols to compare numbers:
- > (greater than)
- < (less than)
- = (equal to)

### Examples 📌
1. Compare 3,456 and 3,789:
   - Thousands are equal (3 = 3)
   - Compare hundreds: 4 < 7
   - Therefore, 3,456 < 3,789

2. Compare 5,123 and 5,129:
   - Thousands are equal (5 = 5)
   - Hundreds are equal (1 = 1)
   - Tens are equal (2 = 2)
   - Compare ones: 3 < 9
   - Therefore, 5,123 < 5,129

## Ordering Numbers 📈

### Ascending Order
Arranging numbers from smallest to largest:
Example: 1,234, 2,345, 3,456, 4,567

### Descending Order
Arranging numbers from largest to smallest:
Example: 4,567, 3,456, 2,345, 1,234

## Real-life Applications 🌍

### 1. Shopping 🛍️
- Comparing prices of different items
- Example: A laptop costs ₹45,999 and another costs ₹42,999. Which is cheaper?

### 2. Sports 🏆
- Comparing scores in games
- Example: Team A scored 2,345 points, Team B scored 2,456 points. Who won?

### 3. Population 📊
- Comparing populations of different cities
- Example: City A has 3,456 people, City B has 3,567 people. Which city has more people?

## Common Mistakes to Avoid ❌

1. **Starting from the right**: Always compare from left to right
2. **Ignoring place value**: Each digit's value depends on its place
3. **Miscounting digits**: Ensure you're comparing numbers with the same number of digits

## Practice Tips 🎯

1. **Use number lines**: Visual representation helps in understanding
2. **Break down numbers**: Write numbers in expanded form
3. **Practice with real examples**: Use prices, scores, or measurements

## Sample Questions ❓

1. Which is greater: 4,567 or 4,576?
   - Compare thousands: 4 = 4
   - Compare hundreds: 5 = 5
   - Compare tens: 6 < 7
   - Therefore, 4,567 < 4,576

2. Arrange in ascending order: 3,456, 3,654, 3,546, 3,465
   - 3,456 < 3,465 < 3,546 < 3,654

## Summary ✨

In this topic, we learned:
- How to compare 4-digit numbers using place value
- Rules for comparing numbers from left to right
- How to order numbers in ascending and descending order
- Real-life applications of comparing numbers
- Common mistakes to avoid

Remember: Practice makes perfect! The more you practice comparing and ordering numbers, the better you'll become at it.

### Additional Examples and Sample Questions:

1. **Example**: Compare the heights of two buildings: Building A is 1,234 meters tall, Building B is 1,243 meters tall. Which is taller?
   (Answer: Building B is taller because 1,243 > 1,234)

2. **Example**: Arrange these distances in descending order: 2,345 km, 2,354 km, 2,435 km, 2,453 km
   (Answer: 2,453 km > 2,435 km > 2,354 km > 2,345 km)

3. **Question**: If you have ₹3,456 and your friend has ₹3,465, who has more money?
   (Answer: Your friend has more money because 3,465 > 3,456)

4. **Question**: Which is the smallest 4-digit number that can be formed using the digits 2, 3, 4, 5 without repeating any digit?
   (Answer: 2,345)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
