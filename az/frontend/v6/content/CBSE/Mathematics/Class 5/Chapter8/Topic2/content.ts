import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl5_ch8_t2',
    topicNumber: 2,
    topicName: "Calculating Real Distances",
    duration: 45,
    description: "Understanding map scales and calculating real distances",
    explanation: `
# Calculating Real Distances 📏

Have you ever wondered how big things really are when you see them on a map? Maps are like mini versions of the real world! Let's learn how to figure out real distances using map scales. 🗺️

## What is a Map Scale? 📐

A map scale tells us how much smaller the map is compared to the real world. It's like a magic shrinking machine! 

### Types of Scales:
1. **Ratio Scale**: Shows how many times smaller the map is
   - Example: 1:1000 means 1 cm on map = 1000 cm in real life
   - 1:50000 means 1 cm on map = 50000 cm in real life

2. **Word Scale**: Uses words to explain
   - Example: "1 cm = 100 meters"

## Converting Units 🔄

To calculate real distances, we need to convert between different units:

- 100 centimeters (cm) = 1 meter (m)
- 1000 meters (m) = 1 kilometer (km)

### Example:
If the scale is 1:25000:
- 1 cm on map = 25000 cm in real life
- 25000 cm = 250 meters
- 250 meters = 0.25 kilometers

## How to Calculate Real Distances 📝

### Step 1: Understand the Scale
- Read the scale carefully
- Note what 1 cm represents

### Step 2: Measure on Map
- Use a ruler to measure the distance on the map
- Write down the measurement in centimeters

### Step 3: Do the Math
- Multiply the map measurement by the scale
- Convert to appropriate units

### Example:
If a road is 3 cm long on a map with scale 1:50000:
1. 1 cm = 50000 cm = 500 meters
2. 3 cm = 3 × 500 = 1500 meters
3. 1500 meters = 1.5 kilometers

## Real-Life Applications 🌍

Map scales are used in:
- Planning trips 🚗
- Measuring distances between places 🏃
- Understanding city layouts 🏙️
- Planning construction projects 🏗️
- Emergency response planning 🚨

## Common Mistakes to Avoid ❌

1. **Forgetting Unit Conversion**
   - Always convert centimeters to meters/kilometers
   - Don't mix up different units

2. **Misreading the Scale**
   - Double-check the scale ratio
   - Make sure you understand what 1 cm represents

3. **Incorrect Measurements**
   - Use a ruler for accurate measurements
   - Measure carefully

## Tips for Success 💡

1. **Practice with Different Scales**
   - Try various scale ratios
   - Start with simple numbers

2. **Use Real Maps**
   - Practice with actual maps
   - Measure familiar places

3. **Check Your Work**
   - Double-check calculations
   - Make sure units make sense

## Sample Questions ❓

1. If a map scale is 1:10000 and a park is 2 cm long on the map, how long is it in real life?
   - Answer: 200 meters (2 × 10000 cm = 20000 cm = 200 m)

2. A road is 1.5 km long in real life. If the map scale is 1:50000, how long should it be on the map?
   - Answer: 3 cm (1.5 km = 1500 m = 150000 cm; 150000 ÷ 50000 = 3 cm)

## Summary ✨

- Map scales show how much smaller the map is than real life
- Convert between centimeters, meters, and kilometers
- Multiply map measurements by the scale to find real distances
- Always check your units and calculations
- Practice makes perfect!

Remember: Understanding map scales helps us navigate the world better! 🌎
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 