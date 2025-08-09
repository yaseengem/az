import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl8_ch9_t1',
    topicNumber: 1,
    topicName: 'Surface area and volume of cubes, cuboids, cylinders',
    duration: 60,
    description: 'Learn how to calculate surface area and volume of cubes, cuboids, and cylinders with real-life examples and practice questions.',
    explanation: `
# Surface Area and Volume of Cubes, Cuboids, and Cylinders 📦🧊🟦

Understanding how to measure the space inside and the area covering the outside of 3D shapes is essential in mathematics and daily life. In this topic, we will explore the concepts of surface area and volume for three important solids: cubes, cuboids, and cylinders. Let's break down each shape, learn the formulas, and see how these concepts are used in real-world situations!

## 1. Cubes 🧊
A cube is a special type of cuboid where all sides are equal. Each face is a square.
- **Edge length (a):** All sides are of equal length.
- **Surface Area:** The total area of all six faces.
  - Formula: Surface Area = 6 × a²
  - Example: If a cube has edge 4 cm, Surface Area = 6 × 4² = 96 cm²
- **Volume:** The space inside the cube.
  - Formula: Volume = a³
  - Example: If a = 4 cm, Volume = 4 × 4 × 4 = 64 cm³
- **Applications:** Packing boxes, dice, ice cubes, storage containers.

## 2. Cuboids 📦
A cuboid has three different dimensions: length (l), width (w), and height (h). Each face is a rectangle.
- **Surface Area:**
  - Formula: Surface Area = 2(lw + lh + wh)
  - Example: For l = 5 cm, w = 3 cm, h = 2 cm:
    - Surface Area = 2(5×3 + 5×2 + 3×2) = 2(15 + 10 + 6) = 2×31 = 62 cm²
- **Volume:**
  - Formula: Volume = l × w × h
  - Example: For l = 5 cm, w = 3 cm, h = 2 cm:
    - Volume = 5 × 3 × 2 = 30 cm³
- **Applications:** Bricks, books, rooms, aquariums, shipping boxes.

## 3. Cylinders 🟦
A cylinder has two parallel circular bases and a curved surface connecting them. Think of cans, pipes, or water tanks.
- **Radius (r):** Distance from the center to the edge of the base.
- **Height (h):** Distance between the two bases.
- **Curved Surface Area (CSA):** Area of the side (without the top and bottom).
  - Formula: CSA = 2πrh
  - Example: r = 3 cm, h = 7 cm → CSA = 2 × π × 3 × 7 = 42π ≈ 132 cm²
- **Total Surface Area (TSA):** Area of the curved surface plus the two bases.
  - Formula: TSA = 2πr(r + h)
  - Example: r = 3 cm, h = 7 cm → TSA = 2 × π × 3 × (3 + 7) = 2 × π × 3 × 10 = 60π ≈ 188 cm²
- **Volume:**
  - Formula: Volume = πr²h
  - Example: r = 3 cm, h = 7 cm → Volume = π × 3² × 7 = π × 9 × 7 = 63π ≈ 198 cm³
- **Applications:** Water tanks, cans, pipes, batteries, candles.

## 4. Key Points and Tips ✨
- Always use the same units for all dimensions.
- Surface area is measured in square units (cm², m², etc.), volume in cubic units (cm³, m³, etc.).
- π (pi) is approximately 3.14 or 22/7 for calculations.
- For cubes and cuboids, all faces are rectangles (squares for cubes).
- For cylinders, the curved surface wraps around the sides, and the two bases are circles.

## 5. Real-Life Examples 🌍
- **Packing:** To find out how much wrapping paper is needed for a gift box (cuboid), calculate its surface area.
- **Storage:** To know how much water a tank (cylinder) can hold, calculate its volume.
- **Construction:** Bricks (cuboids) are stacked to build walls; knowing their volume helps estimate material needed.
- **Manufacturing:** Companies use surface area to determine how much material is needed to make cans (cylinders).

## 6. Sample Questions & Solutions 📝
1. **What is the surface area of a cube with edge 6 cm?**
   - Surface Area = 6 × 6² = 6 × 36 = 216 cm²
2. **A cuboid has length 8 cm, width 5 cm, and height 3 cm. What is its volume?**
   - Volume = 8 × 5 × 3 = 120 cm³
3. **Find the total surface area of a cylinder with radius 4 cm and height 10 cm.**
   - TSA = 2πr(r + h) = 2 × π × 4 × (4 + 10) = 2 × π × 4 × 14 = 112π ≈ 352 cm²
4. **A cube has a volume of 64 cm³. What is its edge length?**
   - Edge = ∛64 = 4 cm
5. **A water tank is a cylinder with radius 7 m and height 2 m. What is its volume?**
   - Volume = π × 7² × 2 = π × 49 × 2 = 98π ≈ 308 m³

## 7. Practice Table 📋
| Shape    | Formula for Surface Area         | Formula for Volume      |
|----------|----------------------------------|------------------------|
| Cube     | 6 × a²                           | a³                     |
| Cuboid   | 2(lw + lh + wh)                  | l × w × h              |
| Cylinder | 2πr(r + h) (TSA), 2πrh (CSA)     | πr²h                   |

## 8. Short Summary 📝
- **Cube:** All sides equal, 6 faces, easy formulas.
- **Cuboid:** Rectangular box, 6 faces, use length, width, height.
- **Cylinder:** Circles at top and bottom, curved side, use radius and height.
- **Surface area** tells you how much material is needed to cover the shape.
- **Volume** tells you how much space is inside the shape.

Understanding these concepts helps in daily life, from packing and storage to construction and design. Practice using the formulas and try solving real-world problems for better understanding! 🚀
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 