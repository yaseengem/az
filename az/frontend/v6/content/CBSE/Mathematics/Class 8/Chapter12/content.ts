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

export const Chapter12Content: ChapterContent = {
    id: "cl8_ch12",
    chapterNumber: 12,
    chapterName: "Factorisation 🔍",
    topics: getAllTopics(),
    duration: 270, // 4.5 hours total for chapter
    contentCovered: [
        "Methods of factorisation",
        "Factorising algebraic expressions",
        "Division of algebraic expressions"
    ],
    description: "Understanding factorisation techniques and their applications in algebraic expressions",
    explanation: `
# Factorisation 🔍

This chapter explores methods of factoring algebraic expressions. Students will learn:

1. Methods of factorisation:
   - Common factor method
   - Regrouping terms
   - Using identities
   - Split the middle term
   - Factor by inspection

2. Factorising expressions:
   - Trinomials
   - Perfect square trinomials
   - Difference of squares
   - Sum and difference of cubes
   - Polynomials with common factors

3. Division of algebraic expressions:
   - Division by monomials
   - Division by binomials
   - Long division method
   - Checking division
   - Applications

The chapter strengthens algebraic manipulation skills and prepares for solving quadratic equations.`,
};

export default Chapter12Content; 