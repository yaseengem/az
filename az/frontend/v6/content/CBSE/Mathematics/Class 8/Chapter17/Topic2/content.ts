import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl8_ch17_t2',
    topicNumber: 2,
    topicName: "Measurement in daily life",
    duration: 45,
    description: "Learn about different types of measurements, measuring tools, and their practical applications in everyday life.",
    explanation: `
# Measurement in Daily Life 📏

Let's explore how measurements are essential in our everyday activities and learn about different measuring tools and units! 🔍

## Understanding Measurement 📊

### 1. What is Measurement? 🤔
Measurement is the process of finding the size, quantity, or degree of something using standard units. It helps us:
- Compare objects and quantities
- Make precise calculations
- Follow instructions accurately
- Maintain consistency

### 2. Types of Measurements 📐

#### a) Length Measurements
- Units: millimeters (mm), centimeters (cm), meters (m), kilometers (km)
- Tools: ruler, measuring tape, vernier caliper
- Examples: 
  - Room dimensions: 5 m × 4 m
  - Distance between cities: 150 km
  - Paper thickness: 0.1 mm

#### b) Weight/Mass Measurements ⚖️
- Units: milligrams (mg), grams (g), kilograms (kg)
- Tools: kitchen scale, weighing machine
- Examples:
  - Body weight: 45 kg
  - Sugar in recipe: 250 g
  - Medicine dose: 500 mg

#### c) Volume/Capacity Measurements 🥛
- Units: milliliters (mL), liters (L), cubic meters (m³)
- Tools: measuring cup, measuring cylinder
- Examples:
  - Water bottle: 1 L
  - Medicine dose: 5 mL
  - Swimming pool: 50 m³

#### d) Temperature Measurements 🌡️
- Units: Celsius (°C), Fahrenheit (°F)
- Tools: thermometer
- Examples:
  - Body temperature: 37°C
  - Room temperature: 25°C
  - Cooking temperature: 180°C

### 3. Common Measuring Tools 🛠️

1. **Ruler/Measuring Tape**
   - Measures length
   - Common in schools, homes, tailoring
   - Accuracy: usually to 1 mm

2. **Kitchen Scale**
   - Measures weight
   - Essential for cooking, baking
   - Digital scales are more accurate

3. **Measuring Cups/Spoons**
   - Measure volume of liquids/solids
   - Used in cooking, baking
   - Come in standard sizes

4. **Thermometer**
   - Measures temperature
   - Types: medical, room, cooking
   - Digital ones are more accurate

## Practical Applications 🌟

### 1. In the Kitchen 🍳
- Measuring ingredients
  - Flour: 250 g
  - Milk: 500 mL
  - Sugar: 2 tablespoons
- Cooking temperature
- Recipe timing

### 2. In Healthcare 🏥
- Body measurements
  - Height
  - Weight
  - Temperature
- Medicine dosage
- Blood pressure readings

### 3. In Construction 🏗️
- Room dimensions
- Material quantities
- Level measurements
- Angle measurements

### 4. In Shopping 🛍️
- Clothing sizes
- Fabric lengths
- Food quantities
- Package volumes

## Important Measurement Tips 💡

### 1. Choosing the Right Unit
- Consider the size of what you're measuring
- Use appropriate units for accuracy
- Convert between units when needed

### 2. Using Tools Correctly
- Read measurements at eye level
- Ensure tools are calibrated
- Keep tools clean and maintained
- Use the right tool for the job

### 3. Common Mistakes to Avoid ⚠️
- Using wrong units
- Misreading scales
- Ignoring decimal points
- Using damaged tools

### 4. Digital vs. Analog Tools
- Digital: more precise readings
- Analog: require more skill
- Both need proper calibration

## Real-World Examples 🌍

### 1. Recipe Measurement
Making a cake requires:
- 200 g flour
- 150 g sugar
- 2 cups milk
- 30 minutes baking time

### 2. Room Measurement
Planning furniture needs:
- Room length: 4 meters
- Room width: 3 meters
- Door height: 2.1 meters
- Window size: 1.2 m × 1 m

### 3. Body Measurements
Health checkup includes:
- Height: 165 cm
- Weight: 60 kg
- Temperature: 37°C
- Blood pressure: 120/80 mmHg

## Problem-Solving Examples 📝

### Problem 1:
Converting units for a recipe:
- 2.5 kg = 2500 g
- 1.5 L = 1500 mL
- 0.5 km = 500 m

### Problem 2:
Calculating room area:
- Length = 5 m
- Width = 4 m
- Area = 5 × 4 = 20 square meters

### Problem 3:
Measuring time intervals:
- 2.5 hours = 150 minutes
- 90 minutes = 1.5 hours
- 120 seconds = 2 minutes

## Summary ✨

Key points to remember:
1. Choose appropriate units
2. Use correct measuring tools
3. Practice accurate measurement
4. Understand unit conversions
5. Apply in daily activities

Remember:
- Measurement is essential in daily life
- Accuracy matters in all measurements
- Regular practice improves skills
- Keep tools well-maintained

Practice these concepts regularly to become proficient in measurements! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 