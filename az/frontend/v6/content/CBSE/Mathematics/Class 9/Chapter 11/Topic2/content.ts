// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter11\Topic2\content.ts
import { QuizQuestion, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl9_ch11_t2',
  topicNumber: 2,
  topicName: "Surface Area of a Sphere",
  duration: 45,
  description: "Understanding the concept of surface area of a sphere and applying the formula to solve related problems",
  explanation: `
# Surface Area of a Sphere 🌐

A sphere is one of the most perfect and symmetrical three-dimensional shapes in geometry. From planets and stars to balls and bubbles, spheres are abundant both in nature and in human-made objects. In this topic, we'll explore how to calculate the surface area of a sphere and apply this knowledge to solve various problems.

## What is a Sphere? 📝

A **sphere** is a perfectly round three-dimensional object where every point on its surface is equidistant from a fixed point called the **center**. The fixed distance from the center to any point on the surface is called the **radius** (r).

Some examples of spherical objects include:
- Planets like Earth 🌍
- Balls used in sports (basketball 🏀, tennis ball 🎾)
- Soap bubbles 🫧
- Fruits like oranges 🍊 and grapefruits

## Understanding Surface Area 🔍

The **surface area** of a sphere represents the total area covering its outer shell or skin. Imagine wrapping a sphere completely with paper – the amount of paper needed would equal the sphere's surface area.

## Formula for the Surface Area of a Sphere 📊

The surface area (SA) of a sphere is given by the formula:

**Surface Area = 4πr²**

Where:
- r is the radius of the sphere
- π (pi) is approximately 3.14 or 22/7

This elegant formula was first discovered by the ancient Greek mathematician Archimedes, who showed that the surface area of a sphere is exactly four times the area of its great circle (the circle that passes through the center of the sphere).

### Example 1: 🔢
Find the surface area of a sphere with a radius of 5 cm.

Solution:
Surface Area = 4πr² = 4π × 5² = 4π × 25 = 100π cm² ≈ 314 cm²

## Relationship Between Diameter and Surface Area 📏

The **diameter** (d) of a sphere is twice its radius: d = 2r.

If we know the diameter instead of the radius, we can calculate the surface area using:

**Surface Area = πd²**

This formula comes from substituting r = d/2 into the original formula:
Surface Area = 4π(d/2)² = 4π × d²/4 = πd²

### Example 2: 🧮
Calculate the surface area of a sphere with a diameter of 14 cm.

Solution:
Surface Area = πd² = π × 14² = π × 196 = 196π cm² ≈ 615.44 cm²

## How Surface Area Changes with Radius 📈

The surface area of a sphere is proportional to the square of its radius (r²). This means that if the radius changes, the surface area changes by the square of that factor:

- If the radius doubles (×2), the surface area quadruples (×4)
- If the radius triples (×3), the surface area increases nine times (×9)
- If the radius is halved (÷2), the surface area becomes one-fourth (÷4)

### Example 3: 📊
If the radius of a sphere increases from 3 cm to 6 cm, how does its surface area change?

Solution:
Original surface area = 4π × 3² = 36π cm²
New surface area = 4π × 6² = 144π cm²
The surface area increases by a factor of 144π/36π = 4 times

## Hemispheres and Their Surface Areas 🌓

A **hemisphere** is half of a sphere, cut by a plane passing through its center. The surface area of a hemisphere consists of:
1. The curved surface (half of a full sphere's surface)
2. The flat circular base

- Curved surface area of hemisphere = 2πr²
- Area of the circular base = πr²
- Total surface area of hemisphere = 2πr² + πr² = 3πr²

### Example 4: 📐
Find the total surface area of a hemisphere with radius 7 cm.

Solution:
Total surface area = 3πr² = 3π × 7² = 3π × 49 = 147π cm² ≈ 461.58 cm²

## Applications and Real-World Problems 🌍

### Finding the Amount of Material Needed

#### Example 5: 🏀
A basketball has a diameter of 24 cm. How much leather is needed to cover the ball?

Solution:
Radius = 24/2 = 12 cm
Surface area = 4πr² = 4π × 12² = 4π × 144 = 576π cm² ≈ 1,809.56 cm²

### Painting or Coating Spherical Objects

#### Example 6: 🎨
A spherical water tank with radius 2.5 m needs to be painted. If 1 liter of paint covers 10 m², how much paint is needed?

Solution:
Surface area = 4πr² = 4π × 2.5² = 4π × 6.25 = 25π m² ≈ 78.54 m²
Paint needed = 78.54 ÷ 10 = 7.854 liters ≈ 7.9 liters

### Comparing Surface Areas

#### Example 7: 📊
Two spheres have radii in the ratio 2:5. What is the ratio of their surface areas?

Solution:
Ratio of surface areas = 4πr₁²:4πr₂² = r₁²:r₂² = 2²:5² = 4:25

## Special Cases and Relationships 🧩

### Surface Area to Volume Ratio

The **surface area to volume ratio** of a sphere is an important concept in many scientific fields:

Surface area to volume ratio = 4πr²/(4πr³/3) = 3/r

This ratio decreases as the radius increases, which has important implications in biology, chemistry, and physics.

### Equal Surface Areas

When comparing different shapes with equal surface areas, spheres enclose the maximum volume. This property makes spheres efficient containers and explains why bubbles form spherical shapes.

## Common Mistakes to Avoid ⚠️

1. **Confusing radius and diameter**: Always check whether a problem gives you the radius or the diameter.

2. **Forgetting to square the radius**: The surface area formula uses r², not r.

3. **Using incorrect units**: Make sure your answer has square units (cm², m², etc.) since surface area is measured in square units.

4. **Mixing up formulas**: Don't confuse the surface area formula (4πr²) with the volume formula (4πr³/3).

5. **Incorrect calculations for hemispheres**: Remember that a hemisphere's total surface area includes both the curved surface and the circular base.

## Sample Questions and Solutions ✍️

1. **Question**: A sphere has a surface area of 100π cm². What is its radius?
   
   **Solution**: 
   4πr² = 100π
   r² = 100π / 4π = 25
   r = 5 cm

2. **Question**: If the radius of a spherical balloon increases from 7 cm to 14 cm, by what factor does its surface area increase?
   
   **Solution**:
   The ratio of the new radius to the original radius is 14/7 = 2.
   Surface area increases by a factor of 2² = 4.

3. **Question**: A hollow spherical shell has an external diameter of 10 cm and thickness 0.5 cm. Find the external surface area and internal surface area.
   
   **Solution**:
   External radius = 5 cm
   Internal radius = 5 - 0.5 = 4.5 cm
   External surface area = 4π × 5² = 100π cm²
   Internal surface area = 4π × 4.5² = 81π cm²

4. **Question**: A hemispherical bowl has an inner radius of 15 cm. Find the cost of silver plating its inner surface at the rate of ₹2 per cm².
   
   **Solution**:
   Inner surface area = 2πr² = 2π × 15² = 450π cm²
   Cost = 450π × 2 = 900π ≈ ₹2,827.43

## Practical Applications of Spherical Surface Areas 🔍

1. **Architecture and Design**: Domes and spherical structures in buildings

2. **Sports Equipment**: Manufacturing balls for various sports

3. **Astronomy**: Calculating surface areas of planets and stars

4. **Engineering**: Designing tanks, pressure vessels, and containers

5. **Medicine**: Drug delivery systems and cell biology (surface area to volume ratios)

## Summary ✨

- A sphere is a perfectly round three-dimensional object where all points on the surface are equidistant from the center.

- The surface area of a sphere is calculated using the formula 4πr², where r is the radius.

- If the radius changes by a factor k, the surface area changes by a factor k².

- For a hemisphere, the total surface area is 3πr², which includes both the curved surface (2πr²) and the flat circular base (πr²).

- The surface area formula for a sphere has numerous applications in science, engineering, and everyday life.

Understanding how to calculate the surface area of a sphere enables us to solve a wide range of practical problems. Whether you're designing a spherical structure, calculating material needs, or analyzing scientific phenomena, this formula provides a powerful mathematical tool! 🌟

### Additional Practice Problems:

1. **Problem**: If the surface area of a sphere is 256π cm², what is its diameter?
2. **Problem**: A sphere with radius 6 cm is melted and recast into smaller spheres each of radius 2 cm. How many such spheres can be made?
3. **Problem**: The surface areas of two spheres are in the ratio 9:16. Find the ratio of their volumes.
4. **Problem**: A spherical soap bubble is expanding. If its radius increases at a rate of 0.5 cm per second, at what rate is its surface area increasing when the radius is 4 cm?

These concepts and formulas for the surface area of a sphere provide a strong foundation for understanding three-dimensional geometry and will be useful as we explore the volume of spheres in a later topic! 🚀
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
