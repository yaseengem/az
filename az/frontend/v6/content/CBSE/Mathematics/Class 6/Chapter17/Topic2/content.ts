// Topic 2: Measuring ingredients in recipes
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl6_ch17_t2',
    topicNumber: 2,
    topicName: "Measuring Ingredients in Recipes",
    duration: 45,
    description: "Understanding measurements and calculations in cooking recipes",
    explanation: `
# Measuring Ingredients in Recipes 🍳

Welcome to the world of cooking mathematics! 🥘 In this topic, we'll learn how to measure ingredients accurately and make calculations for recipes. Let's explore how math helps us in the kitchen! 🚀

## Understanding Measurements 📊

### Common Units of Measurement 📏
- **Volume**: ml (milliliters), l (liters)
- **Weight**: g (grams), kg (kilograms)
- **Common Kitchen Measures**: tsp (teaspoon), tbsp (tablespoon), cup

### Converting Between Units 🔄
- 1 liter = 1000 milliliters
- 1 kilogram = 1000 grams
- 1 tablespoon = 3 teaspoons
- 1 cup = 16 tablespoons

## Reading and Understanding Recipes 📝

### Recipe Components
1. **Ingredients List** 🥬
   - Lists all items needed
   - Shows quantities and units
   - Example: 2 cups flour, 500ml milk

2. **Instructions** 📋
   - Step-by-step directions
   - Often includes measurements
   - Example: "Add 1/2 cup sugar"

### Scaling Recipes Up or Down 📈📉

#### Increasing Recipe Size
- If recipe is for 4 people and you need 8:
  * Multiply all ingredients by 2
  * Example: 2 cups → 4 cups

#### Decreasing Recipe Size
- If recipe is for 4 people and you need 2:
  * Divide all ingredients by 2
  * Example: 2 cups → 1 cup

## Real-Life Examples 🌟

### Example 1: Making Lemonade
Original recipe (4 servings):
- 4 lemons
- 1 liter water
- 1/2 cup sugar

For 8 servings:
- 8 lemons
- 2 liters water
- 1 cup sugar

### Example 2: Baking Cookies
Original recipe (12 cookies):
- 2 cups flour
- 1/2 cup sugar
- 1/4 cup butter

For 24 cookies:
- 4 cups flour
- 1 cup sugar
- 1/2 cup butter

## Important Tips 💡

1. **Measuring Accurately** 📏
   - Use proper measuring cups and spoons
   - Level off dry ingredients
   - Read measurements at eye level

2. **Understanding Fractions** 📊
   - 1/2 cup = 8 tablespoons
   - 1/4 cup = 4 tablespoons
   - 1/3 cup ≈ 5 tablespoons + 1 teaspoon

3. **Temperature Conversions** 🌡️
   - Celsius to Fahrenheit: (°C × 9/5) + 32
   - Example: 180°C = 356°F

## Common Mistakes to Avoid ❌

1. **Confusing Units** 🤔
   - Don't mix volume and weight
   - Example: grams vs milliliters

2. **Incorrect Scaling** 📉
   - Remember to scale all ingredients
   - Don't forget to adjust cooking time

3. **Ignoring Temperature** 🔥
   - Oven temperature affects cooking
   - Use correct temperature units

## Practice Problems 🏋️‍♀️

1. **Problem**: A recipe needs 2 cups of milk for 4 servings. How much milk for 6 servings?
   - Solution: 3 cups (2 × 1.5)

2. **Problem**: Convert 500 grams to kilograms.
   - Solution: 0.5 kg (500 ÷ 1000)

3. **Problem**: How many teaspoons in 2 tablespoons?
   - Solution: 6 teaspoons (2 × 3)

## Summary ✨

In this topic, we learned:
- Common units of measurement in cooking
- How to convert between units
- How to scale recipes up or down
- Important measurement tips
- Common mistakes to avoid

### Additional Examples and Sample Questions:

1. **Example**: A recipe needs 1/2 cup sugar for 2 servings. How much for 6 servings? (Answer: 1.5 cups)

2. **Example**: Convert 750ml to liters. (Answer: 0.75 liters)

3. **Question**: How many tablespoons in 1/4 cup? (Answer: 4 tablespoons)

4. **Question**: If a recipe needs 200g flour per person and you're cooking for 5, how much flour? (Answer: 1000g or 1kg)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
