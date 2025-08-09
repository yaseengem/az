import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl7_ch18_t2',
    topicNumber: 2,
    topicName: 'Measurement in daily life',
    duration: 45,
    description: 'Understand how measurement is used in daily life, including length, mass, volume, area, and time.',
    explanation: `
# Measurement in Daily Life 📏⚖️⏰

Measurement is a part of our everyday life! Whether you are cooking, playing sports, traveling, or shopping, you are using measurement. In this topic, we will learn about different types of measurement, the units used, and how to apply them in real-life situations.

## 1. What is Measurement? 🤔
Measurement is the process of finding the size, length, amount, or degree of something using standard units. It helps us compare, calculate, and understand the world around us.

## 2. Why is Measurement Important? 🌍
- **Cooking:** Measuring ingredients ensures your food tastes good.
- **Travel:** Knowing distances helps you plan trips.
- **Shopping:** Weighing fruits or measuring cloth helps you buy the right amount.
- **Sports:** Measuring time, distance, and scores is essential in games.

## 3. Types of Measurement and Their Units 📐

### a) Length/Distance
- **Standard Units:** millimeter (mm), centimeter (cm), meter (m), kilometer (km)
- **Examples:**
  - Measuring the height of a door (meters)
  - Distance between two cities (kilometers)
  - Length of a pencil (centimeters)

### b) Mass/Weight
- **Standard Units:** milligram (mg), gram (g), kilogram (kg)
- **Examples:**
  - Weight of a bag of rice (kilograms)
  - Mass of a chocolate bar (grams)

### c) Volume/Capacity
- **Standard Units:** millilitre (ml), litre (L)
- **Examples:**
  - Water in a bottle (litres)
  - Medicine in a spoon (millilitres)

### d) Area
- **Standard Units:** square centimeter (cm²), square meter (m²)
- **Examples:**
  - Area of a classroom floor (m²)
  - Area of a book cover (cm²)

### e) Time
- **Standard Units:** second (s), minute (min), hour (h), day
- **Examples:**
  - Time taken to run a race (seconds)
  - Duration of a class (minutes)

## 4. Tools for Measurement 🛠️
- **Ruler/Measuring Tape:** For length
- **Weighing Scale:** For mass
- **Measuring Jug:** For volume
- **Clock/Stopwatch:** For time
- **Thermometer:** For temperature

## 5. Converting Units 🔄
Sometimes, you need to convert from one unit to another:
- 1 m = 100 cm
- 1 kg = 1000 g
- 1 L = 1000 ml
- 1 km = 1000 m

**Example:** If a bottle holds 1500 ml, how many litres is that? \(1500 \div 1000 = 1.5\) L

## 6. Real-Life Examples 🏠
- **Buying Vegetables:** If you buy 2.5 kg of potatoes and 1.5 kg of onions, you have 4 kg in total.
- **Filling a Water Tank:** If a tank holds 2000 L and you fill it halfway, you have 1000 L.
- **Measuring Distance:** If your school is 2 km from home, you walk 4 km every day (to and fro).
- **Cooking:** A recipe needs 250 ml of milk. If you have a 1 L pack, you can make the recipe 4 times.

## 7. Area and Perimeter in Daily Life 📏
- **Area:** The space inside a shape. Used to find out how much carpet you need for a room.
- **Perimeter:** The distance around a shape. Used to put a fence around a garden.

**Example:**
- A rectangular garden is 10 m long and 5 m wide.
  - Area = 10 × 5 = 50 m²
  - Perimeter = 2 × (10 + 5) = 30 m

## 8. Measurement in Sports 🏃‍♂️
- **Running:** Time taken to finish a race (seconds)
- **Long Jump:** Distance jumped (meters)
- **Weightlifting:** Mass lifted (kilograms)

## 9. Measurement in Science and Health 🧪
- **Temperature:** Measured in degrees Celsius (°C) using a thermometer.
- **Medicine:** Dosage measured in millilitres (ml) or milligrams (mg).

## 10. Non-Standard Units 🖐️
Before standard units, people used handspan, foot, cubit, etc. These are not accurate because everyone's hand or foot is different. Standard units are the same everywhere.

## 11. Sample Questions for Practice 📝
1. What is the area of a rectangle with length 8 m and width 3 m?
2. If a bottle contains 750 ml of water, how many litres is that?
3. Which unit would you use to measure the mass of a school bag?
4. How many centimeters are there in 2.5 meters?
5. If a person walks 1.5 km every day, how far will they walk in a week?

## 12. Tips for Accurate Measurement 💡
- Use the correct tool for each measurement.
- Read the scale carefully.
- Convert units when needed.
- Double-check your calculations.

## 13. Short Summary ✨
- Measurement is essential in daily life for length, mass, volume, area, and time.
- Use standard units for accuracy.
- Convert units as needed.
- Practice helps you become confident in using measurement in real situations.

Keep practicing measurement skills to become a smart and confident learner! 📏⚖️⏰
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 