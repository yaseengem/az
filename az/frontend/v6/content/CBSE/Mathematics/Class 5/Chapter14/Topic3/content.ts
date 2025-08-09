import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl5_ch14_t3',
    topicNumber: 3,
    topicName: "Metric Unit Conversions",
    duration: 45,
    description: "Understanding and practicing conversions between different metric units",
    explanation: `# Metric Unit Conversions 📏

The metric system is like a special language for measuring things! 🌍 In this topic, we'll learn how to convert between different metric units. Let's become conversion experts! 🚀

## The Metric System 📊

The metric system is:
- A system of measurement used worldwide
- Based on powers of 10
- Easy to convert between units
- Used for length, mass, and volume

## Common Metric Units 📐

### 1. Length Units 📏
- Kilometer (km) = 1000 meters
- Meter (m) = 100 centimeters
- Centimeter (cm) = 10 millimeters
- Millimeter (mm)

### 2. Mass Units ⚖️
- Kilogram (kg) = 1000 grams
- Gram (g) = 1000 milligrams
- Milligram (mg)

### 3. Volume Units 🥤
- Liter (L) = 1000 milliliters
- Milliliter (mL)

## Conversion Rules 🔄

### 1. Moving Up (×)
- To convert to a bigger unit, divide
- Example: 2000 g = 2000 ÷ 1000 = 2 kg

### 2. Moving Down (÷)
- To convert to a smaller unit, multiply
- Example: 2 m = 2 × 100 = 200 cm

## Conversion Chart 📊

\`\`\`
Length:
        1 km = 1000 m
1 m = 100 cm
1 cm = 10 mm

Mass:
        1 kg = 1000 g
1 g = 1000 mg

Volume:
        1 L = 1000 mL
\`\`\`

## Practice Examples 📝

### Example 1: Length Conversion
Convert 3.5 m to cm:
- 3.5 m = 3.5 × 100 = 350 cm

### Example 2: Mass Conversion
Convert 2500 g to kg:
- 2500 g = 2500 ÷ 1000 = 2.5 kg

### Example 3: Volume Conversion
Convert 1.2 L to mL:
- 1.2 L = 1.2 × 1000 = 1200 mL

## Real-Life Applications 🌍

Metric conversions are used in:
- Cooking recipes 🍳
- Science experiments 🧪
- Construction projects 🏗️
- Medicine dosages 💊
- Travel distances 🚗

## Sample Questions ❓

1. Convert 5 km to meters:
   - Answer: 5000 m

2. Convert 750 mL to liters:
   - Answer: 0.75 L

3. Convert 2.5 kg to grams:
   - Answer: 2500 g

## Tips for Converting Units 💡

1. Remember the conversion factors
2. Use the right operation (× or ÷)
3. Count the zeros carefully
4. Check your answer
5. Practice with real examples

## Conversion Steps 📝

1. Identify the units you have
2. Identify the units you want
3. Find the conversion factor
4. Multiply or divide as needed
5. Check your answer

## Summary ✨

- The metric system is based on powers of 10
- Common units include km, m, cm, mm, kg, g, L, mL
- To convert to bigger units, divide
- To convert to smaller units, multiply
- Practice makes perfect with conversions
- Metric conversions are used in daily life

Remember: Practice converting different units to become a metric conversion expert! 🎯`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 