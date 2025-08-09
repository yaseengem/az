// Topic 2: Deductive reasoning exercises
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl6_ch15_t2',
    topicNumber: 2,
    topicName: "Visual Puzzles and Patterns",
    duration: 45,
    description: "Understanding visual patterns, symmetry, and spatial reasoning through puzzles and geometric shapes",
    explanation: `
# Visual Puzzles and Patterns 🎨

Welcome to the world of visual puzzles and patterns! 🎯 In this topic, we'll explore how to recognize and create visual patterns, understand symmetry, and develop spatial reasoning skills. Let's dive in and discover the beauty of visual mathematics! 🚀

## What are Visual Puzzles? 🤔

Visual puzzles are problems that require us to understand and manipulate shapes, patterns, and spatial relationships. They help develop our visual-spatial intelligence and make mathematics more engaging. Let's explore some common types:

## Symmetry in Shapes ✨

Symmetry is when one shape becomes exactly like another when you move it in some way: turn, flip, or slide.

### Types of Symmetry:

1. **Line Symmetry**:
   - A shape has line symmetry if it can be folded along a line so that one half matches the other half exactly
   - Example: A square has 4 lines of symmetry

2. **Rotational Symmetry**:
   - A shape has rotational symmetry if it looks the same after some rotation
   - Example: A square has rotational symmetry of order 4 (90° turns)

## Visual Patterns 🔄

Visual patterns are sequences of shapes or designs that follow a specific rule. Let's look at some examples:

### Example 1: Growing Patterns
\`\`\`
△
△△
△△△
△△△△
\`\`\`
This pattern grows by adding one triangle to each row.

### Example 2: Alternating Patterns
\`\`\`
○ □ ○ □
□ ○ □ ○
○ □ ○ □
\`\`\`
This pattern alternates between circles and squares.

## Spatial Reasoning 🧠

Spatial reasoning is the ability to understand and remember the spatial relations among objects.

### Key Skills:
1. **Visualization**: Creating mental images of shapes
2. **Rotation**: Understanding how shapes look when turned
3. **Transformation**: Knowing how shapes change when moved

## Problem-Solving Strategies 🎯

1. **Look for Repeating Elements**:
   - Identify the basic unit that repeats
   - Find the rule for how it changes
   - Apply the rule to predict the next step

2. **Use Symmetry**:
   - Check for lines of symmetry
   - Look for rotational symmetry
   - Use symmetry to complete patterns

3. **Break Down Complex Shapes**:
   - Divide shapes into simpler parts
   - Look for familiar patterns
   - Combine parts to understand the whole

## Real-Life Applications 🌍

Visual puzzles help us in many real-life situations:

1. **Art and Design** 🎨
   - Creating patterns
   - Understanding symmetry
   - Making balanced compositions

2. **Architecture** 🏛️
   - Planning layouts
   - Creating symmetrical designs
   - Understanding spatial relationships

3. **Navigation** 🧭
   - Reading maps
   - Understanding directions
   - Visualizing routes

## Practice Problems 🏋️‍♀️

1. **Symmetry Practice**:
   How many lines of symmetry does this shape have?
   \`\`\`
   ★
\`\`\`

2. **Pattern Completion**:
   What comes next in this pattern?
   \`\`\`
   □ ○ △
   ○ △ □
   △ □ ○
\`\`\`

3. **Spatial Reasoning**:
   If you rotate this shape 90° clockwise, what will it look like?
   \`\`\`
   →
\`\`\`

## Common Mistakes to Avoid ❌

1. **Ignoring Details** 👀
   - Look carefully at all parts of the pattern
   - Check for small differences
   - Don't make assumptions

2. **Forgetting Symmetry** 🔄
   - Consider all types of symmetry
   - Check multiple lines of symmetry
   - Look for rotational symmetry

3. **Rushing Solutions** ⏱️
   - Take time to analyze
   - Try different approaches
   - Verify your answers

## Summary ✨

In this topic, we learned:
- What visual puzzles are and why they're important
- Different types of symmetry in shapes
- How to recognize and create visual patterns
- Spatial reasoning skills
- Problem-solving strategies
- Real-life applications
- Common mistakes to avoid

### Additional Examples and Sample Questions:

1. **Example**: Complete this symmetrical pattern:
   \`\`\`
   △
   △△△
   △△△△△
\`\`\`

2. **Example**: How many lines of symmetry does a regular hexagon have?

3. **Question**: If you rotate a square 180°, will it look the same?

4. **Question**: What is the next shape in this pattern: ○, △, □, ○, △, ?
`,
    quiz: {
    questions: [
        ...easyQuestions,
        ...mediumQuestions
    ]
}
};
