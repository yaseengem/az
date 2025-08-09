import { TopicContent, TopicQuiz } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl4_ch5_t1',
  topicNumber: 1,
  topicName: "Recognizing 2D and 3D shapes",
  duration: 45,
  description: "Learn to identify and differentiate between 2D and 3D shapes, their properties, and real-world examples.",
  explanation: `
# Recognizing 2D and 3D Shapes 🔷 🧊

Shapes are all around us! From the books we read to the buildings we live in, shapes help us understand and describe the world. In this topic, we'll learn about two main types of shapes: 2D (two-dimensional) and 3D (three-dimensional) shapes. We'll explore their features, how to recognize them, and where we find them in our everyday lives.

## What Are 2D Shapes? 📏

Two-dimensional (2D) shapes are flat shapes that have only length and width, but no thickness. Think of them as shapes you can draw on a piece of paper. Let's look at some common 2D shapes:

### Common 2D Shapes

1. **Circle ⭕**: A perfectly round shape where all points on the edge are the same distance from the center.
   - Examples: coins, clock faces, wheels
   - Properties: Has no sides or corners, just one continuous curved edge

2. **Triangle 🔺**: A shape with three straight sides and three corners.
   - Examples: pizza slices, warning signs, roof tops
   - Properties: Has 3 sides, 3 angles, and 3 vertices (corners)
   - Types of triangles:
     * Equilateral triangle: All sides and angles are equal
     * Isosceles triangle: Two sides and two angles are equal
     * Scalene triangle: No equal sides or angles

3. **Square ⬛**: A shape with four equal sides and four right angles (90° angles).
   - Examples: chess board squares, tiles, windows
   - Properties: Has 4 equal sides, 4 right angles, and 4 vertices

4. **Rectangle ▬**: A shape with four sides and four right angles, where opposite sides are equal.
   - Examples: books, doors, television screens
   - Properties: Has 4 sides (2 pairs of equal sides), 4 right angles, and 4 vertices

5. **Pentagon**: A shape with five straight sides and five corners.
   - Examples: home plate in baseball, certain building designs
   - Properties: Has 5 sides, 5 angles, and 5 vertices

6. **Hexagon**: A shape with six straight sides and six corners.
   - Examples: honeycomb cells, nuts and bolts
   - Properties: Has 6 sides, 6 angles, and 6 vertices

7. **Octagon**: A shape with eight straight sides and eight corners.
   - Examples: stop signs, certain mirrors
   - Properties: Has 8 sides, 8 angles, and 8 vertices

### Properties of 2D Shapes

When we talk about 2D shapes, we look at these key features:

- **Sides**: The straight lines that form the shape
- **Vertices** (corners): Where two sides meet
- **Angles**: The space between two sides that meet
- **Area**: The space inside the shape
- **Perimeter**: The distance around the shape

## What Are 3D Shapes? 📦

Three-dimensional (3D) shapes have length, width, AND height. They take up space and have volume. Unlike 2D shapes that are flat, 3D shapes can be held in your hand. Let's explore some common 3D shapes:

### Common 3D Shapes

1. **Cube 🎲**: A 3D shape with six square faces that are all the same size.
   - Examples: dice, sugar cubes, ice cubes
   - Properties: Has 6 square faces, 12 edges, and 8 vertices

2. **Cuboid (Rectangular Prism) 📦**: A 3D shape with six rectangular faces.
   - Examples: books, boxes, bricks
   - Properties: Has 6 rectangular faces, 12 edges, and 8 vertices

3. **Sphere 🔮**: A perfectly round 3D shape where all points on the surface are the same distance from the center.
   - Examples: ball, globe, marble
   - Properties: Has no faces, edges, or vertices - just one continuous curved surface

4. **Cylinder 🥫**: A 3D shape with two circular faces connected by a curved surface.
   - Examples: cans, pipes, drums
   - Properties: Has 3 faces (2 circular faces and 1 curved surface), 2 edges, and no vertices

5. **Cone 🍦**: A 3D shape with a circular base connected to a point (apex) by a curved surface.
   - Examples: ice cream cones, traffic cones, party hats
   - Properties: Has 2 faces (1 circular face and 1 curved surface), 1 edge, and 1 vertex

6. **Pyramid 🔺**: A 3D shape with a polygon base and triangular faces that meet at a point.
   - Examples: Egyptian pyramids, certain roofs
   - Properties of a square-based pyramid: Has 5 faces (1 square and 4 triangles), 8 edges, and 5 vertices

7. **Prism**: A 3D shape with two identical polygon faces (bases) connected by rectangular faces.
   - Examples: triangular prism (tent shape), hexagonal prism (pencil shape)
   - Properties of a triangular prism: Has 5 faces (2 triangular and 3 rectangular), 9 edges, and 6 vertices

### Properties of 3D Shapes

When we describe 3D shapes, we look at these features:

- **Faces**: The flat or curved surfaces of the shape
- **Edges**: Where two faces meet
- **Vertices**: Where three or more edges meet (corners)
- **Volume**: The space inside the 3D shape
- **Surface area**: The total area of all the faces

## Differences Between 2D and 3D Shapes 🔍

Let's compare 2D and 3D shapes to understand their differences better:

| 2D Shapes | 3D Shapes |
|-----------|-----------|
| Flat shapes | Solid shapes |
| Have only length and width | Have length, width, and height |
| Can be drawn on paper | Can be held in your hand |
| Have area but no volume | Have both area and volume |
| Examples: circle, square, triangle | Examples: sphere, cube, pyramid |

## Real-Life Examples of Shapes 🏠

Shapes are everywhere in our daily lives! Here are some examples:

**2D Shapes in Real Life:**
- Circles: Clock faces, coins, pizza
- Triangles: Warning signs, sandwich slices, musical instruments (triangle)
- Squares: Chess boards, napkins, sticky notes
- Rectangles: Books, television screens, doors
- Octagons: Stop signs

**3D Shapes in Real Life:**
- Cubes: Dice, ice cubes, Rubik's cubes
- Spheres: Balls, globes, marbles
- Cylinders: Cans, pipes, candles
- Cones: Ice cream cones, traffic cones, party hats
- Pyramids: Tents, certain roof designs, monuments
- Cuboids: Books, boxes, bricks

## Identifying Shapes by Their Properties 👀

How can we tell shapes apart? We look at their special features:

**2D Shapes:**
- Count the number of sides and vertices
- Look at the shape's symmetry
- Check if all sides are equal or if some are different
- Examine the angles (right angles, acute angles, obtuse angles)

**3D Shapes:**
- Look at the shape of the faces (Are they circles? Squares? Triangles?)
- Count the number of faces, edges, and vertices
- See if the shape has curved surfaces
- Check if all faces are the same or different

## Fun Activities with Shapes 🎮

Here are some activities you can try to better understand shapes:

1. **Shape Hunt**: Look around your home or classroom and identify different 2D and 3D shapes.

2. **Shape Sorting**: Collect various objects and sort them by their shape (cube, sphere, cylinder, etc.).

3. **Drawing 2D Shapes**: Practice drawing different 2D shapes and label their properties.

4. **Shadow Play**: Use a flashlight to create shadows of 3D objects and observe the 2D shapes that appear.

5. **Building with Shapes**: Use building blocks or clay to create different 3D shapes.

## Sample Questions and Solutions

**Question 1**: How many faces does a cube have?
**Solution**: A cube has 6 faces, all of which are squares of the same size.

**Question 2**: What is the difference between a circle and a sphere?
**Solution**: A circle is a 2D shape that is flat and round, while a sphere is a 3D shape that is round in all directions, like a ball.

**Question 3**: Name three objects in your classroom that are shaped like cylinders.
**Solution**: Pencils, water bottles, and chalk pieces are often cylinder-shaped.

**Question 4**: How many edges does a rectangular prism have?
**Solution**: A rectangular prism has 12 edges where its faces meet.

**Question 5**: What shape is formed when you cut an orange in half?
**Solution**: When you cut an orange in half, you see a circle on the cut surface.

## Summary ✨

In this topic, we've learned:

- 2D shapes are flat shapes with length and width only (circles, triangles, squares, etc.)
- 3D shapes have length, width, and height (cubes, spheres, cylinders, etc.)
- 2D shapes have properties like sides, vertices, angles, area, and perimeter
- 3D shapes have properties like faces, edges, vertices, volume, and surface area
- We can find shapes all around us in everyday objects
- We can identify shapes by looking at their special features

Remember, understanding shapes helps us describe and organize the world around us! Whether you're building a model, designing something, or just exploring your surroundings, knowing about different shapes makes everything more interesting and easier to understand.
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};

export default Topic1Content;