import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
   id: 'cl7_ch14_t1',
   topicNumber: 1,
   topicName: 'Line Symmetry: Identifying Symmetrical Figures',
   duration: 45,
   description: 'Learn about line symmetry, how to identify lines of symmetry in various shapes, and understand the properties of symmetrical figures.',
   explanation: `
        Line symmetry is a fundamental concept in geometry where a figure can be divided into two identical halves by a line. This line is called the line of symmetry or axis of symmetry.

        🔍 Understanding Line Symmetry:
        • A figure has line symmetry if it can be folded along a line so that both halves match exactly
        • The fold line is called the line of symmetry
        • Some figures may have multiple lines of symmetry
        • The two halves are mirror images of each other

        📝 Properties of Line Symmetry:
        1. Basic Properties:
           • Each point on one side has a corresponding point on the other side
           • The line of symmetry is equidistant from corresponding points
           • The line of symmetry can be vertical, horizontal, or diagonal
           • The line of symmetry divides the figure into two congruent parts

        2. Common Shapes and Their Lines of Symmetry:
           • Square: 4 lines of symmetry (2 diagonal, 1 vertical, 1 horizontal)
           • Rectangle: 2 lines of symmetry (1 vertical, 1 horizontal)
           • Circle: Infinite lines of symmetry (any diameter)
           • Equilateral Triangle: 3 lines of symmetry
           • Regular Pentagon: 5 lines of symmetry
           • Regular Hexagon: 6 lines of symmetry

        🎨 Identifying Line Symmetry:
        1. Paper Folding Method:
           • Fold the figure along a potential line
           • Check if both halves match exactly
           • If they match, it's a line of symmetry

        2. Mirror Method:
           • Place a mirror along a potential line
           • If the reflection completes the figure, it's a line of symmetry

        🌟 Real-World Applications:
        1. Architecture:
           • Building designs often use symmetry
           • Taj Mahal is a perfect example of symmetrical architecture
           • Bridges often have symmetrical designs for stability

        2. Nature:
           • Butterfly wings show line symmetry
           • Most flowers have symmetrical patterns
           • Many leaves are symmetrical
           • Human face and body are roughly symmetrical

        3. Art and Design:
           • Rangoli patterns often use symmetry
           • Logo designs frequently incorporate symmetry
           • Textile patterns often feature symmetrical designs

        💡 Tips for Finding Lines of Symmetry:
        • Look for equal parts that mirror each other
        • Check for vertical, horizontal, and diagonal lines
        • Remember that not all figures have line symmetry
        • Some figures may have multiple lines of symmetry
        • Regular polygons have as many lines of symmetry as their sides

        🎯 Common Mistakes to Avoid:
        • Assuming all shapes have line symmetry
        • Missing diagonal lines of symmetry
        • Confusing rotational symmetry with line symmetry
        • Thinking all lines through the center are lines of symmetry
        • Forgetting to check if both halves match exactly

        ✍️ Steps to Draw Symmetrical Figures:
        1. Start with the line of symmetry
        2. Draw one half of the figure
        3. Ensure equal distances from the line of symmetry
        4. Complete the other half as a mirror image

        Remember: Line symmetry is everywhere around us! It makes designs more appealing and helps us understand balance in nature and art. 🎨
    `,
   quiz: {
      questions: [...easyQuestions, ...mediumQuestions]
   }
};
