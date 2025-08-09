import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl7_ch1_t3',
    topicNumber: 3,
    topicName: "Applications: Real-life problems involving integers",
    duration: 45,
    description: "Understanding and solving real-world problems using integers, including temperature changes, financial transactions, and elevation differences",
    explanation: `
# Real-life Applications of Integers 🌟

Integers are everywhere in our daily lives! From checking the temperature to managing our bank accounts, integers help us understand and solve real-world problems. Let's explore how we use integers in different situations. 🚀

## Temperature Changes 🌡️

Temperature is one of the most common real-life applications of integers:
- **Positive temperatures**: Represent warm or hot conditions (e.g., 25°C)
- **Negative temperatures**: Represent cold conditions (e.g., -5°C)
- **Temperature changes**: Can be positive (increase) or negative (decrease)

**Example**: If the temperature drops from 15°C to -3°C, the change is:
15°C - (-3°C) = 18°C decrease

**Sample Question**: The temperature in Delhi was 35°C during the day but dropped to 22°C at night. What was the temperature change? (Answer: -13°C)

## Financial Transactions 💰

Integers are essential in financial matters:
- **Positive integers**: Represent deposits, income, or profits
- **Negative integers**: Represent withdrawals, expenses, or losses
- **Zero**: Represents a balanced account

**Example**: If you have ₹500 and spend ₹700, your balance becomes:
₹500 - ₹700 = -₹200

**Sample Question**: A shopkeeper has ₹1000 in his cash register. He makes sales of ₹2500 and has expenses of ₹1800. What is his final balance? (Answer: ₹1700)

## Elevation and Depth 🏔️

Integers help us understand positions relative to sea level:
- **Positive integers**: Represent heights above sea level
- **Negative integers**: Represent depths below sea level
- **Zero**: Represents sea level

**Example**: If a mountain is 2500m above sea level and a valley is 500m below sea level, the difference in elevation is:
2500m - (-500m) = 3000m

**Sample Question**: A submarine is at 200m below sea level and rises 150m. What is its new position? (Answer: -50m)

## Sports Scores and Rankings 🏆

Integers are used in various sports:
- **Positive integers**: Represent points scored, goals, or wins
- **Negative integers**: Represent points against, goals conceded, or losses
- **Zero**: Represents a tie or no score

**Example**: In a cricket match, if a team scores 287 runs and wins by 42 runs, the opposing team's score is:
287 - 42 = 245 runs

**Sample Question**: A football team has 15 points. They win a match (+3 points) and lose another (-1 point). What is their new total? (Answer: 17 points)

## Time Zones and Time Differences ⏰

Integers help us understand time differences:
- **Positive integers**: Represent time ahead of a reference point
- **Negative integers**: Represent time behind a reference point
- **Zero**: Represents the reference time zone

**Example**: If New York is UTC-5 and London is UTC+0, the time difference is:
0 - (-5) = 5 hours

**Sample Question**: If it's 3 PM in Tokyo (UTC+9) and 6 AM in New York (UTC-5), what's the time difference? (Answer: 14 hours)

## Steps to Solve Integer Word Problems 📝

1. **Identify the integers**: Look for numbers in the problem
2. **Determine the operation**: Addition, subtraction, multiplication, or division
3. **Apply the rules**: Remember the rules for operations with integers
4. **Check the answer**: Verify if the answer makes sense in the real-world context

**Example**: A hiker starts at 200m above sea level, climbs 300m, then descends 150m. What is their final position?
200m + 300m - 150m = 350m

## Common Mistakes to Avoid ❌

1. **Forgetting negative signs**: Always pay attention to negative numbers
2. **Mixing operations**: Be careful with the order of operations
3. **Ignoring context**: Make sure the answer makes sense in the real-world situation
4. **Confusing positive and negative**: Remember that negative doesn't always mean "bad"

## Practice Problems 🏋️‍♀️

1. A scuba diver is at 30m below sea level and descends another 20m. What is their new position?
2. The temperature in a freezer is -18°C. If it rises by 5°C, what is the new temperature?
3. A bank account has a balance of ₹-500. If ₹1000 is deposited, what is the new balance?
4. A football team has 12 points. They lose a match (-1 point) and win another (+3 points). What is their new total?

## Summary ✨

Integers are essential in our daily lives:
- Temperature changes (positive and negative)
- Financial transactions (deposits and withdrawals)
- Elevation and depth (above and below sea level)
- Sports scores (points scored and conceded)
- Time differences (ahead and behind)

Understanding how to work with integers helps us solve real-world problems effectively. Remember to:
1. Pay attention to positive and negative signs
2. Choose the correct operation
3. Verify that your answer makes sense in the real-world context

### Additional Examples and Sample Questions:
1. **Example**: A submarine is at 150m below sea level and rises 75m. What is its new position? (Answer: -75m)
2. **Example**: The temperature in a city was -5°C in the morning and rose to 8°C in the afternoon. What was the temperature change? (Answer: +13°C)
3. **Question**: If you have ₹-200 in your account and deposit ₹500, what is your new balance? (Answer: ₹300)
4. **Question**: A mountain is 2500m high and a valley is 500m below sea level. What is the difference in elevation? (Answer: 3000m)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 