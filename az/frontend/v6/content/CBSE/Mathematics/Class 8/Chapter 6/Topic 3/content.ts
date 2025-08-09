import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

const content: TopicContent = {
  id: 'class8_ch6_topic3',
  topicNumber: 3,
  topicName: 'Applications in volume calculations',
  duration: 45,
  description: 'Learn to apply cube and cube root concepts in volume calculations of three-dimensional objects.',
  explanation: `# Applications of Cubes and Cube Roots in Volume Calculations

## Introduction
One of the most practical applications of cubes and cube roots is in calculating volumes of three-dimensional objects, especially those with cubic shapes. This topic explores how cube and cube root operations help us solve real-world problems involving volume calculations.

## Understanding Volume and Its Relationship with Cubes

### Basic Concept of Volume
Volume is the amount of three-dimensional space occupied by an object. For a cube, volume is calculated using the formula:
Volume of a cube = edge³

Where edge is the length of one side of the cube. This is where the concept of "cube" in mathematics comes from – it's literally raising a number to the power of 3!

### Examples of Volume Calculation
1. **Simple Cube Volume**: 
   - If a cube has an edge of 5 cm, its volume is 5³ = 125 cubic cm.
   - If a cube has an edge of 7 cm, its volume is 7³ = 343 cubic cm.

2. **Finding Edge Length from Volume**:
   - If a cube has a volume of 64 cubic cm, its edge length is ∛64 = 4 cm.
   - If a cube has a volume of 1000 cubic cm, its edge length is ∛1000 = 10 cm.

## Practical Applications

### Water Storage Tanks
Cubic water tanks are common in many places. To find out how much water they can hold:
- A cubic tank with an edge of 2 meters has a volume of 2³ = 8 cubic meters = 8,000 liters of water.
- To design a tank that holds 27,000 liters (27 cubic meters), we would need a cube with edge length ∛27 = 3 meters.

### Package Design
When designing cubic packaging:
- If a cube-shaped box needs to hold 125 cubic cm of material, the box must have an edge of ∛125 = 5 cm.
- If we increase the edge length by 20%, the volume increases by (1.2)³ - 1 = 72.8%.

### Construction and Building Materials
In construction:
- A cubic concrete foundation with volume 8 cubic meters has an edge length of ∛8 = 2 meters.
- To fill a cubic hole with volume 27 cubic meters, we need a cube with edge ∛27 = 3 meters.

## Converting Between Different Shaped Containers

### Cylindrical to Cubic Conversion
Sometimes we need to transfer contents from one shape to another:
- A cylindrical container with radius 7 cm and height 10 cm has volume π × 7² × 10 ≈ 1540 cubic cm.
- To find the edge of a cubic container that holds this same volume: edge = ∛1540 ≈ 11.5 cm.

### Rectangular Prism to Cubic Conversion
Converting from a rectangular box to a cube:
- A box with dimensions 4 cm × 6 cm × 9 cm has volume 216 cubic cm.
- A cube with the same volume would have edge length ∛216 = 6 cm.

## Effect of Scaling on Volume

### Doubling the Edge Length
When we double the edge length of a cube:
- Original: edge = a, volume = a³
- New: edge = 2a, volume = (2a)³ = 8a³
- The volume becomes 8 times larger!

### Halving the Edge Length
When we halve the edge length:
- Original: edge = a, volume = a³
- New: edge = a/2, volume = (a/2)³ = a³/8
- The volume becomes 1/8 of the original.

This relationship is crucial in many fields, from architecture to manufacturing.

## Solving Complex Volume Problems

### Problem 1: Cube Cutting
A large cube of edge 9 cm is cut into smaller cubes of edge 3 cm each.
- Number of small cubes = (9/3)³ = 27 cubes
- Of these, 8 come from corners (with 3 painted faces)
- 12 come from edges (with 2 painted faces)
- 6 come from center of each face (with 1 painted face)
- 1 comes from the center (with 0 painted faces)

### Problem 2: Metal Density
A solid metal cube weighs 216 grams. If another cube of the same metal weighs 1728 grams, what is the ratio of their edges?
- Let's say the edges are a and b.
- Volume ratio = weight ratio (assuming same density)
- a³/b³ = 216/1728 = 1/8
- Taking cube root: a/b = ∛(1/8) = 1/2
- So the ratio of edges is 1:2.

## Applications in Surface Area Calculations

The surface area of a cube is related to its volume:
- Surface area = 6 × edge²
- If we know the volume, we can find edge = ∛volume, then calculate surface area.
- For example, if volume = 27 cubic cm, then edge = 3 cm, and surface area = 6 × 3² = 54 square cm.

## Common Mistakes to Avoid

1. **Not Taking Cube Root Correctly**: Remember that to find the edge length from volume, you need to take the cube root, not divide by 3.

2. **Ignoring Units**: Volume is measured in cubic units (cm³, m³, etc.), while length is in linear units (cm, m, etc.).

3. **Scaling Errors**: When a dimension increases by a factor, the volume increases by that factor cubed.

## Summary

- The volume of a cube is calculated as edge³.
- To find the edge length of a cube when given its volume, take the cube root of the volume.
- When the edge length changes by a factor of n, the volume changes by a factor of n³.
- Applications include water storage, packaging design, and construction.
- We can convert between different container shapes by keeping the volume constant.
- Understanding the relationship between edge length and volume helps solve practical problems in many fields.

By mastering these concepts, you'll be able to solve a wide range of problems involving volume calculations and better understand the three-dimensional world around you.`,
  quiz: {
    questions: [...easyQuestions, ...mediumQuestions]
  }
};

export default content;
