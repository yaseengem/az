import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl4_ch9_t2',
  topicNumber: 2,
  topicName: "Understanding halves, quarters, and other fractions",
  duration: 45,
  description: "Learn about fractions including halves, quarters, and thirds, and how to represent them visually and mathematically.",
  explanation: `
# Understanding Halves, Quarters, and Other Fractions 🧩

## What Are Fractions? 🤔

Fractions are parts of a whole. They help us describe pieces of something when we don't have the complete thing. Think of a chocolate bar that you share with friends or a pizza cut into slices. Each piece is a fraction of the whole!

## Key Fraction Terms 📝

- **Numerator**: The top number that tells how many parts we have
- **Denominator**: The bottom number that tells how many equal parts the whole is divided into
- **Equal parts**: All parts must be the same size for fractions to work properly

For example, in the fraction 3/4:
- 3 is the numerator (parts we have)
- 4 is the denominator (total equal parts)

## Common Fractions We Use Every Day 🌟

### Halves (1/2)

Half means dividing something into 2 equal parts and taking 1 part. It's one of the first fractions we learn!

Examples of halves:
- Half of a chocolate bar 🍫
- Half of a sandwich 🥪
- Half of an hour (30 minutes) ⏰
- Half of a pizza 🍕

If you fold a square paper exactly in half, each part is 1/2 of the whole paper. If you fold it again, each part is 1/4 of the original paper.

### Quarters (1/4)

A quarter means dividing something into 4 equal parts and taking 1 part.

Examples of quarters:
- A quarter of a cake 🎂
- 15 minutes is a quarter of an hour ⏰
- A quarter of a rupee (25 paise) 💰
- One slice of a pizza cut into 4 equal pieces 🍕

Three quarters (3/4) means taking 3 parts out of those 4 equal parts.

### Thirds (1/3)

A third means dividing something into 3 equal parts and taking 1 part.

Examples of thirds:
- A third of a chocolate bar 🍫
- A third of a day (8 hours) 🌞
- Dividing a sandwich among 3 friends, each gets 1/3 🥪

Two-thirds (2/3) means taking 2 parts out of 3 equal parts.

## Representing Fractions Visually 🎨

We can show fractions using pictures:

**Circles**: Divide a circle into equal parts (like a pizza)
\`\`\`
    ______
   /      \\
  |   1/4   |
  |  shaded |
   \\______/
\`\`\`

**Rectangles**: Divide a rectangle into equal parts
\`\`\`
   _________
  |    |    |
  |1/2 |    |
  |____|____|
\`\`\`

**Number lines**: Show fractions as points between whole numbers
\`\`\`
  0----1/4----1/2----3/4----1
\`\`\`

## Equivalent Fractions ⚖️

Different fractions can represent the same amount! These are called equivalent fractions.

For example:
- 1/2 = 2/4 = 3/6 = 4/8
- 1/3 = 2/6 = 3/9

To find equivalent fractions, multiply (or divide) both the numerator and denominator by the same number.

Example: To find an equivalent fraction for 1/2, multiply both numbers by 2:
1/2 = (1×2)/(2×2) = 2/4

## Comparing Fractions 📏

When comparing fractions with the same denominator, the one with the larger numerator is larger.
- 3/8 is larger than 2/8

When comparing fractions with the same numerator, the one with the smaller denominator is larger.
- 3/4 is larger than 3/8

Example: Which is larger, 2/3 or 1/2?
- Convert to the same denominator
- 2/3 = 4/6
- 1/2 = 3/6
- So 2/3 is larger than 1/2

## Fractions in Real Life 🌍

Fractions are all around us:

- **Cooking**: Recipes often use fractions like 1/2 cup of sugar or 3/4 teaspoon of salt 🍲
- **Time**: Half an hour, quarter past nine ⏰
- **Money**: Half a rupee, quarter of a dollar 💰
- **Measurement**: Half a meter, quarter of a kilometer 📏

## Fractions in a Day ☀️

Let's look at how fractions apply to a 24-hour day:
- 12 hours is 1/2 of a day
- 6 hours is 1/4 of a day
- 8 hours is 1/3 of a day
- 4 hours is 1/6 of a day

## Sample Problems with Solutions 📝

**Problem 1**: What fraction of a square is shaded if 3 out of 4 equal parts are colored?
**Solution**: Since 3 parts out of 4 equal parts are shaded, the fraction is 3/4.

**Problem 2**: A pizza is cut into 8 equal slices. If you eat 3 slices, what fraction of the pizza did you eat?
**Solution**: You ate 3 slices out of 8 total slices, so you ate 3/8 of the pizza.

**Problem 3**: What is 1/2 of 12 apples?
**Solution**: 1/2 of 12 = 12 ÷ 2 = 6 apples

**Problem 4**: Which is larger: 3/4 or 2/3?
**Solution**: 
- Convert to a common denominator
- 3/4 = 9/12
- 2/3 = 8/12
- So 3/4 is larger than 2/3

**Problem 5**: If 1/4 of the students in a class of 28 are absent, how many students are present?
**Solution**:
- Students absent: 1/4 of 28 = 28 ÷ 4 = 7
- Students present: 28 - 7 = 21 students

## Tips for Working with Fractions 💡

1. Always make sure the parts are equal when dividing
2. Draw pictures to help visualize fractions
3. Use real objects to practice (like cutting an apple or folding paper)
4. Remember that the denominator tells you how many equal parts the whole is divided into
5. To find a fraction of a number, multiply the number by the fraction

## Fun Activities to Try at Home 🏠

1. **Paper Folding**: Fold a paper to show halves, quarters, and eighths
2. **Pizza Fractions**: Draw a circle and divide it into different fractions
3. **Fraction Scavenger Hunt**: Find examples of fractions around your home
4. **Cooking with Fractions**: Help measure ingredients using fraction cups

## Summary 📌

Fractions help us describe parts of a whole. We've learned about:
- What fractions are and how they work
- Important fractions like halves (1/2), quarters (1/4), and thirds (1/3)
- How to represent fractions visually
- Finding equivalent fractions
- Comparing fractions
- Using fractions in everyday life

Remember, fractions are useful tools that help us divide things equally and describe parts of a whole. They're part of our everyday lives, from telling time to cooking to sharing things with friends!
`,
  quiz: {
    questions: [...easyQuestions, ...mediumQuestions]
  }
};
