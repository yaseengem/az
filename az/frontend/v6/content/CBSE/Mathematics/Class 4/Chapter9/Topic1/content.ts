import { TopicContent, TopicQuiz } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl4_ch9_t1',
  topicNumber: 1,
  topicName: "Introduction to fractions",
  duration: 45,
  description: "Learn about fractions as parts of a whole, understanding numerator and denominator, and comparing simple fractions.",
  explanation: `
# Introduction to Fractions 🍕

Have you ever shared a pizza with friends or cut a birthday cake into pieces? If so, you've already used fractions in real life! Fractions help us describe parts of a whole. Let's learn all about them!

## What Are Fractions? 📊

A fraction represents a part of a whole when the whole is divided into equal parts. When we divide something into equal parts, each part is a fraction of the whole.

For example, if we divide a chocolate bar into 4 equal pieces and take 1 piece, we have taken 1/4 (one-fourth) of the chocolate bar.

## Parts of a Fraction ✂️

A fraction has two parts separated by a line:
- The **numerator** is the number on top. It tells us how many equal parts we are considering.
- The **denominator** is the number on the bottom. It tells us the total number of equal parts the whole is divided into.

For example, in the fraction 3/5:
- 3 is the numerator (how many parts we have)
- 5 is the denominator (how many equal parts the whole is divided into)

## Visual Representation of Fractions 🎨

Fractions can be shown visually using different shapes:

### Using Circles:
A circle divided into 4 equal parts with 1 part shaded represents 1/4.
A circle divided into 4 equal parts with 3 parts shaded represents 3/4.

### Using Rectangles:
A rectangle divided into 6 equal parts with 2 parts shaded represents 2/6.

### Using Number Lines:
Fractions can also be shown on a number line between whole numbers.

## Common Fractions in Everyday Life 🌟

### Half (1/2)
- Half of a pizza
- Half an hour (30 minutes)
- Half a liter of milk

### Quarter (1/4)
- Quarter of an apple
- Quarter of an hour (15 minutes)
- Quarter of a dollar (25 cents)

### Third (1/3)
- One-third of a chocolate bar
- One-third of a cup in a recipe

## Equivalent Fractions 🟰

Equivalent fractions are different fractions that represent the same amount.

For example, 1/2, 2/4, 3/6, and 4/8 all represent the same value.

We can find equivalent fractions by multiplying or dividing both the numerator and denominator by the same number:
- 1/2 × 2/2 = 2/4
- 2/4 × 2/2 = 4/8
- 4/8 ÷ 2/2 = 2/4

## Comparing Fractions 📏

### Fractions with the Same Denominator
When fractions have the same denominator, the one with the larger numerator is larger:
- 3/8 is larger than 2/8
- 5/6 is larger than 1/6

### Fractions with the Same Numerator
When fractions have the same numerator, the one with the smaller denominator is larger:
- 3/4 is larger than 3/8
- 2/3 is larger than 2/5

### Fractions with Different Numerators and Denominators
We can convert them to equivalent fractions with the same denominator:
- To compare 2/3 and 3/4, we can convert to 8/12 and 9/12
- Since 9/12 > 8/12, we know that 3/4 > 2/3

## Simple Fraction Operations 🔢

### Adding Fractions with the Same Denominator
When adding fractions with the same denominator, add the numerators and keep the denominator:
- 1/5 + 2/5 = 3/5
- 1/8 + 3/8 = 4/8 = 1/2

### Subtracting Fractions with the Same Denominator
When subtracting fractions with the same denominator, subtract the numerators and keep the denominator:
- 7/10 - 3/10 = 4/10 = 2/5
- 5/6 - 1/6 = 4/6 = 2/3

## Fractions of Numbers ✨

We can find a fraction of a number by multiplying:
- 1/2 of 8 = 1/2 × 8 = 4
- 1/4 of 20 = 1/4 × 20 = 5
- 3/4 of 12 = 3/4 × 12 = 9

## Fractions in Measurement 📐

Fractions are used in various measurements:
- Time: Half hour (1/2 hour), quarter hour (1/4 hour)
- Length: 1/2 meter, 3/4 kilometer
- Weight: 1/2 kilogram, 1/4 pound
- Volume: 1/3 cup, 1/2 liter

## Sample Questions with Solutions 🧩

### Question 1:
If a pizza is cut into 8 equal slices and you eat 3 slices, what fraction of the pizza did you eat?

**Solution:**
The total number of equal slices is 8, and you ate 3 slices.
So, the fraction of pizza you ate is 3/8.

### Question 2:
Which is larger: 2/5 or 3/8?

**Solution:**
To compare these fractions, we need to find a common denominator.
The least common multiple of 5 and 8 is 40.
2/5 = 16/40
3/8 = 15/40
Since 16/40 > 15/40, we know that 2/5 > 3/8.

### Question 3:
What is 1/4 of 20 apples?

**Solution:**
1/4 of 20 = 1/4 × 20 = 20/4 = 5 apples

### Question 4:
If 2/3 of a class are girls and there are 30 students in the class, how many girls are there?

**Solution:**
Number of girls = 2/3 of 30 = 2/3 × 30 = 60/3 = 20 girls

### Question 5:
What fraction of a day is 6 hours?

**Solution:**
A day has 24 hours.
Fraction of a day = 6/24 = 1/4

## Real-life Applications of Fractions 🌎

1. **Cooking and Recipes**: Using 1/2 teaspoon of salt or 3/4 cup of flour
2. **Time Management**: Planning activities for 1/4 of your day
3. **Shopping**: Discounts like 1/2 off or buying 3/4 meter of fabric
4. **Money**: Dividing costs among friends or calculating 1/10 tax
5. **Construction**: Measuring 5/8 inch or dividing space into equal parts

## Summary 📝

In this topic, we learned:
- A fraction represents a part of a whole divided into equal parts
- A fraction has a numerator (top) and denominator (bottom)
- The numerator tells us how many parts we have
- The denominator tells us how many equal parts make up the whole
- Equivalent fractions represent the same value
- We can compare fractions to find which is larger or smaller
- Fractions are used in many real-life situations
- We can find fractions of numbers, add and subtract simple fractions, and represent fractions visually

Understanding fractions helps us solve many everyday problems and is an important foundation for more advanced math concepts. Keep practicing with fractions by dividing objects into equal parts and identifying what fraction each part represents!
`,
  quiz: {
    questions: [...easyQuestions, ...mediumQuestions]
  }
};
