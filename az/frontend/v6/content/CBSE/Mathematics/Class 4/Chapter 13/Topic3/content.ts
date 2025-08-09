import { TopicContent, TopicQuiz } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
  id: 'cl4_ch13_t3',
  topicNumber: 3,
  topicName: "Practical applications of perimeter",
  duration: 45,
  description: "Understanding and applying perimeter concepts in everyday life situations like fencing, borders, and boundaries.",
  explanation: `
# Practical Applications of Perimeter 🔍

## What is Perimeter? 📏

Perimeter is the total distance around the boundary of a closed shape or area. It tells us how long the outline or border of a shape is. Think of perimeter as the path you would follow if you walked all the way around the edge of a shape! 🚶‍♀️

For simple shapes, we can calculate the perimeter by adding the lengths of all sides:
- For a square: Perimeter = 4 × side length
- For a rectangle: Perimeter = 2 × (length + width)
- For a triangle: Perimeter = side 1 + side 2 + side 3
- For a circle (called circumference): Perimeter = π × diameter (or 2π × radius)

## Why Perimeter Matters in Real Life 🌍

Perimeter measurements are incredibly useful in our daily lives! Here are some practical ways we use perimeter:

### 1. Fencing Fields and Gardens 🌱

One of the most common applications of perimeter is when we need to put a fence around a piece of land. Farmers, gardeners, and homeowners all need to know the perimeter of their land before buying fencing materials.

**Example**: A farmer has a rectangular vegetable garden that is 8 meters long and 6 meters wide. How much fencing does the farmer need to go around the entire garden?

**Solution**:
Perimeter of rectangle = 2 × (length + width)
Perimeter = 2 × (8 + 6) = 2 × 14 = 28 meters

So, the farmer needs 28 meters of fencing to enclose the garden completely.

**Real-world consideration**: When planning a fencing project, you might also need to account for gates or openings, which would reduce the total fencing needed.

### 2. Decorative Borders 🎨

When we add borders to things like picture frames, bulletin boards, tablecloths, or carpets, we're working with perimeter!

**Example**: A square bulletin board has sides of 1.5 meters each. How much decorative border tape is needed to go around it?

**Solution**:
Perimeter of square = 4 × side length
Perimeter = 4 × 1.5 = 6 meters

So, we need 6 meters of decorative border tape.

**Real-world consideration**: You might want to add a little extra (maybe 10% more) to account for corners and potential mistakes.

### 3. Measuring Athletic Tracks 🏃‍♂️

Running tracks in schools and stadiums are designed with specific perimeters. A standard Olympic running track has a perimeter of 400 meters for the innermost lane.

**Example**: If a circular running track has a diameter of 127.3 meters, what is its approximate perimeter?

**Solution**:
Perimeter (circumference) = π × diameter
Perimeter = 3.14 × 127.3 ≈ 400 meters

**Real-world consideration**: Actual tracks aren't perfect circles but are usually oval-shaped with straight sides and curved ends.

### 4. Installing Skirting Boards (Baseboards) 🏠

When renovating a room, carpenters need to know the perimeter of the room to determine how much skirting board (baseboard) to purchase.

**Example**: A rectangular room measures 5 meters by 4 meters. How much skirting board is needed if there's a doorway of 1 meter where no skirting is required?

**Solution**:
Full perimeter = 2 × (5 + 4) = 2 × 9 = 18 meters
With doorway removed: 18 - 1 = 17 meters

So, 17 meters of skirting board is needed.

**Real-world consideration**: When purchasing materials, it's wise to buy a bit extra to account for cutting mistakes or future repairs.

### 5. Trimming and Ribbons 🎁

When wrapping gifts or adding trim to clothing, knowing the perimeter helps determine how much ribbon or trim material to use.

**Example**: A square gift box has 15 cm sides. How much ribbon is needed to wrap around it once, with an extra 20 cm for a bow?

**Solution**:
Perimeter = 4 × 15 = 60 cm
Total ribbon needed = 60 + 20 = 80 cm

**Real-world consideration**: For gift wrapping, you might want to add extra length for wrapping around different directions or making decorative elements.

### 6. Swimming Pool Edges 🏊

Swimming pools often need coping stones or tiles around their perimeter for safety and decoration.

**Example**: A rectangular swimming pool is 25 meters long and 10 meters wide. How many meters of coping stone are needed for the pool's edge?

**Solution**:
Perimeter = 2 × (25 + 10) = 2 × 35 = 70 meters

**Real-world consideration**: Coping stones often come in standard lengths, so you'll need to purchase enough to cover the entire 70 meters, which might mean buying slightly more than the exact measurement.

### 7. Measuring for Wallpaper Borders 🖼️

Decorative wallpaper borders go around the perimeter of a room, usually near the ceiling.

**Example**: A rectangular bedroom is 4 meters long and 3 meters wide. How much wallpaper border is needed to go around the room?

**Solution**:
Perimeter = 2 × (4 + 3) = 2 × 7 = 14 meters

**Real-world consideration**: You might need to account for doors and windows where the border might not be applied, and also buy extra for matching patterns.

### 8. Making Frames 🖼️

Picture frames follow the perimeter of the picture or artwork they're framing.

**Example**: A rectangular photograph is 20 cm long and 15 cm wide. How much frame material is needed to go around it?

**Solution**:
Perimeter = 2 × (20 + 15) = 2 × 35 = 70 cm

**Real-world consideration**: Frame corners are usually joined at 45-degree angles, which affects how the material is cut.

### 9. Playground Safety Zones 🎪

Safety zones around playground equipment are often determined by measuring a perimeter around the equipment.

**Example**: A square playground structure has sides of 5 meters. If a safety zone of 2 meters is required all around it, what is the perimeter of the safety zone boundary?

**Solution**:
Side length of safety zone = 5 + 2 + 2 = 9 meters
Perimeter of safety zone = 4 × 9 = 36 meters

**Real-world consideration**: Safety zones might need to be larger on sides with slides or swings where children might jump or fall.

### 10. Calculating Costs 💰

Perimeter calculations are essential for determining costs when materials are priced per unit length.

**Example**: A farmer needs to fence a rectangular field that is 50 meters long and 30 meters wide. If fencing costs ₹75 per meter, what will be the total cost?

**Solution**:
Perimeter = 2 × (50 + 30) = 2 × 80 = 160 meters
Total cost = 160 × ₹75 = ₹12,000

**Real-world consideration**: The cost might be affected by the type of terrain, number of corner posts needed, and gates or access points.

## Problem-Solving with Perimeter 🧩

When solving real-life perimeter problems, follow these steps:

1. **Identify the shape** of the area you're working with.
2. **Measure all sides** or use the appropriate formula for the shape.
3. **Add up all measurements** to find the total perimeter.
4. **Consider practical adjustments** like doors, gates, or extra material needed.
5. **Calculate costs** if materials are priced per unit length.

## Sample Questions with Solutions 📝

**Question 1**: A rectangular garden plot is 12 meters long and 8 meters wide. How much fencing is needed to go around it?

**Solution**:
Perimeter = 2 × (length + width)
Perimeter = 2 × (12 + 8) = 2 × 20 = 40 meters
So, 40 meters of fencing is needed.

**Question 2**: A circular pond has a diameter of a 7 meters. How much decorative stone border is needed to go around it?

**Solution**:
Perimeter (circumference) = π × diameter
Perimeter = 3.14 × 7 ≈ 22 meters
So, approximately 22 meters of stone border is needed.

**Question 3**: A square playground has a perimeter of 36 meters. What is the length of each side?

**Solution**:
Perimeter of square = 4 × side length
36 = 4 × side length
Side length = 36 ÷ 4 = 9 meters
So, each side of the playground is 9 meters long.

## Tips for Working with Perimeter in Real Life 💡

1. **Always measure carefully** - small errors can add up!
2. **Buy a little extra material** - it's better to have too much than too little.
3. **Consider obstacles** like doors or gates that might affect your calculations.
4. **Remember the right formula** for the shape you're working with.
5. **Use proper units** - make sure all measurements are in the same unit (meters, centimeters, etc.)
6. **Make a sketch** of the area to help visualize the problem.

## Summary 📌

Perimeter is much more than just a mathematical concept – it's a practical tool we use every day! From farmers fencing their fields to decorators adding borders, understanding perimeter helps us:

- Calculate how much material we need for borders and boundaries
- Determine costs for linear materials
- Plan construction and decoration projects efficiently
- Understand the size and space of different areas

Next time you see a fence, a picture frame, or a decorative border, remember that perimeter math helped create it! 🌟

Remember: Perimeter = The total distance around a shape! 🔄
`,
  quiz: {
    questions: [...easyQuestions, ...mediumQuestions]
  }
};
