import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl3_ch5_t1',
  topicNumber: 1,
  topicName: 'Identifying and Drawing Basic Shapes',
  duration: 45,
  description: 'Learn to identify, name, and draw basic shapes like circles, squares, rectangles, and triangles. Explore their properties and real-life examples.',
  explanation: `
# Identifying and Drawing Basic Shapes 🔷🔺⚪

Shapes are everywhere! From the wheels on a car to the windows in your house, we see different shapes all around us. In this topic, you will learn to identify, name, and draw basic shapes. You will also discover their properties and where you can find them in real life. Let’s get started! ✏️

## What is a Shape?
A shape is the form of an object or its outline. Shapes can be flat (2D) or solid (3D). In this topic, we focus on flat shapes, also called plane shapes.

## Common Basic Shapes

### 1. Circle ⚪
- **A circle is round and has no corners or edges.**
- Every point on the circle is at the same distance from the center.
- Examples: Clock face 🕒, coins, wheels 🚗.

### 2. Square ◼️
- **A square has 4 equal sides and 4 corners (right angles).**
- All sides are the same length.
- Examples: Chessboard squares, carrom board, windows.

### 3. Rectangle ▭
- **A rectangle has 4 sides and 4 corners. Opposite sides are equal.**
- Squares are special rectangles with all sides equal.
- Examples: Books 📚, doors 🚪, mobile screens.

### 4. Triangle 🔺
- **A triangle has 3 sides and 3 corners.**
- The sides can be of different lengths.
- Examples: Pizza slice 🍕, road signs, hangers.

### 5. Other Shapes
- **Oval:** Like an egg 🥚, longer than a circle.
- **Rhombus:** Like a diamond 💎, 4 equal sides but not right angles.
- **Pentagon:** 5 sides, like a home plate in baseball.

## Properties of Shapes
- **Sides:** The straight lines that make up a shape.
- **Corners (Vertices):** The points where sides meet.
- **Curved or Straight:** Circles have curved lines, squares and rectangles have straight lines.

## Drawing Shapes
- Use a ruler for straight sides (square, rectangle, triangle).
- Use a compass or round object for circles.
- Count sides and corners to check your shape.

## Shapes in Real Life
- **Circle:** Clock, coin, wheel
- **Square:** Window, chessboard
- **Rectangle:** Book, door
- **Triangle:** Pizza slice, hanger

## Sample Questions
1. How many sides does a triangle have?
2. Which shape has all sides equal and 4 corners?
3. Name a real-life object shaped like a circle.
4. Draw a rectangle and label its sides.
5. Which shape has no corners?

## Short Summary
Shapes are the building blocks of everything we see. By learning to identify and draw them, you can better understand the world around you. Practice drawing and spotting shapes every day! 🌟
`,
quiz: {
  questions: [
    ...easyQuestions,
    ...mediumQuestions
  ]
}
};
