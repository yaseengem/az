import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl5_ch9_t2',
  topicNumber: 2,
  topicName: "Drawing Nets of 3D Shapes",
  duration: 45,
  description: "Understanding and creating nets of three-dimensional shapes",
  explanation: `
# Drawing Nets of 3D Shapes 📐

Have you ever wondered how a 3D shape can be made from a flat piece of paper? That's what nets are all about! A net is like a pattern that, when folded, creates a 3D shape. Let's explore this fascinating concept! 🎲

## What is a Net? 📦

A net is a 2D pattern that can be folded to make a 3D shape. It's like a blueprint that shows all the faces of the shape laid out flat. Think of it as unwrapping a gift box! 🎁

### Common Nets

1. **Cube Net** 🎲
   - 6 square faces
   - 11 different possible arrangements
   - All faces are equal squares

2. **Cuboid Net** 📦
   - 6 rectangular faces
   - Faces can be different sizes
   - Many possible arrangements

3. **Cylinder Net** 🥫
   - 2 circular faces
   - 1 rectangular face
   - Rectangle wraps around the circles

4. **Cone Net** 🍦
   - 1 circular face
   - 1 sector of a circle
   - Sector forms the curved surface

## How to Draw Nets 📏

### Step 1: Understand the Shape
- Count the number of faces
- Identify the shape of each face
- Know how faces connect

### Step 2: Plan the Layout
- Decide how to arrange the faces
- Leave space for tabs
- Consider the folding pattern

### Step 3: Draw the Net
- Use a ruler for straight lines
- Draw faces to correct size
- Add tabs for gluing

### Step 4: Cut and Assemble
- Cut along the edges
- Fold along the lines
- Glue the tabs

## Practice Examples ✏️

### Example 1: Cube Net
- Draw 6 equal squares
- Arrange them in a valid pattern
- Add tabs to connect faces

### Example 2: Cylinder Net
- Draw two circles
- Draw a rectangle connecting them
- The rectangle's length = circumference

### Example 3: Cone Net
- Draw a circle for the base
- Draw a sector for the curved surface
- The sector's radius = slant height

## Sample Questions ❓

1. How many different net arrangements are possible for a cube?
   - Answer: 11 different arrangements

2. What shapes make up a cylinder net?
   - Answer: Two circles and one rectangle

3. What is the purpose of tabs in a net?
   - Answer: To help glue the faces together

## Real-Life Applications 🌍

Nets are used in:
- Packaging design 📦
- Architecture 🏗️
- Craft projects 🎨
- Product design 🎁
- Origami 🦢

## Tips for Drawing Nets 💡

1. **Use the Right Tools**
   - Ruler for straight lines
   - Compass for circles
   - Protractor for angles

2. **Plan Before Drawing**
   - Sketch the layout
   - Measure carefully
   - Leave space for tabs

3. **Check Your Work**
   - Count the faces
   - Verify measurements
   - Test the folding

4. **Be Neat**
   - Draw clear lines
   - Label the parts
   - Keep it organized

## Common Mistakes to Avoid ❌

1. **Wrong Face Count**
   - Missing faces
   - Extra faces
   - Wrong face shapes

2. **Incorrect Measurements**
   - Wrong sizes
   - Uneven faces
   - Mismatched edges

3. **Poor Layout**
   - Faces won't connect
   - Overlapping parts
   - Missing tabs

## Summary ✨

- Nets are 2D patterns for 3D shapes
- Different shapes have different nets
- Planning is important before drawing
- Tabs help in assembly
- Practice makes perfect!

Remember: A well-drawn net makes a perfect 3D shape! Keep practicing and have fun with nets! 🎯
`,

  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
}; 