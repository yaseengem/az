import { QuizQuestion, ChapterContent, TopicContent } from '../../../../types';

// Use webpack/metro context to get all topic content files dynamically
// This scans for all content.ts files one level down in Topic* folders
const topicContexts = require.context('./', true, /Topic\d+\/content\.ts$/);

// Function to dynamically get all available topics
const getAllTopics = (): TopicContent[] => {
    const topics: TopicContent[] = [];

    // Process each found topic content file
    topicContexts.keys().forEach((key: string) => {
        const topicModule = topicContexts(key);

        // Extract the topic number from the path (e.g., "./Topic5/content.ts" -> "5")
        const topicNumberMatch = key.match(/Topic(\d+)/);
        if (topicNumberMatch && topicNumberMatch[1]) {
            const topicNumber = parseInt(topicNumberMatch[1], 10);

            // Find the topic content in the module exports
            // It could be either the default export or a named export like "Topic5Content"
            let topicContent = topicModule.default;
            if (!topicContent) {
                const exportName = `Topic${topicNumber}Content`;
                topicContent = topicModule[exportName];
            }

            if (topicContent) {
                topics.push(topicContent);
            }
        }
    });

    // Sort topics by topic number for consistency
    return topics.sort((a, b) => a.topicNumber - b.topicNumber);
};

export const Chapter2Content: ChapterContent = {
    id: "cl9_ch2",
    chapterNumber: 2,
    chapterName: "Polynomials",
    topics: getAllTopics(),
    duration: 270, // 4.5 hours total for chapter
    contentCovered: [
        "Introduction",
        "Polynomials in One Variable",
        "Zeroes of a Polynomial",
        "Factorisation of Polynomials",
        "Algebraic Identities",
        "Summary"
    ],
    description: "Study of polynomials, their properties, operations, factorization, and applications in algebra and problem-solving",
    explanation: `
# Polynomials

Polynomials are fundamental algebraic expressions that serve as building blocks for advanced mathematics. This chapter introduces students to the concept, properties, and applications of polynomials through a structured approach.

## What You Will Learn 📚

1. **Introduction**: Basic concepts and types of polynomials
2. **Polynomials in One Variable**: Formal definition, degree, and classification of polynomials
3. **Zeroes of a Polynomial**: Understanding roots and their geometric significance
4. **Factorisation of Polynomials**: Methods to factorize polynomials using various techniques
5. **Algebraic Identities**: Important identities for simplifying polynomial expressions
6. **Summary**: Consolidation of key concepts and their applications

## Why Polynomials Matter 🌟

Polynomials are everywhere in mathematics and science:
- They model real-world situations in physics, economics, and engineering
- They help in approximating complex functions in calculus
- They provide a foundation for understanding algebraic structures
- They connect algebra with geometry through graphs and equations

## Chapter Structure 📝

The chapter follows a logical progression from basic definitions to applications:

1. **Introduction**: Understanding what polynomials are and how to identify them
2. **Polynomials in One Variable**: Exploring different types and degrees of polynomials
3. **Zeroes of a Polynomial**: Finding values that make polynomials equal to zero
4. **Factorisation of Polynomials**: Breaking down polynomials into their factors
5. **Algebraic Identities**: Using standard formulas to simplify expressions
6. **Summary**: Reviewing key concepts and applications

Each topic builds upon previous concepts, creating a comprehensive understanding of polynomials and their importance in mathematics.

By the end of this chapter, you'll be able to work confidently with polynomial expressions, solve polynomial equations, and apply these skills to various mathematical problems. Let's begin our journey into the world of polynomials! 🚀
`,
    quiz: {
        questions: [
            {
                id: "cl9_ch2_q1",
                type: "mcq",
                question: "What is the degree of the polynomial 3x² + 5x + 2?",
                options: ["1", "2", "3", "4"],
                correctAnswer: "2",
                explanation: "The degree of a polynomial is the highest power of the variable. In this case, it's 2.",
                difficulty: "easy",
                marks: 1,
                recommendedTime: 30
            },
            {
                id: "cl9_ch2_q2",
                type: "mcq",
                question: "Which of the following is NOT a polynomial?",
                options: ["x² + 3x + 2", "5x⁵ - 7x³ + 2", "1/(x+1)", "5"],
                correctAnswer: "1/(x+1)",
                explanation: "A polynomial cannot have variables in the denominator. The expression 1/(x+1) has a variable in the denominator, so it's not a polynomial.",
                difficulty: "easy",
                marks: 1,
                recommendedTime: 30
            },
            {
                id: "cl9_ch2_q3",
                type: "mcq",
                question: "What are the zeroes of the polynomial x² - 5x + 6?",
                options: ["2 and 3", "3 and 2", "-2 and -3", "-3 and -2"],
                correctAnswer: "2 and 3",
                explanation: "Zeroes are values that make the polynomial equal to zero. For x² - 5x + 6, we can factorize as (x-2)(x-3)=0, giving x=2 or x=3 as the zeroes.",
                difficulty: "medium",
                marks: 2,
                recommendedTime: 60
            }
        ]
    }
};
