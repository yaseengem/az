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

export const Chapter6Content: ChapterContent = {
    id: "cl8_ch6",
    chapterNumber: 6,
    chapterName: "Cubes and Cube Roots ∛",
    topics: getAllTopics(),
    duration: 240, // 4 hours total for chapter
    contentCovered: [
        "Perfect cubes and cube roots",
        "Methods to find cube roots",
        "Applications in volume calculations"
    ],
    description: "Understanding perfect cubes, cube roots, and their applications in three-dimensional geometry",
    explanation: `
# Cubes and Cube Roots ∛

This chapter explores the concept of cubes and cube roots. Students will learn:

1. Perfect cubes and cube roots:
   - Understanding perfect cubes
   - Properties of cube numbers
   - Patterns in cube numbers
   - Cube of negative numbers
   - Cube of fractions and decimals

2. Methods to find cube roots:
   - Prime factorization method
   - Estimation method
   - Using patterns
   - Cube root of negative numbers
   - Special cases and shortcuts

3. Applications in volume calculations:
   - Volume of cube
   - Volume of cuboid
   - Real-life applications
   - Problem solving
   - Practical examples

The chapter strengthens understanding of three-dimensional concepts and prepares for advanced algebra.`,
};

export default Chapter6Content; 