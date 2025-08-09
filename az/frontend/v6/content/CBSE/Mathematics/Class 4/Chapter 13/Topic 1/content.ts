import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl4_ch13_t1',
  topicNumber: 1,
  topicName: "Concept of perimeter and area",
  duration: 45,
  description: "Understanding the basic concepts of perimeter as boundary measurement and area as surface coverage with practical examples",
  explanation: `
# Concept of Perimeter and Area 📏📐

Have you ever wondered how much fencing you need to surround a garden? Or how much carpet you need to cover your bedroom floor? These questions involve two important mathematical concepts: perimeter and area! Let's explore these exciting ideas together! 🌟

## What is Perimeter? 🔍

Perimeter is the total distance around the outside of a shape or figure. It's like measuring the boundary of a shape. Imagine walking all the way around the edge of your school playground - the total distance you walk would be the perimeter!

### Real-Life Examples of Perimeter:
- The length of fence needed around a garden 🏡
- The amount of decorative border needed for a picture frame 🖼️
- The distance around a running track 🏃‍♀️
- The edge of a tabletop where you might place decorative tape 🪑

### How to Find Perimeter

To find the perimeter of any shape, we simply add up the lengths of all its sides.

**For a Square:**
If one side of a square is 5 cm long, then:
Perimeter = 5 cm + 5 cm + 5 cm + 5 cm = 20 cm

Or using a formula: Perimeter of a square = 4 × side length

**For a Rectangle:**
If a rectangle has a length of 8 cm and width of 5 cm:
Perimeter = 8 cm + 5 cm + 8 cm + 5 cm = 26 cm

Or using a formula: Perimeter of a rectangle = 2 × (length + width)

**For a Triangle:**
If the sides of a triangle are 3 cm, 4 cm, and 5 cm:
Perimeter = 3 cm + 4 cm + 5 cm = 12 cm

### Sample Problem 1: 
Ravi wants to put a fence around his square garden. Each side of the garden is 7 meters long. How much fencing will he need to buy?

Solution:
Perimeter of a square = 4 × side length
Perimeter = 4 × 7 m = 28 m
Ravi needs 28 meters of fencing. 🧮

### Sample Problem 2:
Meera's rectangular notebook has a length of 25 cm and a width of 20 cm. What is the perimeter of the notebook cover?

Solution:
Perimeter of a rectangle = 2 × (length + width)
Perimeter = 2 × (25 cm + 20 cm) = 2 × 45 cm = 90 cm
The perimeter of Meera's notebook cover is 90 cm. 📔

## What is Area? 🔍

Area is the amount of space covered by a shape or figure. Think of it as how much paint you would need to color a shape completely, or how many tiles would fit inside it.

### Real-Life Examples of Area:
- The amount of carpet needed to cover a floor 🧵
- The size of a wall that needs to be painted 🎨
- The space covered by a garden where you can plant flowers 🌷
- The size of a page in your notebook where you can write 📝

### How to Find Area

To find the area of regular shapes, we use specific formulas based on their dimensions.

**For a Square:**
Area of a square = side length × side length (or side length²)

If one side of a square is 4 cm:
Area = 4 cm × 4 cm = 16 square centimeters (cm²)

**For a Rectangle:**
Area of a rectangle = length × width

If a rectangle has a length of 7 cm and width of 3 cm:
Area = 7 cm × 3 cm = 21 square centimeters (cm²)

### Understanding Square Units

When we measure area, we use square units like:
- Square centimeters (cm²) for small areas like a book cover
- Square meters (m²) for medium areas like a room floor
- Square kilometers (km²) for very large areas like a city

A square centimeter (1 cm²) is a square that measures 1 cm on each side. Think of it as a tiny square that fits in the palm of your hand! 🤏

### Sample Problem 3:
Maya needs to cover her rectangular table with a tablecloth. The table is 150 cm long and 90 cm wide. What is the area of the tablecloth she needs?

Solution:
Area of rectangle = length × width
Area = 150 cm × 90 cm = 13,500 cm²
Maya needs a tablecloth with an area of 13,500 cm² (or 1.35 m²). 🧮

### Sample Problem 4:
A square tile has a side length of 10 cm. How many of these tiles are needed to cover a square floor with a side length of 1 meter?

Solution:
First, let's convert 1 meter to centimeters: 1 m = 100 cm
Area of the floor = 100 cm × 100 cm = 10,000 cm²
Area of one tile = 10 cm × 10 cm = 100 cm²
Number of tiles needed = Area of floor ÷ Area of one tile = 10,000 cm² ÷ 100 cm² = 100 tiles
We need 100 tiles to cover the floor. 🧮

## Difference Between Perimeter and Area 🔄

It's important to understand the difference between perimeter and area:

| Perimeter | Area |
|-----------|------|
| Measures the boundary or outline of a shape | Measures the space inside or covered by a shape |
| Measured in units of length (cm, m, km) | Measured in square units (cm², m², km²) |
| Found by adding all sides | Found using specific formulas based on shape |
| Example: Length of fence around a garden | Example: Size of the garden surface |

### Visual Example:
Imagine a square with a side length of 5 cm:
- Perimeter = 4 × 5 cm = 20 cm (the distance around)
- Area = 5 cm × 5 cm = 25 cm² (the space inside)

## Relationships Between Perimeter and Area 🧩

Some interesting relationships between perimeter and area include:

1. **Shapes with the same perimeter can have different areas.**
   For example, a rectangle with length 8 cm and width 2 cm has:
   - Perimeter = 2 × (8 + 2) = 20 cm
   - Area = 8 × 2 = 16 cm²

   While a square with side 5 cm has:
   - Perimeter = 4 × 5 = 20 cm
   - Area = 5 × 5 = 25 cm²
   
   Both shapes have the same perimeter (20 cm), but different areas!

2. **Shapes with the same area can have different perimeters.**
   For example, a rectangle with length 8 cm and width 2 cm has:
   - Area = 8 × 2 = 16 cm²
   - Perimeter = 2 × (8 + 2) = 20 cm

   While a square with side 4 cm has:
   - Area = 4 × 4 = 16 cm²
   - Perimeter = 4 × 4 = 16 cm
   
   Both shapes have the same area (16 cm²), but different perimeters!

3. **For shapes with the same perimeter, the square has the largest area.**
   This is why bubbles form spheres in the air - nature tries to maximize the volume while minimizing the surface area!

## Real-Life Applications 🌍

Understanding perimeter and area helps us solve many everyday problems:

1. **Gardening:** Calculating how much fencing is needed (perimeter) and how much soil or grass seed to buy (area).

2. **Home Improvement:** Determining how much paint is needed for walls (area) and how much border trim is required for a room (perimeter).

3. **Crafts:** Figuring out how much ribbon is needed to go around a gift box (perimeter) and how much wrapping paper is needed to cover it (area).

4. **Sports:** Understanding the size of playing fields (area) and the running distance around tracks (perimeter).

## Let's Practice! 💪

Here are some practice questions to test your understanding:

1. A rectangular playground is 15 meters long and 10 meters wide. What is its perimeter?
   - Perimeter = 2 × (15 + 10) = 2 × 25 = 50 meters

2. A square garden has each side measuring 12 meters. What is its area?
   - Area = 12 × 12 = 144 square meters

3. Rohan wants to put a border around his rectangular photo that is 20 cm long and 15 cm wide. How much border material does he need?
   - Perimeter = 2 × (20 + 15) = 2 × 35 = 70 centimeters

4. A rectangular carpet has an area of 24 square meters. If its width is 4 meters, what is its length?
   - Area = length × width
   - 24 = length × 4
   - length = 24 ÷ 4 = 6 meters

## Tips for Remembering Perimeter and Area 🧠

1. **Perimeter is "around"** - Think of the "rim" in perimeter as going around the edge!

2. **Area fills the space** - Area is about covering the inside of a shape.

3. **Units matter** - Perimeter uses single units (cm, m), while area uses square units (cm², m²).

4. **Visual memory** - Picture walking around the edge of a shape (perimeter) versus coloring it in completely (area).

## Summary ✨

In this topic, we've learned:

- **Perimeter** is the distance around a shape, measured in length units (cm, m).
- **Area** is the space covered by a shape, measured in square units (cm², m²).
- Different shapes have different formulas for calculating perimeter and area.
- Perimeter and area have many practical applications in everyday life.
- Shapes with the same perimeter can have different areas, and vice versa.
- For a given perimeter, a square has the maximum area among all rectangles.

Understanding perimeter and area helps us make better decisions about space and materials in many real-life situations. These concepts will also help you in higher classes when you study more complex shapes and their properties! 🌟

Remember: Perimeter goes AROUND, while Area fills the INSIDE! 📏📐
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
