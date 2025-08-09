import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl10_ch13_t2',
  topicNumber: 2,
  topicName: "Combination of solids",
  duration: 45,
  description: "Study of geometric shapes formed by combining different 3D solids, calculating their surface areas and volumes",
  explanation: `
# Combination of Solids 🧩

When we combine multiple three-dimensional shapes to create a new solid, we need to understand how to calculate the properties of these composite solids. This topic explores how to determine the surface area and volume of solids formed by combining basic shapes such as spheres, cylinders, cones, and cuboids. Let's dive into this fascinating aspect of 3D geometry! 🚀

## Introduction to Composite Solids 🏗️

In real life, many objects are combinations of basic geometric shapes. For example:
- An ice cream cone 🍦 (cone + hemisphere)
- A flask with a rounded bottom 🧪 (cylinder + hemisphere)
- A stupa or dome on a building 🏛️ (hemisphere on a cylinder or cuboid)
- A rocket model 🚀 (cylinder + cone)

Understanding these combinations helps us calculate their measurements accurately!

## Identifying Combined Solids ✨

The first step in solving problems involving combined solids is to identify the basic shapes that make up the composite solid. Common component shapes include:

1. **Cubes and Cuboids** 📦
2. **Cylinders** 🥫
3. **Cones** 🎯
4. **Spheres and Hemispheres** 🔮
5. **Prisms and Pyramids** 🔺

## Surface Area of Combined Solids 📏

When calculating the **total surface area** of a combined solid, we need to:
1. Calculate the surface areas of each component
2. Subtract the areas of any surfaces where the solids are joined (since these aren't exposed)
3. Add the remaining surface areas together

### Example 1: Cylinder with Hemispherical Cap 🧪

Consider a solid consisting of a cylinder with radius 7 cm, height 20 cm, and a hemisphere of radius 7 cm on top.

**Solution:**
- Surface area of cylinder = 2πrh + 2πr² = 2π×7×20 + 2π×49 = 280π + 98π = 378π cm²
- Surface area of hemisphere = 2πr² = 2π×49 = 98π cm²
- Area of the circular face where they join = πr² = π×49 = 49π cm²
- Therefore, total surface area = 378π + 98π - 49π = 427π cm² ≈ 1341.4 cm²

### Example 2: Cube with Cylindrical Hole 🕳️

Imagine a cube with side length 10 cm that has a cylindrical hole of radius 2 cm drilled through the center from one face to the opposite face.

**Solution:**
- Surface area of cube = 6×10² = 600 cm²
- We lose two squares of side 2×2 = 4 cm², so that's 2×4 = 8 cm²
- We gain cylindrical surface area = 2πr×h = 2π×2×10 = 40π cm²
- Therefore, total surface area = 600 - 8 + 40π ≈ 718 cm²

## Volume of Combined Solids 📊

The **total volume** of a combined solid is simply the sum of the volumes of its components, minus the volumes of any overlapping parts.

### Example 3: Cylinder with Conical Top 🚀

A solid toy consists of a right circular cylinder of radius 5 cm and height 13 cm, with a right circular cone of height 12 cm mounted on top.

**Solution:**
- Volume of cylinder = πr²h = π×5²×13 = 325π cm³
- Volume of cone = (1/3)πr²h = (1/3)π×5²×12 = 100π cm³
- Total volume = 325π + 100π = 425π cm³ ≈ 1335 cm³

### Example 4: Hemispherical Bowl 🍚

A hemispherical bowl of internal radius 5 cm and thickness 0.5 cm. Find its outer volume.

**Solution:**
- Outer radius = 5 + 0.5 = 5.5 cm
- Outer volume - Inner volume = (2/3)π×5.5³ - (2/3)π×5³
- = (2/3)π(5.5³ - 5³)
- = (2/3)π(166.375 - 125)
- = (2/3)π×41.375
- ≈ 86.6 cm³

## Special Composite Shapes 🌈

### 1. **Frustum of a Cone** ⏳

A frustum is formed when a cone is cut by a plane parallel to its base and the top portion is removed.

**Volume of a frustum** = (1/3)πh(R² + r² + Rr)

Where:
- h = height of the frustum
- R = radius of the larger circular end
- r = radius of the smaller circular end

**Example:** A frustum of a cone has circular ends of radii 8 cm and 3 cm, with a height of 10 cm. Its volume is:
(1/3)π×10×(64 + 9 + 24) = (1/3)π×10×97 ≈ 1014 cm³

### 2. **Spherical Shell** 🏀

A spherical shell is the region between two concentric spheres.

**Volume of a spherical shell** = (4/3)π(R³ - r³)

Where:
- R = outer radius
- r = inner radius

**Example:** A hollow metal ball has an external diameter of 10 cm and thickness 1 cm. The volume of metal used is:
(4/3)π(5³ - 4³) = (4/3)π(125 - 64) = (4/3)π×61 ≈ 255 cm³

## Practical Applications 🛠️

### 1. **Architecture and Construction** 🏢
Architects use composite solids when designing buildings with domes, arches, or complex structural elements.

### 2. **Container Design** 📦
Packaging industries create containers that maximize volume while minimizing material usage.

### 3. **Engineering and Manufacturing** 🔧
Engineers must calculate the amount of material needed and the capacity of mechanical components.

### 4. **Artwork and Sculpture** 🎨
Artists use geometric principles to create balanced and proportional three-dimensional artworks.

## Common Types of Combinations 🔄

1. **Stacking**: Placing one solid on top of another (like a cylinder topped with a cone).

2. **Embedding**: Placing one solid inside another (like a spherical cavity inside a cube).

3. **Hollowing**: Removing a smaller solid from within a larger one (like drilling a cylindrical hole through a cube).

4. **Merging**: Joining solids along common faces or edges (like joining two hemispheres to form a sphere).

## Problem-Solving Strategies 🧠

1. **Decomposition**: Break the composite solid into familiar basic shapes.

2. **Identify Shared Regions**: Determine where solids overlap or join together.

3. **Draw a Diagram**: Sketch the composite solid and label all relevant dimensions.

4. **Use the Right Formulas**: Apply the appropriate formulas for each component.

5. **Combine Results Correctly**: Add volumes and adjusted surface areas.

## Sample Problems with Solutions 📝

### Problem 1:
A toy rocket consists of a right circular cylinder with a cone at the top. The radius of the cylinder is 3 cm, its height is 15 cm, and the height of the cone is 9 cm. Find the volume and total surface area of the toy.

**Solution:**
- Volume of cylinder = πr²h₁ = π×3²×15 = 135π cm³
- Volume of cone = (1/3)πr²h₂ = (1/3)π×3²×9 = 27π cm³
- Total volume = 135π + 27π = 162π cm³ ≈ 509 cm³

- CSA of cylinder = 2πrh₁ = 2π×3×15 = 90π cm²
- CSA of cone = πrl = π×3×√(9² + 3²) = π×3×9.5 ≈ 28.5π cm²
- Area of base = πr² = π×9 = 9π cm²
- Total surface area = 90π + 28.5π + 9π = 127.5π cm² ≈ 400 cm²

### Problem 2:
A solid consists of a hemisphere mounted on a cylinder. Both have a radius of 7 cm. If the height of the cylinder is 10 cm, find the total surface area and volume of the solid.

**Solution:**
- Volume of cylinder = πr²h = π×7²×10 = 490π cm³
- Volume of hemisphere = (2/3)πr³ = (2/3)π×7³ = (2/3)π×343 ≈ 228.7π cm³
- Total volume = 490π + 228.7π = 718.7π cm³ ≈ 2257 cm³

- CSA of cylinder = 2πrh = 2π×7×10 = 140π cm²
- CSA of hemisphere = 2πr² = 2π×49 = 98π cm²
- Area of base of cylinder = πr² = π×49 = 49π cm²
- Common area (top of cylinder) = π×49 = 49π cm²
- Total surface area = 140π + 98π + 49π - 49π = 238π cm² ≈ 748 cm²

## Real-World Applications and Examples 🌍

1. **Ice Cream Cone** 🍦: The cone part is a cone, and the ice cream on top can be modeled as a hemisphere.
   - If the cone has radius 2 cm and height 10 cm, and the ice cream is a hemisphere of radius 2 cm, the total volume is:
   - V = (1/3)π×2²×10 + (2/3)π×2³ = (1/3)π×4×10 + (2/3)π×8 = 13.33π + 5.33π = 18.67π ≈ 58.7 cm³

2. **Storage Tank** 🏭: Many industrial storage tanks have cylindrical bodies with hemispherical or conical tops.
   - For a cylindrical tank with radius 5 meters, height 12 meters, and a hemispherical top, the capacity would be:
   - V = π×5²×12 + (2/3)π×5³ = 300π + (2/3)π×125 = 300π + 83.33π = 383.33π ≈ 1204 m³

3. **Capsule** 💊: A pharmaceutical capsule is often modeled as a cylinder with hemispherical caps on both ends.
   - If the radius is 0.3 cm and the total length is 1.6 cm, the length of the cylindrical part would be 1.0 cm.
   - V = π×0.3²×1.0 + 2×(2/3)π×0.3³ = 0.09π + (4/3)π×0.027 = 0.09π + 0.036π = 0.126π ≈ 0.4 cm³

## Summary ✨

In this topic, we've learned about:

1. **Identifying Components**: Breaking down composite solids into basic 3D shapes.

2. **Surface Area Calculation**: Adding the exposed surface areas while subtracting the common areas.

3. **Volume Calculation**: Adding the volumes of individual components, accounting for any overlaps.

4. **Special Cases**: Understanding the formulas for frustums, spherical shells, and other common combinations.

5. **Practical Applications**: Recognizing how these calculations apply to real-world objects and scenarios.

Remember that working with combined solids requires careful attention to which surfaces are exposed and which are shared between components. Drawing a clear diagram is often the key to solving these problems successfully!

### Practice Questions:

1. A decorative paperweight is made by placing a cone on top of a hemisphere of the same radius. If the radius is 3.5 cm and the height of the cone is 7 cm, what is the total volume of the paperweight?

2. A storage container consists of a cuboid with a hemisphere attached to its top face. If the cuboid measures 20 cm × 15 cm × 10 cm and the hemisphere has the same radius as the width of the cuboid, find the capacity of the container.

3. A solid toy is formed by joining a hemisphere to one end of a cylinder and a cone to the other end. The common radius is 3.5 cm, the height of the cylinder is 7 cm, and the height of the cone is 3 cm. Find the total surface area of the toy.
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
