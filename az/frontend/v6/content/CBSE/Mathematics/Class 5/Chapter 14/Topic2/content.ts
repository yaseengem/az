import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const content: TopicContent = {
    id: 'cl5_ch14_t2',
    topicNumber: 2,
    topicName: 'Measuring Length and Mass',
    duration: 45,
    description: 'Learn how to measure length and mass using different units and tools.',
    explanation: `
# Measuring Length and Mass 📏⚖️

Measuring things is an important skill in our daily lives! In this topic, we'll learn about measuring length and mass using different units and tools. Let's explore! 🚀

## What is Length? 📏

Length is:
- How long something is
- Measured in meters (m), centimeters (cm), and millimeters (mm)
- Used to measure distances, heights, and sizes
- Important for building, crafting, and everyday tasks

## Length Units 📐

### 1. Meter (m) 📏
- The basic unit for measuring length
- Used for measuring longer distances
- Examples:
  * A classroom: about 10 m long
  * A door: about 2 m high
  * A desk: about 1 m wide

### 2. Centimeter (cm) 📏
- Smaller than a meter
- 100 cm = 1 m
- Used for measuring smaller objects
- Examples:
  * A pencil: about 15 cm
  * A book: about 20 cm
  * A ruler: 30 cm

### 3. Millimeter (mm) 📏
- The smallest common unit
- 10 mm = 1 cm
- Used for very small measurements
- Examples:
  * A paper clip: about 30 mm
  * A coin: about 2 mm thick
  * A fingernail: about 1 mm thick

## What is Mass? ⚖️

Mass is:
- How much matter is in an object
- Measured in kilograms (kg) and grams (g)
- Different from weight (which changes with gravity)
- Important for cooking, science, and shopping

## Mass Units ⚖️

### 1. Kilogram (kg) ⚖️
- The bigger unit for measuring mass
- Used for heavier objects
- Examples:
  * A bag of rice: 5 kg
  * A watermelon: 2 kg
  * A textbook: 1 kg

### 2. Gram (g) ⚖️
- Smaller than a kilogram
- 1000 g = 1 kg
- Used for lighter objects
- Examples:
  * An apple: 200 g
  * A chocolate bar: 100 g
  * A pencil: 10 g

## Measuring Tools 🛠️

### 1. For Length 📏
- Ruler: for small measurements
- Measuring tape: for longer distances
- Meter stick: for medium lengths
- How to use:
  * Place the tool at the starting point
  * Read the measurement at the end point
  * Make sure the tool is straight

### 2. For Mass ⚖️
- Digital scale: for precise measurements
- Balance scale: for comparing masses
- Kitchen scale: for food items
- How to use:
  * Place the object on the scale
  * Wait for the reading to stabilize
  * Read the measurement

## Converting Between Units 🔄

### Length Conversions
- 1 m = 100 cm
- 1 cm = 10 mm
- To convert:
  * Bigger to smaller: multiply
  * Smaller to bigger: divide

### Mass Conversions
- 1 kg = 1000 g
- To convert:
  * kg to g: multiply by 1000
  * g to kg: divide by 1000

## Practice Examples 📝

### Example 1: Length
Convert 2.5 m to cm:
- 2.5 m = 2.5 × 100 = 250 cm

### Example 2: Mass
Convert 3500 g to kg:
- 3500 g = 3500 ÷ 1000 = 3.5 kg

## Real-Life Applications 🌍

Measuring length and mass is used in:
- Building houses 🏠
- Cooking recipes 🍳
- Science experiments 🧪
- Sports activities 🏃
- Shopping for items 🛍️

## Tips for Measuring 💡

1. Always use the right tool
2. Make sure the tool is clean
3. Read measurements carefully
4. Check your conversions
5. Practice with real objects

## Common Mistakes to Avoid ❌

1. Using the wrong unit
2. Not reading the scale correctly
3. Forgetting to convert units
4. Not zeroing the scale
5. Measuring at an angle

## Practice Questions 📚

1. Convert 3.2 m to cm
2. Convert 4500 g to kg
3. Measure the length of your desk
4. Weigh your school bag
5. Find objects that are about 1 m long

## Summary 📖

- Length measures how long something is
- Mass measures how much matter is in an object
- Use appropriate units and tools
- Practice converting between units
- Measuring is important in daily life

Remember: Practice measuring different objects to become a measurement expert! 🎯
    `,
    quiz: {
        questions: [...easyQuestions, ...mediumQuestions]
    }
}; 