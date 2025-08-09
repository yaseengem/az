import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl10_ch13_t1',
  topicNumber: 1,
  topicName: "Surface areas and volumes of cubes, cuboids, spheres, cylinders, cones",
  duration: 45,
  description: "Understanding and calculating the surface area and volume of common 3D shapes including cubes, cuboids, spheres, cylinders, and cones.",
  explanation: `
# Surface Areas and Volumes of 3D Shapes 🧊

Three-dimensional shapes are all around us! From buildings and furniture to toys and sporting equipment, understanding how to calculate their surface areas and volumes is a valuable mathematical skill with practical applications. Let's explore these important concepts! 🔍

## Introduction to Surface Area and Volume 🌟

Before we dive into specific shapes, let's understand what surface area and volume mean:

- **Surface Area**: The total area of all the surfaces of a 3D object, measured in square units (like cm², m², etc.)
- **Volume**: The amount of space occupied by a 3D object, measured in cubic units (like cm³, m³, etc.)

Let's explore these concepts for different 3D shapes:

## 1. Cube 🎲

A cube is a 3D shape with 6 equal square faces.

### Properties:
- All edges are equal in length
- All faces are squares of equal size
- All vertices (corners) meet at right angles

### Key Formulas:
- **Edge length**: a
- **Surface Area**: 6a² (Six equal square faces)
- **Volume**: a³

### Example:
A cube has edge length 5 cm.
- Surface Area = 6 × 5² = 6 × 25 = 150 cm²
- Volume = 5³ = 125 cm³

### Application:
If you need to wrap a gift box shaped like a cube with side 12 cm, you would need 6 × 12² = 864 cm² of wrapping paper.

## 2. Cuboid (Rectangular Prism) 📦

A cuboid is a 3D shape with 6 rectangular faces.

### Properties:
- Has three dimensions: length (l), breadth (b), and height (h)
- All angles are right angles
- Opposite faces are equal

### Key Formulas:
- **Surface Area**: 2(lb + lh + bh)
- **Volume**: l × b × h
- **Diagonal**: √(l² + b² + h²)

### Example:
A cuboid has dimensions 4 cm × 3 cm × 5 cm.
- Surface Area = 2(4×3 + 4×5 + 3×5) = 2(12 + 20 + 15) = 2(47) = 94 cm²
- Volume = 4 × 3 × 5 = 60 cm³
- Diagonal = √(4² + 3² + 5²) = √(16 + 9 + 25) = √50 = 7.07 cm

### Application:
A water tank is 2 m long, 1.5 m wide, and 1 m high. It can hold 2 × 1.5 × 1 = 3 m³ or 3,000 liters of water.

## 3. Sphere 🔵

A sphere is a perfectly round 3D object where all points on its surface are equidistant from the center.

### Properties:
- Defined by its radius (r)
- Perfectly symmetrical in all directions
- Has no edges or vertices

### Key Formulas:
- **Surface Area**: 4πr²
- **Volume**: 4/3πr³

### Example:
A sphere has radius 7 cm.
- Surface Area = 4π × 7² = 4π × 49 = 196π ≈ 615.75 cm²
- Volume = 4/3π × 7³ = 4/3π × 343 = 1,436.03 cm³

### Application:
The Earth is approximately spherical with a radius of about 6,371 km. Its surface area is approximately 4π × 6,371² = 510 million km².

## 4. Hemisphere 🥣

A hemisphere is half of a sphere, cut by a plane passing through its center.

### Properties:
- Half of a sphere
- Has a circular base plus a curved surface

### Key Formulas:
- **Curved Surface Area**: 2πr²
- **Total Surface Area**: 3πr² (curved + circular base)
- **Volume**: 2/3πr³

### Example:
A hemisphere has radius 6 cm.
- Curved Surface Area = 2π × 6² = 2π × 36 = 72π ≈ 226.19 cm²
- Total Surface Area = 3π × 6² = 3π × 36 = 108π ≈ 339.29 cm²
- Volume = 2/3π × 6³ = 2/3π × 216 = 144π ≈ 452.39 cm³

### Application:
A hemispherical dome with radius 10 m would have a volume of 2/3π × 1,000 = 2,094 m³.

## 5. Cylinder 🥤

A cylinder has two parallel circular bases connected by a curved rectangle.

### Properties:
- Defined by radius of circular base (r) and height (h)
- Circular bases are parallel and congruent

### Key Formulas:
- **Curved Surface Area**: 2πrh
- **Total Surface Area**: 2πr(r + h) = 2πrh + 2πr²
- **Volume**: πr²h

### Example:
A cylinder has radius 5 cm and height 10 cm.
- Curved Surface Area = 2π × 5 × 10 = 100π ≈ 314.16 cm²
- Total Surface Area = 2π × 5(5 + 10) = 2π × 5 × 15 = 150π ≈ 471.24 cm²
- Volume = π × 5² × 10 = π × 25 × 10 = 250π ≈ 785.40 cm³

### Application:
A cylindrical water tank with diameter 2 m and height 3 m can store π × 1² × 3 = 9.42 m³ or about 9,420 liters of water.

## 6. Cone 🧁

A cone has a circular base connected to a single vertex (apex) by a curved surface.

### Properties:
- Defined by radius of circular base (r) and height (h)
- Slant height (l): the distance from any point on the circle to the apex
- Relationship: l = √(r² + h²)

### Key Formulas:
- **Curved Surface Area**: πrl = πr√(r² + h²)
- **Total Surface Area**: πr(r + l) = πr² + πrl
- **Volume**: 1/3πr²h

### Example:
A cone has radius 6 cm and height 8 cm.
- Slant height (l) = √(6² + 8²) = √(36 + 64) = √100 = 10 cm
- Curved Surface Area = π × 6 × 10 = 60π ≈ 188.5 cm²
- Total Surface Area = π × 6(6 + 10) = π × 6 × 16 = 96π ≈ 301.59 cm²
- Volume = 1/3π × 6² × 8 = 1/3π × 36 × 8 = 96π ≈ 301.59 cm³

### Application:
An ice cream cone with radius 2 cm and height 10 cm can hold 1/3π × 4 × 10 = 41.89 cm³ of ice cream.

## Important Relationships and Comparisons 🔍

1. **Volume Relationships**:
   - A cone has 1/3 the volume of a cylinder with the same base and height.
   - A hemisphere has 2/3 the volume of a cylinder with the same base and height.
   - Ratio of volumes (same base and height): Cone : Hemisphere : Cylinder = 1 : 2 : 3

2. **Effect of Scaling**:
   - If all dimensions are doubled:
     - Surface area increases by a factor of 4 (2²)
     - Volume increases by a factor of 8 (2³)
   - If radius/side length is halved:
     - Surface area decreases to 1/4 of original
     - Volume decreases to 1/8 of original

## Practical Applications 🔧

1. **Construction**: Calculating material needed for buildings, pipes, tanks.
2. **Manufacturing**: Determining material requirements for products.
3. **Packaging**: Designing efficient containers for shipping and storage.
4. **Engineering**: Creating structures like domes, tunnels, and vessels.
5. **Cooking**: Following recipes that specify volume measurements.

## Problem-Solving Techniques 📝

1. **Identify the shape** and relevant dimensions.
2. **Draw a diagram** if needed.
3. **Choose the appropriate formula** based on what you need to find.
4. **Substitute values** and calculate carefully.
5. **Check your answer** - does it have the correct units and make logical sense?

## Common Transformations 🔄

1. **Converting between shapes**: When a shape is transformed into another, volume is conserved.
   
   Example: A sphere of radius R is melted and recast as a cylinder with radius r and height h. If r = R/2, what is h?
   
   Solution: 4/3πR³ = πr²h = π(R/2)²h = πR²h/4
   Therefore, h = (4/3πR³)/(πR²/4) = (4/3)×4×R = 16R/3

2. **Dealing with hollow shapes**: Calculate the difference between outer and inner volumes.
   
   Example: A hollow sphere has outer radius 10 cm and inner radius 8 cm. Find its volume.
   
   Solution: Volume = 4/3π(10³ - 8³) = 4/3π(1000 - 512) = 4/3π×488 = 2,043.3 cm³

## Sample Questions and Solutions

### Question 1: 
A hemispherical bowl of internal radius 15 cm is full of water. This water is poured into a cylindrical vessel with radius 7.5 cm. Find the height of water in the cylindrical vessel.

**Solution**:
Volume of hemisphere = 2/3πr₁³ = 2/3π×15³ = 2/3π×3,375 = 2,250π cm³
Volume of cylinder = πr₂²h = π×7.5²×h = π×56.25×h = 56.25πh cm³

Equating volumes: 2,250π = 56.25πh
Therefore, h = 2,250/56.25 = 40 cm

### Question 2:
A solid is in the form of a right circular cone mounted on a hemisphere. The radius of the base of the cone is 7 cm which is equal to the radius of the hemisphere. If the height of the cone is 24 cm, find the volume of the solid.

**Solution**:
Volume of cone = 1/3πr²h = 1/3π×7²×24 = 1/3π×49×24 = 392π cm³
Volume of hemisphere = 2/3πr³ = 2/3π×7³ = 2/3π×343 = 228.67π cm³
Total volume = 392π + 228.67π = 620.67π ≈ 1,950.9 cm³

## Summary ✨

- **Cube**: Surface Area = 6a², Volume = a³
- **Cuboid**: Surface Area = 2(lb + lh + bh), Volume = lbh
- **Sphere**: Surface Area = 4πr², Volume = 4/3πr³
- **Hemisphere**: Total Surface Area = 3πr², Volume = 2/3πr³
- **Cylinder**: Total Surface Area = 2πr(r + h), Volume = πr²h
- **Cone**: Total Surface Area = πr(r + l), Volume = 1/3πr²h

Understanding surface area and volume is not just about memorizing formulas—it's about visualizing three-dimensional space and solving real-world problems. Whether you're designing a swimming pool, building a storage container, or calculating how much ice cream fits in a cone, these mathematical tools are indispensable! 🌟

### Additional Practice Questions:

1. A cube and a sphere have the same volume. If the edge of the cube is 10 cm, find the radius of the sphere.
2. A cylindrical container with radius 6 cm and height 15 cm is filled with water. If this water is poured into empty cubic boxes with side 3 cm, how many boxes can be completely filled?
3. A solid metallic sphere of radius 10 cm is melted and drawn into a wire of uniform thickness. If the length of the wire is 550 m, find its radius.
4. If the surface area of a cube is 96 cm², find its volume.
5. A right circular cylinder and a right circular cone have the same radius and same volume. If the radius is 3 cm, and the height of the cone is 9 cm, find the height of the cylinder.
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
