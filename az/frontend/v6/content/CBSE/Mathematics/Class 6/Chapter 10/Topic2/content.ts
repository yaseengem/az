import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl6_ch10_t2',
    topicNumber: 2,
    topicName: "Area of Regular Shapes",
    duration: 45,
    description: "Understanding and calculating the area of regular shapes including squares, rectangles, triangles, and circles",
    explanation: `
# Area of Regular Shapes 📐

Welcome to the fascinating world of area measurement! 🌟 In this topic, we'll learn how to calculate the area of different regular shapes and understand their real-life applications. Let's explore the concept of area and how it helps us measure space! 🚀

## Understanding Area 📏

Area is the amount of space inside a shape. It's measured in square units, like square centimeters (cm²), square meters (m²), or square kilometers (km²). Think of it as how many square tiles would fit inside a shape! 🧩

## Area of Basic Shapes 🔷

### 1. Square
- **Formula**: Area = side × side = side²
- **Example**: If a square has sides of 5 cm, its area = 5 × 5 = 25 cm²
- **Real-life example**: A chessboard square is a perfect example of a square area

### 2. Rectangle
- **Formula**: Area = length × width
- **Example**: A rectangle with length 8 cm and width 3 cm has area = 8 × 3 = 24 cm²
- **Real-life example**: The area of a book cover or a mobile phone screen

### 3. Triangle
- **Formula**: Area = ½ × base × height
- **Example**: A triangle with base 6 cm and height 4 cm has area = ½ × 6 × 4 = 12 cm²
- **Real-life example**: The area of a slice of pizza or a triangular flag

### 4. Circle
- **Formula**: Area = π × radius² (where π ≈ 3.14)
- **Example**: A circle with radius 7 cm has area = 3.14 × 7 × 7 ≈ 153.86 cm²
- **Real-life example**: The area of a pizza or a clock face

## Converting Units 🔄

Sometimes we need to convert between different units of area:
- 1 m² = 10,000 cm²
- 1 km² = 1,000,000 m²
- 1 hectare = 10,000 m²

## Practical Applications 🌍

1. **Home Planning** 🏠
   - Calculating carpet area for flooring
   - Determining paint needed for walls
   - Planning garden space

2. **Sports Fields** ⚽
   - Measuring playing field areas
   - Calculating track areas
   - Planning court dimensions

3. **Agriculture** 🌾
   - Measuring farm land
   - Planning crop areas
   - Calculating irrigation space

## Common Mistakes to Avoid ❌

1. **Unit Confusion** 🤔
   - Always use the same units for all measurements
   - Don't mix cm and m in the same calculation
   - Remember to write the correct unit (cm², m², etc.)

2. **Formula Mix-up** 🔄
   - Use the correct formula for each shape
   - Remember the difference between perimeter and area
   - Don't forget the ½ in triangle area formula

3. **Measurement Errors** 📏
   - Measure accurately
   - Use the correct dimensions (length, width, height)
   - Double-check your calculations

## Practice Problems 🏋️‍♀️

1. **Example 1**: Find the area of a square with side 12 cm
   - Solution: Area = 12 × 12 = 144 cm²

2. **Example 2**: Calculate the area of a rectangle with length 15 m and width 8 m
   - Solution: Area = 15 × 8 = 120 m²

3. **Example 3**: What's the area of a triangle with base 10 cm and height 6 cm?
   - Solution: Area = ½ × 10 × 6 = 30 cm²

## Summary ✨

In this topic, we learned:
- What area means and how to measure it
- Formulas for calculating area of different shapes
- How to convert between area units
- Real-life applications of area calculations
- Common mistakes to avoid

### Additional Examples and Sample Questions:

1. **Example**: A rectangular garden is 20 m long and 15 m wide. What is its area? (Answer: 300 m²)

2. **Example**: A circular swimming pool has a radius of 5 m. What is its area? (Answer: 78.5 m²)

3. **Question**: If a square has an area of 64 cm², what is the length of its sides? (Answer: 8 cm)

4. **Question**: A triangular flag has a base of 12 cm and height of 8 cm. What is its area? (Answer: 48 cm²)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
