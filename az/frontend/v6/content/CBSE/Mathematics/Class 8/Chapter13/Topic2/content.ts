import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const content: TopicContent = {
    id: "cl8_ch13_t2",
    topicNumber: 2,
    topicName: "Plotting points on Cartesian plane",
    duration: 45,
    description: "Learn how to plot and locate points on a Cartesian coordinate plane using ordered pairs (x, y).",
    explanation: `The Cartesian plane, also known as the coordinate plane, is a fundamental tool in mathematics that helps us precisely locate points and visualize geometric shapes. Let's explore how to plot and understand points on this plane.

Key Components of the Cartesian Plane:

1. Axes
- The horizontal line is called the x-axis
- The vertical line is called the y-axis
- These axes intersect at a point called the origin
- The origin has coordinates (0, 0)

2. Coordinates
- Every point on the plane is described by an ordered pair (x, y)
- The x-coordinate tells us how far left (-) or right (+) from the y-axis
- The y-coordinate tells us how far down (-) or up (+) from the x-axis
- Coordinates are always written in parentheses with x first, then y: (x, y)

3. Quadrants
The axes divide the plane into four regions called quadrants:
- First Quadrant (I): Points with (+x, +y) coordinates
- Second Quadrant (II): Points with (-x, +y) coordinates
- Third Quadrant (III): Points with (-x, -y) coordinates
- Fourth Quadrant (IV): Points with (+x, -y) coordinates

How to Plot Points:

1. Start at the origin (0, 0)
2. Move horizontally first:
   - Right for positive x
   - Left for negative x
3. Then move vertically:
   - Up for positive y
   - Down for negative y
4. Mark the point at the final position

Example 1:
To plot point A(3, 2):
- Start at origin (0, 0)
- Move 3 units right (x = 3)
- Move 2 units up (y = 2)
- Mark point A

Example 2:
To plot point B(-2, -3):
- Start at origin (0, 0)
- Move 2 units left (x = -2)
- Move 3 units down (y = -3)
- Mark point B

Special Cases:

1. Points on Axes:
- Points on x-axis have y = 0, like (4, 0), (-3, 0)
- Points on y-axis have x = 0, like (0, 5), (0, -2)

2. Origin:
- The point (0, 0) is where both axes meet
- It's the reference point for all measurements

3. Equal Coordinates:
- Points where x = y lie on a 45° line through origin
- Examples: (1, 1), (-2, -2), (3, 3)

Common Applications:

1. Geometry
- Plotting shapes and finding their properties
- Measuring distances between points
- Finding midpoints of line segments

2. Real-world Uses
- Maps and navigation (GPS coordinates)
- Computer graphics (screen coordinates)
- Data visualization (graphs and charts)

Practice Tips:

1. Grid Paper Exercise
- Use graph paper to practice plotting points
- Draw axes and mark scale clearly
- Plot points in different quadrants

2. Common Mistakes to Avoid
- Don't swap x and y coordinates
- Remember signs (+ or -) matter
- Always start from origin when counting

3. Verification Method
- After plotting, count back to origin
- Check if coordinates match the point
- Ensure you're in the correct quadrant

Sample Questions:

1. Plot these points and identify their quadrants:
   A(4, 3), B(-2, 5), C(-3, -1), D(2, -4)

2. Find the coordinates of points:
   - 3 units right and 2 units up from origin
   - 4 units left and 3 units down from origin

3. Identify points that are:
   - On the x-axis
   - On the y-axis
   - Equal distance from both axes

Summary:
- The Cartesian plane uses two perpendicular axes
- Points are located using ordered pairs (x, y)
- Four quadrants have different coordinate signs
- Plotting involves moving horizontally then vertically
- Real-world applications include mapping and graphics

Remember: Practice is key to mastering coordinate plotting. Start with simple points in the first quadrant, then gradually work with negative coordinates and more complex positions. 📊`,
    quiz: {
        questions: [...easyQuestions, ...mediumQuestions]
    }
}; 