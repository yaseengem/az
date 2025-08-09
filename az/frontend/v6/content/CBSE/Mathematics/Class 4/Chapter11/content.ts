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

export const Chapter11Content: ChapterContent = {
    id: "cl4_ch11",
    chapterNumber: 11,
    chapterName: "Tables and Shares",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Multiplication Tables",
        "Basic Division Concepts",
        "Understanding Sharing",
        "Equal Distribution",
        "Practical Applications"
    ],
    description: "Learning multiplication tables and basic division through the concept of sharing",
    explanation: `
# Tables and Shares 📊

This chapter introduces students to multiplication tables and basic division concepts. Students will learn about:

1. ✖️ Understanding and memorizing multiplication tables
2. ➗ Basic division concepts
3. 🎯 Understanding equal sharing
4. 📊 Practical applications of multiplication and division
5. 🧮 Problem solving using tables and shares

The chapter uses real-life examples and interactive activities to make multiplication and division concepts more engaging and easier to understand for young learners.`,
}; 