import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl10_ch12_t1',
  topicNumber: 1,
  topicName: "Area and perimeter of circles",
  duration: 45,
  description: "Understanding the formulas and concepts related to finding areas and perimeters of circles, sectors, and annular regions.",
  explanation: `
# Area and Perimeter of Circles 🔵

Circles are among the most fundamental shapes in geometry, appearing throughout nature, architecture, engineering, and everyday life. Understanding how to calculate the area and perimeter (also called circumference) of a circle is essential for solving various real-world problems! 🌍

## Basic Circle Properties 📏

Every circle has the following properties:
- A **center** point O
- A **radius** (r): the distance from the center to any point on the circle
- A **diameter** (d): a line segment passing through the center, connecting two points on the circle
- The diameter is twice the radius: d = 2r
- A **circumference** (perimeter): the distance around the circle
- An **area**: the space enclosed by the circle

## Circle Formulas 📊

### Circumference (Perimeter) of a Circle

The circumference or perimeter of a circle is given by:
- C = 2πr (using radius)
- C = πd (using diameter)

Where:
- π (pi) is approximately 3.14159... (an irrational number)
- r is the radius
- d is the diameter

### Area of a Circle

The area of a circle is given by:
- A = πr²

Where:
- π is approximately 3.14159...
- r is the radius

## The Mystery of π (Pi) 🧩

The value π is a fascinating mathematical constant that represents the ratio of a circle's circumference to its diameter. 

- π ≈ 3.14159265358979...
- π is an irrational number, meaning it cannot be expressed as a simple fraction, and its decimal representation goes on forever without repeating
- For calculations, we often use approximations such as 3.14 or 22/7, but most scientific calculators have a π button for precise calculations

## Example Problems 📝

### Example 1: Finding the Area and Circumference 📌
*Find the area and circumference of a circle with radius 7 cm.*

**Solution:**
- Area = πr² = π × 7² = 49π cm² ≈ 153.94 cm²
- Circumference = 2πr = 2π × 7 = 14π cm ≈ 43.98 cm

### Example 2: Finding Radius from Area 📌
*The area of a circular garden is 154 m². What is its radius?*

**Solution:**
- Area = πr²
- 154 = πr²
- r² = 154/π
- r = √(154/π) ≈ 7 m

### Example 3: Finding Diameter from Circumference 📌
*The circumference of a circular pond is 88 meters. What is its diameter?*

**Solution:**
- Circumference = πd
- 88 = πd
- d = 88/π ≈ 28 m

## Sectors of Circles 🍕

A sector is a portion of a circle bounded by two radii and the arc between them. Think of it as a "pizza slice" of the circle.

### Area of a Sector

The area of a sector with angle θ (in degrees) is:
- Area of sector = (θ/360°) × πr²

Where:
- θ is the angle of the sector in degrees
- r is the radius of the circle

### Length of an Arc

The arc length for a sector with angle θ (in degrees) is:
- Arc length = (θ/360°) × 2πr = (θ/180°) × πr

### Example 4: Finding the Area of a Sector 📌
*Find the area of a sector of a circle with radius 10 cm and angle 72°.*

**Solution:**
- Area of sector = (θ/360°) × πr²
- Area = (72/360) × π × 10²
- Area = 0.2 × 100π
- Area = 20π cm² ≈ 62.83 cm²

## Annular Regions (Rings) 💍

An annular region is the region between two concentric circles. It looks like a ring.

### Area of an Annular Region

The area of an annular region is given by:
- Area = π(R² - r²)

Where:
- R is the radius of the larger circle
- r is the radius of the smaller circle

### Example 5: Finding the Area of a Ring 📌
*A circular path of width 2 m surrounds a circular garden of radius 8 m. What is the area of the path?*

**Solution:**
- Inner radius (r) = 8 m
- Outer radius (R) = 8 + 2 = 10 m
- Area of path = π(R² - r²)
- Area = π(10² - 8²)
- Area = π(100 - 64)
- Area = 36π m² ≈ 113.1 m²

## Relationship Between Area and Circumference 🔄

There's a beautiful relationship between the area and circumference of a circle:
- If A is the area and C is the circumference: A = (1/2) × r × C

This can be derived as follows:
- C = 2πr
- A = πr²
- Therefore, A = (C × r)/2

## Applications in Real Life 🌐

Understanding circle area and perimeter has numerous practical applications:

1. **Architecture and Construction** 🏗️
   - Designing circular buildings, domes, and arches
   - Calculating materials needed for circular foundations or pools

2. **Transportation** 🚗
   - Designing roundabouts and traffic circles
   - Calculating travel distance when moving in a circular path

3. **Science and Engineering** 🔬
   - Calculating the pressure in pipes
   - Designing circular components like wheels, gears, and pulleys

4. **Everyday Life** 🏠
   - Finding how much fence is needed for a circular garden
   - Calculating the amount of material needed for a circular tablecloth

## Practice Problems 🏋️‍♂️

1. **Problem:** A circular park has a circumference of 308 meters. What is its area?
   - **Solution:** Circumference = 2πr ⟹ r = 308/(2π) = 49 m. Area = πr² = 49²π = 2401π m² ≈ 7546 m²

2. **Problem:** A rectangular field has width 14 m and length 22 m. A circular flower bed needs to be made in this field with the same area as the rectangle. What will be the radius of the flower bed?
   - **Solution:** Area of rectangle = 14 × 22 = 308 m². For equal area, πr² = 308 ⟹ r = √(308/π) ≈ 9.9 m

3. **Problem:** A sector has an angle of 45° and an arc length of 11 cm. What is the radius of the circle?
   - **Solution:** Arc length = (θ/360°) × 2πr = (45/360) × 2πr = πr/4 = 11 ⟹ r = 44/π ≈ 14 cm

## Common Mistakes to Avoid ⚠️

1. **Confusing Area and Perimeter Formulas**
   - Area = πr²
   - Perimeter = 2πr
   - Always double-check which one you need!

2. **Using Diameter Instead of Radius**
   - Most formulas require the radius, not the diameter
   - If given the diameter, remember to divide by 2 to get the radius

3. **Incorrect Units**
   - Area is measured in square units (cm², m², etc.)
   - Perimeter is measured in linear units (cm, m, etc.)

4. **Forgetting to Convert Units**
   - Always make sure all measurements are in the same units before calculating

## Summary ✨

In this topic, we've explored:

- **Circle Basics:** Radius, diameter, center, circumference, area
- **Key Formulas:**
  * Circumference (perimeter): C = 2πr or C = πd
  * Area: A = πr²
  * Sector area: (θ/360°) × πr²
  * Arc length: (θ/360°) × 2πr
  * Annular region area: π(R² - r²)

- **Relationship between area and circumference:** A = (r × C)/2

These concepts and formulas are essential for solving problems involving circular shapes in mathematics and real life. Mastering them will help you tackle a wide range of geometry problems with confidence!

### Additional Practice Questions:

1. **Question:** If the radius of a circle is doubled, what happens to its area and perimeter?
   - **Answer:** The perimeter doubles, but the area becomes 4 times the original area.

2. **Question:** A circular pizza with radius 20 cm is cut into 8 equal slices. What is the area of each slice?
   - **Answer:** Area of each slice = (1/8) × πr² = π × 400/8 = 50π cm² ≈ 157 cm²

3. **Question:** A circular lake has an area of 2500π m². What is the distance around the lake?
   - **Answer:** Area = πr² ⟹ r = 50 m. Circumference = 2πr = 100π m ≈ 314 m.

4. **Question:** How many meters of fence are needed to enclose a circular field with an area of 1386 m²?
   - **Answer:** Area = πr² ⟹ r = √(1386/π) ≈ 21 m. Fence length (circumference) = 2πr ≈ 132 m.
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
