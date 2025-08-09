import { Topic1Content } from './Topic1/content';
import { QuizQuestion, ChapterContent } from '../../../../types';
import { generateId } from '../../../../../app/utils/idGenerator';

export const Chapter1Content: ChapterContent = {
    id: generateId(),    chapterNumber: 1,
    chapterName: "Real Numbers",
    topics: [Topic1Content],
    duration: 240, // 4 hours total for chapter
    contentCovered: [
        "Euclid's Division Lemma",
        "Fundamental Theorem of Arithmetic",
        "Revisiting Irrational Numbers",
        "Revisiting Rational Numbers and Their Decimal Expansions"
    ],
    description: "Understanding real numbers, their properties, and decimal representations",
    explanation: `
# Real Numbers

This chapter deepens students' understanding of real numbers and their properties. Students will learn about:
1. Euclid's Division Lemma and its applications
2. The Fundamental Theorem of Arithmetic (Prime Factorization)
3. Revisiting irrational numbers and their properties
4. Rational numbers and their decimal expansions (terminating and non-terminating)

The chapter builds on previous knowledge of number systems and strengthens the foundation for advanced mathematical concepts.`,    quiz: {
        questions: [
            {
                id: generateId(),
                type: "mcq",
                question: "What is the HCF of two numbers if their LCM is 36 and their product is 216?",
                options: ["4", "6", "9", "12"],
                correctAnswer: "6",
                explanation: "Using the relation: HCF × LCM = Product of the numbers. So, HCF = Product/LCM = 216/36 = 6",
                difficulty: "medium",
                marks: 2,
                recommendedTime: 60
            }
        ]
    }
}; 