import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl10_ch9_t1',
  topicNumber: 1,
  topicName: "Problems on heights and distances",
  duration: 45,
  description: "Applying trigonometric concepts to solve practical problems involving heights and distances using angles of elevation, depression, and trigonometric ratios.",
  explanation: `
# Problems on Heights and Distances 📐

Have you ever wondered how to find the height of a tall building or mountain without actually climbing it? Or how to calculate the distance to a ship at sea? This is where trigonometry becomes incredibly practical! 🌟 In this topic, we'll learn how to apply trigonometric ratios to solve real-world problems involving inaccessible heights and distances.

## Basic Concepts and Terminology 📚

Before diving into problem-solving, let's understand some key terms:

### 1. Angle of Elevation 🔼
The angle of elevation is the angle formed by the horizontal line of sight and the line of sight to an object above the horizontal level.

**Example**: When you look up at the top of a building, the angle formed between your line of sight and the horizontal is the angle of elevation.

### 2. Angle of Depression 🔽
The angle of depression is the angle formed by the horizontal line of sight and the line of sight to an object below the horizontal level.

**Example**: When you look down from a tall building to an object on the ground, the angle formed between your line of sight and the horizontal is the angle of depression.

### 3. Line of Sight 👁️
The line of sight is the straight line from the observer's eye to the object being viewed.

**Key Point** ⚠️: The angle of elevation and angle of depression between two points are equal when measured from opposite positions.

## The Trigonometric Approach 🧮

We primarily use three trigonometric ratios to solve height and distance problems:

1. **Sine (sin θ)** = Perpendicular / Hypotenuse
2. **Cosine (cos θ)** = Base / Hypotenuse
3. **Tangent (tan θ)** = Perpendicular / Base

For most height and distance problems, we'll be working with right triangles where:
- The perpendicular represents the height
- The base represents the horizontal distance
- The hypotenuse represents the slant distance

## Problem-Solving Method 🛠️

When tackling height and distance problems, follow these steps:

1. Draw a clear diagram of the situation
2. Label all known values and the unknown quantity you need to find
3. Identify the trigonometric ratio that relates the known and unknown values
4. Set up and solve the equation

Let's see this method in action with some examples!

## Example 1: Finding the Height of a Tower 🗼

**Problem**: From a point on the ground, the angle of elevation of the top of a tower is 30°. If the point is 50 meters away from the base of the tower, find the height of the tower.

**Solution**:
- We know the angle of elevation (θ = 30°) and the distance from the point to the base of the tower (d = 50m)
- We need to find the height (h) of the tower
- Since we know the angle and the adjacent side, we use the tangent ratio:
  tan 30° = h/50
- Therefore, h = 50 × tan 30° = 50 × (1/√3) = 50/√3 ≈ 28.87 meters

## Example 2: Finding the Distance to a Building 🏢

**Problem**: The angle of elevation of the top of a building from a point on the ground is 45°. If the height of the building is 40 meters, find the distance of the point from the building.

**Solution**:
- We know the angle of elevation (θ = 45°) and the height of the building (h = 40m)
- We need to find the distance (d) from the point to the base of the building
- Using tangent ratio:
  tan 45° = 40/d
- Therefore, d = 40/tan 45° = 40/1 = 40 meters

## Example 3: Finding Heights Using Two Angles 📏

**Problem**: From a point P on level ground, the angle of elevation of the top of a tower is 30°. If the observer moves 40 meters towards the tower to point Q, the angle of elevation becomes 60°. Find the height of the tower.

**Solution**:
- Let the height of the tower be h meters and the distance of point Q from the tower be x meters
- From point Q: tan 60° = h/x
- From point P: tan 30° = h/(x+40)
- From the first equation: h = x × tan 60° = x × √3
- Substituting in the second equation: tan 30° = (x × √3)/(x+40)
- 1/√3 = (x × √3)/(x+40)
- x+40 = x × √3 × √3 = 3x
- 40 = 2x
- x = 20 meters
- Therefore, h = 20 × √3 = 34.64 meters

## Example 4: Problems with Angles of Depression 🏝️

**Problem**: From the top of a lighthouse 60 meters high, the angle of depression of a boat is 30°. Find the distance of the boat from the base of the lighthouse.

**Solution**:
- The angle of depression from the lighthouse is 30°, so the angle of elevation from the boat to the lighthouse is also 30°
- We know the height (h = 60m) and need to find the distance (d)
- Using tangent ratio:
  tan 30° = 60/d
- Therefore, d = 60/tan 30° = 60 × √3 = 103.92 meters

## Special Cases and Variations 🔄

### 1. Observer at a Height

When an observer is at a height (not at ground level), we need to adjust our approach slightly.

**Example**: An observer 1.5 meters tall is standing 30 meters away from a building. The angle of elevation from the observer's eye to the top of the building is 45°. Find the height of the building.

**Solution**:
- Let the height of the building be h meters
- Using tangent: tan 45° = (h-1.5)/30
- Therefore, h-1.5 = 30 × 1 = 30
- h = 31.5 meters

### 2. Problems Involving Two Objects

Sometimes, we need to find information about two objects using the angles of elevation/depression.

**Example**: From a point P, the angles of elevation of the tops of two towers are 45° and 60°. If the towers are 100 meters apart and the line joining their bases passes through P, find the heights of the towers.

**Solution**:
- Let the heights of the towers be h₁ and h₂, and the distances from P be d₁ and d₂, where d₁ + d₂ = 100
- tan 45° = h₁/d₁, so h₁ = d₁
- tan 60° = h₂/d₂, so h₂ = d₂√3
- Using the given condition: d₁ + d₂ = 100
- Through algebraic manipulation, we get d₁ = 100/(1+√3) and d₂ = 100√3/(1+√3)
- Therefore, h₁ = 100/(1+√3) ≈ 36.6 meters and h₂ = 100√3/(1+√3) ≈ 63.4 meters

## Complex Scenarios 🧩

### 1. Moving Observer Problems

If an observer is moving and observes the angle of elevation changing, we can determine additional information.

**Example**: A person walks towards a tower at a uniform speed. Initially, the angle of elevation of the top of the tower is 30°. After walking 100 meters towards the tower, the angle of elevation becomes 60°. Find the height of the tower.

**Solution**:
- Let the height of the tower be h and the initial distance be d
- Initial position: tan 30° = h/d
- After moving: tan 60° = h/(d-100)
- From the first equation: h = d × tan 30° = d/√3
- From the second equation: tan 60° = (d/√3)/(d-100)
- √3 = d/[√3(d-100)]
- 3(d-100) = d
- 3d-300 = d
- 2d = 300
- d = 150
- Therefore, h = 150/√3 = 50√3 = 86.6 meters

### 2. Problems with Shadows

Using shadows and the position of the sun can help determine heights.

**Example**: A vertical pole casts a shadow 10 meters long when the angle of elevation of the sun is 45°. Find the height of the pole.

**Solution**:
- Using tan 45° = h/10
- h = 10 × 1 = 10 meters

## Practical Applications 🌎

The principles we've learned have numerous real-world applications:

1. **Navigation and Surveying** 🧭: Determining distances across rivers or to inaccessible places
2. **Architecture and Construction** 🏗️: Calculating heights of buildings and structures
3. **Astronomy** 🔭: Measuring distances to celestial bodies
4. **Military Applications** 🪖: Range finding and targeting
5. **Geography** 🗺️: Measuring heights of mountains and depths of valleys

## Common Mistakes to Avoid ⚠️

1. **Confusing Angles**: Make sure you clearly identify whether you're working with angles of elevation or depression
2. **Unit Errors**: Ensure all measurements are in the same unit system
3. **Reference Point Confusion**: Be clear about where measurements are taken from (ground level, eye level, etc.)
4. **Diagram Issues**: Always draw and label diagrams carefully to avoid errors

## Summary ✨

In this topic, we've explored how to apply trigonometry to solve practical problems involving heights and distances. Here's what we've learned:

1. **Key Concepts**:
   - Angle of elevation and angle of depression
   - Line of sight
   - Using trigonometric ratios in right triangles

2. **Problem-Solving Approach**:
   - Draw clear diagrams
   - Identify known values and unknowns
   - Apply appropriate trigonometric ratios
   - Solve algebraically

3. **Types of Problems**:
   - Finding heights of structures
   - Finding distances to objects
   - Dealing with moving observers
   - Working with multiple objects

By mastering these techniques, you'll be able to solve a wide range of practical problems involving inaccessible heights and distances. Remember, practice is key to becoming proficient with these applications of trigonometry!

## Practice Problems 💪

1. From a point on the ground 20 meters away from a building, the angle of elevation of the top of the building is 30°. Find the height of the building.

2. The angle of elevation of the top of a tower from a point on the ground is 45°. If the point is at a distance of 40 meters from the base of the tower, find the height of the tower.

3. From the top of a cliff 60 meters high, the angle of depression of a boat is 30°. Find the distance of the boat from the base of the cliff.

4. A ladder leaning against a wall makes an angle of 60° with the horizontal ground. If the foot of the ladder is 2.5 meters away from the wall, find the length of the ladder.

5. From a point on level ground, the angles of elevation of the bottom and top of a transmission tower on the top of a hill are 30° and 45° respectively. If the height of the tower is 50 meters, find the height of the hill.

Remember, heights and distances problems are all about applying trigonometric concepts to real-life situations. With practice, you'll find these problems both interesting and manageable! 🎯
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
