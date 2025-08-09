// Topic 2: Mirror reflection
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl6_ch13_t2',
    topicNumber: 2,
    topicName: "Mirror Reflection",
    duration: 45,
    description: "Understanding mirror reflection and its relationship with symmetry",
    explanation: `
# Mirror Reflection 🔄

Welcome to the fascinating world of mirror reflection! 🌟 In this topic, we'll explore how objects appear in mirrors and understand the connection between reflection and symmetry. Let's begin our journey! 🚀

## Understanding Mirror Reflection 📐

Mirror reflection is when an object appears to be flipped in a mirror. The image in the mirror is called a reflection or mirror image.

### What is a Mirror Image? 🔍

- A mirror image is a flipped version of an object
- The left and right sides are swapped
- The image appears to be behind the mirror
- The distance from the object to the mirror equals the distance from the image to the mirror

## Properties of Mirror Reflection 📏

1. **Distance Property** 📊
   - The object and its image are equidistant from the mirror
   - Example: If an object is 5 cm from the mirror, its image appears 5 cm behind the mirror

2. **Size Property** 📐
   - The image is the same size as the object
   - Example: A 10 cm tall object produces a 10 cm tall image

3. **Orientation Property** 🔄
   - The image is laterally inverted (left and right are swapped)
   - Example: The word "MIRROR" appears as "RORRIM" in the mirror

## Finding Mirror Images 🧮

### Step 1: Draw the Mirror Line
- Use a ruler to draw the mirror line
- Make sure it's straight and perpendicular to the paper

### Step 2: Measure Distances
- Measure the distance from each point of the object to the mirror
- Mark the same distance on the other side of the mirror

### Step 3: Connect the Points
- Connect the points to form the mirror image
- Remember to swap left and right

## Common Shapes and Their Mirror Images 📊

1. **Letters and Numbers** 🔤
   - Some letters look the same in the mirror (A, H, I, M, O, T, U, V, W, X, Y)
   - Some letters look different (B, C, D, E, F, G, J, K, L, N, P, Q, R, S, Z)

2. **Geometric Shapes** 🔷
   - Regular polygons maintain their shape in the mirror
   - Asymmetric shapes appear flipped

## Real-Life Examples 🌟

1. **Everyday Objects** 🏠
   - Writing on vehicles (ambulance, police cars)
   - Text on t-shirts and caps
   - Signboards and advertisements

2. **Nature** 🌿
   - Reflections in water
   - Symmetrical patterns in leaves and flowers

## Practice Problems 🏋️‍♀️

1. **Example 1**: Draw the mirror image of the letter "B"
   - Solution: The mirror image looks like a backward "B"

2. **Example 2**: If an object is 8 cm from a mirror, where is its image?
   - Solution: The image appears 8 cm behind the mirror

3. **Example 3**: Which letters look the same in a mirror?
   - Solution: A, H, I, M, O, T, U, V, W, X, Y

## Common Mistakes to Avoid ❌

1. **Distance Errors** 📏
   - Remember: Object and image are equidistant from the mirror
   - Don't forget to measure from the mirror line

2. **Orientation Errors** 🔄
   - Remember to swap left and right
   - Don't flip the image upside down

3. **Size Errors** 📐
   - The image should be the same size as the object
   - Don't make the image larger or smaller

## Summary ✨

In this topic, we learned:
- What mirror reflection is
- Properties of mirror images
- How to find mirror images
- Common shapes and their reflections
- Real-life examples of mirror reflection
- Common mistakes to avoid

Remember:
1. Mirror images are flipped left-to-right
2. Object and image are equidistant from the mirror
3. The image is the same size as the object
4. Some letters look the same in the mirror

### Additional Examples and Sample Questions:

1. **Example**: Draw the mirror image of the number "6" (Answer: It looks like a backward "6")

2. **Example**: If a word is written in mirror writing, how would you read it? (Answer: Hold it up to a mirror)

3. **Question**: Why do ambulances have "AMBULANCE" written backward? (Answer: So it appears correct in rearview mirrors)

4. **Question**: Which capital letters of the English alphabet look the same in a mirror? (Answer: A, H, I, M, O, T, U, V, W, X, Y)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
