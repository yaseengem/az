import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl5_ch11_t2',
    topicNumber: 2,
    topicName: 'Practical Applications of Area',
    duration: 45,
    description: 'Explore how to use area calculations in real-life situations like tiling, painting, and gardening.',
    explanation: `
# Practical Applications of Area 🏡

Knowing how to calculate the area of rectangles is not just for math class—it's a skill you can use in many real-life situations! Let's see how area helps us in our daily lives and how you can become a problem-solver using this knowledge.

## Why Learn About Area? 🤔

Area helps us answer questions like:
- How many tiles do I need to cover my floor?
- How much paint do I need for a wall?
- How much grass do I need to cover my garden?

## Tiling a Floor 🧱

Suppose you want to cover your rectangular room floor with tiles. First, you need to know the area of the floor.

### Example 1
A room is 5 m long and 4 m wide. What is the area?
- Area = 5 m × 4 m = 20 m²

If each tile covers 1 m², you need 20 tiles. If each tile covers 0.5 m², you need 20 ÷ 0.5 = 40 tiles.

## Painting a Wall 🎨

To paint a wall, you need to know its area to buy the right amount of paint.

### Example 2
A wall is 3 m high and 6 m long. What is its area?
- Area = 3 m × 6 m = 18 m²

If 1 litre of paint covers 6 m², you need 18 ÷ 6 = 3 litres of paint.

## Gardening 🌱

If you want to cover a rectangular garden with grass, you need to know the area to buy enough grass.

### Example 3
A garden is 8 m long and 5 m wide. What is its area?
- Area = 8 m × 5 m = 40 m²

If each roll of grass covers 2 m², you need 40 ÷ 2 = 20 rolls.

## Buying Carpets or Mats 🏠

When buying a carpet for your room, you need to know the area to make sure it fits perfectly.

### Example 4
A carpet is 2 m wide and 3 m long. What is its area?
- Area = 2 m × 3 m = 6 m²

## Sample Questions ❓

1. A kitchen floor is 6 m long and 5 m wide. How many 1 m² tiles are needed to cover it?
2. A wall is 4 m high and 7 m long. If 1 litre of paint covers 7 m², how many litres are needed?
3. A rectangular playground is 20 m long and 10 m wide. What is its area?
4. If a mat is 1.5 m wide and 2 m long, what is its area?

## Practice with Real-Life Problems 🏋️‍♀️

Try measuring the length and width of your classroom, bedroom, or garden. Calculate the area and think about what you could do with that information!

## Common Mistakes to Avoid ⚠️

- Always use the same units for length and width.
- Don't forget to divide or multiply as needed for the number of tiles, litres, or rolls.
- Always write the answer with the correct unit (m², cm², etc.).

## Quick Recap 📝

- Area helps us solve real-life problems like tiling, painting, and gardening.
- Use the formula: Area = Length × Breadth
- Divide the total area by the area covered by one item to find how many you need.

## Summary ✨

Area is a powerful tool for solving everyday problems. Whether you're tiling a floor, painting a wall, or planting a garden, knowing how to calculate area helps you plan and save money. Practice with real-life examples and soon you'll be an area expert!

### More Examples:
- A wall is 2.5 m high and 4 m long. Area = 2.5 × 4 = 10 m²
- A mat is 1 m wide and 3 m long. Area = 1 × 3 = 3 m²
- A garden is 12 m long and 6 m wide. Area = 12 × 6 = 72 m²

### More Sample Questions:
- A room is 7 m long and 5 m wide. How many 1 m² tiles are needed?
- If a wall is 5 m high and 8 m long, and 1 litre of paint covers 10 m², how many litres are needed?
- A rectangular field is 30 m long and 15 m wide. What is its area?
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 