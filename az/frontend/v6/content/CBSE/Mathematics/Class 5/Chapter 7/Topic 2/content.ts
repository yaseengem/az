import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl5_ch7_t2',
    topicNumber: 2,
    topicName: "Shape Patterns",
    duration: 45,
    description: "Understanding and creating patterns using geometric shapes and tessellations",
    explanation: `
# Shape Patterns 🎨

Patterns are everywhere around us! From the tiles on the floor to the designs on our clothes, shapes create beautiful and interesting patterns. Let's explore the fascinating world of shape patterns! 🚀

## Types of Shape Patterns 🔄

### 1. Repeating Patterns
- Same shapes repeat in a sequence
- Example: △ ○ □ △ ○ □ △ ○ □
- Each shape appears in a fixed order
- Easy to predict the next shape

### 2. Growing Patterns
- Shapes increase in number or size
- Example: △ △△ △△△ △△△△
- Each step adds one more shape
- Shows progression and growth

### 3. Alternating Patterns
- Two or more shapes take turns
- Example: □ △ □ △ □ △
- Shapes switch back and forth
- Creates rhythm and balance

### 4. Complex Patterns
- Combine different pattern types
- Example: △ □ △△ □□ △△△
- Mix growing and alternating patterns
- More challenging to identify

## How to Identify Patterns 🔍

### Step 1: Look for Repetition
- Find shapes that repeat
- Count how many times they appear
- Note the order of shapes

### Step 2: Check for Growth
- See if shapes increase in number
- Look for size changes
- Identify the growth rule

### Step 3: Find the Rule
- Write down the sequence
- Look for the pattern rule
- Test the rule with more shapes

## Real-Life Examples 🌟

### 1. Tiles and Flooring
- Square tiles in bathrooms
- Hexagonal patterns in kitchens
- Checkerboard designs

### 2. Nature's Patterns
- Honeycomb in beehives
- Leaf arrangements on plants
- Snowflake designs

### 3. Art and Design
- Mosaic patterns
- Wallpaper designs
- Fabric prints

## Practice Examples 📝

### Example 1: Simple Repeating Pattern
Pattern: △ ○ □ △ ○ □ △ ○ __
Next shape: □
Rule: Triangle, circle, square repeat

### Example 2: Growing Pattern
Pattern: △ △△ △△△ △△△△ __
Next shape: △△△△△
Rule: Add one triangle each time

### Example 3: Alternating Pattern
Pattern: □ △ □ △ □ △ __
Next shape: □
Rule: Square and triangle alternate

## Tips for Success 💡

1. Start with simple patterns
2. Look for repeating shapes
3. Count the number of shapes
4. Write down the sequence
5. Test your pattern rule

## Common Mistakes to Avoid ❌

1. Not looking at the whole pattern
2. Missing the growth rule
3. Forgetting to check all shapes
4. Not testing the pattern rule
5. Rushing to find the answer

## Summary ✨

- Patterns can repeat, grow, or alternate
- Look for shapes that repeat
- Check for increasing numbers
- Find the pattern rule
- Test your rule with more shapes

Remember: Practice makes perfect! Keep looking for patterns in your daily life! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 