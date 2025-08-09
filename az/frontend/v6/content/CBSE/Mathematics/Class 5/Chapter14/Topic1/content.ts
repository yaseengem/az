import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl5_ch14_t1',
  topicNumber: 1,
  topicName: "Measuring Volume",
  duration: 45,
  description: "Understanding volume measurement using litres and millilitres",
  explanation: `# Measuring Volume 📏

Volume is how much space something takes up! 🏺 In this topic, we'll learn about measuring liquids and containers using litres and millilitres. Let's dive in! 💧

## What is Volume? 🤔

Volume is:
- The amount of space an object or liquid takes up
- Measured in litres (L) and millilitres (mL)
- Important for cooking, science, and everyday life
- Used to measure liquids like water, milk, and juice

## Understanding Units 📊

### 1. Litre (L) 🥛
- The bigger unit for measuring volume
- Used for larger amounts of liquid
- Examples:
  * A large water bottle: 2 L
  * A milk carton: 1 L
  * A bucket: 10 L

### 2. Millilitre (mL) 💧
- The smaller unit for measuring volume
- Used for smaller amounts of liquid
- 1000 mL = 1 L
- Examples:
  * A small medicine cup: 5 mL
  * A teaspoon: 5 mL
  * A tablespoon: 15 mL

## Measuring Tools 🛠️

### 1. Measuring Cups 🥤
- Have markings for different amounts
- Usually show both L and mL
- Example:
\`\`\`
        | 1 L |
  | 900 mL |
  | 800 mL |
  | 700 mL |
  | 600 mL |
  | 500 mL |
  | 400 mL |
  | 300 mL |
  | 200 mL |
  | 100 mL |
\`\`\`

### 2. Measuring Spoons 🥄
- Used for small amounts
- Common sizes:
  * 1 mL (¼ teaspoon)
  * 5 mL (1 teaspoon)
  * 15 mL (1 tablespoon)

## Converting Between Units 🔄

### Litres to Millilitres
- Multiply by 1000
- Example: 2 L = 2 × 1000 = 2000 mL

### Millilitres to Litres
- Divide by 1000
- Example: 5000 mL = 5000 ÷ 1000 = 5 L

## Practice Examples 📝

### Example 1: Converting Units
Convert 3.5 L to mL:
- 3.5 L = 3.5 × 1000 = 3500 mL

### Example 2: Adding Volumes
If you have 1.2 L of water and add 300 mL more, what's the total?
- 1.2 L = 1200 mL
- 1200 mL + 300 mL = 1500 mL = 1.5 L

### Example 3: Comparing Volumes
Which is more: 2.5 L or 2500 mL?
- 2.5 L = 2500 mL
- They are equal!

## Real-Life Applications 🌍

Volume measurement is used in:
- Cooking and baking 🍳
- Medicine dosages 💊
- Science experiments 🧪
- Fuel measurement ⛽
- Water conservation 💦

## Sample Questions ❓

1. How many millilitres are in 2.5 litres?
   - Answer: 2500 mL

2. If a bottle holds 750 mL, how many litres is that?
   - Answer: 0.75 L

3. Which is more: 1.2 L or 1200 mL?
   - Answer: They are equal

## Tips for Measuring Volume 💡

1. Always read measurements at eye level
2. Use the right tool for the amount
3. Be careful with conversions
4. Check units before comparing
5. Practice with real containers

## Summary ✨

- Volume measures how much space something takes up
- Main units are litres (L) and millilitres (mL)
- 1000 mL = 1 L
- Use appropriate measuring tools
- Practice converting between units
- Volume measurement is important in daily life

Remember: Practice measuring different volumes to become a volume expert! 🎯`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
}; 