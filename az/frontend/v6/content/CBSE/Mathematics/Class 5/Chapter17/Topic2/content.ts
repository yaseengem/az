import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl5_ch17_t2',
    topicNumber: 2,
    topicName: "Measuring Ingredients in Recipes",
    duration: 45,
    description: "Understanding measurement units and their practical applications in cooking",
    explanation: `
# Measuring Ingredients in Recipes 🥄

Cooking is both an art and a science! 🧪 In this topic, we'll learn how to measure ingredients accurately using different units of measurement. This skill is essential for following recipes and creating delicious dishes. Let's explore the world of kitchen measurements! 🍳

## Common Measurement Units 📏

### 1. Volume Measurements 📊
- **Milliliters (ml)**: Small liquid measurements
  * Example: 5 ml of vanilla extract
- **Liters (L)**: Larger liquid measurements
  * Example: 1 L of milk
- **Cups**: Common in recipes
  * Example: 1 cup of flour = 240 ml

### 2. Weight Measurements ⚖️
- **Grams (g)**: Small weight measurements
  * Example: 100 g of sugar
- **Kilograms (kg)**: Larger weight measurements
  * Example: 1 kg of flour

### 3. Common Kitchen Tools 🥄
- Measuring cups
- Measuring spoons
- Kitchen scales
- Liquid measuring jugs

## Converting Between Units 🔄

### Volume Conversions
1. 1 liter (L) = 1000 milliliters (ml)
2. 1 cup = 240 milliliters (ml)
3. 1 tablespoon = 15 milliliters (ml)
4. 1 teaspoon = 5 milliliters (ml)

### Weight Conversions
1. 1 kilogram (kg) = 1000 grams (g)
2. 1 pound = 454 grams (g)

## Practical Examples 🍪

### Example 1: Making Lemonade
Ingredients needed:
- 1 liter water
- 100 ml lemon juice
- 200 g sugar
- 5 ml vanilla extract

### Example 2: Baking Cookies
Ingredients needed:
- 250 g flour
- 100 g sugar
- 100 g butter
- 2 eggs
- 5 ml vanilla extract

## Measurement Tips 💡

1. **Liquid Measurements**
   - Use clear measuring cups
   - Check at eye level
   - Example: Measuring 250 ml of milk

2. **Dry Ingredients**
   - Level off with a straight edge
   - Don't pack unless specified
   - Example: Measuring 1 cup of flour

3. **Small Measurements**
   - Use measuring spoons
   - Be precise with small amounts
   - Example: Measuring 5 ml of salt

## Sample Questions ❓

1. If a recipe needs 500 ml of milk and you only have a 1-liter bottle, how much milk will be left?
   - Answer: 500 ml (1000 ml - 500 ml)

2. A cake recipe needs 2 cups of flour. If 1 cup = 240 ml, how many milliliters of flour are needed?
   - Answer: 480 ml (2 × 240 ml)

3. You need 1 kg of sugar but only have 500 g packets. How many packets do you need?
   - Answer: 2 packets (1000 g ÷ 500 g)

## Real-Life Applications 🌟

Measurement skills are used in:
- Following recipes 📝
- Baking cakes and cookies 🍰
- Making drinks and smoothies 🥤
- Preparing family meals 🍲
- Creating homemade gifts 🎁

## Tips for Accurate Measuring 💡

1. Always use proper measuring tools
2. Read measurements at eye level
3. Level off dry ingredients
4. Use the right size measuring cup
5. Double-check your measurements

## Summary ✨

- Different units for different ingredients
- Convert between units when needed
- Use proper measuring tools
- Be precise with measurements
- Practice makes perfect

Remember: Accurate measurements lead to delicious results! Happy cooking! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 