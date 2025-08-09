import { QuizQuestion, ChapterContent, TopicContent } from '../../../../types';

// Use webpack/metro context to get all topic content files dynamically
// This scans for all content.ts files one level down in Topic* folders
const topicContexts = require.context('./', true, /Topic\d+\/content\.ts$/);

// Function to dynamically get all available topics
const getAllTopics = (): TopicContent[] => {
  const topics: TopicContent[] = [];
  
  // Process each found topic content file
  topicContexts.keys().forEach((key: string) => {
    const topicModule = topicContexts(key);
    
    // Extract the topic number from the path (e.g., "./Topic5/content.ts" -> "5")
    const topicNumberMatch = key.match(/Topic(\d+)/);
    if (topicNumberMatch && topicNumberMatch[1]) {
      const topicNumber = parseInt(topicNumberMatch[1], 10);
      
      // Find the topic content in the module exports
      // It could be either the default export or a named export like "Topic5Content"
      let topicContent = topicModule.default;
      if (!topicContent) {
        const exportName = `Topic${topicNumber}Content`;
        topicContent = topicModule[exportName];
      }
      
      if (topicContent) {
        topics.push(topicContent);
      }
    }
  });
  
  // Sort topics by topic number for consistency
  return topics.sort((a, b) => a.topicNumber - b.topicNumber);
};

export const Chapter3Content: ChapterContent = {
    id: "cl9_ch3",
    chapterNumber: 3,
    chapterName: "Coordinate Geometry",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Introduction to Coordinate Geometry",
        "Cartesian Coordinate System",
        "Plotting Points on a Plane",
        "Distance Formula",
        "Section Formula",
        "Area of a Triangle",
        "Applications of Coordinate Geometry",
        "Problem Solving with Coordinate Geometry",
        "Real-World Applications"
    ],
    description: "Study of coordinate geometry including cartesian system, distance formula, and applications",    explanation: `
# Coordinate Geometry 📊📍

## Introduction to Coordinate Geometry
Coordinate Geometry combines the visual power of geometry 📐 with the computational power of algebra 🧮! It allows us to represent geometric shapes and solve geometric problems using algebraic methods. This revolutionary approach was developed by the French mathematician René Descartes in the 17th century, which is why the coordinate system is often called the "Cartesian coordinate system." 🌟

## The Cartesian Coordinate System
The Cartesian coordinate system consists of two perpendicular number lines that intersect at a point called the origin (0,0). The horizontal line is called the x-axis ↔️, and the vertical line is called the y-axis ↕️. These two axes divide the plane into four regions called quadrants, numbered counterclockwise from I to IV.

Every point in the plane can be uniquely represented by an ordered pair of numbers (x, y), where:
- x is the distance from the y-axis (positive if to the right, negative if to the left)
- y is the distance from the x-axis (positive if above, negative if below)

For example, the point (3, 4) is located 3 units to the right of the y-axis and 4 units above the x-axis.

## Plotting Points on a Plane
To plot a point (x, y) on the coordinate plane:
1. Start at the origin (0, 0) 🏁
2. Move x units horizontally (right if positive, left if negative) ↔️
3. From there, move y units vertically (up if positive, down if negative) ↕️

Points in different quadrants have different sign patterns:
- Quadrant I: Both x and y are positive (+, +)
- Quadrant II: x is negative, y is positive (-, +)
- Quadrant III: Both x and y are negative (-, -)
- Quadrant IV: x is positive, y is negative (+, -)

If a point has one coordinate equal to zero, it lies on an axis, not in any quadrant.

## Distance Formula
One of the key advantages of coordinate geometry is that it gives us formulas to calculate geometric properties. The distance between two points (x₁, y₁) and (x₂, y₂) can be calculated using the Pythagorean theorem:

Distance = √[(x₂ - x₁)² + (y₂ - y₁)²]

For example, the distance between points (3, 4) and (7, 9) is:
d = √[(7 - 3)² + (9 - 4)²] = √[16 + 25] = √41 ≈ 6.40 units

## Section Formula
The section formula helps us find the coordinates of a point that divides a line segment in a given ratio.

If a point P(x, y) divides the line segment joining points A(x₁, y₁) and B(x₂, y₂) in the ratio m:n, then:

x = (mx₂ + nx₁)/(m + n)
y = (my₂ + ny₁)/(m + n)

For the special case of the midpoint (ratio 1:1), the formula simplifies to:
x = (x₁ + x₂)/2
y = (y₁ + y₂)/2

## Area of a Triangle
Using coordinate geometry, we can find the area of a triangle if we know the coordinates of its three vertices.

For a triangle with vertices (x₁, y₁), (x₂, y₂), and (x₃, y₃), the area can be calculated using the formula:

Area = (1/2) × |x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|

The vertical bars indicate that we take the absolute value of the expression.

## Collinearity of Points
Three or more points are said to be collinear if they all lie on the same straight line. Using coordinate geometry, we can check for collinearity in several ways:

1. If the slopes of consecutive line segments are equal
2. If the area of the triangle formed by the three points is zero
3. By using the distance properties

## Applications of Coordinate Geometry
Coordinate geometry has numerous real-world applications:

1. **Navigation and GPS Systems** 🛰️: GPS uses coordinate geometry to pinpoint locations on Earth's surface.

2. **Computer Graphics** 🖥️: Video games, animations, and design software use coordinate systems to render images and create visual effects.

3. **Architecture and Engineering** 🏗️: Architects and engineers use coordinate geometry to design buildings, bridges, and other structures.

4. **Robotics** 🤖: Robots use coordinate systems to navigate and manipulate objects in space.

5. **Physics and Mechanics** 🧲: Coordinate geometry is essential for analyzing motion, forces, and trajectories.

## Problem-Solving Approach in Coordinate Geometry
When solving coordinate geometry problems, follow these general steps:

1. Draw and label the coordinate plane when needed 📝
2. Plot the given points precisely
3. Identify what formula or property to apply
4. Calculate carefully, keeping track of signs
5. Verify your answer by checking if it makes geometric sense

## Example Problems
**Problem 1**: Find the coordinates of the midpoint of the line segment joining points A(-2, 5) and B(6, -3).
**Solution**: Using the midpoint formula:
x = (-2 + 6)/2 = 4/2 = 2
y = (5 + (-3))/2 = 2/2 = 1
Therefore, the midpoint is (2, 1).

**Problem 2**: Calculate the distance between points P(3, -4) and Q(-2, 1).
**Solution**: Using the distance formula:
d = √[((-2) - 3)² + (1 - (-4))²] = √[25 + 25] = √50 = 5√2 units

## Summary
In this chapter, we've explored the fundamental concepts of coordinate geometry:
- The Cartesian coordinate system with its axes, origin, and quadrants
- How to plot points and interpret their coordinates
- The distance formula to find the distance between two points
- The section formula to find points that divide line segments in given ratios
- How to calculate the area of a triangle using the coordinates of its vertices
- How to determine if points are collinear
- Real-world applications of coordinate geometry

These concepts provide a powerful bridge between algebra and geometry, allowing us to solve geometric problems using algebraic methods and vice versa. Mastering coordinate geometry opens doors to more advanced topics like analytical geometry, calculus, and various applications in science and engineering. 🌟

Remember, practice is key to becoming proficient in coordinate geometry! Work through various problems to strengthen your understanding of these concepts. 📝✨`,quiz: {
        questions: [
            {
                id: "cl9_ch3_q1",
                type: "mcq",
                question: "What is the distance between the points (3, 4) and (0, 0)?",
                options: ["3", "4", "5", "7"],
                correctAnswer: "5",
                explanation: "Using the distance formula √[(x₂-x₁)² + (y₂-y₁)²] = √[(0-3)² + (0-4)²] = √(9+16) = √25 = 5",
                difficulty: "medium",
                marks: 2,
                recommendedTime: 60
            }
        ]
    }
};
