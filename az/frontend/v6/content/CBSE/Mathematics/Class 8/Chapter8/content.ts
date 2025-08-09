import { ChapterContent, TopicContent } from '../../../../types';

// Use webpack/metro context to get all topic content files dynamically
const topicContexts = require.context('./', true, /Topic\d+\/content\.ts$/);

// Function to dynamically get all available topics
const getAllTopics = (): TopicContent[] => {
    const topics: TopicContent[] = [];

    topicContexts.keys().forEach((key: string) => {
        const topicModule = topicContexts(key);
        const topicNumberMatch = key.match(/Topic(\d+)/);
        if (topicNumberMatch && topicNumberMatch[1]) {
            const topicNumber = parseInt(topicNumberMatch[1], 10);
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

    return topics.sort((a, b) => a.topicNumber - b.topicNumber);
};

export const Chapter8Content: ChapterContent = {
    id: "cl8_ch8",
    chapterNumber: 8,
    chapterName: "Algebraic Expressions and Identities ∑",
    topics: getAllTopics(),
    duration: 270, // 4.5 hours total for chapter
    contentCovered: [
        "Terms, coefficients, constants",
        "Addition, subtraction, multiplication of expressions",
        "Standard algebraic identities"
    ],
    description: "Understanding algebraic expressions, operations, and standard identities for mathematical manipulation",
    explanation: `
# Algebraic Expressions and Identities ∑

This chapter explores algebraic expressions and fundamental identities. Students will learn:

1. Basic concepts:
   - Terms and like terms
   - Coefficients
   - Constants
   - Variables and their powers
   - Monomials, binomials, polynomials

2. Operations with expressions:
   - Addition and subtraction
   - Multiplication
   - Using distributive property
   - Simplifying expressions
   - Evaluating expressions

3. Standard algebraic identities:
   - (a + b)² = a² + 2ab + b²
   - (a - b)² = a² - 2ab + b²
   - a² - b² = (a + b)(a - b)
   - (x + a)(x + b) = x² + (a+b)x + ab
   - Applications in problem solving

The chapter builds foundation for advanced algebra and mathematical reasoning.`,
};

export default Chapter8Content; 