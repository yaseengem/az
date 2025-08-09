import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl6_ch12_t3',
    topicNumber: 3,
    topicName: "Applications in Maps and Scales",
    duration: 45,
    description: "Understanding how ratios and proportions are used in maps and scale drawings",
    explanation: `
# Applications in Maps and Scales 🗺️

Welcome to the fascinating world of maps and scales! 🌍 In this topic, we'll learn how ratios and proportions help us understand and create accurate maps and scale drawings. Let's explore! 🚀

## Understanding Scale 📏

Scale is a ratio that shows the relationship between measurements on a map or drawing and the actual measurements in real life. It helps us represent large objects or distances in a smaller, more manageable size.

### Types of Scale 📊

1. **Numerical Scale** 🔢
   - Written as a ratio (e.g., 1:1000)
   - Means 1 unit on the map = 1000 units in real life
   - Example: 1 cm on map = 1000 cm in real life

2. **Graphical Scale** 📐
   - A line marked with measurements
   - Shows actual distances on the map
   - Example: A line showing 1 cm = 100 m

## How to Use Scale 🧮

### Step 1: Understand the Scale Ratio
- If scale is 1:5000
- 1 cm on map = 5000 cm in real life
- 5000 cm = 50 m (converting to meters)

### Step 2: Convert Measurements
- To find real distance: Map distance × Scale
- To find map distance: Real distance ÷ Scale

### Step 3: Use Proportions
- Set up proportion: Map distance/Real distance = Scale
- Cross-multiply to find unknown values

## Real-Life Applications 🌍

1. **Reading Maps** 🗺️
   - Finding actual distances between places
   - Example: If 1 cm = 5 km, then 3 cm = 15 km

2. **Architectural Drawings** 🏗️
   - Understanding building plans
   - Example: If scale is 1:100, a 5 cm room on plan = 500 cm in real life

3. **Model Making** 🎨
   - Creating scale models of objects
   - Example: A 1:50 model of a car means the real car is 50 times larger

## Examples with Solutions 📚

### Example 1: Map Distance
**Problem**: On a map with scale 1:20000, two cities are 4 cm apart. What is the actual distance?

**Solution**:
1. Scale: 1 cm = 20000 cm
2. Actual distance = 4 × 20000 = 80000 cm
3. Convert to km: 80000 cm = 0.8 km

### Example 2: Scale Drawing
**Problem**: A building is 30 m tall. If drawn at scale 1:100, how tall will it be in the drawing?

**Solution**:
1. Scale: 1 cm = 100 cm
2. Convert 30 m to cm: 3000 cm
3. Drawing height = 3000 ÷ 100 = 30 cm

## Common Mistakes to Avoid ❌

1. **Unit Confusion** 📏
   - Always check and convert units
   - Example: Don't mix cm with m or km

2. **Scale Direction** 🔄
   - Remember which way to multiply/divide
   - Map to real: Multiply by scale
   - Real to map: Divide by scale

3. **Proportion Setup** 📊
   - Make sure to set up proportions correctly
   - Map distance/Real distance = Scale

## Practice Problems 🏋️‍♀️

1. **Problem**: On a map with scale 1:5000, a park is 6 cm long. What is its actual length?
   - **Solution**: 6 × 5000 = 30000 cm = 300 m

2. **Problem**: A real bridge is 120 m long. If drawn at scale 1:2000, how long will it be in the drawing?
   - **Solution**: 120 m = 12000 cm; 12000 ÷ 2000 = 6 cm

3. **Problem**: Two towns are 15 km apart. On a map, they are 3 cm apart. What is the map's scale?
   - **Solution**: 15 km = 1500000 cm; Scale = 3:1500000 = 1:500000

## Summary ✨

In this topic, we learned:
- How to read and use map scales
- Converting between map and real measurements
- Solving problems using scale ratios
- Applications in real life
- Common mistakes to avoid

Remember:
1. Always check the scale ratio
2. Convert units when necessary
3. Set up proportions correctly
4. Double-check calculations

### Additional Examples and Sample Questions:

1. **Example**: On a map with scale 1:25000, a river is 8 cm long. What is its actual length? (Answer: 2 km)

2. **Example**: A real building is 45 m tall. If drawn at scale 1:150, how tall will it be in the drawing? (Answer: 30 cm)

3. **Question**: Two cities are 25 km apart. On a map, they are 5 cm apart. What is the map's scale? (Answer: 1:500000)

4. **Question**: A model car is made at scale 1:24. If the real car is 4.8 m long, how long is the model? (Answer: 20 cm)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
