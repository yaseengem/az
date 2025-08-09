import { QuizQuestion, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl3_ch8_t1',
  topicNumber: 1,
  topicName: 'Comparing Weights',
  duration: 45,
  description: 'Introduction to comparing weights and basic concepts of mass for Class 3 students.',
  explanation: `
# Who is Heavier? ⚖️

## Introduction

Have you ever tried to lift your school bag and then a pencil box? You must have noticed that some things feel light, while others feel heavy. This is because every object has a property called **weight** or **mass**. In this topic, we will learn how to compare the weights of different objects, understand the concept of mass, and use simple tools to measure and compare weights. Let's get started! 🏋️‍♂️

## What is Weight or Mass?

- **Weight** (or **mass**) tells us how heavy or light an object is.
- We use the word **heavier** for objects that weigh more and **lighter** for objects that weigh less.
- For example, an elephant 🐘 is heavier than a cat 🐱, and a book 📚 is heavier than a pencil ✏️.

## Comparing Weights

### 1. By Lifting (Hand Balance)
- The simplest way to compare weights is by holding objects in your hands.
- Try holding an apple 🍎 in one hand and a notebook 📒 in the other. Which feels heavier? That one has more mass!

### 2. Using a Balance Scale ⚖️
- A **balance scale** is a tool with two pans. You put one object in each pan.
- The pan that goes down has the heavier object.
- If both pans stay at the same level, the objects are of equal weight.

#### Example:
- Place a stone 🪨 in one pan and a rubber ball 🏐 in the other. If the pan with the stone goes down, the stone is heavier.

### 3. Standard Units of Mass
- In daily life, we use units like **kilogram (kg)** and **gram (g)** to measure mass.
- 1 kilogram (kg) = 1000 grams (g)
- Lighter objects (like an eraser) are measured in grams, while heavier objects (like a bag of rice) are measured in kilograms.

#### Examples:
- A chocolate bar 🍫 weighs about 50 grams.
- A school bag 🎒 may weigh 2 kilograms.

## Why is Comparing Weights Important?
- Helps us choose the right amount of things (e.g., buying vegetables 🥦🥕).
- Useful in cooking, shopping, and science experiments.
- Teaches us to estimate and measure accurately.

## Sample Questions and Activities
1. Which is heavier: a glass of water or a steel spoon?
2. If you have a 1 kg packet of sugar and a 500 g packet of salt, which is heavier?
3. Can you find something at home that is lighter than your math book?
4. Use a balance scale to compare the weights of two fruits.

## Fun Facts 🌟
- The symbol for kilogram is **kg** and for gram is **g**.
- The heaviest animal on land is the African elephant, which can weigh up to 6,000 kg!
- The lightest coin in India is the 50 paise coin, weighing about 2.9 grams.

## Short Summary
- Weight (mass) tells us how heavy or light something is.
- We compare weights by lifting or using a balance scale.
- Standard units are grams (g) and kilograms (kg).
- Comparing weights helps us in daily life.

## More Examples
- A packet of chips weighs about 30 g.
- A watermelon 🍉 can weigh 3 kg or more.
- A pencil weighs about 8 g.

## Practice Questions
1. Which is heavier: a brick 🧱 or a feather 🪶?
2. If a bag of rice weighs 5 kg and a bag of flour weighs 2 kg, which is lighter?
3. What tool do we use to compare weights? (Answer: Balance scale)
4. How many grams are there in 1 kilogram? (Answer: 1000 grams)

---

By the end of this topic, you should be able to compare the weights of objects, use the terms heavier and lighter correctly, and understand the basic units of mass. Keep practicing with things around you! 💪
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
