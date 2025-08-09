import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const content: TopicContent = {
  id: 'cl10_ch16_t1',
  topicNumber: 1,
  topicName: 'Coordinates',
  duration: 45,
  description: 'Introduction to coordinate geometry, distance formula, section formula, and area of triangles using coordinates.',
  explanation: `
# Coordinates

Coordinate geometry combines algebra and geometry by using a coordinate system to represent geometric objects. It allows us to:
- Represent points in a plane using ordered pairs (x, y)
- Calculate distances between points
- Divide line segments in given ratios
- Find areas of triangles and other polygons
- Determine if points are collinear
- Find midpoints and centroids

## Coordinate System
- A coordinate system consists of two perpendicular number lines (axes) that intersect at the origin (0, 0)
- The horizontal axis is called the x-axis
- The vertical axis is called the y-axis
- The plane is divided into four quadrants:
  - Quadrant I: Points with positive x and positive y
  - Quadrant II: Points with negative x and positive y
  - Quadrant III: Points with negative x and negative y
  - Quadrant IV: Points with positive x and negative y

## Distance Formula
The distance between two points (x₁, y₁) and (x₂, y₂) is:
d = √[(x₂ - x₁)² + (y₂ - y₁)²]

## Section Formula
If a point P divides the line segment joining points A(x₁, y₁) and B(x₂, y₂) in the ratio m:n, then the coordinates of P are:
P = ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n))

For the midpoint of a line segment (when m = n), this simplifies to:
Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)

## Area of a Triangle
The area of a triangle with vertices (x₁, y₁), (x₂, y₂), and (x₃, y₃) is:
Area = (1/2)|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|

## Centroid of a Triangle
The centroid of a triangle with vertices (x₁, y₁), (x₂, y₂), and (x₃, y₃) has coordinates:
Centroid = ((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3)

## Collinearity of Points
Three points (x₁, y₁), (x₂, y₂), and (x₃, y₃) are collinear if:
Area of the triangle formed by them is zero, or
The slopes of the lines joining any two pairs of points are equal.
  `,
  quiz: {
    questions: [...easyQuestions, ...mediumQuestions]
  }
};
