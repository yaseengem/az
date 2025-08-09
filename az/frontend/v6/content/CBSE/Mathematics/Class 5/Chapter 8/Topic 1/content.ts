import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl5_ch8_t1',
    topicNumber: 1,
    topicName: "Reading Maps",
    duration: 45,
    description: "Understanding how to read and interpret maps",
    explanation: `
# Reading Maps 🗺️

Maps are like special pictures that show us places and help us find our way around! 🧭 In this topic, we'll learn how to read maps and understand all the important information they show us. Let's explore the world of maps! 🌍

## Map Elements 📋

### 1. Map Title
- Tells us what the map is about
- Usually at the top of the map
- Helps us understand the map's purpose

### 2. Map Key (Legend) 🔑
- Explains what the symbols mean
- Helps us understand map features
- Usually in a box on the map

### 3. Compass Rose 🧭
- Shows directions
- Has cardinal directions (North, South, East, West)
- Sometimes shows intermediate directions (Northeast, Northwest, etc.)

### 4. Scale 📏
- Shows real distances
- Helps us calculate actual distances
- Can be shown as a line or ratio

## Map Symbols 🏫

### Common Symbols
- 🏫 School
- 🏥 Hospital
- 🌳 Park
- 🏢 Building
- 🏪 Store
- ⛽ Gas Station
- 🏨 Hotel
- ⛺ Camping Site
- ✈️ Airport
- 🚂 Railway Station

### Line Symbols
- Solid lines: Roads
- Dashed lines: Railways
- Dotted lines: Boundaries
- Blue lines: Rivers

## Directions and Orientation 🧭

### Cardinal Directions
- North (N) ⬆️
- South (S) ⬇️
- East (E) ➡️
- West (W) ⬅️

### Intermediate Directions
- Northeast (NE) ↗️
- Northwest (NW) ↖️
- Southeast (SE) ↘️
- Southwest (SW) ↙️

## Understanding Scale 📏

### Types of Scale
1. **Verbal Scale**
   - Example: "1 cm = 1 km"
   - Easy to understand
   - Shows real-world distance

2. **Ratio Scale**
   - Example: 1:50,000
   - More precise
   - Used in detailed maps

### Scale Calculations
- To find real distance: Map distance × Scale factor
- To find map distance: Real distance ÷ Scale factor

## Map Colors 🎨

### Color Meanings
- Blue: Water (oceans, lakes, rivers)
- Green: Vegetation (forests, parks)
- Brown: Mountains, elevation
- Black: Roads, buildings
- Red: Important features

## Reading a Map Step by Step 📖

1. **Look at the Title**
   - Understand what the map shows
   - Check the area it covers

2. **Check the Key**
   - Find the symbols you need
   - Understand what they mean

3. **Find Directions**
   - Look for the compass rose
   - Understand orientation

4. **Use the Scale**
   - Calculate real distances
   - Plan your route

## Real-Life Applications 🌍

### Everyday Uses
- Finding your way in a new place
- Planning trips and routes
- Understanding your neighborhood
- Learning about different places

### Special Uses
- Emergency services
- Travel planning
- City planning
- Weather forecasting

## Tips for Better Map Reading 💡

1. Always check the map key first
2. Use the compass rose for directions
3. Calculate distances using the scale
4. Look for landmarks and symbols
5. Practice reading different types of maps

## Common Mistakes to Avoid ❌

1. Not checking the map key
2. Ignoring the scale
3. Forgetting to use the compass rose
4. Misinterpreting symbols
5. Not calculating distances correctly

## Practice Examples 🌟

### Example 1: Finding Directions
If you're at point A and want to go to point B which is Northeast:
1. Find North on the compass rose
2. Look for Northeast direction
3. Follow that direction to reach point B

### Example 2: Calculating Distance
If the scale is 1 cm = 2 km:
1. Measure distance on map (e.g., 3 cm)
2. Multiply by scale factor (3 × 2 = 6 km)
3. The real distance is 6 kilometers

## Summary ✨

- Maps help us understand places
- Symbols show different features
- Directions help us navigate
- Scale shows real distances
- Colors have special meanings

Remember: Practice makes perfect! The more you read maps, the better you'll get at understanding them! 🗺️
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 