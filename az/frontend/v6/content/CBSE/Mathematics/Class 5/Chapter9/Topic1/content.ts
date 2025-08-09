import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl5_ch9_t1',
    topicNumber: 1,
    topicName: "3D Shapes",
    duration: 45,
    description: "Understanding three-dimensional shapes, their properties, and real-world examples",
    explanation: `
# 3D Shapes 📦

3D shapes are all around us! 🏗️ In this topic, we'll explore different three-dimensional shapes, their properties, and how they appear in our daily lives.

## What are 3D Shapes? 🤔

3D (three-dimensional) shapes have:
- Length
- Width
- Height
- Volume (space inside)
- Faces (flat surfaces)
- Edges (where faces meet)
- Vertices (corners where edges meet)

## Common 3D Shapes 📊

### 1. Cube 🎲
- 6 square faces
- 12 edges
- 8 vertices
- All faces equal
- Example: Dice, Rubik's cube

### 2. Cuboid 📦
- 6 rectangular faces
- 12 edges
- 8 vertices
- Opposite faces equal
- Example: Book, Shoebox

### 3. Sphere ⚽
- Perfectly round
- No edges or vertices
- One curved surface
- Example: Ball, Globe

### 4. Cylinder 🥫
- Two circular faces
- One curved surface
- Example: Can, Pencil

### 5. Cone 🍦
- One circular face
- One curved surface
- One vertex
- Example: Ice cream cone, Traffic cone

## Properties of 3D Shapes 🔍

### Faces
- Flat surfaces of the shape
- Can be squares, rectangles, circles, or triangles
- Example: A cube has 6 square faces

### Edges
- Where two faces meet
- Straight lines
- Example: A cube has 12 edges

### Vertices
- Points where edges meet
- Corners of the shape
- Example: A cube has 8 vertices

## Practice Examples 📝

### Example 1: Counting Faces
How many faces does a cuboid have?
- Solution: 6 faces (all rectangles)

### Example 2: Identifying Vertices
How many vertices does a cube have?
- Solution: 8 vertices (corners)

### Example 3: Real-World Examples
Which 3D shape is a football?
- Solution: Sphere

## Sample Questions ❓

1. How many edges does a cube have?
   - Answer: 12 edges

2. Which shape has one circular face and one vertex?
   - Answer: Cone

3. What shape is a shoebox?
   - Answer: Cuboid

## Real-Life Applications 🌍

3D shapes are used in:
- Building construction 🏠
- Packaging design 📦
- Toy manufacturing 🧸
- Sports equipment ⚽
- Furniture design 🪑

## Tips for Understanding 3D Shapes 💡

1. Look for shapes in everyday objects
2. Count faces, edges, and vertices
3. Compare different shapes
4. Draw nets of 3D shapes
5. Build models using paper or blocks

## Summary ✨

- 3D shapes have length, width, and height
- Common shapes include cubes, cuboids, spheres, cylinders, and cones
- Each shape has specific numbers of faces, edges, and vertices
- 3D shapes are everywhere in our daily lives
- Understanding 3D shapes helps in design and construction

Remember: Look around you - 3D shapes are everywhere! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 