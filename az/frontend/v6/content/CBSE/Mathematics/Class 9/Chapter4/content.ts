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

export const Chapter4Content: ChapterContent = {
    id: "cl9_ch4",
    chapterNumber: 4,
    chapterName: "Linear Equations in Two Variables",
    topics: getAllTopics(),
    duration: 225, // 3.75 hours total for chapter
    contentCovered: [
        "Introduction to Linear Equations in Two Variables",
        "Understanding Linear Equations in Standard Form",
        "Solutions of Linear Equations",
        "Graphical Representation of Linear Equations",
        "Practical Applications of Linear Equations",
        "System of Linear Equations"
    ],
    description: "Study of linear equations in two variables, their solutions, graphical representations and applications",
    explanation: `
# Linear Equations in Two Variables

This chapter introduces the concept of linear equations involving two variables and explores their properties, solutions, and applications. Students will learn about:
1. Introduction to linear equations in two variables
2. Standard form of linear equations
3. Finding solutions to linear equations
4. Graphing linear equations on the coordinate plane
5. Real-world applications of linear equations
6. Understanding systems of linear equations

The chapter builds upon previous knowledge of linear equations in one variable and extends it to two variables, laying the foundation for coordinate geometry and more advanced algebraic concepts.`,
};
