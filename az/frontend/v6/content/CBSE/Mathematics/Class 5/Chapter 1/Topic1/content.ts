import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl5_ch1_t1',
    topicNumber: 1,
    topicName: "Large Numbers in Real-Life Contexts",
    duration: 45,
    description: "Understanding and working with large numbers in practical situations like fish catch and boat capacity",
    explanation: `
# Large Numbers in Real-Life Contexts 🌊

Welcome to the fascinating world of large numbers! 🎣 In this topic, we'll explore how big numbers are used in everyday life, especially in contexts like fishing and transportation. Let's dive in and make sense of these large numbers together! 🚢

## Understanding Large Numbers 📊

Large numbers are all around us! From the number of fish caught in a day to the capacity of boats, understanding big numbers helps us make sense of the world. Let's break it down:

### Place Value System 🔢
- **Units, Tens, Hundreds**: We know these well (1, 10, 100)
- **Thousands**: 1,000 (one thousand)
- **Lakhs**: 1,00,000 (one lakh)
- **Crores**: 1,00,00,000 (one crore)

### Real-Life Examples 🎣
1. **Fish Catch Example**:
   - A fishing boat catches 2,500 fish in one trip
   - If they make 4 trips in a day: 2,500 × 4 = 10,000 fish
   - In a month (30 days): 10,000 × 30 = 3,00,000 fish

2. **Boat Capacity**:
   - A large fishing boat can carry 5,000 kg of fish
   - If each fish weighs 2 kg: 5,000 ÷ 2 = 2,500 fish
   - The boat needs 200 liters of fuel for one trip

### Reading and Writing Large Numbers 📝
Let's practice with some examples:
- 25,000: Twenty-five thousand
- 1,50,000: One lakh fifty thousand
- 2,00,00,000: Two crore

### Estimation Skills 🎯
Sometimes we don't need exact numbers. Estimation helps us make quick calculations:
- If a boat catches about 2,500 fish per trip
- And makes about 4 trips per day
- We can estimate: 2,500 × 4 ≈ 10,000 fish per day

### Sample Questions and Solutions 💡
1. **Question**: A fishing boat catches 3,200 fish in one trip. How many fish will it catch in 5 trips?
   **Solution**: 3,200 × 5 = 16,000 fish

2. **Question**: A boat can carry 4,000 kg of fish. If each fish weighs 1.5 kg, how many fish can it carry?
   **Solution**: 4,000 ÷ 1.5 ≈ 2,666 fish

3. **Question**: A fishing company has 10 boats. Each boat catches 2,800 fish per day. How many fish do they catch in a week?
   **Solution**: 2,800 × 10 × 7 = 1,96,000 fish

### Practical Applications 🌟
1. **Fishing Industry**:
   - Tracking daily catches
   - Calculating fuel requirements
   - Managing storage capacity

2. **Transportation**:
   - Boat capacity planning
   - Fuel consumption calculations
   - Trip scheduling

### Tips for Working with Large Numbers 💡
1. Always write numbers with commas for better readability
2. Break down large calculations into smaller steps
3. Use estimation to check if your answers make sense
4. Practice reading large numbers aloud

### Summary ✨
In this topic, we learned:
- How to read and write large numbers
- Practical applications of large numbers in fishing and transportation
- Basic estimation techniques
- Solving real-world problems involving large numbers

Remember, large numbers are just like small numbers - they follow the same rules, just with more digits! With practice, you'll become comfortable working with any size number.

### Additional Practice Questions 🏋️‍♀️
1. If a boat uses 150 liters of fuel per trip and makes 8 trips, how much fuel is needed?
2. A fishing company has 15 boats. Each boat catches 3,500 fish per day. How many fish do they catch in a month?
3. A storage facility can hold 50,000 kg of fish. If each fish weighs 2.5 kg, how many fish can be stored?
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 