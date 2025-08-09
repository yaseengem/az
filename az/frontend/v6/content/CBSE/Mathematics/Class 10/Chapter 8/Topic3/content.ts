import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
  id: 'cl10_ch8_t3',
  topicNumber: 3,
  topicName: "Heights and Distances",
  duration: 45,
  description: "Application of trigonometry to solve problems involving heights and distances of objects viewed at an angle",
  explanation: `
# Heights and Distances 📏🔭

## Introduction 🌟

Heights and distances is an exciting application of trigonometry that helps us measure objects that are difficult to reach physically! 🏔️ Whether it's calculating the height of a tall building, measuring the distance across a river, or finding how far a ship is from the shore - trigonometric ratios provide elegant solutions to these real-world problems.

In this topic, we'll learn how to use the concepts of angles of elevation, angles of depression, and trigonometric ratios to determine unknown heights and distances. Let's explore this practical application of mathematics! 📐

## Key Concepts 🔑

### 1. Angle of Elevation ⬆️

The angle of elevation is the angle formed between the horizontal line of sight and the line of sight to an object above the horizontal.

**Example**: When you look up at the top of a building from ground level, the angle your line of sight makes with the horizontal is the angle of elevation.

![Angle of Elevation](https://someimageurl.com/angle-of-elevation.png)

### 2. Angle of Depression ⬇️

The angle of depression is the angle formed between the horizontal line of sight and the line of sight to an object below the horizontal.

**Example**: When you look down at an object from the top of a cliff, the angle your line of sight makes with the horizontal is the angle of depression.

![Angle of Depression](https://someimageurl.com/angle-of-depression.png)

### 3. Line of Sight 👁️

The line of sight is the straight line from the observer's eye to the object being viewed.

## Basic Principles 📚

When solving heights and distances problems, we follow these principles:

1. **Identify what is given and what needs to be found** 🔍
   - Heights, distances, angles of elevation/depression

2. **Draw a clear diagram** 📉
   - Represent the situation with a right-angled triangle
   - Label known and unknown quantities

3. **Apply the appropriate trigonometric ratio** 📊
   - sin θ = opposite / hypotenuse
   - cos θ = adjacent / hypotenuse
   - tan θ = opposite / adjacent

4. **Solve the equation** ✅
   - Substitute the values and calculate

## Standard Formulas 📋

For a right-angled triangle with angle θ at the base:

1. **Finding height when distance is known**:
   - Height = Distance × tan(angle of elevation)

2. **Finding distance when height is known**:
   - Distance = Height / tan(angle of elevation)
   - Distance = Height × cot(angle of elevation)

3. **Finding height when angle of depression is known**:
   - Height = Distance × tan(angle of depression)

4. **Finding distance across inaccessible regions**:
   - Use similar triangles or multiple viewing points

## Common Scenarios and Solutions 🌍

### Scenario 1: Finding the Height of a Tall Object 🏢

**Problem**: From a point on the ground, the angle of elevation of the top of a tower is 30°. If the distance from the point to the base of the tower is 50 meters, find the height of the tower.

**Solution**:
- Let h be the height of the tower
- We know the angle of elevation θ = 30° and distance d = 50m
- Using tan(30°) = h/50
- h = 50 × tan(30°) = 50 × (1/√3) = 50/√3 meters ≈ 28.87 meters

### Scenario 2: Finding Distance Using Angle of Depression 🏝️

**Problem**: From the top of a lighthouse 80 meters high, the angle of depression of a ship is 45°. How far is the ship from the lighthouse?

**Solution**:
- Let d be the horizontal distance from the lighthouse to the ship
- We know the angle of depression θ = 45° and height h = 80m
- Using tan(45°) = 80/d
- d = 80/tan(45°) = 80/1 = 80 meters

### Scenario 3: Objects at Different Levels 🏔️

**Problem**: From a point 20 meters above ground, the angle of elevation of the top of a building is 30° and the angle of depression of the foot of the building is 45°. Find the height of the building.

**Solution**:
- Let h be the additional height of the building above the observation point
- Let d be the horizontal distance to the building
- For the angle of depression: tan(45°) = 20/d, so d = 20 meters
- For the angle of elevation: tan(30°) = h/d = h/20
- h = 20 × tan(30°) = 20/√3 meters
- Total height of building = 20 + 20/√3 meters

## Special Cases and Techniques 🧩

### 1. Multiple View Points 👀

When observations are made from two different points, we can set up equations using the relationship between the angles and distances.

**Example**: The angle of elevation of a tower from a point A is 30°. After walking 40 meters towards the tower to point B, the angle of elevation becomes 60°. Find the height of the tower.

**Solution**:
- Let h be the height of the tower and x be the distance from point B to the tower
- At point A: tan(30°) = h/(x+40)
- At point B: tan(60°) = h/x
- So h = (x+40) × tan(30°) and h = x × tan(60°)
- Setting these equal: (x+40) × tan(30°) = x × tan(60°)
- (x+40)/√3 = x√3
- (x+40) = 3x
- x = 20
- Therefore, h = 20√3 meters

### 2. Objects on the Same Level 👬

When two objects are at the same height and observed from a third point, we can use the difference or relationship between the angles.

### 3. Objects Across Inaccessible Regions 🌊

When direct measurements are impossible (like across a river), we can use observations from different points to triangulate the distance.

## Practical Applications 🛠️

Heights and distances calculations have numerous real-world applications:

1. **Architecture and Construction** 🏗️
   - Determining heights of buildings or structures
   - Planning elevation and distances

2. **Navigation and Aviation** ✈️
   - Calculating distances between landmarks
   - Determining safe approach angles for aircraft

3. **Geography and Surveying** 🌏
   - Measuring mountain heights
   - Mapping inaccessible terrain

4. **Astronomy** 🔭
   - Calculating distances to celestial objects
   - Determining angular separations

## Common Mistakes to Avoid ⚠️

1. **Mixing up angles of elevation and depression** ↕️
   - Remember: elevation is looking up, depression is looking down

2. **Not accounting for the observer's height** 👤
   - When relevant, add the observer's height to your calculations

3. **Incorrect trigonometric ratio selection** ❌
   - Double-check whether to use sine, cosine, or tangent

4. **Confusion with units** 📏
   - Maintain consistent units throughout your calculations

## Sample Problems and Solutions 🧮

### Problem 1:
A tree breaks due to a storm and the broken part bends so that the top of the tree touches the ground making an angle of 30° with the ground. The distance from the foot of the tree to the point where the top touches the ground is 8 meters. Find the height of the tree.

**Solution**:
Since the broken part creates a right-angled triangle with the ground, we can use:
tan(30°) = height/8
height = 8 × tan(30°) = 8/√3 meters ≈ 4.62 meters
Therefore, the height of the tree is 4.62 meters.

### Problem 2:
From the top of a building 60 meters high, the angles of depression of the top and bottom of another building are 30° and 60° respectively. Find the height of the other building.

**Solution**:
Let the distance between the buildings be x and height of the second building be h.
For the top: tan(30°) = x/60
For the bottom: tan(60°) = x/(60-h)
Solving: x = 60√3 and 60-h = x/√3 = 60
Therefore, h = 60 - 20√3 meters.

## Summary ✨

Heights and distances is a fascinating application of trigonometry that helps us solve real-world measurement problems. By understanding angles of elevation and depression, and applying the appropriate trigonometric ratios, we can determine heights of tall structures, distances across inaccessible regions, and solve many other practical problems.

Key points to remember:
- Angle of elevation is looking up from horizontal
- Angle of depression is looking down from horizontal
- Draw clear diagrams to visualize the problem
- Select the appropriate trigonometric ratio based on what is known and what needs to be found
- Account for the observer's height when relevant
- Practice with a variety of scenarios to build confidence in applying these concepts

With these principles and techniques, you'll be able to solve a wide range of heights and distances problems effectively! 🎯

### Additional Practice Problems:

1. From a point on the ground, the angle of elevation of the top of a tower is 45°. From another point 10 meters farther away from the base of the tower, the angle of elevation is 30°. Find the height of the tower.

2. Two ships are sailing in the sea on the same side of a lighthouse. The angles of depression of the ships from the top of the lighthouse are 45° and 30° respectively. If the height of the lighthouse is 100 meters, find the distance between the ships.

3. A man on the top of a vertical tower observes a car moving at a uniform speed coming directly towards the tower. If the angle of depression of the car changes from 30° to 45° in 12 minutes, how much more time will the car take to reach the tower?
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
