import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
   id: 'cl5_ch5_t2',
   topicNumber: 2,
   topicName: "Mirror Images",
   duration: 45,
   description: "Understanding mirror images, how they are formed, and their properties",
   explanation: `
# Mirror Images 🔄

Have you ever looked in a mirror and seen your reflection? That's a mirror image! Let's explore how mirror images work and how they help us understand symmetry better. 🪞

## What is a Mirror Image? 🤔

A mirror image is what you see when you look in a mirror. It's like a flipped version of the original object, where left becomes right and right becomes left!

### Properties of Mirror Images 📏
- The image appears to be behind the mirror
- Left and right sides are swapped
- The image is the same size as the object
- The image appears to be the same distance from the mirror as the object

## How Mirror Images Work 🔍

### 1. Reflection Process
- Light bounces off the object
- Hits the mirror
- Bounces back to our eyes
- Creates the mirror image

### 2. Types of Reflections
- **Regular Reflection**: Clear, sharp image (like in a bathroom mirror)
- **Diffuse Reflection**: Blurry image (like in a foggy mirror)

## Mirror Images in Letters and Numbers 🔤

### 1. Letters
- Some letters look the same in mirror: A, H, I, M, O, T, U, V, W, X, Y
- Some letters look different: B, C, D, E, F, G, J, K, L, N, P, Q, R, S, Z

### 2. Numbers
- Some numbers look the same: 0, 1, 8
- Some numbers look different: 2, 3, 4, 5, 6, 7, 9

## Real-Life Examples 🌟

1. **Everyday Life** 🏠
   - Looking in bathroom mirrors
   - Rear-view mirrors in cars
   - Security mirrors in stores

2. **Nature** 🌿
   - Reflections in water
   - Dew drops on leaves
   - Ice crystals

3. **Art and Design** 🎨
   - Symmetrical patterns
   - Kaleidoscope designs
   - Rangoli patterns

## Drawing Mirror Images ✏️

### Step 1: Understand the Object
- Look at the original shape
- Identify its features
- Note its orientation

### Step 2: Draw the Mirror Line
- Draw a straight line
- This represents the mirror
- Make it clear and visible

### Step 3: Create the Reflection
- Flip the shape across the line
- Keep the same size
- Maintain proportions

## Sample Questions and Solutions 📝

1. **Question**: What is the mirror image of the letter "B"?
   **Solution**: A backward "B" that looks like a "D"

2. **Question**: Draw the mirror image of a right hand.
   **Solution**: It would look like a left hand

3. **Question**: What number looks the same in a mirror?
   **Solution**: 0, 1, and 8

## Practice Problems 🏋️‍♀️

1. Draw the mirror image of the word "MOM"
2. What would the number "69" look like in a mirror?
3. Draw the mirror image of a simple house shape

## Common Mistakes to Avoid ❌

1. **Incorrect Flipping**
   - Wrong: Only flipping up and down
   - Right: Flip left to right

2. **Size Changes**
   - Wrong: Making the image bigger or smaller
   - Right: Keep the same size

3. **Position Errors**
   - Wrong: Placing image too close or far
   - Right: Same distance from mirror line

## Tips for Success 🎯

1. **Use a Real Mirror**
   - Practice with actual objects
   - See how reflections work
   - Understand the concept

2. **Start Simple**
   - Begin with basic shapes
   - Move to complex ones
   - Build confidence

3. **Practice Regularly**
   - Try different objects
   - Use different angles
   - Make it fun!

## Summary ✨

- Mirror images are flipped versions of objects
- Left and right sides are swapped
- Some letters and numbers look the same in mirrors
- Mirror images help us understand symmetry
- They are used in many real-life situations

Remember: Practice drawing mirror images to become a reflection expert! 🎯
`,
   quiz: {
      questions: [
         ...easyQuestions,
         ...mediumQuestions
      ]
   }
}; 