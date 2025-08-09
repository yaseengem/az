// Topic 2: 3D shapes (cubes, cuboids, spheres)
// content.ts will be created here for the topic.

import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl6_ch5_t2',
  topicNumber: 2,
  topicName: "3D Shapes",
  duration: 45,
  description: "Understanding three-dimensional shapes, their properties, and real-world applications",
  explanation: `
# Understanding 3D Shapes 🌟

Three-dimensional shapes are all around us! From the boxes we pack our lunch in to the balls we play with, 3D shapes make up our world. Let's explore these fascinating shapes and understand their properties! 🚀

## What are 3D Shapes? 📦

3D shapes, or three-dimensional shapes, are solid objects that have three dimensions: length, width, and height. Unlike 2D shapes that are flat, 3D shapes have depth and can be held in your hands. They occupy space and have volume.

## Common 3D Shapes and Their Properties 🔍

### Cube 🎲
- **Definition**: A cube is a solid shape with six square faces, all equal in size.
- **Properties**:
  * 6 faces (all squares)
  * 12 edges (all equal in length)
  * 8 vertices (corners)
  * All angles are right angles (90°)
- **Examples**: Dice, Rubik's cube, sugar cubes
- **Sample Question**: If each edge of a cube is 2 cm long, what is the total length of all its edges? (Answer: 24 cm, because 12 edges × 2 cm = 24 cm)

### Cuboid 📦
- **Definition**: A cuboid is a box-shaped solid with six rectangular faces.
- **Properties**:
  * 6 faces (all rectangles)
  * 12 edges
  * 8 vertices
  * All angles are right angles
- **Examples**: Books, bricks, matchboxes
- **Sample Question**: A cuboid has dimensions 3 cm × 4 cm × 5 cm. How many faces does it have? (Answer: 6 faces)

### Sphere ⚽
- **Definition**: A perfectly round 3D shape, like a ball.
- **Properties**:
  * 1 curved surface
  * No edges or vertices
  * All points on the surface are equidistant from the center
- **Examples**: Basketball, globe, marbles
- **Sample Question**: What shape is a football? (Answer: Sphere)

### Cylinder 🥫
- **Definition**: A tube-shaped solid with two circular bases.
- **Properties**:
  * 2 circular faces (bases)
  * 1 curved surface
  * No vertices
  * 2 edges (where the curved surface meets the bases)
- **Examples**: Cans, pipes, candles
- **Sample Question**: How many flat faces does a cylinder have? (Answer: 2 circular faces)

### Cone 🍦
- **Definition**: A solid with a circular base and a pointed top.
- **Properties**:
  * 1 circular face (base)
  * 1 curved surface
  * 1 vertex (the point)
  * 1 edge (where the curved surface meets the base)
- **Examples**: Ice cream cone, party hat, traffic cone
- **Sample Question**: What is the shape of a birthday party hat? (Answer: Cone)

## Faces, Edges, and Vertices 📊

Understanding these terms is crucial for working with 3D shapes:

- **Face**: A flat surface of a 3D shape
- **Edge**: A line where two faces meet
- **Vertex**: A corner where edges meet

Let's practice counting these elements:
1. Cube: 6 faces, 12 edges, 8 vertices
2. Cuboid: 6 faces, 12 edges, 8 vertices
3. Sphere: 1 face, 0 edges, 0 vertices
4. Cylinder: 3 faces, 2 edges, 0 vertices
5. Cone: 2 faces, 1 edge, 1 vertex

## Real-World Applications 🌍

3D shapes are everywhere in our daily lives:
- **Architecture**: Buildings use various 3D shapes
- **Packaging**: Boxes and containers are usually cuboids or cylinders
- **Sports**: Balls are spheres, some equipment uses cylinders
- **Food**: Many food items come in 3D shapes (ice cream cones, cans, etc.)

## Visualizing 3D Shapes 🎨

To better understand 3D shapes, we can:
1. Look at their nets (2D patterns that can be folded to make the 3D shape)
2. Count their faces, edges, and vertices
3. Compare different shapes to see their similarities and differences

## Practice Questions 📝

1. How many edges does a cube have?
2. What shape has only one curved surface and no edges?
3. If you have a box that is 2 cm × 3 cm × 4 cm, what shape is it?
4. How many vertices does a cone have?
5. What shape has two circular faces and one curved surface?

## Summary ✨

In this topic, we've learned about:
- Different types of 3D shapes (cube, cuboid, sphere, cylinder, cone)
- Their properties (faces, edges, vertices)
- Real-world examples
- How to identify and describe 3D shapes

Understanding 3D shapes helps us make sense of the world around us and is essential for many practical applications in daily life.

### Additional Examples and Sample Questions:
1. **Example**: A dice is a cube. It has 6 faces, each with dots from 1 to 6.
2. **Example**: A can of soda is a cylinder. It has two circular faces and one curved surface.
3. **Question**: What shape has 6 faces, all squares, and 12 edges? (Answer: Cube)
4. **Question**: If you have a ball, how many edges does it have? (Answer: 0, because a sphere has no edges)
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
