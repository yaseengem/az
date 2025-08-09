import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl10_ch12_t2',
  topicNumber: 2,
  topicName: "Areas of Sectors and Segments",
  duration: 45,
  description: "Understanding how to calculate areas of sectors and segments of circles, and solving related problems",
  explanation: `
# Areas of Sectors and Segments 🔵

In our daily lives, we encounter circular shapes that aren't always complete circles. Pizza slices, pie charts, archery targets, and fan blades all represent parts of circles called sectors. Understanding how to calculate their areas helps us solve many real-world problems! Let's dive into the fascinating world of sectors and segments. 🚀

## What is a Sector? 📐

A sector is a region of a circle bounded by two radii and the arc between them. Imagine cutting a pizza 🍕 - each slice is a sector!

### Area of a Sector

The area of a sector depends on its central angle and the radius of the circle:

**Formula**: Area of a sector = ½ × r² × θ

Where:
- r = radius of the circle
- θ = measure of the central angle in radians

If the angle is given in degrees, we convert it to radians:
θ (in radians) = θ (in degrees) × (π/180)

Alternatively, we can use the proportion:
Area of sector/Area of circle = Central angle/360°

So: Area of sector = (θ/360°) × πr²

### Example 1: 🌟
Calculate the area of a sector with central angle 72° in a circle with radius 10 cm.

**Solution**:
Area of sector = (θ/360°) × πr²
                = (72/360) × π × 10²
                = (1/5) × π × 100
                = 20π cm²

## Arc Length of a Sector 🧵

The arc length is the distance along the curved edge of the sector.

**Formula**: Arc length = r × θ (where θ is in radians)

Or: Arc length = (θ/360°) × 2πr (where θ is in degrees)

### Example 2: 🌟
Find the arc length of a sector with central angle 45° in a circle with radius 14 cm.

**Solution**:
Arc length = (θ/360°) × 2πr
           = (45/360) × 2π × 14
           = (1/8) × 2π × 14
           = π × 3.5
           = 3.5π cm

## What is a Segment? 🍧

A segment is a region of a circle bounded by a chord and the arc it subtends. Unlike a sector, a segment doesn't include the center of the circle.

There are two types of segments:
- **Minor segment**: The smaller portion of the circle cut by the chord
- **Major segment**: The larger portion of the circle cut by the chord

### Area of a Segment

The area of a segment is calculated by subtracting the area of the triangle from the area of the corresponding sector:

**Formula**: Area of segment = Area of sector - Area of triangle

For a segment with central angle θ (in radians):
Area of segment = ½r²(θ - sin θ)

### Example 3: 🌟
In a circle with radius 8 cm, a chord creates a central angle of 60°. Calculate the area of the minor segment.

**Solution**:
Central angle in radians = 60° × (π/180) = π/3

Area of segment = ½r²(θ - sin θ)
                = ½ × 8² × (π/3 - sin(π/3))
                = ½ × 64 × (π/3 - √3/2)
                = 32 × (π/3 - √3/2)
                = 32π/3 - 16√3 cm²

## Perimeter of a Sector 📏

The perimeter of a sector includes both the arc length and the two radii:

**Formula**: Perimeter = 2r + rθ (where θ is in radians)
Or: Perimeter = 2r + (θ/360°) × 2πr (where θ is in degrees)

### Example 4: 🌟
Find the perimeter of a sector with central angle 90° in a circle with radius 6 cm.

**Solution**:
Perimeter = 2r + arc length
          = 2 × 6 + (90/360) × 2π × 6
          = 12 + (1/4) × 2π × 6
          = 12 + 3π cm

## Relationships Between Sectors and Segments 🔄

### Key Relationships:
1. **Area Ratio**: The ratio of the areas of two sectors in the same circle is equal to the ratio of their central angles.

2. **Semicircle**: When the central angle is 180°, we have a semicircle:
   - Area of semicircle = ½πr²
   - Perimeter of semicircle = πr + 2r (arc + diameter)

3. **Segment Area from Chord Length**: If we know the chord length c and radius r:
   - Central angle θ = 2sin⁻¹(c/(2r)) in radians
   - Then use the segment area formula: ½r²(θ - sin θ)

### Example 5: 🌟
A chord of length 10 cm is drawn in a circle of radius 13 cm. Find the area of the minor segment formed.

**Solution**:
Central angle θ = 2sin⁻¹(10/(2×13)) = 2sin⁻¹(5/13) ≈ 0.782 radians

Area of segment = ½r²(θ - sin θ)
                ≈ ½ × 13² × (0.782 - sin(0.782))
                ≈ ½ × 169 × (0.782 - 0.704)
                ≈ 84.5 × 0.078
                ≈ 6.59 cm²

## Applications of Sectors and Segments 🌍

### 1. Pizza Slices 🍕
A 12-inch diameter pizza is cut into 8 equal slices. Each slice is a sector with central angle 45°.
Area of each slice = (45/360) × π × 6² = 14.14 in²

### 2. Sprinkler Systems 💦
A sprinkler covers a sector with radius 8 meters and angle 120°. The area watered is:
(120/360) × π × 8² = 67.02 m²

### 3. Architecture and Design 🏛️
Circular windows often contain decorative segments and sectors. A semicircular window with diameter 2m has an area of:
½π × 1² = 1.57 m²

### 4. Pie Charts 📊
In a pie chart showing monthly expenses, the "Rent" category takes up 30% of the chart.
If the chart has radius 5 cm, the area of this sector is:
0.3 × π × 5² = 23.56 cm²

## Special Cases and Formulas 📝

### 1. Semicircle:
- Area = ½πr²
- Arc length = πr
- Perimeter = πr + 2r

### 2. Quadrant (Quarter circle):
- Area = ¼πr²
- Arc length = ½πr
- Perimeter = ½πr + 2r

### 3. Segment area in terms of chord length c and height h:
Area of segment ≈ ⅔ × c × h (approximation)
Exact formula: Area = ½r²cos⁻¹((r-h)/r) - (r-h)√(2rh - h²)

## Sample Questions and Solutions ✨

**Question 1**: In a circle with radius 15 cm, find the area of a sector with central angle 40°.
**Solution**: Area = (40/360) × π × 15² = (1/9) × π × 225 = 25π cm²

**Question 2**: A chord of length 16 cm is drawn in a circle of radius 10 cm. What is the area of the minor segment formed?
**Solution**: 
- Central angle θ = 2sin⁻¹(8/10) = 2sin⁻¹(0.8) ≈ 1.69 radians
- Area of segment = ½r²(θ - sin θ)
                  = ½ × 10² × (1.69 - sin(1.69))
                  = ½ × 100 × (1.69 - 0.99)
                  = 50 × 0.7
                  = 35 cm²

**Question 3**: The area of a sector is 36π cm² in a circle with radius 12 cm. Find the central angle in degrees.
**Solution**: 
36π = (θ/360) × π × 12²
36 = (θ/360) × 144
θ = 36 × 360/144 = 90°

## Common Mistakes to Avoid ⚠️

1. **Confusing Sectors and Segments**: Remember, a sector includes the center, while a segment does not.

2. **Angle Units**: Always check if you're working with degrees or radians, and convert accordingly.

3. **Forgetting the ½ Factor**: The area formula for a sector includes ½: Area = ½r²θ.

4. **Arc Length vs Area**: Don't confuse the formulas for arc length (rθ) and area (½r²θ).

## Practice Problem Ideas 💡

1. Calculate the area of a sector with central angle 135° in a circle with radius 7 cm.

2. A sector has an area of 25π cm² and an arc length of 10π cm. Find the radius of the circle.

3. In a circle with radius 9 cm, a chord of length 12 cm is drawn. Find the area of the minor segment formed.

4. A circular garden has a central angle of 72° cut out for a pathway. If the garden's radius is 15 meters, what is the area of the garden excluding the pathway?

## Summary ✨

In this topic, we've learned:

1. **Sectors of Circles**:
   - Definition: A portion of a circle bounded by two radii and an arc
   - Area formula: ½r²θ (radians) or (θ/360°)πr² (degrees)
   - Arc length formula: rθ (radians) or (θ/360°)2πr (degrees)
   - Perimeter formula: 2r + rθ (radians)

2. **Segments of Circles**:
   - Definition: A portion of a circle bounded by a chord and an arc
   - Area formula: Area of sector - Area of triangle
   - Exact formula: ½r²(θ - sin θ)

3. **Applications** in real-world scenarios like pizza slices, sprinkler systems, architecture, and statistics.

Understanding sectors and segments enhances our ability to solve a wide variety of practical geometry problems. These concepts connect directly to many applications in engineering, design, architecture, and everyday life. 🌟
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
