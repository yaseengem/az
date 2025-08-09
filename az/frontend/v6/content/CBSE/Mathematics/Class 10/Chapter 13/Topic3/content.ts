import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
  id: 'cl10_ch13_t3',
  topicNumber: 3,
  topicName: "Combination of solids",
  duration: 45,
  description: "Understanding how to find surface area and volume of composite solids formed by combining basic 3D shapes like cubes, cylinders, cones, and spheres",
  explanation: `
# Combination of Solids 🔢

When we encounter objects in our daily lives, they rarely exist as perfect individual geometric shapes. Instead, many are combinations of two or more basic solids joined together. In this topic, we'll explore how to calculate the surface area and volume of composite solids formed by combining basic three-dimensional shapes such as cubes, cuboids, cylinders, cones, and spheres. 🧩

## Understanding Composite Solids 🤔

A composite solid (or combined solid) is a three-dimensional object formed by joining two or more basic solids. When dealing with composite solids, we need to understand:

1. How the component solids are attached
2. What parts of the original solids are retained or removed
3. How to apply formulas for surface area and volume appropriately

Let's discuss the key principles for working with combination of solids:

## Key Principles for Calculating Volume 📏

The volume of a composite solid follows an important principle:
- **Volume Principle**: The volume of a composite solid equals the sum of the volumes of its component parts.
- **Volume Removal**: If one solid is removed from another, subtract the volume of the removed part from the original solid.

For example, if a cylinder and cone of the same base radius are combined:
- Volume of composite solid = Volume of cylinder + Volume of cone
- Volume = πr²h₁ + (1/3)πr²h₂

## Key Principles for Calculating Surface Area 📐

Calculating the surface area requires careful consideration:
- **Surface Area Principle**: The surface area of a composite solid equals the sum of all exposed surface areas.
- **Common Surfaces**: When solids share a common face/surface, that area is not included in the total surface area calculation.

For example, if a hemisphere is placed on top of a cylinder:
- Surface Area = Curved surface area of hemisphere + Curved surface area of cylinder + Base area of cylinder
- Surface Area = 2πr² + 2πrh + πr²

## Common Combinations of Solids 🧱

Let's explore some frequently encountered combinations of solids and how to calculate their measurements:

### 1. Hemisphere on a Cylinder 🥣

This shape resembles a bowl on a pedestal or certain types of trophies.

**Volume**: V = Volume of cylinder + Volume of hemisphere
V = πr²h + (2/3)πr³

**Surface Area**: S = Curved surface area of hemisphere + Curved surface area of cylinder + Base area of cylinder
S = 2πr² + 2πrh + πr²
S = 3πr² + 2πrh

**Example**: A decorative bowl is shaped like a hemisphere of radius 7 cm mounted on a cylindrical base of the same radius and height 14 cm. 
- Total volume = π(7)²(14) + (2/3)π(7)³ = 686π + 228.67π = 914.67π cm³
- Total surface area = 3π(7)² + 2π(7)(14) = 147π + 196π = 343π cm²

### 2. Cylinder with Hemispherical Ends 🏊‍♂️

This shape resembles a capsule or swimming pool and is common in pill-shaped objects.

**Volume**: V = Volume of cylinder + Volume of two hemispheres
V = πr²h + (4/3)πr³

**Surface Area**: S = Curved surface area of cylinder + Surface area of two hemispheres
S = 2πrh + 4πr²

**Example**: A capsule-shaped container consists of a cylinder with hemispherical ends, each of radius 3.5 cm. If the cylindrical part is 10.5 cm long, find:
- Total volume = π(3.5)²(10.5) + (4/3)π(3.5)³ = 128.19π + 57.17π = 185.36π cm³
- Total surface area = 2π(3.5)(10.5) + 4π(3.5)² = 73.5π + 49π = 122.5π cm²

### 3. Cone Mounted on a Cylinder 🎪

This shape resembles a circus tent or certain types of lamps.

**Volume**: V = Volume of cylinder + Volume of cone
V = πr²h₁ + (1/3)πr²h₂

**Surface Area**: S = Curved surface area of cylinder + Curved surface area of cone + Base area of cylinder
S = 2πrh₁ + πrl + πr²

Where l = √(r² + h₂²) is the slant height of the cone.

**Example**: A tent is in the form of a cylinder surmounted by a cone. If the radius of the base is 7 m, the height of the cylindrical portion is 8 m, and the slant height of the conical portion is 10 m, find:
- Total volume = π(7)²(8) + (1/3)π(7)²(√(10² - 7²)) = 392π + 110.25π = 502.25π m³
- Total surface area = 2π(7)(8) + π(7)(10) + π(7)² = 112π + 70π + 49π = 231π m²

### 4. Cylinder with a Hole 🕳️

This shape occurs when a cylindrical hole is drilled through another solid.

**Volume**: V = Volume of original solid - Volume of removed cylinder
V = Original volume - πr²h

**Surface Area**: S = Original surface area - Area of removed circular faces + Curved surface area of the hole
S = Original surface area - 2πr² + 2πrh

**Example**: A cylindrical hole of radius 3.5 cm is drilled completely through a wooden cube with an edge of 14 cm. The axis of the hole passes through the centers of two opposite faces of the cube. Find:
- Volume of remaining solid = 14³ - π(3.5)²(14) = 2744 - 538.72π cm³
- Surface area of new solid = 6(14)² - 2π(3.5)² + 2π(3.5)(14) = 1176 - 38.5π + 98π = 1176 + 59.5π cm²

### 5. Hemisphere and Cone Combined 🎯

This shape can resemble certain types of toys or decorative items.

**Volume**: V = Volume of hemisphere + Volume of cone
V = (2/3)πr³ + (1/3)πr²h

**Surface Area**: S = Curved surface area of hemisphere + Curved surface area of cone
S = 2πr² + πrl

Where l = √(r² + h²) is the slant height of the cone.

**Example**: A toy is in the shape of a hemisphere surmounted by a right circular cone of the same radius. If the radius is 3.5 cm and the height of the cone is 12 cm, find:
- Total volume = (2/3)π(3.5)³ + (1/3)π(3.5)²(12) = 28.58π + 49π = 77.58π cm³
- Total surface area = 2π(3.5)² + π(3.5)(√(3.5² + 12²)) = 24.5π + 44.27π = 68.77π cm²

## Practical Methods for Solving Problems 🛠️

When solving problems involving combinations of solids, follow these steps:

1. **Identify the Component Shapes**: Determine which basic solids make up the composite shape.

2. **Check for Common Surfaces**: Identify which surfaces are shared between components and will not contribute to the total surface area.

3. **Apply the Appropriate Formulas**: Use the volume and surface area formulas for each component, accounting for any shared surfaces.

4. **Solve Step-by-Step**: Work through the calculation methodically, combining the components according to the principles we've discussed.

Let's illustrate this with an example:

**Problem**: A decorative paperweight is made by placing a cone on top of a hemisphere. Both have the same radius of 7 cm, and the height of the cone is 24 cm. Find the volume and total surface area of the paperweight.

**Solution**:
1. Identify components: Hemisphere and cone with the same base radius.
2. Volume calculation:
   - Volume of hemisphere = (2/3)πr³ = (2/3)π(7)³ = 228.67π cm³
   - Volume of cone = (1/3)πr²h = (1/3)π(7)²(24) = 392π cm³
   - Total volume = 228.67π + 392π = 620.67π cm³

3. Surface area calculation:
   - Surface area of hemisphere = 2πr² = 2π(7)² = 98π cm²
   - Surface area of cone = πrl = π(7)(√(7² + 24²)) = π(7)(25) = 175π cm²
   - Total surface area = 98π + 175π = 273π cm²

## Special Cases and Techniques 🔍

### Hollow Objects

For hollow objects, we calculate:
- Volume = Outer volume - Inner volume
- Surface area = Outer surface area + Inner surface area (visible surfaces only)

**Example**: A hollow spherical shell has an outer radius of 10 cm and inner radius of 7 cm. Find its volume and surface area.
- Volume = (4/3)π(10³ - 7³) = (4/3)π(1000 - 343) = (4/3)π(657) = 876π cm³
- Surface area = 4πR² + 4πr² = 4π(10)² + 4π(7)² = 400π + 196π = 596π cm²

### Objects with Removed Portions

When a portion of a solid is removed, we must:
- Volume = Original volume - Volume of removed portion
- Surface area = Original surface area - Area of removed surface + Area of newly created surface

**Example**: A hemispherical depression of radius 3.5 cm is cut out from a wooden cube of edge 10.5 cm. Find the volume and surface area of the remaining solid.
- Volume = 10.5³ - (2/3)π(3.5)³ = 1157.625 - 28.58π cm³
- Surface area = 6(10.5)² - π(3.5)² + 2π(3.5)² = 661.5 - 12.25π + 24.5π = 661.5 + 12.25π cm²

## Real-Life Applications 🌍

Understanding combined solids has numerous practical applications:

1. **Architecture**: Calculating materials needed for complex building structures
2. **Manufacturing**: Determining the amount of material required for producing composite objects
3. **Engineering**: Designing containers, vessels, and mechanical parts
4. **Packaging**: Creating efficient packaging for products with irregular shapes
5. **Storage**: Calculating the capacity of tanks and containers with complex geometries

## Sample Questions and Solutions 📝

**Question 1**: A toy rocket is made by placing a cone on top of a cylinder. The height of the cone is 7 cm, the height of the cylinder is 14 cm, and both have the same base radius of 3.5 cm. Find the total surface area and volume of the rocket.

**Solution**:
- Volume = πr²h₁ + (1/3)πr²h₂ = π(3.5)²(14) + (1/3)π(3.5)²(7) = 171.5π + 28.58π = 200.08π cm³
- Surface area = 2πrh₁ + πrl + πr² = 2π(3.5)(14) + π(3.5)(√(3.5² + 7²)) + π(3.5)² = 98π + 28.32π + 12.25π = 138.57π cm²

**Question 2**: A decorative ice cream scoop consists of a half cone surmounted by a hemisphere. If the radius of both shapes is 3.5 cm and the height of the half cone is 4.2 cm, find the total volume.

**Solution**:
- Volume = (2/3)πr³ + (1/6)πr²h = (2/3)π(3.5)³ + (1/6)π(3.5)²(4.2) = 28.58π + 8.58π = 37.16π cm³

## Summary ✨

In this topic, we've explored how to calculate the surface area and volume of composite solids. Here are the key takeaways:

1. Composite solids are formed by combining two or more basic solids.
2. The volume of a composite solid is the sum of the volumes of its component parts (or difference, if parts are removed).
3. When calculating surface area, we only include exposed surfaces, not shared surfaces between components.
4. Common combinations include hemisphere on cylinder, cylinder with hemispherical ends, cone on cylinder, and solids with holes or depressions.
5. The step-by-step approach involves identifying components, checking for shared surfaces, and applying appropriate formulas.

Mastering these concepts will help you solve problems involving complex shapes in mathematics and real-world applications like engineering, architecture, and design. Remember to carefully identify which surfaces are exposed and which are shared when calculating surface area, and always apply the appropriate formulas for each component solid when finding volumes. 📐🧮

Practice applying these principles with various combinations of solids to strengthen your understanding of three-dimensional geometry and its applications! 🌟
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
