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

export const Chapter2Content: ChapterContent = {
    id: "cl8_ch2",
    chapterNumber: 2,
    chapterName: "Linear Equations in One Variable ➗",
    topics: getAllTopics(),
    duration: 240, // 4 hours total for chapter
    contentCovered: [
        "Solving linear equations",
        "Applications in word problems",
        "Reducing equations to simpler forms"
    ],
    description: "Understanding and solving linear equations in one variable and their real-world applications",
    explanation: `
# Linear Equations in One Variable ➗

This chapter introduces students to linear equations and their practical applications. Students will learn:

1. Solving linear equations:
   - Understanding variables and constants
   - Balancing equations
   - Step-by-step solution methods
   - Verifying solutions

2. Applications in word problems:
   - Age problems
   - Number problems
   - Money-related problems
   - Distance and time problems
   - Percentage problems

3. Reducing equations to simpler forms:
   - Combining like terms
   - Moving terms between sides
   - Removing brackets
   - Handling fractions and decimals

The chapter develops problem-solving skills and prepares students for more complex algebraic concepts.`,
};

export default Chapter2Content; 