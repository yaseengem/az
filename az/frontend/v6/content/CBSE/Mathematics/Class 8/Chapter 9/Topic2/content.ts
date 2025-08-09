import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl8_ch9_t2',
    topicNumber: 2,
    topicName: 'Area of trapezium and other polygons',
    duration: 60,
    description: 'Learn how to calculate the area of trapezium and various polygons with clear explanations, formulas, and practical examples.',
    explanation: `
# Area of Trapezium and Other Polygons 🟪🔷

Understanding how to find the area of different polygons is a key skill in mathematics, especially in geometry. In this topic, we will focus on the area of a trapezium and extend our learning to other polygons such as parallelograms, rhombuses, and regular polygons. Let's break down the concepts, formulas, and real-life applications to make this topic easy and interesting!

## 1. What is a Polygon? 🔺
A polygon is a closed figure made up of straight line segments. Examples include triangles, quadrilaterals (like squares, rectangles, parallelograms, trapeziums), pentagons, hexagons, etc.

- **Triangle:** 3 sides
- **Quadrilateral:** 4 sides (includes squares, rectangles, parallelograms, trapeziums, rhombuses)
- **Pentagon:** 5 sides
- **Hexagon:** 6 sides

## 2. Trapezium (Trapezoid) 🟪
A trapezium is a quadrilateral with exactly one pair of parallel sides. The parallel sides are called bases (a and b), and the distance between them is the height (h).

### Area of a Trapezium
- **Formula:** Area = ½ × (sum of parallel sides) × height = ½ × (a + b) × h
- **Example:** If a trapezium has parallel sides of 8 cm and 5 cm, and the height is 4 cm:
  - Area = ½ × (8 + 5) × 4 = ½ × 13 × 4 = 26 cm²
- **Applications:** Used in architecture, land measurement, and design.

## 3. Parallelogram 🔷
A parallelogram is a quadrilateral with both pairs of opposite sides parallel and equal.
- **Area Formula:** Area = base × height
- **Example:** Base = 6 cm, height = 3 cm → Area = 6 × 3 = 18 cm²
- **Tip:** The height is always perpendicular to the base.

## 4. Rhombus 💎
A rhombus is a parallelogram with all sides equal and diagonals that bisect each other at right angles.
- **Area Formula:** Area = ½ × d₁ × d₂ (where d₁ and d₂ are the lengths of the diagonals)
- **Example:** d₁ = 10 cm, d₂ = 8 cm → Area = ½ × 10 × 8 = 40 cm²

## 5. Regular Polygons 🔵
A regular polygon has all sides and angles equal (e.g., regular pentagon, regular hexagon).
- **Area Formula for Regular Polygon:**
  - Area = (Perimeter × Apothem) ÷ 2
  - The apothem is a line from the center to the midpoint of a side, perpendicular to the side.
- **Example:** For a regular hexagon with perimeter 24 cm and apothem 3.5 cm:
  - Area = (24 × 3.5) ÷ 2 = 84 ÷ 2 = 42 cm²

## 6. Area of Composite Figures 🧩
Sometimes, shapes are made by combining polygons. To find the total area, break the figure into known shapes, calculate their areas, and add them up.
- **Example:** A garden is shaped like a rectangle with a semicircular end. Find the area of the rectangle and the semicircle separately, then add them.

## 7. Key Points and Tips ✨
- Always use the same units for all measurements.
- Area is measured in square units (cm², m², etc.).
- Draw diagrams to visualize the problem.
- For irregular shapes, divide them into known polygons.

## 8. Real-Life Examples 🌍
- **Land Measurement:** Plots of land are often irregular; breaking them into trapeziums and rectangles helps calculate area.
- **Construction:** Floor tiles, windows, and walls often have polygonal shapes.
- **Art and Design:** Patterns and mosaics use polygons for creative designs.

## 9. Sample Questions & Solutions 📝
1. **Find the area of a trapezium with parallel sides 12 m and 7 m, and height 5 m.**
   - Area = ½ × (12 + 7) × 5 = ½ × 19 × 5 = 47.5 m²
2. **A parallelogram has a base of 10 cm and height 4 cm. What is its area?**
   - Area = 10 × 4 = 40 cm²
3. **The diagonals of a rhombus are 16 cm and 12 cm. Find its area.**
   - Area = ½ × 16 × 12 = 96 cm²
4. **A regular pentagon has a perimeter of 30 cm and apothem 4 cm. Find its area.**
   - Area = (30 × 4) ÷ 2 = 60 cm²

## 10. Practice Table 📋
| Shape         | Area Formula                        |
|--------------|-------------------------------------|
| Trapezium    | ½ × (a + b) × h                     |
| Parallelogram| base × height                       |
| Rhombus      | ½ × d₁ × d₂                         |
| Regular Polygon | (Perimeter × Apothem) ÷ 2        |

## 11. Short Summary 📝
- **Trapezium:** One pair of parallel sides, area = ½ × (a + b) × h
- **Parallelogram:** Opposite sides parallel, area = base × height
- **Rhombus:** All sides equal, area = ½ × d₁ × d₂
- **Regular Polygon:** All sides and angles equal, area = (Perimeter × Apothem) ÷ 2
- **Composite Figures:** Break into known shapes, find individual areas, and sum up

Mastering these area formulas helps in solving real-world problems in construction, design, and measurement. Practice with different shapes and try drawing them to understand better! 🏗️🎨
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 