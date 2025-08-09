import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl3_ch8_t2',
  topicNumber: 2,
  topicName: 'Introduction to Measurement of Mass',
  duration: 60,
  description: 'Learn about measuring mass (weight), using standard units like grams and kilograms, and comparing weights in daily life.',
  explanation: `
# Introduction to Measurement of Mass ⚖️

Have you ever wondered how much your school bag weighs? Or how heavy a watermelon is compared to an apple? In this topic, we will learn about mass (weight), how to measure it, and why it is important in our daily lives.

## What is Mass? 🏋️
Mass tells us how heavy or light something is. We use the word "mass" in science, but in daily life, we often say "weight." Both mean how much matter is in an object.

### Examples:
- A feather has less mass than a stone.
- An elephant has more mass than a dog.

## Why Do We Measure Mass? 🤔
Measuring mass helps us:
- Buy the right amount of fruits and vegetables 🍎🍉
- Cook food with the correct amount of ingredients 🍚
- Know if something is too heavy to lift

## Standard Units of Mass ⚖️
We use standard units to measure mass so everyone understands the same amount. The main units are:
- **Gram (g)**: Used for light things (like a pencil or an eraser)
- **Kilogram (kg)**: Used for heavier things (like a bag of rice or a person)

### 1 kilogram (kg) = 1000 grams (g)

#### Examples:
- 1 chocolate bar ≈ 50 g
- 1 apple ≈ 150 g
- 1 school bag ≈ 2 kg
- 1 sack of rice ≈ 10 kg

## How Do We Measure Mass? 🧑‍🔬
We use different types of balances and scales:
- **Beam balance**: Has two pans. Place the object on one side and weights on the other until both sides are level.
- **Electronic scale**: Shows the mass directly in grams or kilograms.

### Steps to Measure Mass:
1. Place the object on the scale or balance.
2. Read the number shown (in g or kg).

## Comparing Masses ⚖️
We can compare two or more objects:
- Heavier: Has more mass
- Lighter: Has less mass

#### Example:
- A brick is heavier than a notebook.
- A spoon is lighter than a bowl.

## Estimating Mass 🧠
Sometimes, we guess the mass before measuring. This is called estimation.
- A packet of chips is about 50 g.
- A water bottle is about 1 kg when full.

## Converting Units 🔄
- To change kilograms to grams: Multiply by 1000 (2 kg = 2 × 1000 = 2000 g)
- To change grams to kilograms: Divide by 1000 (500 g = 500 ÷ 1000 = 0.5 kg)

## Real-Life Examples 🌍
- Buying 1 kg of sugar at the shop
- Weighing yourself at the doctor’s clinic
- Measuring flour for a cake recipe

## Sample Questions 📝
1. Which is heavier: 1 kg of cotton or 1 kg of iron? (Answer: Both are equal)
2. If a watermelon is 3 kg and an apple is 150 g, which is heavier?
3. How many grams are there in 2 kg?
4. If a bag weighs 750 g, is it less than 1 kg?

## Fun Fact 🎉
The symbol for kilogram is "kg" and for gram is "g". The standard weight kept in Paris, France, is called the International Prototype of the Kilogram!

## Summary 📝
- Mass tells us how heavy or light something is.
- We use grams (g) and kilograms (kg) to measure mass.
- 1 kg = 1000 g.
- We use balances and scales to measure mass.
- Measuring mass helps us in shopping, cooking, and many daily activities!
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
