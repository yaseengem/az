import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl4_ch7_t2',
  topicNumber: 2,
  topicName: "Units like litre and millilitre",
  duration: 45,
  description: "Understanding the units used to measure liquid volume, with focus on litre and millilitre, their relationship, and conversion between units",
  explanation: `
# Units like litre and millilitre 💧

Welcome to the exciting world of measuring liquids! 🌊 In this topic, we'll learn about the units we use to measure how much liquid a container can hold. Just like we use metres and centimetres to measure length, we use litres and millilitres to measure the amount of liquid. Let's dive in and explore these important units!

## What is Capacity? 🏺

Capacity is the amount of liquid a container can hold. Think about different containers you use every day:
- A water bottle 🍶
- A teacup ☕
- A bathtub 🛁
- A bucket 🪣

Each of these containers can hold different amounts of liquid. To measure this amount, we use units called litre and millilitre.

## Litre (L) - The Basic Unit 📏

The **litre** is the basic unit for measuring liquid volume or capacity. We use the symbol **L** to represent litre.

Examples of items measured in litres:
- A large water bottle holds about 1 litre (1 L) of water
- A bucket might hold about 10 litres (10 L) of water
- A bathtub can hold about 80 litres (80 L) of water
- A small fish tank might hold about 20 litres (20 L) of water

## Millilitre (mL) - For Smaller Amounts 🔍

For smaller amounts of liquid, we use millilitres (mL). A millilitre is 1/1000 (one-thousandth) of a litre. The word "milli" means one-thousandth.

So:
- 1 litre (L) = 1000 millilitres (mL)

Examples of items measured in millilitres:
- A teaspoon holds about 5 millilitres (5 mL)
- A tablespoon holds about 15 millilitres (15 mL)
- A small glass might hold about 200 millilitres (200 mL)
- A cup of tea is usually about 250 millilitres (250 mL)
- Medicine doses are often measured in millilitres

## Converting Between Litres and Millilitres 🔄

Let's learn how to convert between litres and millilitres:

1. **To convert litres to millilitres:**
   - Multiply the number of litres by 1000
   - Example: 3.5 litres = 3.5 × 1000 = 3500 millilitres

2. **To convert millilitres to litres:**
   - Divide the number of millilitres by 1000
   - Example: 2500 millilitres = 2500 ÷ 1000 = 2.5 litres

### Examples:
- 2 L = 2 × 1000 = 2000 mL
- 0.5 L = 0.5 × 1000 = 500 mL
- 750 mL = 750 ÷ 1000 = 0.75 L
- 1500 mL = 1500 ÷ 1000 = 1.5 L

## Real-Life Examples 🌎

Let's look at some common containers and their approximate capacities:

| Container | Approximate Capacity |
|-----------|---------------------|
| Teaspoon | 5 mL |
| Tablespoon | 15 mL |
| Small glass | 200 mL |
| Cup | 250 mL |
| Water bottle | 500 mL - 1 L |
| Jug | 1 L - 2 L |
| Bucket | 10 L - 15 L |
| Bathtub | 80 L - 150 L |

## Measuring Liquid Volume 📊

To measure liquid volume accurately, we use:
1. **Measuring cylinders** - Clear cylinders with markings for precise measurement
2. **Measuring cups** - Often used in cooking and have markings for different volumes
3. **Measuring spoons** - For small amounts (teaspoons and tablespoons)

When measuring a liquid:
- Place the measuring container on a flat surface
- Look at the liquid level at eye level
- Read the measurement at the bottom of the curve (meniscus) that the liquid forms

## Comparing Volumes 📈

When comparing volumes of liquids, make sure they're in the same unit:
- 1 L is more than 500 mL (because 1 L = 1000 mL)
- 1500 mL is more than 1 L (because 1500 mL = 1.5 L)
- 0.25 L is the same as 250 mL

## Addition and Subtraction of Volumes 🧮

We can add or subtract volumes, just like other numbers:

**Addition Examples:**
- 2 L + 3 L = 5 L
- 500 mL + 300 mL = 800 mL
- 1 L + 500 mL = 1000 mL + 500 mL = 1500 mL = 1.5 L

**Subtraction Examples:**
- 5 L - 2 L = 3 L
- 800 mL - 350 mL = 450 mL
- 2 L - 500 mL = 2000 mL - 500 mL = 1500 mL = 1.5 L

## Sample Problems 📝

### Problem 1:
Ravi has a bottle that contains 750 mL of water. If he drinks 250 mL, how much water is left in the bottle?

**Solution:**
Water left = 750 mL - 250 mL = 500 mL

### Problem 2:
Meera has 3 jugs. One contains 1.5 L of water, another contains 750 mL, and the third contains 1.25 L. How much water does she have in total?

**Solution:**
Convert all to the same unit:
1.5 L = 1500 mL
750 mL = 750 mL
1.25 L = 1250 mL

Total water = 1500 mL + 750 mL + 1250 mL = 3500 mL = 3.5 L

## Fun Facts about Liquid Measurement 🎯

1. The litre was first introduced in France during the French Revolution.
2. Before standard measurements, people used cups, spoons, and other common items to measure liquids, which wasn't very accurate!
3. A typical adult human body contains about 42 litres of water!
4. A standard bathtub filled to the top contains about 80 litres of water.
5. A typical raindrop contains about 0.5 millilitres of water.

## Summary 📌

- **Litre (L)** is the basic unit for measuring liquid volume
- **Millilitre (mL)** is used for smaller volumes
- 1 litre = 1000 millilitres
- To convert litres to millilitres, multiply by 1000
- To convert millilitres to litres, divide by 1000
- Different containers have different capacities
- We use measuring cylinders, cups, and spoons to measure liquids
- We can add and subtract volumes, but we need to convert to the same unit first

Remember, measuring liquids accurately is important in cooking, medicine, science experiments, and many other daily activities. Next time you drink water from a bottle or help in the kitchen, notice the measurements on the containers! 💧
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
