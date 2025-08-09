// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter13\Topic3\content.ts
import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl7_ch13_t3',
    topicNumber: 3,
    topicName: 'Expressing Large and Small Numbers',
    duration: 45,
    description: 'Learn how to express very large and very small numbers using scientific notation and standard form.',
    explanation: `
        Scientific notation is a way of writing very large or very small numbers in a more manageable form. It uses powers of 10 to express numbers.

        🔍 Understanding Scientific Notation:
        • A number in scientific notation is written as: a × 10ⁿ
        • Where 1 ≤ |a| < 10 and n is an integer
        • Example: 5,000,000 = 5 × 10⁶

        📝 Rules for Converting to Scientific Notation:
        1. For Large Numbers (> 10):
           • Move decimal point left until you have a number between 1 and 10
           • Count how many places you moved (n)
           • Write as: a × 10ⁿ
           Example: 45,000 = 4.5 × 10⁴

        2. For Small Numbers (< 1):
           • Move decimal point right until you have a number between 1 and 10
           • Count how many places you moved (n)
           • Write as: a × 10⁻ⁿ
           Example: 0.00045 = 4.5 × 10⁻⁴

        🧮 Operations in Scientific Notation:
        1. Multiplication:
           • Multiply the decimal numbers
           • Add the exponents
           Example: (2 × 10⁴) × (3 × 10⁵) = 6 × 10⁹

        2. Division:
           • Divide the decimal numbers
           • Subtract the exponents
           Example: (8 × 10⁶) ÷ (2 × 10⁴) = 4 × 10²

        🌟 Real-World Applications:
        1. Astronomy:
           • Distance to Sun: 1.496 × 10⁸ kilometers
           • Mass of Earth: 5.97 × 10²⁴ kilograms

        2. Microscopic World:
           • Size of bacteria: 2 × 10⁻⁶ meters
           • Size of atom: 1 × 10⁻¹⁰ meters

        3. Computing:
           • Storage capacity: 1 terabyte = 1 × 10¹² bytes
           • Processor speed: 3 × 10⁹ hertz

        💡 Tips for Working with Scientific Notation:
        • Always check if your answer is in proper scientific notation (1 ≤ |a| < 10)
        • Remember that negative exponents represent small numbers
        • Use estimation to check if your answer makes sense
        • In calculations, convert all numbers to scientific notation first

        🎯 Common Mistakes to Avoid:
        • Forgetting to adjust the decimal part when converting
        • Mixing up positive and negative exponents
        • Not converting final answers to proper scientific notation
        • Incorrectly counting decimal places

        Remember: Scientific notation helps us work with very large and very small numbers efficiently and helps us understand their relative sizes better! 🚀
    `,
    quiz: {
        questions: [...easyQuestions, ...mediumQuestions]
    }
};
