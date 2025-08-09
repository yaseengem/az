import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl5_ch15_t2',
    topicNumber: 2,
    topicName: "Deductive Reasoning Exercises",
    duration: 45,
    description: "Understanding and applying deductive reasoning to solve mathematical problems",
    explanation: `
# Deductive Reasoning Exercises 🧠

Welcome to the world of deductive reasoning! 🎯 In this topic, we'll learn how to use logical thinking to solve problems step by step. Let's explore how to make smart conclusions from given information! 🚀

## What is Deductive Reasoning? 🤔

Deductive reasoning is:
- Starting with general rules 📜
- Applying them to specific cases 🔍
- Drawing logical conclusions 🎯

Think of it like a detective solving a mystery! 🕵️‍♂️

## Basic Rules of Deductive Reasoning 📝

1. **If-Then Statements**
   - If A is true, then B is true
   - Example: If it's raining, then the ground is wet

2. **All-None Statements**
   - All A are B
   - No A are B
   - Example: All squares are rectangles

3. **Some Statements**
   - Some A are B
   - Example: Some rectangles are squares

## Solving Deductive Reasoning Problems 🧩

### Step 1: Understand the Given Information
- Read carefully
- Identify key facts
- Look for relationships

### Step 2: Look for Patterns
- Find connections between facts
- Identify rules
- Spot similarities

### Step 3: Apply Logic
- Use if-then thinking
- Eliminate impossible options
- Draw conclusions

## Example Problems 📚

### Example 1: Shape Classification
Given:
1. All squares are rectangles
2. All rectangles have four sides
3. This shape is a square

What can we conclude?
- The shape has four sides
- The shape is a rectangle

### Example 2: Number Patterns
Given:
1. All even numbers are divisible by 2
2. 24 is an even number

What can we conclude?
- 24 is divisible by 2

### Example 3: Animal Classification
Given:
1. All mammals have hair
2. Dogs are mammals
3. This animal is a dog

What can we conclude?
- This animal has hair

## Common Types of Deductive Reasoning Problems 🎯

1. **Classification Problems**
   - Sorting items into categories
   - Example: Classifying shapes

2. **Sequence Problems**
   - Finding patterns in numbers or shapes
   - Example: What comes next in the pattern?

3. **Relationship Problems**
   - Understanding how things are connected
   - Example: Family relationships

## Sample Questions ❓

1. Given:
   - All birds have feathers
   - Penguins are birds
   What can we conclude about penguins?
   Answer: Penguins have feathers

2. Given:
   - All multiples of 5 end with 0 or 5
   - 35 is a multiple of 5
   What can we conclude about 35?
   Answer: 35 ends with 5

3. Given:
   - All triangles have three sides
   - This shape has four sides
   What can we conclude about this shape?
   Answer: This shape is not a triangle

## Real-Life Applications 🌍

Deductive reasoning helps us in:
- Solving math problems 📐
- Making decisions 🤔
- Understanding rules 📜
- Solving puzzles 🧩

## Tips for Deductive Reasoning 💡

1. Start with what you know
2. Look for patterns
3. Use elimination
4. Check your conclusions
5. Practice regularly

## Summary ✨

- Deductive reasoning starts with general rules
- It helps us draw specific conclusions
- We use it in math and daily life
- Practice makes perfect! 🎯

Remember: Think carefully, follow the steps, and you'll solve any problem! 🧠
`,

    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 