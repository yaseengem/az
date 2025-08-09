import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl5_ch9_t3',
    topicNumber: 3,
    topicName: "Visualizing 3D Objects from 2D Sketches",
    duration: 45,
    description: "Understanding how to interpret and create 2D views of 3D objects",
    explanation: `# Visualizing 3D Objects from 2D Sketches 🎨

Learning to see 3D objects in 2D drawings is like having X-ray vision! 👀 In this topic, we'll learn how to visualize 3D objects from their 2D views and create accurate 2D sketches of 3D objects.

## What are 2D Views? 🤔

2D views show a 3D object from different angles:
- Front view
- Side view
- Top view
- Each view shows different faces of the object

## Types of 2D Views 📊

### 1. Front View 👀
- Shows the front face of the object
- Like looking straight at it
- Example: Front of a house 🏠

### 2. Side View ↔️
- Shows the side face of the object
- Like looking from the side
- Example: Side of a car 🚗

### 3. Top View 🔽
- Shows the object from above
- Like looking down at it
- Example: Top of a table 🪑

## How to Visualize 3D Objects? 🧠

### Step 1: Look at All Views
- Study each view carefully
- Notice the shapes in each view
- See how views connect

### Step 2: Imagine the 3D Shape
- Picture how the views fit together
- Think about the depth
- Visualize the complete object

### Step 3: Check Your Understanding
- Make sure all views match
- Verify the shape makes sense
- Look for any missing parts

## Practice Examples 📝

### Example 1: Simple Cube
Given these views:
\`\`\`
Front: □
Side:  □
Top:   □
\`\`\`
- Solution: A cube

### Example 2: Cylinder
Given these views:
\`\`\`
Front: □
Side:  □
Top:   ○
\`\`\`
- Solution: A cylinder

### Example 3: Complex Shape
Given these views:
\`\`\`
Front: □
Side:  △
Top:   ○
\`\`\`
- Solution: A cone on top of a cube

## Sample Questions ❓

1. What shape has a square front view and a circle top view?
   - Answer: A cylinder

2. If all three views are squares, what is the shape?
   - Answer: A cube

3. What shape has a triangle front view and a circle top view?
   - Answer: A cone

## Real-Life Applications 🌍

Visualizing 3D from 2D is used in:
- Architecture 🏗️
- Engineering 🔧
- Product design 🏭
- Art and drawing 🎨
- Technical drawings 📐

## Tips for Visualization 💡

1. Look at objects from different angles
2. Practice drawing simple shapes
3. Use grid paper for accuracy
4. Start with basic shapes
5. Build up to more complex objects

## Summary ✨

- 2D views show 3D objects from different angles
- Common views are front, side, and top
- Visualizing 3D from 2D takes practice
- Understanding views helps in design and construction
- This skill is useful in many real-world applications

Remember: Practice makes perfect in visualizing 3D objects! 🎯`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 