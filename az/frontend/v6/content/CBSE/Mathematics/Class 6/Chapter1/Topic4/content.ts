// Topic 4: Large numbers in real-life contexts
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic4Content: TopicContent = {
    id: 'cl6_ch1_t4',
    topicNumber: 4,
    topicName: "Large Numbers in Real-Life Contexts",
    duration: 45,
    description: "Understanding and working with large numbers in various real-world scenarios",
    explanation: `
# Large Numbers in Real-Life Contexts 🌍

Large numbers are all around us! From population counts to distances in space, understanding and working with large numbers is essential in our daily lives. Let's explore how we use and understand these big numbers. 🚀

## Understanding Large Numbers 🔢
1. **Place Value System** 📊
   - Ones (1)
   - Tens (10)
   - Hundreds (100)
   - Thousands (1,000)
   - Ten Thousands (10,000)
   - Lakhs (100,000)
   - Ten Lakhs (1,000,000)
   - Crores (10,000,000)

2. **Reading Large Numbers** 📖
   - Start from the left
   - Read each group of digits
   - Use appropriate place value names
   - Example: 45,67,890 = Forty-five lakh sixty-seven thousand eight hundred ninety

## Real-Life Examples of Large Numbers 🌟
1. **Population** 👥
   - India's population: ~1,400,000,000 (1.4 billion)
   - World population: ~8,000,000,000 (8 billion)
   - Example: If a city has 2,500,000 people, we say "25 lakh people"

2. **Money and Finance** 💰
   - National budgets in crores
   - Company revenues in millions
   - Example: ₹5,00,00,000 = 5 crore rupees

3. **Distances** 📏
   - Distance to Moon: 384,400 km
   - Distance to Sun: 149,600,000 km
   - Example: 1,00,000 km = 1 lakh kilometers

4. **Time** ⏰
   - Seconds in a year: 31,536,000
   - Minutes in a century: 52,560,000
   - Example: 10,00,000 seconds ≈ 11.57 days

## Working with Large Numbers 🧮
1. **Addition and Subtraction** ➕➖
   - Line up numbers by place value
   - Add/subtract from right to left
   - Example: 45,67,890 + 12,34,567 = 58,02,457

2. **Multiplication** ✖️
   - Break down into smaller parts
   - Use distributive property
   - Example: 1,000 × 1,000 = 10,00,000

3. **Division** ➗
   - Break down into manageable parts
   - Use estimation
   - Example: 10,00,000 ÷ 100 = 10,000

## Practical Applications 📱
1. **Shopping and Budgeting** 🛍️
   - Calculating total costs
   - Comparing prices
   - Example: If a car costs ₹12,50,000 and you save ₹25,000 per month, it will take 50 months to save enough

2. **Travel Planning** ✈️
   - Calculating distances
   - Estimating time
   - Example: If a train travels 1,200 km in 24 hours, its speed is 50 km/h

3. **Sports Statistics** ⚽
   - Player scores
   - Team statistics
   - Example: A cricket stadium with 50,000 seats sold 45,678 tickets

## Common Challenges and Solutions 💡
1. **Reading Large Numbers** 📖
   - Break into groups of three
   - Use commas for separation
   - Example: 12,34,56,789 = Twelve crore thirty-four lakh fifty-six thousand seven hundred eighty-nine

2. **Writing Large Numbers** ✍️
   - Use proper spacing
   - Include commas
   - Example: 1,00,00,000 (One crore)

3. **Comparing Numbers** ↔️
   - Start from leftmost digit
   - Compare digit by digit
   - Example: 12,34,567 > 12,34,566

## Sample Problems and Solutions 📝
1. **Problem**: A city has 45,67,890 people. If 12,34,567 people move in, what's the new population?
   **Solution**: 45,67,890 + 12,34,567 = 58,02,457 people

2. **Problem**: A company earns ₹5,00,00,000 in a year. If expenses are ₹2,50,00,000, what's the profit?
   **Solution**: 5,00,00,000 - 2,50,00,000 = ₹2,50,00,000 profit

3. **Problem**: If a book costs ₹450, how many books can you buy with ₹1,00,000?
   **Solution**: 1,00,000 ÷ 450 ≈ 222 books

## Real-World Connections 🌐
1. **Science and Technology** 🔬
   - Computer memory (GB, TB)
   - Internet data transfer
   - Example: 1 TB = 1,000 GB = 10,00,000 MB

2. **Geography** 🌎
   - Area measurements
   - Population density
   - Example: India's area is about 32,87,263 square kilometers

3. **Economics** 💹
   - GDP figures
   - Trade statistics
   - Example: India's GDP is about ₹2,00,00,000 crore

## Practice Exercises 🏋️‍♀️
1. Write these numbers in words:
   - 12,34,567 → Twelve lakh thirty-four thousand five hundred sixty-seven
   - 1,00,00,000 → One crore
   - 45,67,890 → Forty-five lakh sixty-seven thousand eight hundred ninety

2. Solve these problems:
   - 5,00,000 + 3,00,000 = 8,00,000
   - 10,00,000 ÷ 100 = 10,000
   - 1,000 × 1,000 = 10,00,000

## Summary ✨
Large numbers are:
- Essential in daily life
- Used in various contexts
- Follow the place value system
- Can be added, subtracted, multiplied, and divided

Key points to remember:
- Use commas for better readability
- Break numbers into groups
- Practice reading and writing
- Apply in real-life situations

Keep practicing with large numbers to become more comfortable with them! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
