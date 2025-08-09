import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl7_ch2_t3',
    topicNumber: 3,
    topicName: "Applications of Fractions and Decimals in Real Life",
    duration: 45,
    description: "Understanding how fractions and decimals are used in everyday situations, including shopping, cooking, time management, and measurements",
    explanation: `
# Applications of Fractions and Decimals in Real Life 🌍

Welcome to the practical world of fractions and decimals! 🎯 In this topic, we'll explore how these mathematical concepts are used in our daily lives. Let's dive in! 🚀

## Shopping and Money 💰

### Discounts and Sales
- **Calculating Discounts**: Finding 25% off means multiplying by 0.75
  - Example: A ₹1000 shirt with 20% discount = ₹1000 × 0.8 = ₹800
- **Multiple Discounts**: Applying multiple discounts in sequence
  - Example: 10% off, then 5% off = multiply by 0.9, then 0.95

### Tax Calculations
- **Adding Tax**: Calculating final price with tax
  - Example: ₹500 item with 8% tax = ₹500 × 1.08 = ₹540
- **Finding Original Price**: Working backwards from final price
  - Example: ₹540 with 8% tax = ₹540 ÷ 1.08 = ₹500

## Cooking and Recipes 👩‍🍳

### Recipe Scaling
- **Doubling Recipes**: Multiplying all ingredients by 2
  - Example: ½ cup sugar × 2 = 1 cup sugar
- **Halving Recipes**: Dividing all ingredients by 2
  - Example: ¾ cup flour ÷ 2 = ⅜ cup flour

### Measurement Conversions
- **Volume Conversions**: Converting between cups, tablespoons, etc.
  - Example: ½ cup = 8 tablespoons
- **Weight Conversions**: Converting between grams and kilograms
  - Example: 0.5 kg = 500 grams

## Time Management ⏰

### Time Calculations
- **Adding Time**: Adding fractions of hours
  - Example: ½ hour + ¼ hour = ¾ hour = 45 minutes
- **Subtracting Time**: Finding time differences
  - Example: 1½ hours - ¾ hour = ¾ hour = 45 minutes

### Scheduling
- **Dividing Time**: Allocating time for different tasks
  - Example: 2 hours divided among 3 tasks = ⅔ hour per task
- **Percentage of Day**: Calculating time as percentage
  - Example: 6 hours = 6/24 = ¼ = 25% of day

## Measurements and Construction 📏

### Length Measurements
- **Fractional Lengths**: Measuring in fractions of units
  - Example: 2½ meters = 2.5 meters
- **Unit Conversions**: Converting between units
  - Example: 1.5 meters = 150 centimeters

### Area Calculations
- **Fractional Areas**: Calculating areas with fractional sides
  - Example: 2½ m × 3¼ m = 8⅛ m²
- **Percentage Coverage**: Finding percentage of area covered
  - Example: ¾ of a 100 m² room = 75 m²

## Sports and Games 🎮

### Score Calculations
- **Averaging Scores**: Finding mean scores
  - Example: (8.5 + 9.0 + 8.0) ÷ 3 = 8.5
- **Percentage Scores**: Converting to percentages
  - Example: 17/20 = 0.85 = 85%

### Time Records
- **Comparing Times**: Finding differences in times
  - Example: 12.5 seconds - 11.8 seconds = 0.7 seconds
- **Speed Calculations**: Distance per unit time
  - Example: 100 meters in 12.5 seconds = 8 m/s

## Common Mistakes to Avoid ❌

1. **Forgetting Units**: Always include units in final answers
2. **Rounding Errors**: Be careful with decimal places
3. **Conversion Mistakes**: Double-check unit conversions
4. **Context Errors**: Ensure answers make sense in real-world context

## Practice Problems 📝

1. **Shopping**:
   - A ₹1200 jacket is on sale for ⅓ off. What's the sale price?
   - If a ₹800 item has 5% tax, what's the total cost?

2. **Cooking**:
   - A recipe needs ¾ cup of sugar. You want to make ½ the recipe. How much sugar do you need?
   - Convert 1½ cups to tablespoons.

3. **Time**:
   - If you spend ⅔ hour on homework and ¼ hour on reading, how much time did you spend?
   - What percentage of a 6-hour workday is 4½ hours?

## Summary ✨

Key points to remember:
- **Shopping**: Use fractions/decimals for discounts and taxes
- **Cooking**: Scale recipes using multiplication/division
- **Time**: Add/subtract fractions of hours
- **Measurements**: Convert between units using decimals
- **Sports**: Calculate averages and percentages

### Additional Examples:

1. **Shopping Example**:
   A store offers 20% off on a ₹1500 item, plus an additional 10% off. What's the final price?
   Solution: ₹1500 × 0.8 × 0.9 = ₹1080

2. **Cooking Example**:
   A recipe needs 2⅓ cups of flour and 1½ cups of sugar. You want to make ¾ of the recipe. How much of each do you need?
   Solution: Flour = 2⅓ × ¾ = 7/3 × 3/4 = 7/4 = 1¾ cups
   Sugar = 1½ × ¾ = 3/2 × 3/4 = 9/8 = 1⅛ cups

3. **Time Example**:
   You spend ⅔ of an hour on math, ¼ hour on science, and ½ hour on English. How much time did you spend in total?
   Solution: ⅔ + ¼ + ½ = 8/12 + 3/12 + 6/12 = 17/12 = 1 5/12 hours

Remember to practice regularly and check your work! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 