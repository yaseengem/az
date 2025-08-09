import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
  id: 'cl10_ch9_t3',
  topicNumber: 3,
  topicName: "Problems on Heights and Distances",
  duration: 45,
  description: "Application of trigonometry to solve real-life problems involving heights and distances using angles of elevation and depression",
  explanation: `
# Problems on Heights and Distances 🏔️

Having learned about trigonometric ratios and identities, we can now apply these concepts to solve real-world problems involving heights and distances. These applications form an important part of practical trigonometry. Let's explore how to measure heights of tall objects or distances to inaccessible points! 📏🔍

## Key Concepts in Heights and Distances 📚

### Angle of Elevation and Depression 📐

Before we dive into problem-solving, let's understand two fundamental angles:

- **Angle of Elevation** 👆: The angle formed between the horizontal line and the line of sight when looking upward. For example, when you look up at the top of a building, the angle formed is the angle of elevation.

![Angle of Elevation](https://example.com/angle-of-elevation.png)

- **Angle of Depression** 👇: The angle formed between the horizontal line and the line of sight when looking downward. For example, when you look down from a tall building to an object on the ground, the angle formed is the angle of depression.

![Angle of Depression](https://example.com/angle-of-depression.png)

> **Important**: The angle of elevation and the angle of depression between the same two points are equal due to alternate angles formed by a transversal.

### Problem-Solving Methodology 🛠️

When solving problems on heights and distances, follow these steps:

1. **Draw a clear diagram** 📝 representing the situation
2. **Label known quantities** (angles, heights, distances)
3. **Identify the unknown variable** (what you're trying to find)
4. **Select the appropriate trigonometric ratio** (sine, cosine, or tangent)
5. **Set up the equation** and solve for the unknown

## Common Scenarios and Applications 🌎

### Scenario 1: Finding Height Using Angle of Elevation ⛰️

This is the most common application where we need to find the height of an object (like a building, tower, or mountain) when we know:
- The distance from the observer to the base of the object
- The angle of elevation from the observer to the top of the object

**Example 1**: A person standing 25 meters away from a building observes the top of the building at an angle of elevation of 30°. What is the height of the building?

**Solution**:
- Let the height of the building be 'h' meters
- From the diagram, we have:
  - Adjacent side = 25 meters
  - Opposite side = h meters
  - Angle of elevation = 30°
- Using tangent ratio: tan(30°) = Opposite/Adjacent = h/25
- We know that tan(30°) = 1/√3
- Therefore, h/25 = 1/√3
- h = 25/√3 = 25√3/3 ≈ 14.43 meters

### Scenario 2: Finding Distance Using Angle of Depression 🌊

In this scenario, we find the distance to an object when we know:
- The height of the observation point
- The angle of depression to the object

**Example 2**: From the top of a lighthouse 50 meters high, the angle of depression of a boat in the sea is 30°. How far is the boat from the foot of the lighthouse?

**Solution**:
- Let the distance of the boat from the foot of the lighthouse be 'x' meters
- From the diagram, we have:
  - Adjacent side = x meters
  - Opposite side = 50 meters
  - Angle of depression = 30°
- Using tangent ratio: tan(30°) = Opposite/Adjacent = 50/x
- We know that tan(30°) = 1/√3
- Therefore, 50/x = 1/√3
- x = 50√3 ≈ 86.6 meters

### Scenario 3: Observer at a Height 🏞️

Sometimes the observer is also at some height above the ground, requiring us to account for this additional factor.

**Example 3**: A person 1.5 meters tall stands 20 meters away from a building. The angle of elevation from the eye level of the person to the top of the building is 60°. What is the height of the building?

**Solution**:
- Let the height of the building be 'h' meters
- From the diagram, we have:
  - Adjacent side = 20 meters
  - Opposite side = (h - 1.5) meters (the difference between building height and eye level)
  - Angle of elevation = 60°
- Using tangent ratio: tan(60°) = Opposite/Adjacent = (h - 1.5)/20
- We know that tan(60°) = √3
- Therefore, (h - 1.5)/20 = √3
- h - 1.5 = 20√3
- h = 20√3 + 1.5 ≈ 36.1 meters

### Scenario 4: Finding Heights Using Two Observation Points 👀

When observations are made from two different points, we can set up a system of equations.

**Example 4**: From a point on the ground, the angle of elevation of the top of a tower is 30°. On moving 40 meters towards the tower, the angle of elevation becomes 60°. Find the height of the tower.

**Solution**:
- Let the height of the tower be 'h' meters and initial distance be 'x' meters
- First observation: tan(30°) = h/x = 1/√3
- Second observation: tan(60°) = h/(x - 40) = √3
- From the first equation: h = x/√3
- Substituting in the second equation: (x/√3)/(x - 40) = √3
- x/√3 = √3(x - 40)
- x = 3(x - 40)
- x = 3x - 120
- 2x = 120
- x = 60 meters
- Therefore, h = 60/√3 = 20√3 ≈ 34.64 meters

## Special Cases and Tricks 🧩

### Case 1: Objects at Different Levels 📈

When dealing with objects at different heights or on uneven ground, break the problem into parts.

**Example 5**: Two buildings of heights 30m and 50m stand on the same side of a road. From a point on the road, the angles of elevation of the tops of the buildings are 30° and 45° respectively. Find the distance between the buildings.

**Solution**:
- Let the distance from the observation point to the first building be 'x' meters
- tan(30°) = 30/x ⟹ x = 30√3
- tan(45°) = 50/y ⟹ y = 50
- Distance between buildings = 30√3 - 50 meters

### Case 2: Using Angles of Elevation and Depression Together 🔄

Some problems require using both angles of elevation and depression.

**Example 6**: From the top of a 75m high lighthouse, the angle of depression of a ship is 30°. Calculate the distance of the ship from the lighthouse.

**Solution**:
- Let the distance be 'x' meters
- tan(30°) = 75/x = 1/√3
- x = 75√3 ≈ 130 meters

## Common Mistakes to Avoid ⚠️

1. **Forgetting to account for observer's height**: When the problem mentions eye level, remember to add the observer's height to the final answer.
2. **Confusing angles**: Make sure to correctly identify whether you're working with an angle of elevation or depression.
3. **Not drawing a diagram**: Always sketch the situation to visualize the problem correctly.
4. **Using the wrong trigonometric ratio**: Select the appropriate ratio based on the sides you know and the angle given.
5. **Converting to the wrong unit**: Ensure all measurements are in the same unit before performing calculations.

## Practical Applications 🌐

Understanding heights and distances has numerous practical applications:
- **Navigation and Surveying** 🧭: Surveyors use these techniques to measure land elevations
- **Aviation** ✈️: Pilots calculate distances and angles during landing and takeoff
- **Architecture** 🏛️: Architects measure building heights and distances for design and construction
- **Astronomy** 🔭: Astronomers determine distances to celestial bodies
- **Military Applications** 🎯: Range finding and targeting systems use similar principles

## Practice Problems 🏋️‍♀️

**Problem 1**: From a point on the ground 20 meters away from the foot of a tower, the angle of elevation of the top of the tower is 60°. Find the height of the tower.

**Solution**: Using tan(60°) = h/20 = √3, we get h = 20√3 ≈ 34.64 meters.

**Problem 2**: A ladder leaning against a wall makes an angle of 60° with the ground. If the foot of the ladder is 2 meters away from the wall, find the length of the ladder.

**Solution**: Using sin(60°) = l/h = √3/2, and cos(60°) = 2/l = 1/2, we get l = 4 meters.

**Problem 3**: The angle of elevation of the top of a building from a point on the ground is 45°. On moving 10 meters closer to the building, the angle of elevation becomes 60°. Find the height of the building.

**Solution**: If h is the height and d is the initial distance, then:
- tan(45°) = h/d = 1
- tan(60°) = h/(d-10) = √3
- From the first equation: h = d
- Substituting in the second: d/(d-10) = √3
- d = √3(d-10)
- d = √3d - 10√3
- d - √3d = -10√3
- d(1 - √3) = -10√3
- d = 10√3/(√3-1) = 10√3(√3+1)/(3-1) = 10(3+√3)/2
- h = d = 10(3+√3)/2 ≈ 18.66 meters

## Tips for Solving Heights and Distances Problems 💡

1. **Always draw a diagram** and label all the given information
2. **Identify what you're looking for** and which trigonometric ratio will help you find it
3. **Remember the standard values** of trigonometric ratios (30°, 45°, 60°)
4. **Check your answer's feasibility** - does it make physical sense?
5. **Use the Pythagorean theorem** when you have right triangles but no angles
6. **Consider special cases** like when the observer stands between two objects

## Summary ✨

In this topic, we've explored how trigonometry can be applied to solve real-life problems involving heights and distances:

1. We learned about angles of elevation and depression
2. We studied various scenarios and methodologies for solving height and distance problems
3. We explored special cases and common pitfalls
4. We practiced with examples to build problem-solving skills

Remember, the key to mastering these problems lies in careful diagramming, correctly identifying the trigonometric ratios needed, and methodically solving the resulting equations.

By mastering the concepts in this topic, you've gained powerful tools for solving practical problems in surveying, navigation, engineering, and many other fields. These skills demonstrate how mathematical principles can be directly applied to real-world situations, allowing us to measure and calculate distances that would otherwise be difficult or impossible to measure directly. 📐🔢🌟
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
