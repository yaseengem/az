import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
   id: 'cl5_ch4_t1',
   topicNumber: 1,
   topicName: "Fractions as Parts of a Whole",
   duration: 45,
   description: "Understanding fractions as parts of a whole, representing fractions visually and numerically",
   explanation: `
# Fractions as Parts of a Whole 🍕

Fractions are everywhere in our daily lives! From sharing a pizza to measuring ingredients for a recipe, understanding fractions helps us divide things into equal parts. Let's explore this fundamental concept in mathematics! 🧮

## What are Fractions? 🤔

A fraction represents a part of a whole. It's written as two numbers separated by a line:
- The top number (numerator) tells us how many parts we have
- The bottom number (denominator) tells us how many equal parts the whole is divided into

## Visualizing Fractions 🎨

Let's look at some common examples:
- A pizza 🍕 cut into 8 equal slices: Each slice is 1/8 of the pizza
- A chocolate bar 🍫 divided into 4 pieces: Each piece is 1/4 of the bar
- A day 📅 divided into 24 hours: Each hour is 1/24 of a day

## Types of Fractions 📊

1. **Proper Fractions**: When the numerator is smaller than the denominator
   - Example: 2/3 (two parts out of three)
   - Visual: 🍕🍕 (2 slices out of 3)

2. **Improper Fractions**: When the numerator is larger than or equal to the denominator
   - Example: 5/4 (five parts when each whole has 4 parts)
   - Visual: 🍕🍕🍕🍕🍕 (5 slices when each pizza has 4 slices)

3. **Mixed Numbers**: A whole number and a proper fraction combined
   - Example: 1 1/2 (one whole and one half)
   - Visual: 🍕 + 🍕 (one whole pizza and half of another)

## Real-Life Examples 🌟

1. **Cooking** 👩‍🍳
   - Recipe calls for 1/2 cup of sugar
   - You need 3/4 teaspoon of salt
   - The cake needs to bake for 1 1/2 hours

2. **Time** ⏰
   - Half an hour = 1/2 hour
   - Quarter past the hour = 1/4 hour
   - Three-quarters of an hour = 3/4 hour

3. **Money** 💰
   - Half a rupee = 50 paise = 1/2 rupee
   - Quarter of a rupee = 25 paise = 1/4 rupee

## Sample Questions and Solutions 📝

1. **Question**: If a chocolate bar is divided into 8 equal pieces and you eat 3 pieces, what fraction of the chocolate bar did you eat?
   **Solution**: You ate 3/8 of the chocolate bar 🍫

2. **Question**: A pizza is cut into 6 slices. If you eat 2 slices, what fraction of the pizza is left?
   **Solution**: 4/6 or 2/3 of the pizza is left 🍕

3. **Question**: If you have 1 1/2 liters of milk and you use 3/4 liter for a recipe, how much milk is left?
   **Solution**: 3/4 liter of milk is left 🥛

## Practice Problems 🏋️‍♀️

1. A cake is divided into 12 equal pieces. If you eat 5 pieces, what fraction of the cake did you eat?
2. You have 2 1/4 meters of ribbon. If you use 3/4 meter, how much ribbon is left?
3. A day has 24 hours. If you sleep for 8 hours, what fraction of the day do you sleep?

## Summary ✨

- Fractions represent parts of a whole
- Numerator tells how many parts we have
- Denominator tells how many equal parts make a whole
- Fractions can be proper, improper, or mixed numbers
- Fractions are used in everyday life for cooking, time, money, and more

Remember: Fractions help us divide things fairly and understand parts of a whole. Practice with real objects like pizzas, chocolates, or measuring cups to make learning fractions fun and practical! 🎯
`,
   quiz: {
      questions: [
         ...easyQuestions,
         ...mediumQuestions
      ]
   }
}; 