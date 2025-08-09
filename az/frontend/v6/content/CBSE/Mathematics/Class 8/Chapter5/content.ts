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

export const Chapter5Content: ChapterContent = {
    id: "cl8_ch5",
    chapterNumber: 5,
    chapterName: "Squares and Square Roots √",
    topics: getAllTopics(),
    duration: 270, // 4.5 hours total for chapter
    contentCovered: [
        "Finding squares and square roots",
        "Methods: prime factorization, division method",
        "Estimation of square roots"
    ],
    description: "Understanding perfect squares, square roots, and various methods to find them",
    explanation: `
# Squares and Square Roots √

This chapter explores the concept of squares and square roots. Students will learn:

1. Finding squares and square roots:
   - Perfect squares
   - Properties of square numbers
   - Square of decimals
   - Square of fractions
   - Patterns in square numbers

2. Methods of finding square roots:
   - Prime factorization method
   - Division method
   - Long division method
   - Using factors
   - Special patterns

3. Estimation of square roots:
   - Approximation methods
   - Decimal square roots
   - Between two numbers
   - Applications in real life
   - Solving problems

The chapter builds understanding of quadratic concepts and prepares for higher mathematics.`,
};

export default Chapter5Content; 