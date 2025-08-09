import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';
import { TopicContent } from '../../../../../types';

export const Topic1Content: TopicContent = {
  id: 'cl3_ch11_t1',
  topicNumber: 1,
  topicName: 'Understanding Capacity and Volume',
  duration: 45,
  description: 'Introduction to the concepts of capacity and volume, comparing and measuring liquids in daily life.',
  explanation: `
# Understanding Capacity and Volume 🥛💧

Capacity and volume are important concepts in mathematics and daily life. They help us understand how much liquid a container can hold and how to compare different quantities of liquids. In this topic, we will learn what capacity and volume mean, how to measure them, and how to use these ideas in real-life situations.

## What is Capacity? 🏺
Capacity is the amount a container can hold. For example, a jug, a bottle, or a mug all have different capacities. If you fill a jug with water, the amount of water it can hold is its capacity. Capacity is usually measured in units like litres (L) and millilitres (mL).

- **1 litre (L) = 1000 millilitres (mL)**
- A small cup might hold 200 mL, while a big water bottle might hold 1 L.

## What is Volume? 📏
Volume is the amount of space that a substance (like water, milk, or juice) takes up. For liquids, capacity and volume mean almost the same thing. When we talk about how much water is in a jug, we can use either word.

## Measuring Capacity and Volume 🧪
We use measuring jars, beakers, and bottles to measure capacity. In shops, you see milk, oil, and cold drinks sold in packets or bottles of different sizes, like 250 mL, 500 mL, or 1 L.

### Common Units:
- **Litre (L):** Used for larger quantities (e.g., a bucket of water)
- **Millilitre (mL):** Used for smaller quantities (e.g., a spoonful of medicine)

### Examples:
- A juice box = 200 mL 🧃
- A soft drink bottle = 1 L 🥤
- A bucket = 10 L 🪣

## Comparing Capacities ⚖️
To compare which container holds more, we look at their capacities. For example, a jug of 2 L holds more than a bottle of 500 mL. Remember, 1 L = 1000 mL, so 2 L = 2000 mL.

### Example:
- Which holds more: 750 mL or 1 L? 
  - 1 L = 1000 mL, so 1 L holds more.

## Addition and Subtraction of Capacities ➕➖
We often need to add or subtract capacities in daily life.
- If you pour 300 mL of juice into a glass and then add 200 mL more, you have 500 mL in total.
- If you have 1 L of milk and use 250 mL, you have 750 mL left.

## Real-Life Uses 🌍
- Cooking: Measuring oil, milk, or water for recipes.
- Medicine: Taking the right amount of syrup (like 5 mL).
- Shopping: Buying drinks or cleaning liquids in bottles of different sizes.

## Sample Questions and Practice 📝
1. If a bottle holds 600 mL and you pour out 250 mL, how much is left? (Answer: 350 mL)
2. Which is more: 1.5 L or 1200 mL? (Answer: 1.5 L = 1500 mL, so 1.5 L is more)
3. If you have two bottles, one with 750 mL and another with 1 L, what is the total capacity? (Answer: 1750 mL)

## Fun Facts and Tips 🎉
- The symbol for litre is **L** and for millilitre is **mL**.
- Always check the unit before comparing or adding quantities.
- 1 L = 1000 mL, so to convert litres to millilitres, multiply by 1000.

## Short Summary ✨
- Capacity is how much a container can hold.
- Volume is the space taken up by a liquid.
- We measure capacity in litres (L) and millilitres (mL).
- 1 L = 1000 mL.
- We use these ideas in cooking, shopping, and many daily activities.
- Practice comparing, adding, and subtracting capacities to get better at these skills!

## More Examples:
- A medicine bottle has 60 mL. If you take 5 mL each day, how many days will it last? (Answer: 12 days)
- A bucket holds 8 L. If you fill it with 2 L of water, how much more can it hold? (Answer: 6 L)
- If you have 3 bottles of 500 mL each, what is the total? (Answer: 1500 mL or 1.5 L)

Keep practicing, and soon you’ll be a pro at measuring and comparing capacities! 🏆
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
